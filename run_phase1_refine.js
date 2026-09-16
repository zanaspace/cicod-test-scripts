const fs = require('fs');
const { spawn } = require('child_process');

const envRaw = fs.readFileSync('C:\\Users\\CI-STAFF\\Documents\\CICOD\\.env', 'utf8');
const env = {};
envRaw.split('\n').forEach(line => {
  const m = /^\s*([A-Za-z0-9_]+)\s*=\s*"?([^"\n]*)"?\s*$/.exec(line);
  if (m) env[m[1].trim()] = m[2].trim();
});
const DOMAIN = env.target3_domain;
const EMAIL = env.target3_email;
const PASSWORD = env.target3_password;
const URL_TENANT = 'cicodecm';
const PORT = 9225;
let msgId = 1;

function send(ws, method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = msgId++;
    const handler = (event) => {
      const raw = typeof event.data === 'string' ? event.data : event.data.toString();
      const msg = JSON.parse(raw);
      if (msg.id === id) { ws.removeEventListener('message', handler); if (msg.error) reject(msg.error); else resolve(msg.result); }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}
function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const browserProc = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new', `--remote-debugging-port=${PORT}`,
    '--user-data-dir=C:\\Users\\CI-STAFF\\AppData\\Local\\Temp\\cdp_phase1_refine_profile',
    '--disable-gpu', '--window-size=1366,900'
  ]);
  await wait(2500);
  const results = [];
  const responses = new Map(); // requestId -> {url, status}

  try {
    const targets = await fetch(`http://127.0.0.1:${PORT}/json`).then(r => r.json());
    const target = targets.find(t => t.type === 'page') || targets[0];
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise(r => (ws.onopen = r));

    ws.addEventListener('message', (event) => {
      const raw = typeof event.data === 'string' ? event.data : event.data.toString();
      let msg; try { msg = JSON.parse(raw); } catch { return; }
      if (msg.method === 'Network.responseReceived') {
        const { requestId, response } = msg.params;
        if (/api\.cicodsaasstaging\.com/i.test(response.url)) {
          responses.set(requestId, { url: response.url, status: response.status });
        }
      }
    });

    await send(ws, 'Page.enable');
    await send(ws, 'Runtime.enable');
    await send(ws, 'Network.enable');
    await send(ws, 'Network.setBlockedURLs', { urls: ['*googletagmanager.com*', '*snap.licdn.com*', '*salesiq.zoho.com*', '*cdn4.mxpnl.com*', '*google-analytics.com*'] });

    async function snap(filename) {
      const s = await send(ws, 'Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`c:\\Users\\CI-STAFF\\Documents\\CICOD\\${filename}`, Buffer.from(s.data, 'base64'));
    }
    async function evalJs(expression) {
      const r = await send(ws, 'Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
      if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails));
      return r.result.value;
    }
    async function getBody(requestId) {
      try { const r = await send(ws, 'Network.getResponseBody', { requestId }); return r.body; }
      catch (e) { return `<no body: ${e.message || e}>`; }
    }

    const SET_VALUE_FN = `
      function __setVal(sel, value) {
        const el = document.querySelector(sel);
        if (!el) return { found: false };
        const proto = Object.getPrototypeOf(el);
        const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
        setter.call(el, value);
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        return { found: true, value: el.value };
      }
    `;

    async function attemptLogin(label, domain, email, password) {
      responses.clear();
      await send(ws, 'Page.navigate', { url: `https://cicodsaasstaging.com/login?tenant=${URL_TENANT}` });
      await wait(3000);
      await evalJs(SET_VALUE_FN + `
        __setVal('input[name="tenantId"]', ${JSON.stringify(domain)});
        __setVal('input[name="merchantEmail"]', ${JSON.stringify(email)});
        __setVal('input[name="merchantPassword"]', ${JSON.stringify(password)});
      `);
      await wait(500);
      await evalJs(`(() => { const b = document.querySelector('button[type="submit"]'); if (b && !b.disabled) b.click(); return !!(b && !b.disabled); })()`);
      await wait(4500);

      const loginCalls = [];
      for (const [reqId, info] of responses.entries()) {
        if (/\/login/i.test(info.url)) {
          const body = await getBody(reqId);
          loginCalls.push({ ...info, body });
        }
      }

      // look for a visible toast/alert/error element rather than raw body text
      const errUi = await evalJs(`(() => {
        const sels = ['.toast', '.Toastify__toast', '.alert', '[role="alert"]', '.error', '.text-danger', '.invalid-feedback', '.swal2-popup'];
        for (const s of sels) {
          const el = document.querySelector(s);
          if (el && el.innerText && el.innerText.trim()) return { selector: s, text: el.innerText.trim() };
        }
        return null;
      })()`);

      const pageInfo = await evalJs(`({ url: window.location.href, title: document.title })`);
      await snap(`uat_p1_refine_${label}.png`);
      return { loginCalls, errUi, pageInfo };
    }

    // Wrong domain
    let r = await attemptLogin('wrong_domain', 'nonexistenttenant404', EMAIL, PASSWORD);
    results.push({ label: 'wrong_domain', ...r });

    // Wrong email
    r = await attemptLogin('wrong_email', DOMAIN, 'wrong.user@example.com', PASSWORD);
    results.push({ label: 'wrong_email', ...r });

    // Wrong password
    r = await attemptLogin('wrong_password', DOMAIN, EMAIL, 'WrongPass!999');
    results.push({ label: 'wrong_password', ...r });

    // Correct login - re-verify redirect behavior, this time poll for up to 15s and use a null-safe check
    responses.clear();
    await send(ws, 'Page.navigate', { url: `https://cicodsaasstaging.com/login?tenant=${URL_TENANT}` });
    await wait(3000);
    await evalJs(SET_VALUE_FN + `
      __setVal('input[name="tenantId"]', ${JSON.stringify(DOMAIN)});
      __setVal('input[name="merchantEmail"]', ${JSON.stringify(EMAIL)});
      __setVal('input[name="merchantPassword"]', ${JSON.stringify(PASSWORD)});
    `);
    await wait(500);
    await evalJs(`(() => { const b = document.querySelector('button[type="submit"]'); if (b && !b.disabled) b.click(); return !!(b && !b.disabled); })()`);

    let finalUrl = null, finalTitle = null, bodyExists = null, loginApiResult = null;
    for (let i = 0; i < 6; i++) {
      await wait(2500);
      try {
        const st = await evalJs(`({ url: window.location.href, title: document.title, hasBody: !!document.body, bodyExcerpt: document.body ? document.body.innerText.substring(0,300) : null })`);
        finalUrl = st.url; finalTitle = st.title; bodyExists = st.hasBody;
        if (!/^https:\/\/cicodsaasstaging\.com\/login/i.test(finalUrl)) break; // left the login page
      } catch (e) {
        finalUrl = 'ERROR: ' + (e.message || e); break;
      }
    }
    for (const [reqId, info] of responses.entries()) {
      if (/\/login/i.test(info.url)) { loginApiResult = { ...info, body: await getBody(reqId) }; }
    }
    await snap('uat_p1_refine_correct_login_final.png');
    results.push({ label: 'correct_login_redirect_check', finalUrl, finalTitle, bodyExists, loginApiResult });

    ws.close();
  } catch (err) {
    console.error('FATAL:', err);
  } finally {
    browserProc.kill();
  }

  fs.writeFileSync('c:\\Users\\CI-STAFF\\Documents\\CICOD\\uat_phase1_refine_results.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
}

main();
