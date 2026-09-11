/**
 * Enterprise Share Modal Management
 * Supports:
 * 1. Internal Workspace Sharing (document/shareFile)
 * 2. B2B Partner / Client Extranet Dispatch (document/shareFileInterTenant)
 * 3. Secure Link Sharing (document/allowLinkSharing)
 */

function openShareModal(id) {
  const doc = docs.find(d => d.id === id) || docs[0];
  activeDocForShare = doc;
  document.getElementById('smTitle').innerText = `Share "${doc.name}"`;
  document.getElementById('smPath').innerText = doc.path;
  document.getElementById('smFileIcon').innerText = doc.type === 'doc' ? '📄' : doc.type === 'sheet' ? '📊' : '📕';
  document.getElementById('shareLinkValue').value = `https://cloud.cicod.com/file-download?fileToken=tok_${doc.id}88b92_${encodeURIComponent(doc.name.replace(/[^a-zA-Z0-9]/g, ''))}`;
  setShareTab('internal');
  document.getElementById('shareModal').classList.add('open');
}

function openShareModalFromDrawer() {
  const currentTitle = document.getElementById('dTitle').innerText;
  const doc = docs.find(d => d.name === currentTitle) || docs[0];
  closeDrawer();
  openShareModal(doc.id);
}

function closeShareModal(e) {
  if (e && e.target !== document.getElementById('shareModal') && !e.target.innerText?.includes('✕') && !e.target.innerText?.includes('Cancel')) return;
  document.getElementById('shareModal').classList.remove('open');
}

function setShareTab(tab) {
  ['internal', 'b2b', 'link'].forEach(t => {
    const btn = document.getElementById(`tab-share-${t}`);
    const pane = document.getElementById(`pane-share-${t}`);
    if (btn) btn.classList.toggle('active', t === tab);
    if (pane) pane.style.display = (t === tab) ? 'flex' : 'none';
  });
}

function copyShareLink() {
  const input = document.getElementById('shareLinkValue');
  input.select();
  navigator.clipboard?.writeText(input.value);
  showToast('Secure sharing link copied to clipboard!');
}

function dispatchShareAction() {
  const activeTab = document.querySelector('.share-tab-btn.active')?.id || '';
  if (activeTab.includes('internal')) {
    const email = document.getElementById('internalShareEmail').value.trim() || 'colleague@company.com';
    const perm = document.querySelector('input[name="intPerm"]:checked')?.value || 'viewer';
    showToast(`Shared with ${email} as ${perm.toUpperCase()} (Audit event logged)`);
  } else if (activeTab.includes('b2b')) {
    const org = document.getElementById('b2bOrgSelect').selectedOptions[0].text;
    const recipient = document.getElementById('b2bRecipientEmail').value.trim() || 'partner@tenant.com';
    showToast(`Dispatched via Inter-Tenant Gate to ${org} (${recipient})! Awaiting counterparty acceptance.`);
  } else {
    showToast('Secure link configuration updated and enforced!');
  }
  document.getElementById('shareModal').classList.remove('open');
}
