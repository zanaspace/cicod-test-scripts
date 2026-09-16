/**
 * usecases/js/app.js
 * Master Controller, Navigation & View Router for Use Cases Module
 */

let activeFilter = 'all';
let viewMode = 'both'; // 'commercial', 'gov', 'both'

window.addEventListener('DOMContentLoaded', () => {
  if (window.self !== window.top) {
    document.body.classList.add('is-embedded');
  }
  renderContent();
  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem('cicod_theme') || 'dark';
  } catch (e) {}
  setTheme(savedTheme, false);

  try {
    if (localStorage.getItem('usecases_sidebar_collapsed') === 'true') {
      const sidebar = document.getElementById('appSidebar');
      const toggleBtn = document.getElementById('btnUsecasesSidebarToggle');
      const toggleIcon = document.getElementById('usecasesSidebarToggleIcon');
      if (sidebar) sidebar.classList.add('collapsed');
      if (toggleBtn) toggleBtn.classList.add('collapsed');
      if (toggleIcon) toggleIcon.innerText = '▶';
    }
  } catch (e) {}
});

// Listen for cross-frame messages from master portal
window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SET_MODE') {
    const mode = event.data.mode;
    if (mode === 'gov') {
      switchViewMode('gov');
    } else if (mode === 'commercial') {
      switchViewMode('commercial');
    } else {
      switchViewMode('both');
    }
  }
  if (event.data && event.data.type === 'SET_THEME') {
    setTheme(event.data.theme, false);
  }
});

function setTheme(theme, broadcast = true) {
  const isLight = theme === 'light';
  document.body.classList.toggle('theme-light', isLight);
  const btn = document.getElementById('btnUsecasesTheme');
  if (btn) btn.innerHTML = isLight ? '<span>🌙 Dark</span>' : '<span>☀️ Light</span>';
  try {
    localStorage.setItem('cicod_theme', isLight ? 'light' : 'dark');
  } catch (e) {}
  if (broadcast && window.parent && window.parent !== window) {
    try {
      window.parent.postMessage({ type: 'SET_THEME', theme: isLight ? 'light' : 'dark' }, '*');
    } catch (e) {}
  }
}

function toggleTheme() {
  const isLight = document.body.classList.contains('theme-light');
  setTheme(isLight ? 'dark' : 'light', true);
}

function setSection(sec, evt) {
  activeFilter = sec;
  document.querySelectorAll('.sidebar .nav-item').forEach(i => i.classList.remove('active'));
  if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
  renderContent();
}

function filterPlaybook(pb, evt) {
  activeFilter = 'playbook-' + pb;
  document.querySelectorAll('.sidebar .nav-item').forEach(i => i.classList.remove('active'));
  if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
  renderContent();
}

function switchViewMode(mode) {
  viewMode = mode;
  document.body.classList.toggle('mode-gov', mode === 'gov');
  document.body.classList.toggle('mode-commercial', mode !== 'gov');
  document.querySelectorAll('.mode-toggle-group .btn-toggle').forEach(b => b.classList.remove('active'));
  if (mode === 'commercial') document.getElementById('btn-com').classList.add('active');
  if (mode === 'gov') document.getElementById('btn-gov').classList.add('active');
  if (mode === 'both') document.getElementById('btn-both').classList.add('active');
  renderContent();
}

function renderContent() {
  const container = document.getElementById('mainContainer');
  if (!container) return;

  // Top label update
  const labelMap = {
    'all': 'All Use Cases Matrix (18 Modules)',
    'drive': 'Drive Modules (GovDrive ⇄ cDrive)',
    'flow': 'Flow Modules (Gov ECMS ⇄ cFlow)',
    'mapper-drive': 'Interactive Drive Sidebar Visualizer',
    'mapper-flow': 'Interactive Flow Sidebar Visualizer',
    'request-module': 'Inter-MDA / B2B Requisitions Engine (r=request)',
    'classified-fix': 'Top Secret / Classified UI Modal Fix',
    'scenario-runner': 'Interactive Scenario Runner'
  };

  const topLabelEl = document.getElementById('topLabel');
  if (topLabelEl) {
    if (labelMap[activeFilter]) {
      topLabelEl.innerText = labelMap[activeFilter];
    } else if (activeFilter.startsWith('playbook-')) {
      topLabelEl.innerText = 'Commercial Playbook: ' + activeFilter.replace('playbook-', '').toUpperCase();
    }
  }

  // Branch to specialized sub-module renderers
  if (activeFilter === 'mapper-drive') {
    renderSidebarMapper(container, 'drive');
    return;
  }

  if (activeFilter === 'mapper-flow') {
    renderSidebarMapper(container, 'flow');
    return;
  }

  if (activeFilter === 'request-module') {
    renderRequestModuleView(container);
    return;
  }

  if (activeFilter === 'classified-fix') {
    renderClassifiedFix(container);
    return;
  }

  if (activeFilter === 'scenario-runner') {
    renderScenarioRunner(container);
    return;
  }

  if (activeFilter.startsWith('playbook-')) {
    const pbKey = activeFilter.replace('playbook-', '');
    renderPlaybookView(container, pbKey);
    return;
  }

  // Default view: Matrix of cards
  let list = useCasesData;
  if (activeFilter === 'drive') list = useCasesData.filter(u => u.engine === 'drive');
  if (activeFilter === 'flow') list = useCasesData.filter(u => u.engine === 'flow');

  container.innerHTML = `
    <div class="hero-banner">
      <h2>🎯 Comprehensive Use Case &amp; Architectural Mapping Matrix</h2>
      <p>
        Detailed functional breakdown illustrating how every core <strong>GovDrive</strong> and <strong>Gov ECMS</strong> module translates into high-value commercial features for <strong>CICOD Drive (<code>cDrive</code>)</strong> and <strong>CICOD Workflow (<code>cFlow</code>)</strong>.
      </p>
    </div>

    <div class="comparison-grid">
      ${list.map(item => `
        <div class="card-usecase" id="card-${item.id}">
          <div class="usecase-header">
            <div class="usecase-title-box">
              <div class="usecase-icon ${item.engine === 'drive' ? 'icon-drive' : 'icon-flow'}">
                ${item.icon}
              </div>
              <div>
                <h3 style="font-size: 17px; font-weight: 800;">${item.name}</h3>
                <div style="font-size: 12px; color: var(--text-dim); display: flex; gap: 8px; margin-top: 2px;">
                  <span>🏢 <strong>CICOD:</strong> ${item.cName}</span>
                  <span>•</span>
                  <span>🏛️ <strong>1Gov:</strong> ${item.gName}</span>
                </div>
              </div>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
              <span class="tag-engine">${item.engine.toUpperCase()} ENGINE</span>
            </div>
          </div>

          <!-- Two Column Context (Gov vs Commercial) -->
          <div class="two-column-context">
            ${viewMode === 'gov' || viewMode === 'both' ? `
              <div class="context-box gov-box">
                <div class="context-title gov-title"><span>🏛️</span> 1Government (Public Sector) Use Case</div>
                <p style="font-size: 13px; color: var(--text-muted); line-height: 1.6;">${item.govContext}</p>
                <div style="font-size: 11px; color: var(--text-dim); margin-top: 4px;">
                  <strong>1Gov Sidebar:</strong> <code>${item.gSidebar}</code>
                </div>
              </div>
            ` : ''}

            ${viewMode === 'commercial' || viewMode === 'both' ? `
              <div class="context-box com-box">
                <div class="context-title com-title"><span>🏢</span> CICOD (Commercial) Use Case</div>
                <p style="font-size: 13px; color: var(--text-muted); line-height: 1.6;">${item.comContext}</p>
                <div style="font-size: 11px; color: var(--text-dim); margin-top: 4px;">
                  <strong>cDrive Sidebar:</strong> <code>${item.cSidebar}</code>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Technical Mechanism & API Linkage -->
          <div class="tech-mechanism">
            <div>
              <span style="color: var(--text-dim); font-weight: 700;">MECHANISM:</span>
              <span style="color: var(--text-main); margin-left: 6px;">${item.mechanism}</span>
            </div>
            <span class="code-pill">API: ${item.endpoint}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function showToast(msg) {
  const box = document.getElementById('toastBox');
  if (!box) return;
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerText = msg;
  box.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    setTimeout(() => t.remove(), 300);
  }, 3000);
}

function toggleSidebar() {
  const sidebar = document.getElementById('appSidebar');
  const toggleBtn = document.getElementById('btnUsecasesSidebarToggle');
  const toggleIcon = document.getElementById('usecasesSidebarToggleIcon');
  if (!sidebar) return;

  const isCollapsed = sidebar.classList.toggle('collapsed');
  if (toggleBtn) toggleBtn.classList.toggle('collapsed', isCollapsed);
  if (toggleIcon) toggleIcon.innerText = isCollapsed ? '▶' : '☰';

  try {
    localStorage.setItem('usecases_sidebar_collapsed', isCollapsed ? 'true' : 'false');
  } catch (e) {}

  showToast(isCollapsed ? 'Sidebar collapsed to icon rail (Ctrl+B to expand)' : 'Sidebar expanded');
}

function toggleNavGroup(groupEl) {
  if (!groupEl) return;
  groupEl.classList.toggle('collapsed');
}

// Global keyboard shortcut: Ctrl+B or Cmd+B to toggle sidebar
window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
    e.preventDefault();
    toggleSidebar();
  }
});
