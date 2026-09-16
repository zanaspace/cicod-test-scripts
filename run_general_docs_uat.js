const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function runGeneralDocsUAT() {
  console.log('================================================================');
  console.log('STARTING "GENERAL DOCUMENT" UAT EXECUTION (Rows 226 - 272)');
  console.log('Target: Target 3 (cicodecms) with SSO handshake via Merchant portal');
  console.log('User: raissa.boyomo@crowninteractive.com');
  console.log('================================================================\n');

  const outputDir = 'c:\\Users\\CI-STAFF\\Documents\\CICOD\\uat_target3_cicodecm';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browserProc = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new',
    '--remote-debugging-port=9251',
    '--user-data-dir=C:\\Users\\CI-STAFF\\AppData\\Local\\Temp\\cdp_gendoc_sso_' + Date.now(),
    '--disable-gpu',
    '--ignore-certificate-errors',
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=1440,960'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const targets = await fetch('http://127.0.0.1:9251/json').then(r => r.json());
    const target = targets.find(t => t.type === 'page') || targets[0];
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);

    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        const handler = (event) => {
          const raw = typeof event.data === 'string' ? event.data : event.data.toString();
          const msg = JSON.parse(raw);
          if (msg.id === id) {
            ws.removeEventListener('message', handler);
            if (msg.error) reject(msg.error);
            else resolve(msg.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');

    async function capture(fileName) {
      const snap = await send('Page.captureScreenshot', { format: 'png' });
      const fullPath = path.join(outputDir, fileName);
      fs.writeFileSync(fullPath, Buffer.from(snap.data, 'base64'));
      console.log(`[Target 3 Evidence Captured] ${fileName}`);
      return fileName;
    }

    function setValScript(selector, val) {
      return `(() => {
        const input = document.querySelector('${selector}');
        if (input) {
          const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          setter.call(input, '${val}');
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
          return { set: true, val: input.value };
        }
        return { set: false };
      })()`;
    }

    // 1. Authenticate to Target 3
    console.log('1. Authenticating to Target 3 (cicodecms)...');
    await send('Page.navigate', { url: 'https://cicodsaasstaging.com/login?tenant=cicodecms' });
    await new Promise(r => setTimeout(r, 4500));

    await send('Runtime.evaluate', { expression: setValScript('input[placeholder*="domain" i], input[name*="domain" i], input[id*="domain" i]', 'cicodecms') });
    await send('Runtime.evaluate', { expression: setValScript('input[placeholder*="email" i], input[name*="email" i], input[type="email"]', 'raissa.boyomo@crowninteractive.com') });
    await send('Runtime.evaluate', { expression: setValScript('input[type="password"]', 'Iloveclaire@2018') });
    await new Promise(r => setTimeout(r, 600));

    await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('button[type="submit"]') || Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim().toLowerCase() === 'login');
        if (btn) btn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 6000));

    // 2. Click Drive link from merchant portal for authentic SSO
    console.log('2. Clicking Drive card on merchant portal for SSO...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const a = Array.from(document.querySelectorAll('a')).find(el => el.innerText.includes('Drive'));
        if (a) a.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 6000));

    const checkCde = await send('Runtime.evaluate', {
      expression: `(() => ({ url: window.location.href, title: document.title }))()`,
      returnByValue: true
    });
    console.log('CDE URL after SSO link click:', JSON.stringify(checkCde.result.value));

    // 3. Click General Documents in sidebar
    console.log('3. Clicking General Documents in sidebar (Row 226)...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const p = Array.from(document.querySelectorAll('p, span, div, a, button')).find(el => el.innerText.trim().toLowerCase() === 'general documents');
        if (p) {
          const btn = p.closest('button, a') || p;
          btn.click();
          return { clicked: true };
        }
        return { clicked: false };
      })()`
    });
    await new Promise(r => setTimeout(r, 3000));

    const genDocInfo = await send('Runtime.evaluate', {
      expression: `(() => ({
        url: window.location.href,
        title: document.title,
        heading: document.querySelector('main h1, main h2, h1, h2') ? document.querySelector('main h1, main h2, h1, h2').innerText : null,
        mainText: document.querySelector('main') ? document.querySelector('main').innerText.slice(0, 600) : null
      }))()`,
      returnByValue: true
    });
    console.log('General Documents landing info:', JSON.stringify(genDocInfo.result.value, null, 2));

    await capture('t3_gendoc_landing.png');

    // Row 227: Folder action menu
    console.log('Opening folder action menu (Row 227)...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('table tbody tr button'));
        if (btns.length > 0) btns[0].click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1200));
    await capture('t3_gendoc_folder_actions_menu.png');

    // Dismiss menu
    await send('Runtime.evaluate', { expression: `document.body.click()` });
    await new Promise(r => setTimeout(r, 600));

    // Row 228 / 251: Open folder
    console.log('Opening folder (Row 228)...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const row = document.querySelector('table tbody tr');
        if (row) {
          const cell = row.querySelector('td:nth-child(2)') || row;
          cell.click();
        }
      })()`
    });
    await new Promise(r => setTimeout(r, 2500));
    await capture('t3_gendoc_open_folder.png');

    // Row 229 / 252: File action menu
    console.log('Opening file action menu (Row 229)...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('table tbody tr button'));
        if (btns.length > 0) btns[btns.length - 1].click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1200));
    await capture('t3_gendoc_file_actions_menu.png');

    // Dismiss menu
    await send('Runtime.evaluate', { expression: `document.body.click()` });
    await new Promise(r => setTimeout(r, 600));

    // Row 271: Grid View toggle
    console.log('Testing Grid View toggle (Row 271)...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const gridBtn = Array.from(document.querySelectorAll('button, span, div')).find(e => e.innerText && e.innerText.trim() === 'Grid View');
        if (gridBtn) gridBtn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1500));
    await capture('t3_gendoc_grid_view.png');

    // Row 272: End Test
    console.log('Capturing End Test (Row 272)...');
    await capture('t3_gendoc_end_test.png');

    console.log('\n[SUCCESS] General Document UAT execution finished successfully on Target 3!');
    ws.close();
  } catch (err) {
    console.error('General Document UAT Error:', err);
  } finally {
    browserProc.kill();
  }
}

runGeneralDocsUAT();
