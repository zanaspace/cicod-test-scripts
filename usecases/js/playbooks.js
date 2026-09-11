/**
 * usecases/js/playbooks.js
 * Commercial Industry Playbooks Renderer
 */

function renderPlaybookView(container, pbKey) {
  const pb = playbooksData[pbKey];
  if (!pb) {
    container.innerHTML = `<div class="hero-banner"><h2>Playbook Not Found</h2></div>`;
    return;
  }

  const relatedModules = useCasesData.filter(u => u.playbooks && u.playbooks.includes(pbKey));

  container.innerHTML = `
    <div class="playbook-hero">
      <h2 style="font-size: 24px; font-weight: 800; margin-bottom: 8px;">${pb.title}</h2>
      <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">${pb.desc}</p>
    </div>

    <div class="panel-card" style="padding: 24px;">
      <h3 class="com-title" style="font-size: 16px; font-weight: 700; margin-bottom: 16px;">🚀 End-to-End Execution Flow</h3>
      <div class="playbook-steps-grid">
        ${pb.steps.map(s => `
          <div class="playbook-step-card">
            <span style="font-size: 12px; font-weight: 700;">${s.stage}</span>
            <p style="font-size: 13px; color: var(--text-muted); line-height: 1.6;">${s.action}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 16px;">
      <h3 style="font-size: 18px; font-weight: 700;">Applied Suite Modules in this Playbook</h3>
      <div class="comparison-grid">
        ${relatedModules.map(item => `
          <div class="card-usecase">
            <div class="usecase-header">
              <div class="usecase-title-box">
                <div class="usecase-icon ${item.engine === 'drive' ? 'icon-drive' : 'icon-flow'}">${item.icon}</div>
                <div>
                  <h4 style="font-size: 15px; font-weight: 700;">${item.name}</h4>
                  <p style="font-size: 12px; color: var(--text-dim);">cDrive: ${item.cName} ⇄ 1Gov: ${item.gName}</p>
                </div>
              </div>
              <span class="code-pill">${item.endpoint}</span>
            </div>
            <div class="context-box com-box">
              <div class="context-title com-title"><span>🏢</span> Commercial Application</div>
              <p style="font-size: 13px; color: var(--text-muted); line-height: 1.6;">${item.comContext}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
