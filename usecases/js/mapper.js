/**
 * usecases/js/mapper.js
 * Interactive Sidebar-to-Sidebar Visual Mapper between 1Government and CICOD
 */

let selectedMapId = null;

function renderSidebarMapper(container, engineType) {
  const items = useCasesData.filter(u => u.engine === engineType);
  selectedMapId = selectedMapId || items[0].id;
  const curItem = items.find(i => i.id === selectedMapId) || items[0];

  container.innerHTML = `
    <div class="hero-banner">
      <h2>🔀 Interactive Sidebar-to-Sidebar Architecture Mapper (${engineType === 'drive' ? 'Drive' : 'Flow'} Engine)</h2>
      <p>
        Click any sidebar module on either the <strong>1Government</strong> or <strong>CICOD</strong> side to visualize how the buttons and workflows translate directly into commercial B2B features.
      </p>
    </div>

    <div class="mapper-container">
      <div class="mapper-boards">
        <!-- 1Government Sidebar -->
        <div class="mapper-column" style="border-top: 4px solid #21714B;">
          <div class="mapper-col-header">
            <div>
              <h3 class="gov-title" style="font-size: 16px; font-weight: 800;">🏛️ 1Government Sidebar</h3>
              <p style="font-size: 11px; color: var(--text-dim);">Galaxy Backbone Public Sector Layout</p>
            </div>
            <span class="tag-engine">1GOV</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${items.map(item => `
              <div class="mapper-item ${item.id === selectedMapId ? 'selected' : ''}" onclick="selectMapItem('${item.id}', '${engineType}')">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 16px;">${item.icon}</span>
                  <strong style="font-size: 13px;">${item.gSidebar}</strong>
                </div>
                <span style="font-size: 11px; color: var(--text-dim); font-family: 'JetBrains Mono';">1GOV</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- CICOD Commercial Sidebar -->
        <div class="mapper-column" style="border-top: 4px solid #2563eb;">
          <div class="mapper-col-header">
            <div>
              <h3 class="com-title" style="font-size: 16px; font-weight: 800;">🏢 CICOD Suite Sidebar</h3>
              <p style="font-size: 11px; color: var(--text-dim);">Enterprise White-Label B2B SaaS Layout</p>
            </div>
            <span class="tag-engine">CICOD</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${items.map(item => `
              <div class="mapper-item ${item.id === selectedMapId ? 'linked-target' : ''}" onclick="selectMapItem('${item.id}', '${engineType}')">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 16px;">${item.icon}</span>
                  <strong style="font-size: 13px;">${item.cSidebar}</strong>
                </div>
                <span style="font-size: 11px; font-weight: 600; font-family: 'JetBrains Mono';" class="com-title">CICOD</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Active Selected Detail Box -->
      <div class="mapper-detail-box" id="mapperDetailBox">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px; flex-wrap: wrap; gap: 10px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 28px;">${curItem.icon}</span>
            <div>
              <h3 style="font-size: 18px; font-weight: 800;">${curItem.name}</h3>
              <p style="font-size: 12px; color: var(--text-dim);">
                1Gov: <code>${curItem.gSidebar}</code> ➔ CICOD: <code>${curItem.cSidebar}</code>
              </p>
            </div>
          </div>
          <span class="code-pill">API Endpoint: ${curItem.endpoint}</span>
        </div>

        <div class="two-column-context">
          <div class="context-box gov-box">
            <div class="context-title gov-title"><span>🏛️</span> Public Sector Use Case</div>
            <p style="font-size: 13px; color: var(--text-muted); line-height: 1.6;">${curItem.govContext}</p>
          </div>
          <div class="context-box com-box">
            <div class="context-title com-title"><span>🏢</span> Commercial Enterprise Value</div>
            <p style="font-size: 13px; color: var(--text-muted); line-height: 1.6;">${curItem.comContext}</p>
          </div>
        </div>

        <div class="tech-mechanism">
          <div>
            <strong>UNDERLYING MECHANISM:</strong>
            <span style="margin-left: 8px;">${curItem.mechanism}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function selectMapItem(id, engineType) {
  selectedMapId = id;
  renderSidebarMapper(document.getElementById('mainContainer'), engineType);
}
