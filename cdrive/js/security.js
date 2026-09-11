/**
 * Zero-Trust Step-up OTP Verification & Document Details Drawer
 * Maps to backend: document/initiate2FAEmail and document/validate2FACode
 */

function onDocClick(id) {
  const doc = docs.find(d => d.id === id);
  if (!doc) return;
  if (doc.sec.includes('RESTRICTED') || doc.sec.includes('CONFIDENTIAL')) {
    activeDocForOtp = doc;
    document.getElementById('otpModal').classList.add('open');
  } else {
    openDrawer(doc);
  }
}

function verifyOtpAndOpen() {
  closeOtpModal();
  showToast('2FA validated! Decrypting document payload...');
  if (activeDocForOtp) {
    openDrawer(activeDocForOtp);
    activeDocForOtp = null;
  }
}

function closeOtpModal() {
  document.getElementById('otpModal').classList.remove('open');
  activeDocForOtp = null;
}

function openDrawer(doc) {
  document.getElementById('dTitle').innerText = doc.name;
  document.getElementById('dPath').innerText = doc.path;
  document.getElementById('dSize').innerText = doc.size;
  document.getElementById('dOwner').innerText = doc.owner;
  document.getElementById('dPerms').innerText = doc.perms;
  document.getElementById('dBadge').innerText = doc.sec;
  document.getElementById('drawerOverlay').classList.add('open');
}

function closeDrawer(e) {
  if (e && e.target !== document.getElementById('drawerOverlay') && !e.target.innerText?.includes('Close')) return;
  document.getElementById('drawerOverlay').classList.remove('open');
}
