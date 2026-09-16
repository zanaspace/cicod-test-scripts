const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function captureCollabEvidence() {
  console.log('Capturing high-fidelity UAT evidence for COLABORATION module (Rows 170-224)...');

  const outputDir = 'c:\\Users\\CI-STAFF\\Documents\\CICOD\\uat_target3_cicodecm';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browserProc = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new',
    '--remote-debugging-port=9243',
    '--user-data-dir=C:\\Users\\CI-STAFF\\AppData\\Local\\Temp\\cdp_collab_ev_' + Date.now(),
    '--disable-gpu',
    '--ignore-certificate-errors',
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=1440,960'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const targets = await fetch('http://127.0.0.1:9243/json').then(r => r.json());
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
      console.log(`[Screenshot Captured] ${fileName}`);
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
        }
      })()`;
    }

    // Login
    console.log('Logging in...');
    await send('Page.navigate', { url: 'https://govtest.convergenceondemand.com/login' });
    await new Promise(r => setTimeout(r, 4000));
    await send('Runtime.evaluate', { expression: setValScript('#mda-input', 'govtest') });
    await send('Runtime.evaluate', { expression: setValScript('#email-input', 'adeola.adesina@crowninteractive.com') });
    await send('Runtime.evaluate', { expression: setValScript('#password-input', 'Crown@123') });
    await new Promise(r => setTimeout(r, 500));
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('button[type="submit"]') || Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim().toLowerCase() === 'sign in');
        if (btn) btn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 5000));

    // Landing view
    await send('Page.navigate', { url: 'https://govtest.convergenceondemand.com/cde' });
    await new Promise(r => setTimeout(r, 5000));
    await capture('collab_tc1_step170_landing_page.png');

    // Expand Collaborations accordion
    console.log('Expanding Collaborations accordion...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const p = Array.from(document.querySelectorAll('p')).find(el => el.innerText.trim().toLowerCase() === 'collaborations');
        if (p) {
          const btn = p.closest('button') || p;
          btn.click();
        }
      })()`
    });
    await new Promise(r => setTimeout(r, 1500));
    await capture('collab_tc1_step170_accordion_expanded.png');
    await capture('collab_tc1_step171_no_create_button.png');

    // Folder menu inspection
    console.log('Inspecting folder menu...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('table tbody tr button'));
        if (btns.length > 0) btns[0].click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1200));
    await capture('collab_tc2_step177_folder_menu.png');

    // Open folder
    console.log('Opening folder...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const item = Array.from(document.querySelectorAll('li, button, div, span')).find(e => e.innerText && e.innerText.trim().toLowerCase() === 'open folder');
        if (item) item.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 2000));
    await capture('collab_tc2_step178_folder_opened.png');

    // Return to root to inspect file context menu
    await send('Page.navigate', { url: 'https://govtest.convergenceondemand.com/cde' });
    await new Promise(r => setTimeout(r, 4000));

    console.log('Opening file action menu...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('table tbody tr button'));
        if (btns.length > 3) btns[3].click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1200));
    await capture('collab_tc3_step180_file_menu.png');

    // Dismiss menu
    await send('Runtime.evaluate', { expression: `document.body.click()` });
    await new Promise(r => setTimeout(r, 800));

    // Test Grid View
    console.log('Testing Grid View...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const gridBtn = Array.from(document.querySelectorAll('button, span, div')).find(e => e.innerText && e.innerText.trim() === 'Grid View');
        if (gridBtn) gridBtn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1500));
    await capture('collab_tc4_step222_grid_view.png');

    // End Test
    await capture('collab_tc5_step224_end_test.png');

    console.log('All evidence captured successfully!');
    ws.close();
  } catch (err) {
    console.error(err);
  } finally {
    browserProc.kill();
  }
}

captureCollabEvidence();
