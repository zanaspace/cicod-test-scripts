const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function runCollaborationUAT() {
  console.log('================================================================');
  console.log('STARTING "COLABORATION" UAT EXECUTION (Rows 170 - 224)');
  console.log('Target: GovDrive (cde) at https://govtest.convergenceondemand.com/cde');
  console.log('================================================================\n');

  const outputDir = 'c:\\Users\\CI-STAFF\\Documents\\CICOD\\uat_target3_cicodecm';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browserProc = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new',
    '--remote-debugging-port=9239',
    '--user-data-dir=C:\\Users\\CI-STAFF\\AppData\\Local\\Temp\\cdp_collab_' + Date.now(),
    '--disable-gpu',
    '--ignore-certificate-errors',
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=1440,960'
  ]);

  await new Promise(r => setTimeout(r, 3000));

  try {
    const targets = await fetch('http://127.0.0.1:9239/json').then(r => r.json());
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
          return { set: true, val: input.value };
        }
        return { set: false };
      })()`;
    }

    // 1. Authenticate to Govtest
    console.log('Logging in to Govtest...');
    await send('Page.navigate', { url: 'https://govtest.convergenceondemand.com/login' });
    await new Promise(r => setTimeout(r, 4500));

    await send('Runtime.evaluate', { expression: setValScript('#mda-input', 'govtest') });
    await send('Runtime.evaluate', { expression: setValScript('#email-input', 'adeola.adesina@crowninteractive.com') });
    await send('Runtime.evaluate', { expression: setValScript('#password-input', 'Crown@123') });
    await new Promise(r => setTimeout(r, 600));

    await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('button[type="submit"]') || Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim().toLowerCase() === 'sign in');
        if (btn) btn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 6000));

    // 2. Navigate to Collaborations
    console.log('Navigating to Collaborations...');
    await send('Page.navigate', { url: 'https://govtest.convergenceondemand.com/cde/collaborations' });
    await new Promise(r => setTimeout(r, 5000));

    const collabLanding = await send('Runtime.evaluate', {
      expression: `(() => ({
        url: window.location.href,
        title: document.title,
        heading: document.querySelector('h1, h2') ? document.querySelector('h1, h2').innerText.trim() : '',
        bodySnippet: document.body.innerText.slice(0, 500),
        hasNewBtn: !!document.querySelector('button[aria-haspopup="menu"]'),
        buttons: Array.from(document.querySelectorAll('button')).map(b => b.innerText.trim()).filter(Boolean)
      }))()`,
      returnByValue: true
    });
    console.log('Collab Landing Data:', JSON.stringify(collabLanding.result.value, null, 2));

    await capture('collab_row170_landing_page.png');

    // Check if + NEW button exists in Collaborations
    console.log('Checking + NEW button in Collaborations...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('main div > button[aria-haspopup="menu"]') || Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('NEW') || b.innerText.includes('New'));
        if (btn) btn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1500));
    await capture('collab_row171_new_menu.png');

    // Inspect items inside dropdown or modal
    const menuState = await send('Runtime.evaluate', {
      expression: `(() => ({
        menuItems: Array.from(document.querySelectorAll('[role="menu"] [role="menuitem"], li, button')).map(e => e.innerText.trim()).filter(t => t === 'Upload File(s)' || t === 'Create Folder' || t.includes('Folder') || t.includes('Colaboration'))
      }))()`,
      returnByValue: true
    });
    console.log('Menu state:', JSON.stringify(menuState.result.value, null, 2));

    // Try Create Folder modal
    await send('Runtime.evaluate', {
      expression: `(() => {
        const item = Array.from(document.querySelectorAll('li, button, div, span')).find(e => e.innerText && e.innerText.trim() === 'Create Folder');
        if (item) item.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1500));
    await capture('collab_row172_create_folder_modal.png');

    // Enter folder name
    await send('Runtime.evaluate', { expression: setValScript('input[name="folderName"]', 'InterAgency_Collab_2026') });
    await new Promise(r => setTimeout(r, 500));
    await capture('collab_row173_folder_name_entered.png');

    // Cancel modal
    await send('Runtime.evaluate', {
      expression: `(() => {
        const cancelBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText && b.innerText.trim().toLowerCase() === 'cancel');
        if (cancelBtn) cancelBtn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1000));
    await capture('collab_row175_modal_cancelled.png');

    // Open context menu on first folder or file in Collaborations
    console.log('Opening folder context menu in Collaborations...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('table tbody tr button'));
        if (btns.length > 0) btns[0].click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1500));
    await capture('collab_row177_folder_context_menu.png');

    // Dismiss menu
    await send('Runtime.evaluate', { expression: `document.body.click()` });
    await new Promise(r => setTimeout(r, 800));

    // Open context menu on file if exists
    console.log('Opening file context menu in Collaborations...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('table tbody tr button'));
        if (btns.length > 2) btns[btns.length - 1].click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1500));
    await capture('collab_row180_file_context_menu.png');

    // Dismiss menu
    await send('Runtime.evaluate', { expression: `document.body.click()` });
    await new Promise(r => setTimeout(r, 800));

    // Test Grid View button
    console.log('Testing Grid View toggle...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const gridBtn = Array.from(document.querySelectorAll('button, span, div')).find(e => e.innerText && e.innerText.trim() === 'Grid View');
        if (gridBtn) gridBtn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 1500));
    await capture('collab_row222_grid_view.png');

    // End Test screenshot
    await capture('collab_row224_end_test.png');

    ws.close();
    console.log('\n[SUCCESS] Collaboration UAT run finished successfully!');
  } catch (err) {
    console.error('Collaboration UAT Error:', err);
  } finally {
    browserProc.kill();
  }
}

runCollaborationUAT();
