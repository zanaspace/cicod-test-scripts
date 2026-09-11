/**
 * usecases/js/deepdives.js
 * Deep-Dives: Inter-MDA Requisitions (`r=request`) & Top Secret UI Modal Fix
 */

// Render Dedicated Inter-Agency / Inter-MDA Requisitions View (`r=request`)
function renderRequestModuleView(container) {
  container.innerHTML = `
    <div class="hero-banner" style="border-color: rgba(6,182,212,0.4);">
      <h2>🏛️ Inter-MDA Requests &amp; B2B Requisitions Engine</h2>
      <p>
        Analysis of <code>https://govtest.convergenceondemand.com/wfm/index.php?r=request</code> (Gov ECMS) and its transformation into the commercial <strong>B2B Cross-Company Requisitions</strong> module.
      </p>
    </div>

    <div class="comparison-grid">
      <div class="card-usecase">
        <div class="usecase-header">
          <div class="usecase-title-box">
            <div class="usecase-icon icon-flow">🏛️</div>
            <div>
              <h3 style="font-size: 17px; font-weight: 800;">Inter-Agency Requisitions Architecture</h3>
              <p style="font-size: 12px; color: var(--text-dim);">Route: <code>/wfm/index.php?r=request</code> ➔ Commercial B2B Exchange</p>
            </div>
          </div>
          <span class="tag-engine">FLOW ENGINE</span>
        </div>

        <div class="two-column-context">
          <div class="context-box gov-box">
            <div class="context-title gov-title"><span>🏛️</span> 1Gov Inter-MDA Requests Module</div>
            <p style="font-size: 13px; color: var(--text-muted); line-height: 1.6;">
              Used when one ministry (e.g. Ministry of Solid Minerals) requests statutory inputs, clearance letters, or shared services from another ministry (e.g. Ministry of Environment). It creates a cross-tenant requisition ticket with an inter-MDA reference number (e.g. <code>REQ-FGN-2026-089</code>).
            </p>
          </div>

          <div class="context-box com-box">
            <div class="context-title com-title"><span>🏢</span> Commercial B2B Purchase &amp; Service Requisition</div>
            <p style="font-size: 13px; color: var(--text-muted); line-height: 1.6;">
              Commercial companies use this to initiate formal cross-company work orders with vendors, audit firms, and joint-venture partners. Includes automated quote comparisons, PO numbers, delivery milestones, and payment trigger authorization.
            </p>
          </div>
        </div>

        <!-- Interactive Live Requisition Dispatch Simulator -->
        <div class="sim-box" style="background: rgba(15,23,42,0.95); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 20px; display: flex; flex-direction: column; gap: 14px;">
          <h4 style="font-size: 14px; font-weight: 700; color: #38bdf8;">Interactive Dispatch Simulator (<code>r=request</code>)</h4>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
            <div>
              <label style="font-size: 11px; font-weight: 700; color: var(--text-dim);">Target Entity / Tenant *</label>
              <select id="reqTarget" style="width: 100%; padding: 8px 12px; background: rgba(0,0,0,0.4); border: 1px solid var(--border-subtle); border-radius: 6px; color: #fff; margin-top: 4px;">
                <option value="kpmg">KPMG Audit &amp; Assurance Partner (Tenant ID: 9021)</option>
                <option value="supplier">Apex Logistics &amp; Shipping Hub (Tenant ID: 8140)</option>
                <option value="fed_env">Federal Ministry of Environment (Tenant ID: 0012)</option>
              </select>
            </div>
            <div>
              <label style="font-size: 11px; font-weight: 700; color: var(--text-dim);">Requisition Category *</label>
              <select id="reqCategory" style="width: 100%; padding: 8px 12px; background: rgba(0,0,0,0.4); border: 1px solid var(--border-subtle); border-radius: 6px; color: #fff; margin-top: 4px;">
                <option value="pbc">FY2026 Audit PBC Information Request</option>
                <option value="po">Subcontractor Bill of Quantities / Purchase Order</option>
                <option value="clearance">Statutory Regulatory Clearance &amp; Permit</option>
              </select>
            </div>
          </div>

          <div>
            <label style="font-size: 11px; font-weight: 700; color: var(--text-dim);">Requisition Details / Instructions</label>
            <textarea style="width: 100%; height: 60px; padding: 8px 12px; background: rgba(0,0,0,0.4); border: 1px solid var(--border-subtle); border-radius: 6px; color: #fff; margin-top: 4px;" placeholder="Please dispatch the approved stage-2 statutory clearance dossier and trial balances..."></textarea>
          </div>

          <div style="display: flex; justify-content: flex-end;">
            <button style="padding: 9px 22px; background: #0284c7; border: none; border-radius: 6px; color: #fff; font-weight: 700; cursor: pointer;" onclick="dispatchRequisition()">
              🚀 Dispatch B2B Requisition Ticket
            </button>
          </div>

          <div id="reqResultBox" style="display: none; background: rgba(6,182,212,0.1); border: 1px solid rgba(6,182,212,0.3); border-radius: 6px; padding: 12px; font-size: 12px;">
            <strong style="color: #67e8f9;">Requisition Dispatched:</strong> Tracking ID: <code id="reqTrackId">REQ-B2B-2026-9941</code>. Linked directly to target tenant intake queue!
          </div>
        </div>
      </div>
    </div>
  `;
}

function dispatchRequisition() {
  const track = 'REQ-' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('reqTrackId').innerText = track;
  document.getElementById('reqResultBox').style.display = 'block';
  showToast('Requisition ticket ' + track + ' created in B2B queue!');
}

// Render Classified File Modal UI Fix (topsecretUItweaks.png)
function renderClassifiedFix(container) {
  container.innerHTML = `
    <div class="hero-banner" style="border-color: rgba(245,158,11,0.4);">
      <h2>🔐 Top Secret / Classified File UI Modal Fix</h2>
      <p>
        In 1Gov Drive (documented in <code>comments.md</code> &amp; <code>topsecretUItweaks.png</code>), the modal for creating classified masked files occupies 100% height without internal overflow, causing the back/cancel button to disappear off-screen.
      </p>
    </div>

    <div class="fix-preview-box">
      <h3 style="font-size: 16px; font-weight: 700; color: #fbbf24;">Fixed Responsive Implementation (Deal Rooms &amp; Classified Files)</h3>
      <p style="font-size: 13px; color: var(--text-muted); line-height: 1.6;">
        In <strong>cDrive</strong>, the modal uses <code>max-height: 80vh; overflow-y: auto;</code> with a <code>position: sticky; bottom: 0;</code> action footer. This guarantees buttons are always accessible regardless of screen height.
      </p>

      <div class="fix-inner-modal" style="background: rgba(15,23,42,0.95); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 24px; max-width: 520px; margin: 10px auto; display: flex; flex-direction: column; gap: 16px;">
        <div>
          <label style="font-size: 12px; font-weight: 700;">1. Code Name / File Mask *</label>
          <p style="font-size: 11px; color: var(--text-dim);">The code name masks the true filename to protect identity in deal rooms.</p>
          <input type="text" style="width: 100%; padding: 8px 12px; background: rgba(0,0,0,0.4); border: 1px solid var(--border-subtle); border-radius: 6px; color: #fff; margin-top: 4px;" value="PROJECT_TITAN_DISCLOSURE" />
        </div>

        <div>
          <label style="font-size: 12px; font-weight: 700;">2. Independent Encryption Passphrase *</label>
          <input type="password" style="width: 100%; padding: 8px 12px; background: rgba(0,0,0,0.4); border: 1px solid var(--border-subtle); border-radius: 6px; color: #fff; margin-top: 4px;" value="********" />
        </div>

        <div>
          <label style="font-size: 12px; font-weight: 700;">3. Third-Party Clearance Signer *</label>
          <p style="font-size: 11px; color: var(--text-dim);">Designated compliance officer who must endorse access requests.</p>
          <input type="text" style="width: 100%; padding: 8px 12px; background: rgba(0,0,0,0.4); border: 1px solid var(--border-subtle); border-radius: 6px; color: #fff; margin-top: 4px;" value="compliance.officer@acme.com" />
        </div>

        <!-- Sticky Visible Footer -->
        <div class="fix-inner-footer" style="position: sticky; bottom: 0; background: rgba(15,23,42,0.98); padding-top: 14px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
          <button style="padding: 8px 16px; background: rgba(255,255,255,0.06); border: 1px solid var(--border-subtle); border-radius: 6px; color: #fff; cursor: pointer;" onclick="showToast('Back button permanently visible!')">← Back</button>
          <button style="padding: 8px 20px; background: #2563eb; border: none; border-radius: 6px; color: #fff; font-weight: 700; cursor: pointer;" onclick="showToast('Classified deal room file encrypted!')">Create Protected File</button>
        </div>
      </div>
    </div>
  `;
}
