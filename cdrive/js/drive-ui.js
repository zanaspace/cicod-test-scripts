/**
 * cDrive Workspace UI Controller
 * Handles dual-mode switching (Gov vs. Commercial), search, category filtering, and document rendering
 */

function toggleMode() {
  setGovMode(!isGov);
}

function setGovMode(gov) {
  isGov = gov;
  document.body.classList.toggle('mode-gov', isGov);
  document.body.classList.toggle('mode-commercial', !isGov);
  
  const driveTitle = document.getElementById('driveTitle');
  if (driveTitle) driveTitle.innerText = isGov ? '1Government Drive' : 'CICOD Drive';
  
  const driveSub = document.getElementById('driveSub');
  if (driveSub) driveSub.innerText = isGov ? 'Classified Document Cloud • GBB' : 'Zero-Trust Document Cloud';
  
  const wsLabel = document.getElementById('wsLabel');
  if (wsLabel) wsLabel.innerText = isGov ? '🏛️ Federal Ministry Workspace' : '🏢 Acme Global Workspace';
  
  const secWorkspaces = document.getElementById('secWorkspaces');
  if (secWorkspaces) secWorkspaces.innerText = isGov ? 'Document Containers' : 'Workspaces & Drives';
  
  const lblMyDrive = document.getElementById('lblMyDrive');
  if (lblMyDrive) lblMyDrive.innerText = isGov ? '👤 My Documents' : '👤 Personal Vault (My Drive)';
  
  const lblTeamDrives = document.getElementById('lblTeamDrives');
  if (lblTeamDrives) lblTeamDrives.innerText = isGov ? '🏢 Department Documents' : '🏢 Team Drives & Spaces';
  
  const lblDealRooms = document.getElementById('lblDealRooms');
  if (lblDealRooms) lblDealRooms.innerText = isGov ? '💼 Project / Ticket Vaults' : '💼 Deal Rooms & Portals';
  
  const secB2B = document.getElementById('secB2B');
  if (secB2B) secB2B.innerText = isGov ? 'Inter-MDA Operations' : 'B2B & External Exchange';
  
  const lblIntake = document.getElementById('lblIntake');
  if (lblIntake) lblIntake.innerText = isGov ? '📥 Files Pending Acceptance' : '📥 Inbound Reception Desk';
  
  const lblB2B = document.getElementById('lblB2B');
  if (lblB2B) lblB2B.innerText = isGov ? '🤝 Inter-MDA Shared' : '🤝 B2B Partner Exchange';
  
  const secGov = document.getElementById('secGov');
  if (secGov) secGov.innerText = isGov ? 'Governance & Policy' : 'Compliance & Archive';
  
  const lblArchive = document.getElementById('lblArchive');
  if (lblArchive) lblArchive.innerText = isGov ? '📜 Historic Files' : '📜 Compliance Vault / Archive';

  const lblAppDrives = document.getElementById('lblAppDrives');
  if (lblAppDrives) lblAppDrives.innerText = isGov ? '📦 Application Documents (ECMS & WFM)' : '⚡ Connected App Drives (cFlow, ERP, CRM)';

  const intakeBannerTitle = document.getElementById('intakeBannerTitle');
  if (intakeBannerTitle) intakeBannerTitle.innerText = isGov ? 'Files Pending Inbound Acceptance (Inter-MDA Gate)' : 'Inbound Document Reception Desk (B2B Incoming Gate)';
  
  renderDocs();
  showToast(isGov ? 'Mode: Government 1Gov Nomenclature' : 'Mode: Commercial cDrive Nomenclature');
}

function setDocFilter(cat) {
  currentFilter = cat;
  document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add('active');
  }
  renderDocs();
}

function filterDocuments() {
  const q = document.getElementById('docSearch').value.toLowerCase();
  const cards = document.querySelectorAll('.doc-card');
  cards.forEach(c => {
    c.style.display = c.innerText.toLowerCase().includes(q) ? '' : 'none';
  });
}

function renderDocs() {
  const grid = document.getElementById('docsGrid');
  if (!grid) return;
  
  let filtered = docs;
  if (currentFilter !== 'all') {
    filtered = docs.filter(d => d.cat === currentFilter);
  }

  grid.innerHTML = filtered.map(doc => `
    <div class="doc-card" onclick="onDocClick(${doc.id})">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div class="doc-icon type-${doc.type}">
          ${doc.type === 'doc' ? '📄' : doc.type === 'sheet' ? '📊' : doc.type === 'img' ? '🖼️' : '📕'}
        </div>
        <div style="display: flex; gap: 6px; align-items: center;">
          <span class="tag-badge ${doc.secClass}">${doc.sec}</span>
          <button class="btn-tool" style="padding: 2px 8px; font-size: 11px;" onclick="event.stopPropagation(); openShareModal(${doc.id})" title="Share document">📤 Share</button>
        </div>
      </div>
      <div>
        <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 4px;">${doc.name}</h4>
        <p style="font-size: 12px; color: var(--text-dim);">${doc.path}</p>
        ${doc.origin ? `<div style="font-size: 11px; color: #60a5fa; margin-top: 5px; display: flex; align-items: center; gap: 4px;"><span>🔗 Origin:</span> <strong>${doc.origin}</strong></div>` : ''}
        ${doc.retention ? `<div style="font-size: 10px; color: #34d399; margin-top: 2px;">⏱ Retention: ${doc.retention}</div>` : ''}
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 10px; margin-top: 8px;">
        <span>${doc.size}</span>
        <span>${doc.owner}</span>
      </div>
    </div>
  `).join('');
}
