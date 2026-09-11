/**
 * usecases/js/runner.js
 * Interactive Scenario Runner (Cross-Entity Document Flow Simulation)
 */

let runIdx = 0;

function renderScenarioRunner(container) {
  container.innerHTML = `
    <div class="hero-banner">
      <h2>▶ Interactive Scenario Runner: Cross-Entity File Delivery</h2>
      <p>Step through how an external file delivery executes in both Government and Commercial contexts.</p>
    </div>

    <div class="runner-box">
      <div class="runner-steps">
        <div class="runner-node active" id="r-step-0" onclick="setRunStep(0)">
          <div class="runner-circle">1</div>
          <span>Origin Dispatch</span>
        </div>
        <div class="runner-node" id="r-step-1" onclick="setRunStep(1)">
          <div class="runner-circle">2</div>
          <span>Intake Gate</span>
        </div>
        <div class="runner-node" id="r-step-2" onclick="setRunStep(2)">
          <div class="runner-circle">3</div>
          <span>Acceptance</span>
        </div>
        <div class="runner-node" id="r-step-3" onclick="setRunStep(3)">
          <div class="runner-circle">4</div>
          <span>Audit Archival</span>
        </div>
      </div>

      <div class="runner-display" id="runnerDisplay">
        <div style="font-size: 36px;" id="runIcon">📤</div>
        <div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 6px;" id="runTitle">Stage 1: External Origin Dispatch</h3>
          <p style="font-size: 13px; color: var(--text-muted); line-height: 1.6;" id="runDesc">
            <strong>Government:</strong> Ministry of Aviation sends statutory aviation audit report to Ministry of Finance via <code>shareFileInterTenant</code>.<br>
            <strong>Commercial:</strong> KPMG Audit Partner sends FY2026 PBC Workpapers to Client Corporation via B2B Partner Connect.
          </p>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between;">
        <button class="btn-runner-prev" style="padding: 8px 16px; border-radius: 6px; cursor: pointer;" onclick="prevRunStep()">← Previous Stage</button>
        <button class="btn-runner-next" style="padding: 8px 20px; background: #8b5cf6; border: none; border-radius: 6px; color: #fff; font-weight: 700; cursor: pointer;" onclick="nextRunStep()">Next Stage →</button>
      </div>
    </div>
  `;
}

function setRunStep(idx) {
  runIdx = idx;
  updateRunDisplay();
}

function nextRunStep() {
  if (runIdx < runSteps.length - 1) {
    runIdx++;
    updateRunDisplay();
  }
}

function prevRunStep() {
  if (runIdx > 0) {
    runIdx--;
    updateRunDisplay();
  }
}

function updateRunDisplay() {
  const s = runSteps[runIdx];
  const iconEl = document.getElementById('runIcon');
  const titleEl = document.getElementById('runTitle');
  const descEl = document.getElementById('runDesc');

  if (iconEl) iconEl.innerText = s.icon;
  if (titleEl) titleEl.innerText = s.title;
  if (descEl) descEl.innerHTML = s.desc;

  for (let i = 0; i < runSteps.length; i++) {
    const node = document.getElementById(`r-step-${i}`);
    if (node) {
      node.classList.toggle('active', i === runIdx);
    }
  }
}
