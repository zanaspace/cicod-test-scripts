/**
 * CICOD & 1Government QA Test Portal Controller
 * 
 * Handles UI interactions, accordion expansion, report rendering,
 * and test photo modal preview with backward compatibility.
 */

(function () {
  'use strict';

  // State Management
  let activeModuleId = (typeof window.appModules !== 'undefined' && window.appModules.length) 
    ? window.appModules[0].id 
    : 'module_drive';
    
  let activeFeatureId = (typeof window.appModules !== 'undefined' && window.appModules.length && window.appModules[0].features.length) 
    ? window.appModules[0].features[0].id 
    : 'login';

  /**
   * Initializes portal state and renders default views.
   */
  function init() {
    restoreSidebarState();
    renderSidebar();
    renderContent();
  }

  /**
   * Toggles the entire sidebar visibility between expanded and collapsed.
   */
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebarToggle');
    if (!sidebar) return;

    sidebar.classList.toggle('collapsed');
    const isCollapsed = sidebar.classList.contains('collapsed');

    if (toggleBtn) {
      toggleBtn.classList.toggle('collapsed', isCollapsed);
      toggleBtn.title = isCollapsed ? 'Expand Sidebar (Ctrl+B)' : 'Collapse Sidebar (Ctrl+B)';
      toggleBtn.setAttribute('aria-expanded', !isCollapsed);
    }

    try {
      localStorage.setItem('portal_sidebar_collapsed', isCollapsed ? '1' : '0');
    } catch (e) {}
  }

  /**
   * Restores sidebar state from localStorage if available.
   */
  function restoreSidebarState() {
    try {
      if (localStorage.getItem('portal_sidebar_collapsed') === '1') {
        const sidebar = document.getElementById('sidebar');
        const toggleBtn = document.getElementById('sidebarToggle');
        if (sidebar) sidebar.classList.add('collapsed');
        if (toggleBtn) {
          toggleBtn.classList.add('collapsed');
          toggleBtn.title = 'Expand Sidebar (Ctrl+B)';
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      }
    } catch (e) {}
  }

  /**
   * Toggles accordion collapse/expand for a module group.
   * @param {string} modId 
   */
  function toggleModule(modId) {
    const modules = window.appModules || [];
    const mod = modules.find(m => m.id === modId);
    if (!mod) return;
    mod.expanded = !mod.expanded;
    renderSidebar();
  }

  /**
   * Selects an individual feature/sheet and updates main content view.
   * @param {string} modId 
   * @param {string} featId 
   */
  function selectFeature(modId, featId) {
    activeModuleId = modId;
    activeFeatureId = featId;
    const modules = window.appModules || [];
    const mod = modules.find(m => m.id === modId);
    if (mod) mod.expanded = true;
    renderSidebar();
    renderContent();
    const main = document.getElementById('mainView');
    if (main) main.scrollTop = 0;
  }

  /**
   * Renders the sidebar navigation tree.
   */
  function renderSidebar() {
    const list = document.getElementById('sidebarList');
    if (!list) return;

    const modules = window.appModules || [];
    list.innerHTML = modules.map(mod => {
      const isParentActive = mod.id === activeModuleId;
      return `
        <div class="module-group">
          <div class="module-btn ${isParentActive ? 'active-parent' : ''}" onclick="toggleModule('${mod.id}')">
            <div class="module-left">
              <span class="module-chevron ${mod.expanded ? 'expanded' : ''}">▶</span>
              <span>${mod.icon} ${mod.name}</span>
            </div>
            <span class="module-badge">${mod.badge}</span>
          </div>

          <div class="features-list ${mod.expanded ? '' : 'collapsed'}">
            ${mod.features.map(f => {
              const isActive = mod.id === activeModuleId && f.id === activeFeatureId;
              const isUpcoming = !!f.isUpcoming;
              const rateNum = parseFloat(f.passRate);
              const is100 = !isUpcoming && rateNum >= 99;
              return `
                <div class="feature-item ${isActive ? 'active' : ''}" onclick="selectFeature('${mod.id}', '${f.id}')">
                  <span>${f.sheetName}</span>
                  <span class="pill-rate ${isUpcoming ? '' : (is100 ? '' : 'gap')}" style="${isUpcoming ? 'background:rgba(56,189,248,0.15);color:#38bdf8;' : ''}">${f.passRate}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  /**
   * Renders main view content: Header bar, KPI cards, Test Photos, and HTML Report.
   */
  function renderContent() {
    const main = document.getElementById('mainView');
    if (!main) return;

    const modules = window.appModules || [];
    const mod = modules.find(m => m.id === activeModuleId) || modules[0];
    if (!mod) return;

    const sheet = mod.features.find(f => f.id === activeFeatureId) || mod.features[0];
    if (!sheet) return;

    const isUpcoming = !!sheet.isUpcoming;

    main.innerHTML = `
      <!-- Top Bar with Module Context & Sheet Name -->
      <div class="module-top-bar">
        <h2 class="module-title-h2">
          <span class="module-parent-crumb">${mod.name} /</span>
          <span>${sheet.sheetName}</span>
        </h2>
        <span class="status-tag" style="${isUpcoming ? 'background:rgba(56,189,248,0.15);color:#38bdf8;border-color:rgba(56,189,248,0.3);' : ''}">${sheet.status}</span>
      </div>

      <!-- Dashboard KPI Cards (Intact) -->
      <div class="dashboard-kpi-grid">
        <div class="kpi-card">
          <span class="kpi-title">${isUpcoming ? 'Status' : 'Pass Rate'}</span>
          <span class="kpi-number" style="color:${isUpcoming ? '#38bdf8' : '#34d399'};font-size:1.35rem;">${sheet.passRate}</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-title">${isUpcoming ? 'Target Steps' : 'Verified Steps'}</span>
          <span class="kpi-number" style="color:#38bdf8;">${isUpcoming ? sheet.totalSteps + ' Steps' : sheet.passCount + ' / ' + sheet.totalSteps}</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-title">${isUpcoming ? 'Target Route' : 'Documented Gaps'}</span>
          <span class="kpi-number" style="color:${isUpcoming ? '#a855f7' : (sheet.gapCount > 0 ? '#fbbf24' : '#94a3b8')};font-size:${isUpcoming ? '1.05rem' : '1.45rem'};">${isUpcoming ? sheet.targetRoute : sheet.gapCount}</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-title">${isUpcoming ? 'Architecture' : 'Test Photos'}</span>
          <span class="kpi-number" style="color:${isUpcoming ? '#34d399' : '#a855f7'};font-size:${isUpcoming ? '1.15rem' : '1.45rem'};">${isUpcoming ? '100% Prepared' : (sheet.images || []).length + ' Captured'}</span>
        </div>
      </div>

      <!-- Test Photos Section -->
      ${sheet.images && sheet.images.length ? `
        <div class="section-wrap">
          <div class="section-head">
            <span>Test Photos (${sheet.images.length})</span>
            <span style="font-size:0.75rem;color:var(--text-dim);">Click to inspect evidence</span>
          </div>
          <div class="photos-grid">
            ${sheet.images.map(img => `
              <div class="photo-thumb-card" onclick="openModal('${img.file}', '${img.caption.replace(/'/g, "\\'")}')">
                <div class="thumb-img-box">
                  <img src="${img.file}" alt="${img.caption}" loading="lazy">
                </div>
                <div class="photo-caption">${img.caption}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- HTML Report Frame or Next Phase Briefing -->
      ${sheet.reportUrl ? `
        <div class="report-wrapper">
          <div class="report-bar">
            <span class="report-bar-title">📄 ${sheet.sheetName} — UAT HTML Report</span>
            <a href="${sheet.reportUrl}" target="_blank" class="open-ext-link">Open in New Tab ↗</a>
          </div>
          <iframe class="report-frame" src="${sheet.reportUrl}" title="${sheet.sheetName} Report"></iframe>
        </div>
      ` : `
        <div class="report-wrapper" style="display:flex;align-items:center;justify-content:center;padding:50px 24px;text-align:center;">
          <div style="max-width:560px;display:flex;flex-direction:column;align-items:center;gap:14px;">
            <div style="width:56px;height:56px;border-radius:14px;background:rgba(56,189,248,0.12);border:1px solid rgba(56,189,248,0.3);display:flex;align-items:center;justify-content:center;font-size:1.6rem;">🏛️</div>
            <h3 style="font-size:1.3rem;font-weight:800;color:#fff;">${sheet.sheetName} — Next Testing Phase</h3>
            <p style="font-size:0.88rem;color:var(--text-muted);line-height:1.6;">
              ${sheet.summary}
            </p>
            <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:20px;background:rgba(255,255,255,0.04);border:1px solid var(--border-subtle);color:#cbd5e1;font-size:0.78rem;font-family:'JetBrains Mono',monospace;">
              <span>Target Endpoint:</span>
              <strong style="color:#38bdf8;">${sheet.targetRoute}</strong>
            </div>
            <p style="font-size:0.75rem;color:var(--text-dim);margin-top:6px;">
              Verified Next.js paperless portal architecture. Detailed UAT execution and test evidence capture will commence next.
            </p>
          </div>
        </div>
      `}
    `;
  }

  /**
   * Opens the full-resolution modal preview for test photo evidence.
   * @param {string} src 
   * @param {string} caption 
   */
  function openModal(src, caption) {
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    const imageModal = document.getElementById('imageModal');

    if (modalImg) modalImg.src = src;
    if (modalCaption) modalCaption.innerText = caption || '';
    if (imageModal) imageModal.classList.add('active');
  }

  /**
   * Closes the photo evidence modal viewer.
   */
  function closeModal() {
    const imageModal = document.getElementById('imageModal');
    if (imageModal) imageModal.classList.remove('active');
  }

  // Keyboard shortcuts: Escape to close modal, Ctrl+B to toggle sidebar
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
      e.preventDefault();
      toggleSidebar();
    }
  });

  // Export functions to window scope for 100% backward compatibility
  window.init = init;
  window.toggleSidebar = toggleSidebar;
  window.toggleModule = toggleModule;
  window.selectFeature = selectFeature;
  window.renderSidebar = renderSidebar;
  window.renderContent = renderContent;
  window.openModal = openModal;
  window.closeModal = closeModal;

  // Auto-run on DOM ready or window load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
