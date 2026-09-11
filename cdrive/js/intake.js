/**
 * Inbound Reception Desk (B2B Quarantine Gate) Handlers
 * Maps to backend: document/acceptFileSharing and document/rejectFileSharing
 */

function acceptIntake(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('accepted');
    el.innerHTML = '<div style="color: #10b981; font-weight: 700; font-size: 13px;">✓ Accepted into Team Drive &amp; Logged to Audit Trail</div>';
  }
  showToast('Document accepted and encrypted to Team Drive');
}

function declineIntake(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('rejected');
    el.innerHTML = '<div style="color: #f87171; font-weight: 700; font-size: 13px;">✕ Inbound Document Declined</div>';
  }
  showToast('Document declined');
}
