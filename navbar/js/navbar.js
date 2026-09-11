/**
 * CICOD Cloud Suite — Compact Modular Navbar Controller
 * Coordinates micro-tabs, "More" dropdown popover, and separated Admin Control Center
 */

(function () {
  let activeModule = 'cdrive';
  let isMoreOpen = false;
  let isAdminOpen = false;

  // Export functions to window scope for global integration
  window.initCompactNavbar = function (initialModule = 'cdrive') {
    activeModule = initialModule;
    setupClickOutsideListener();
  };

  window.toggleMoreMenu = function (event) {
    if (event) event.stopPropagation();
    isMoreOpen = !isMoreOpen;
    if (isMoreOpen && isAdminOpen) closeAdminMenu();
    
    const menu = document.getElementById('morePopover');
    const btn = document.getElementById('btnMoreDropdown');
    if (menu) menu.classList.toggle('open', isMoreOpen);
    if (btn) btn.classList.toggle('open', isMoreOpen);
  };

  window.closeMoreMenu = function () {
    isMoreOpen = false;
    const menu = document.getElementById('morePopover');
    const btn = document.getElementById('btnMoreDropdown');
    if (menu) menu.classList.remove('open');
    if (btn) btn.classList.remove('open');
  };

  window.toggleAdminMenu = function (event) {
    if (event) event.stopPropagation();
    isAdminOpen = !isAdminOpen;
    if (isAdminOpen && isMoreOpen) closeMoreMenu();

    const menu = document.getElementById('adminPopover');
    const btn = document.getElementById('btnAdminPill');
    if (menu) menu.classList.toggle('open', isAdminOpen);
    if (btn) btn.classList.toggle('open', isAdminOpen);
  };

  window.closeAdminMenu = function () {
    isAdminOpen = false;
    const menu = document.getElementById('adminPopover');
    const btn = document.getElementById('btnAdminPill');
    if (menu) menu.classList.remove('open');
    if (btn) btn.classList.remove('open');
  };

  window.selectCompactModule = function (modId, event) {
    if (event) event.stopPropagation();
    activeModule = modId;
    closeMoreMenu();
    closeAdminMenu();

    // Update primary micro-tabs
    document.querySelectorAll('.tab-btn-mini').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.module === modId);
    });

    // Update secondary items in More menu
    const isSubItem = ['pipeline', 'deepdive', 'sharing', 'wfm'].includes(modId);
    const moreBtn = document.getElementById('btnMoreDropdown');
    if (moreBtn) {
      moreBtn.classList.toggle('active-sub', isSubItem);
    }

    document.querySelectorAll('.popover-item').forEach(item => {
      item.classList.toggle('active', item.dataset.module === modId);
    });

    // Delegate to master openModule if registered on window
    if (typeof window.openModule === 'function') {
      window.openModule(modId);
    }
  };

  window.updateNavbarVocab = function (mode) {
    const isGov = mode === 'gov';
    
    // Brand title & badge
    const badge = document.getElementById('brandBadgeMini');
    if (badge) badge.innerText = isGov ? '1G' : 'C';

    const title = document.getElementById('brandTitleMini');
    if (title) title.innerText = isGov ? '1Government Suite' : 'CICOD Cloud';

    const tag = document.getElementById('brandTagMini');
    if (tag) tag.innerText = isGov ? 'GBB Sovereign' : 'Enterprise';

    // Primary Micro-Tabs
    const tabCdrive = document.getElementById('tab-mini-cdrive');
    if (tabCdrive) tabCdrive.innerHTML = isGov ? '<span>📁 GovDrive</span>' : '<span>📁 cDrive</span>';

    const tabCflow = document.getElementById('tab-mini-cflow');
    if (tabCflow) tabCflow.innerHTML = isGov ? '<span>📝 Gov ECMS</span>' : '<span>📝 cFlow</span>';

    const tabUsecases = document.getElementById('tab-mini-usecases');
    if (tabUsecases) tabUsecases.innerHTML = isGov ? '<span>🎯 1Gov Blueprint</span>' : '<span>🎯 Blueprint</span>';

    // Admin Tenant Box
    const adminTenant = document.getElementById('adminTenantDisplay');
    if (adminTenant) {
      adminTenant.innerHTML = isGov 
        ? '<span>🏛️ Federal Ministry Workspace</span><small style="color: #4ade80;">Active</small>' 
        : '<span>🏢 Acme Global HQ (Tenant #001)</span><small style="color: #60a5fa;">Active</small>';
    }
  };

  function setupClickOutsideListener() {
    document.addEventListener('click', (e) => {
      const morePopover = document.getElementById('morePopover');
      const moreBtn = document.getElementById('btnMoreDropdown');
      if (isMoreOpen && morePopover && !morePopover.contains(e.target) && (!moreBtn || !moreBtn.contains(e.target))) {
        closeMoreMenu();
      }

      const adminPopover = document.getElementById('adminPopover');
      const adminBtn = document.getElementById('btnAdminPill');
      if (isAdminOpen && adminPopover && !adminPopover.contains(e.target) && (!adminBtn || !adminBtn.contains(e.target))) {
        closeAdminMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMoreMenu();
        closeAdminMenu();
      }
    });
  }

  // Theme Management (Light & Dark Mode)
  window.setTheme = function (theme, broadcast = true) {
    const isLight = theme === 'light';
    document.body.classList.toggle('theme-light', isLight);
    
    // Update all theme toggle buttons across the page
    document.querySelectorAll('.theme-switch-btn').forEach(btn => {
      btn.innerHTML = isLight ? '<span>🌙 Dark</span>' : '<span>☀️ Light</span>';
      btn.setAttribute('title', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
    });

    try {
      localStorage.setItem('cicod_theme', isLight ? 'light' : 'dark');
    } catch (e) {}

    // Broadcast to any child iframes on the page
    if (broadcast) {
      document.querySelectorAll('iframe').forEach(frame => {
        try {
          if (frame.contentWindow) {
            frame.contentWindow.postMessage({ type: 'SET_THEME', theme: isLight ? 'light' : 'dark' }, '*');
          }
        } catch (e) {}
      });
      // Broadcast up to parent window if running within an iframe
      if (window.parent && window.parent !== window) {
        try {
          window.parent.postMessage({ type: 'SET_THEME', theme: isLight ? 'light' : 'dark' }, '*');
        } catch (e) {}
      }
    }
  };

  window.toggleTheme = function () {
    const isLight = document.body.classList.contains('theme-light');
    window.setTheme(isLight ? 'dark' : 'light', true);
  };

  // Cross-frame messaging listener
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SET_THEME') {
      window.setTheme(event.data.theme, false);
    }
  });

  // Auto-init on load
  document.addEventListener('DOMContentLoaded', () => {
    window.initCompactNavbar();
    let savedTheme = 'dark';
    try {
      savedTheme = localStorage.getItem('cicod_theme') || 'dark';
    } catch (e) {}
    window.setTheme(savedTheme, false);
  });
})();
