const fs = require('fs');
const { spawn } = require('child_process');
const envRaw = fs.readFileSync('C:\\Users\\CI-STAFF\\Documents\\CICOD\\.env', 'utf8');
const env = {};
envRaw.split('\n').forEach(line => { const m = /^\s*([A-Za-z0-9_]+)\s*=\s*"?([^"\n]*)"?\s*$/.exec(line); if (m) env[m[1].trim()] = m[2].trim(); });
const DOMAIN = env.target3_domain, EMAIL = env.target3_email, PASSWORD = env.target3_password, URL_TENANT = 'cicodecm', PORT = 9226;
let msgId = 1;
function send(ws, method, params = {}) { return new Promise((resolve, reject) => { const id = msgId++; const h = (e) => { const m = JSON.parse(typeof e.data === 'string' ? e.data : e.data.toString()); if (m.id === id) { ws.removeEventListener('message', h); m.error ? reject(m.error) : resolve(m.result); } }; ws.addEventListener('message', h); ws.send(JSON.stringify({ id, method, params })); }); }
function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const proc = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', ['--headless=new', `--remote-debugging-port=${PORT}`, '--user-data-dir=C:\\Users\\CI-STAFF\\AppData\\Local\\Temp\\cdp_phase1_diag_profile', '--disable-gpu', '--window-size=1366,900']);
  await wait(2500);
  const out = [];
  try {
    const targets = await fetch(`http://127.0.0.1:${PORT}/json`).then(r => r.json());
    const target = targets.find(t => t.type === 'page') || targets[0];
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise(r => (ws.onopen = r));
    const responses = new Map();
    ws.addEventListener('message', (event) => {
      let msg; try { msg = JSON.parse(typeof event.data === 'string' ? event.data : event.data.toString()); } catch { return; }
      if (msg.method === 'Network.responseReceived' && /api\.cicodsaasstaging\.com/i.test(msg.params.response.url)) {
        responses.set(msg.params.requestId, { url: msg.params.response.url, status: msg.params.response.status });
      }
    });
    await send(ws, 'Page.enable'); await send(ws, 'Runtime.enable'); await send(ws, 'Network.enable');
    async function evalJs(expr) { const r = await send(ws, 'Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }); if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails)); return r.result.value; }
    const SET = `function __setVal(sel, value) { const el = document.querySelector(sel); if (!el) return {found:false}; const proto = Object.getPrototypeOf(el); const setter = Object.getOwnPropertyDescriptor(proto, 'value').set; setter.call(el, value); el.dispatchEvent(new Event('input', {bubbles:true})); el.dispatchEvent(new Event('change', {bubbles:true})); return {found:true, value: el.value}; }`;

    async function attempt(label, domain, email, password, extraWaitAfterFill) {
      responses.clear();
      await send(ws, 'Page.navigate', { url: `https://cicodsaasstaging.com/login?tenant=${URL_TENANT}` });
      await wait(4000);
      await evalJs(SET + `__setVal('input[name="tenantId"]', ${JSON.stringify(domain)}); __setVal('input[name="merchantEmail"]', ${JSON.stringify(email)}); __setVal('input[name="merchantPassword"]', ${JSON.stringify(password)});`);
      await wait(extraWaitAfterFill);
      const disabledBefore = await evalJs(`document.querySelector('button[type="submit"]').disabled`);
      const clicked = await evalJs(`(() => { const b = document.querySelector('button[type="submit"]'); if (b && !b.disabled) { b.click(); return true;} return false; })()`);
      await wait(4500);
      const calls = [];
      for (const [, info] of responses.entries()) if (/\/login/i.test(info.url)) calls.push(info);
      out.push({ label, disabledBefore, clicked, calls });
      console.log(label, JSON.stringify({ disabledBefore, clicked, calls }));
    }

    await attempt('wrong_domain_1500wait', 'nonexistenttenant404', EMAIL, PASSWORD, 1500);
    await attempt('wrong_email_1500wait', DOMAIN, 'wrong.user@example.com', PASSWORD, 1500);
    await attempt('correct_1500wait', DOMAIN, EMAIL, PASSWORD, 1500);

    ws.close();
  } catch (e) { console.error('FATAL', e); }
  finally { proc.kill(); }
  fs.writeFileSync('c:\\Users\\CI-STAFF\\Documents\\CICOD\\uat_phase1_diag.json', JSON.stringify(out, null, 2));
}
main();
