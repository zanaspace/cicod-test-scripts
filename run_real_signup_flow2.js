const fs = require('fs');
const { spawn } = require('child_process');
const PORT = 9236;
let msgId = 1;
function send(ws, method, params = {}) { return new Promise((resolve, reject) => { const id = msgId++; const h = (e) => { const m = JSON.parse(typeof e.data === 'string' ? e.data : e.data.toString()); if (m.id === id) { ws.removeEventListener('message', h); m.error ? reject(m.error) : resolve(m.result); } }; ws.addEventListener('message', h); ws.send(JSON.stringify({ id, method, params })); }); }
function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const proc = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new', `--remote-debugging-port=${PORT}`,
    '--user-data-dir=C:\\Users\\CI-STAFF\\AppData\\Local\\Temp\\cdp_real_signup2_profile',
    '--disable-gpu', '--window-size=1440,1400'
  ]);
  await wait(2500);
  const stages = [];
  const netLog = [];

  try {
    const targets = await fetch(`http://127.0.0.1:${PORT}/json`).then(r => r.json());
    const target = targets.find(t => t.type === 'page') || targets[0];
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise(r => (ws.onopen = r));

    ws.addEventListener('message', (event) => {
      let msg; try { msg = JSON.parse(typeof event.data === 'string' ? event.data : event.data.toString()); } catch { return; }
      if (msg.method === 'Network.responseReceived') {
        const { response } = msg.params;
        if (/api\.cicodsaasstaging\.com|cicodsaasstaging\.com\/(signup|register|pricing|checkout|trial)/i.test(response.url)) {
          netLog.push({ url: response.url, status: response.status });
        }
      }
    });

    await send(ws, 'Page.enable'); await send(ws, 'Runtime.enable'); await send(ws, 'Network.enable');
    await send(ws, 'Network.setBlockedURLs', { urls: ['*googletagmanager.com*', '*snap.licdn.com*', '*salesiq.zoho.com*', '*cdn4.mxpnl.com*', '*google-analytics.com*'] });

    async function evalJs(expr) { const r = await send(ws, 'Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }); if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails)); return r.result.value; }
    async function snap(name) { const s = await send(ws, 'Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(`c:\\Users\\CI-STAFF\\Documents\\CICOD\\${name}`, Buffer.from(s.data, 'base64')); return name; }
    const SET = `function __setVal(sel, value, root) { const el = (root||document).querySelector(sel); if (!el) return {found:false}; const proto = Object.getPrototypeOf(el); const setter = Object.getOwnPropertyDescriptor(proto, 'value').set; setter.call(el, value); el.dispatchEvent(new Event('input', {bubbles:true})); el.dispatchEvent(new Event('change', {bubbles:true})); return {found:true, value: el.value}; }`;

    console.log('=== Navigate home -> Start free trial -> pricing ===');
    await send(ws, 'Page.navigate', { url: 'https://cicodsaasstaging.com/' });
    await wait(4500);
    await evalJs(`(() => { const b=[...document.querySelectorAll('button,a')].find(x=>/^accept$/i.test((x.innerText||'').trim())); if(b) b.click(); })()`);
    await wait(500);
    await evalJs(`(() => { const el=[...document.querySelectorAll('a,button')].find(e=>/start free trial/i.test(e.innerText||'')); if(el) el.click(); })()`);
    await wait(4000);
    console.log('URL:', await evalJs('window.location.href'));

    let count = 0;
    for (let i = 0; i < 8; i++) { await wait(2500); count = await evalJs(`document.querySelectorAll('input').length`); if (count > 0) break; }
    console.log('inputs found:', count);
    await evalJs(`(() => { const e=document.querySelector('input[name="email"]'); if(e) e.scrollIntoView({block:'start'}); })()`);
    await wait(500);
    await snap('flow2_01_first_card.png');

    // ---- Fill the first card's real fields ----
    const testEmail = `uat.realflow2.${Date.now()}@crowninteractive.com`;
    const fillResult = await evalJs(SET + `
      const form = document.querySelector('input[name="email"]').closest('form');
      const r = {};
      r.email = __setVal('input[name="email"]', ${JSON.stringify(testEmail)}, form);
      const phoneDigits = form.querySelector('input[name="contactPersonNumber"]');
      if (phoneDigits) { const proto=Object.getPrototypeOf(phoneDigits); const setter=Object.getOwnPropertyDescriptor(proto,'value').set; setter.call(phoneDigits,'8012345678'); phoneDigits.dispatchEvent(new Event('input',{bubbles:true})); r.phoneDigits = {found:true, value: phoneDigits.value}; } else r.phoneDigits = {found:false};
      r.tenant = __setVal('input[name="tenantId"]', 'uatrealflow' + Date.now(), form);
      r;
    `);
    console.log('Fill result:', JSON.stringify(fillResult, null, 2));
    stages.push({ stage: 'fill', note: fillResult, testEmail });
    await snap('flow2_02_form_filled.png');

    // ---- Click "Select a plan" ----
    const planClick = await evalJs(`(() => {
      const form = document.querySelector('input[name="email"]').closest('form');
      const el = Array.from(form.querySelectorAll('*')).find(e => e.children.length === 0 && /select a plan/i.test(e.innerText||''));
      if (el) { el.click(); return { found: true }; }
      return { found: false };
    })()`);
    console.log('Select-a-plan click:', JSON.stringify(planClick));
    await wait(1500);
    await snap('flow2_03_after_plan_click.png');

    const radiosNow = await evalJs(`(() => {
      const form = document.querySelector('input[name="email"]').closest('form');
      return Array.from(form.querySelectorAll('input[type=radio]')).map((r,i)=>({i, name:r.name, value:r.value, checked:r.checked, label: r.closest('label') ? r.closest('label').innerText.trim() : (r.parentElement ? r.parentElement.innerText.trim().slice(0,60) : '')}));
    })()`);
    console.log('Radios after plan click:', JSON.stringify(radiosNow, null, 2));
    stages.push({ stage: 'plan_click', note: { planClick, radiosNow } });

    if (radiosNow.length > 0) {
      await evalJs(`(() => {
        const form = document.querySelector('input[name="email"]').closest('form');
        const radios = form.querySelectorAll('input[type=radio]');
        if (radios[0]) radios[0].click();
      })()`);
      await wait(800);
      await snap('flow2_04_plan_selected.png');
    }

    // ---- Submit ----
    console.log('=== Submitting ===');
    const beforeNetLen = netLog.length;
    const submitClick = await evalJs(`(() => {
      const form = document.querySelector('input[name="email"]').closest('form');
      const btn = form.querySelector('button[type=submit]');
      if (btn) { btn.click(); return { found:true, text: btn.innerText, disabled: btn.disabled }; }
      return { found:false };
    })()`);
    console.log('Submit click:', JSON.stringify(submitClick));
    await wait(5000);
    const afterSubmit = await evalJs(`({ url: window.location.href, title: document.title, bodyExcerpt: document.body ? document.body.innerText.substring(0,600) : '' })`);
    const newCalls = netLog.slice(beforeNetLen);
    console.log('After submit:', JSON.stringify(afterSubmit, null, 2));
    console.log('Network calls:', JSON.stringify(newCalls, null, 2));
    await snap('flow2_05_after_submit.png');
    stages.push({ stage: 'submit', submitClick, afterSubmit, newCalls });

    // check for toast/validation errors
    const errUi = await evalJs(`(() => {
      const sels = ['.toast', '.Toastify__toast', '.alert', '[role="alert"]', '.error', '.text-danger', '.invalid-feedback', '.swal2-popup'];
      for (const s of sels) { const el = document.querySelector(s); if (el && el.innerText && el.innerText.trim()) return { selector: s, text: el.innerText.trim() }; }
      return null;
    })()`);
    console.log('Error/toast UI:', JSON.stringify(errUi));
    stages.push({ stage: 'error_check', errUi });

    ws.close();
  } catch (err) {
    console.error('FATAL:', err);
    stages.push({ stage: 'FATAL', note: String(err && err.message || err) });
  } finally {
    proc.kill();
  }

  fs.writeFileSync('c:\\Users\\CI-STAFF\\Documents\\CICOD\\uat_real_signup_flow2.json', JSON.stringify({ stages, netLog }, null, 2));
  console.log('\n=== DONE ===');
}
main();
