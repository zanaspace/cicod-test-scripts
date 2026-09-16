const fs = require('fs');
const { spawn } = require('child_process');
const PORT = 9234;
let msgId = 1;
function send(ws, method, params = {}) { return new Promise((resolve, reject) => { const id = msgId++; const h = (e) => { const m = JSON.parse(typeof e.data === 'string' ? e.data : e.data.toString()); if (m.id === id) { ws.removeEventListener('message', h); m.error ? reject(m.error) : resolve(m.result); } }; ws.addEventListener('message', h); ws.send(JSON.stringify({ id, method, params })); }); }
function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const proc = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new', `--remote-debugging-port=${PORT}`,
    '--user-data-dir=C:\\Users\\CI-STAFF\\AppData\\Local\\Temp\\cdp_real_signup_profile',
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
        if (/api\.cicodsaasstaging\.com|cicodsaasstaging\.com\/(signup|register|pricing|checkout)/i.test(response.url) && msg.params.type !== 'Stylesheet' && msg.params.type !== 'Image' && msg.params.type !== 'Font') {
          netLog.push({ url: response.url, status: response.status, type: msg.params.type });
        }
      }
    });

    await send(ws, 'Page.enable'); await send(ws, 'Runtime.enable'); await send(ws, 'Network.enable');
    await send(ws, 'Network.setBlockedURLs', { urls: ['*googletagmanager.com*', '*snap.licdn.com*', '*salesiq.zoho.com*', '*cdn4.mxpnl.com*', '*google-analytics.com*'] });

    async function evalJs(expr) { const r = await send(ws, 'Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }); if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails)); return r.result.value; }
    async function snap(name) { const s = await send(ws, 'Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(`c:\\Users\\CI-STAFF\\Documents\\CICOD\\${name}`, Buffer.from(s.data, 'base64')); return name; }
    const SET = `function __setVal(sel, value, root) { const el = (root||document).querySelector(sel); if (!el) return {found:false}; const proto = Object.getPrototypeOf(el); const setter = Object.getOwnPropertyDescriptor(proto, 'value').set; setter.call(el, value); el.dispatchEvent(new Event('input', {bubbles:true})); el.dispatchEvent(new Event('change', {bubbles:true})); return {found:true, value: el.value}; }`;

    // ---------- STAGE 1: Homepage ----------
    console.log('\n=== STAGE 1: Homepage ===');
    await send(ws, 'Page.navigate', { url: 'https://cicodsaasstaging.com/' });
    await wait(4500);
    await evalJs(`(() => { const b=[...document.querySelectorAll('button,a')].find(x=>/^accept$/i.test((x.innerText||'').trim())); if(b) b.click(); })()`);
    await wait(500);
    await snap('flow_01_homepage.png');
    stages.push({ stage: 1, name: 'Homepage', note: 'Loaded https://cicodsaasstaging.com/, dismissed cookie banner.', screenshot: 'flow_01_homepage.png' });

    // ---------- STAGE 2: Click "Start free trial" ----------
    console.log('\n=== STAGE 2: Click Start free trial ===');
    const click1 = await evalJs(`(() => { const el=[...document.querySelectorAll('a,button')].find(e=>/start free trial/i.test(e.innerText||'')); if(el){el.click(); return true;} return false; })()`);
    await wait(5000);
    const urlAfterTrial = await evalJs('window.location.href');
    await snap('flow_02_after_start_trial.png');
    stages.push({ stage: 2, name: 'Click "Start free trial"', note: `Clicked: ${click1}. Landed on: ${urlAfterTrial}`, screenshot: 'flow_02_after_start_trial.png' });
    console.log('URL:', urlAfterTrial);

    // ---------- STAGE 3: Wait for pricing tiles to finish loading ----------
    console.log('\n=== STAGE 3: Waiting for pricing content to render ===');
    let inputCount = 0;
    for (let i = 0; i < 8; i++) {
      await wait(3000);
      inputCount = await evalJs(`document.querySelectorAll('input').length`);
      console.log(`  t+${(i+1)*3}s input count: ${inputCount}`);
      if (inputCount > 0) break;
    }
    await snap('flow_03_pricing_loaded.png');
    stages.push({ stage: 3, name: 'Pricing page fully rendered', note: `Input fields detected after polling: ${inputCount}`, screenshot: 'flow_03_pricing_loaded.png' });

    if (inputCount === 0) {
      console.log('Pricing tiles never rendered inputs - aborting flow here.');
    } else {
      // ---------- STAGE 4: Inspect the plan cards / buttons available ----------
      const planButtons = await evalJs(`(() => {
        const btns = Array.from(document.querySelectorAll('button, a'));
        return btns.map(b => (b.innerText||'').trim()).filter(t => /get started|buy|choose|select|subscribe|start trial|sign up/i.test(t));
      })()`);
      console.log('Plan action buttons found:', JSON.stringify(planButtons));
      stages.push({ stage: 4, name: 'Plan selection buttons discovered', note: JSON.stringify(planButtons) });

      // ---------- STAGE 5: Fill the first visible lead form (email/phone/contact/business/referral) ----------
      console.log('\n=== STAGE 5: Filling first plan lead form ===');
      const testEmail = `uat.realflow.${Date.now()}@crowninteractive.com`;
      const fillResult = await evalJs(SET + `
        const emailEl = document.querySelector('input[name="email"]');
        const telEl = document.querySelector('input[type="tel"]');
        const contactEl = document.querySelector('input[name="contactPersonNumber"]');
        const tenantEl = document.querySelector('input[name="tenantId"]');
        const refEl = document.querySelector('input[name="referralCode"]');
        const r = {};
        if (emailEl) r.email = __setVal('input[name="email"]', ${JSON.stringify(testEmail)});
        if (telEl) { const proto=Object.getPrototypeOf(telEl); const setter=Object.getOwnPropertyDescriptor(proto,'value').set; setter.call(telEl,'7021234567'); telEl.dispatchEvent(new Event('input',{bubbles:true})); r.phone = {found:true,value:telEl.value}; } else r.phone={found:false};
        if (contactEl) r.contact = __setVal('input[name="contactPersonNumber"]', 'UAT Test Contact');
        if (tenantEl) r.tenant = __setVal('input[name="tenantId"]', 'uatrealflow' + Date.now());
        if (refEl) r.referral = __setVal('input[name="referralCode"]', '');
        r;
      `);
      console.log('Fill result:', JSON.stringify(fillResult, null, 2));
      stages.push({ stage: 5, name: 'Filled plan lead form', note: JSON.stringify(fillResult), testEmail });
      await snap('flow_04_lead_form_filled.png');

      // ---------- STAGE 6: Click nearest submit/get-started button relative to the filled form ----------
      console.log('\n=== STAGE 6: Submitting plan lead form ===');
      const beforeNet = netLog.length;
      const submitResult = await evalJs(`(() => {
        const email = document.querySelector('input[name="email"]');
        if (!email) return { found: false };
        let scope = email;
        for (let i=0;i<8 && scope.parentElement;i++){ scope = scope.parentElement; const b = scope.querySelector('button, input[type=submit]'); if (b) { b.click(); return { found:true, buttonText: (b.innerText||b.value||'').trim() }; } }
        return { found:false };
      })()`);
      console.log('Submit click result:', JSON.stringify(submitResult));
      await wait(5000);
      const urlAfterLeadSubmit = await evalJs('window.location.href');
      const newCalls = netLog.slice(beforeNet);
      await snap('flow_05_after_lead_submit.png');
      stages.push({ stage: 6, name: 'Submitted plan lead form', note: `submitResult=${JSON.stringify(submitResult)}, urlAfter=${urlAfterLeadSubmit}, netCalls=${JSON.stringify(newCalls)}`, screenshot: 'flow_05_after_lead_submit.png' });

      // ---------- STAGE 7: Check if we've reached a further signup/checkout step ----------
      const stage7Info = await evalJs(`({
        url: window.location.href, title: document.title,
        inputs: Array.from(document.querySelectorAll('input')).map(i=>({name:i.name,type:i.type,placeholder:i.placeholder})),
        bodyExcerpt: document.body ? document.body.innerText.substring(0,500) : ''
      })`);
      console.log('Post-lead-submit page state:', JSON.stringify(stage7Info, null, 2));
      stages.push({ stage: 7, name: 'Post-submission page state', note: JSON.stringify(stage7Info) });
    }

    ws.close();
  } catch (err) {
    console.error('FATAL:', err);
    stages.push({ stage: 'FATAL', note: String(err && err.message || err) });
  } finally {
    proc.kill();
  }

  fs.writeFileSync('c:\\Users\\CI-STAFF\\Documents\\CICOD\\uat_real_signup_flow.json', JSON.stringify({ stages, netLog }, null, 2));
  console.log('\n=== DONE ===');
}
main();
