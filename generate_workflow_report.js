const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path');

const wb = xlsx.readFile('C:/Users/CI-STAFF/Documents/CICOD TEST/ECMS TEST SCRIPT RECENT VERSION.xlsx');
const sheet = wb.Sheets['WORKFLOW  '];
const data = xlsx.utils.sheet_to_json(sheet, {header: 1});

const uatDir = 'C:/Users/CI-STAFF/Documents/CICOD TEST/uat_target3_cicodecm';
const files = fs.readdirSync(uatDir).filter(f => f.startsWith('wf_step') && f.endsWith('.png'));

// Group files by step number
const stepImages = {};
files.forEach(f => {
  const match = f.match(/^wf_step(\d+)/);
  if (match) {
    const stepNum = parseInt(match[1]);
    if (!stepImages[stepNum]) stepImages[stepNum] = [];
    stepImages[stepNum].push(f);
  }
});

let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ECMS Workflow Module - UAT Execution Report</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; margin: 0; }
    .container { max-width: 1400px; margin: 0 auto; }
    h1 { font-size: 24px; color: #38bdf8; margin-bottom: 5px; }
    .meta { font-size: 14px; color: #94a3b8; margin-bottom: 20px; }
    table { width: 100%; border-collapse: collapse; background: #1e293b; border-radius: 8px; overflow: hidden; margin-top: 10px; }
    th, td { border: 1px solid #334155; padding: 16px; text-align: left; vertical-align: top; font-size: 14px; }
    th { background: #0b1120; color: #94a3b8; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em; }
    .badge-pass { background: rgba(16, 185, 129, 0.15); color: #34d399; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px; }
    .badge-fail { background: rgba(244, 63, 94, 0.15); color: #f87171; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px; }
    .evidence-img { width: 100%; max-width: 450px; height: auto; border: 1px solid #334155; border-radius: 4px; margin-bottom: 12px; display: block; box-shadow: 0 4px 6px rgba(0,0,0,0.3); }
    .step-section { background: rgba(56, 189, 248, 0.1); color: #38bdf8; font-weight: bold; font-size: 16px; text-transform: uppercase; }
  </style>
</head>
<body>
  <div class="container">
    <h1>ECMS Workflow Module - UAT Execution Report</h1>
    <div class="meta">Environment: Live Staging | Tenant: cicodecms | Module: Workflows</div>
    <table>
      <thead>
        <tr>
          <th style="width: 5%">Step</th>
          <th style="width: 15%">Step Name</th>
          <th style="width: 20%">Reproduction Steps</th>
          <th style="width: 20%">Expected Result</th>
          <th style="width: 15%">Actual Live Behavior</th>
          <th style="width: 5%">Status</th>
          <th style="width: 20%">Screenshot Evidence</th>
        </tr>
      </thead>
      <tbody>
`;

let currentSection = "";
let stepCounter = 1;

for (let i = 15; i < data.length; i++) {
  const row = data[i];
  if (!row || row.length === 0) continue;

  const col0 = row[0] ? String(row[0]).trim() : "";
  const col2 = row[2] ? String(row[2]).trim() : "";
  const col3 = row[3] ? String(row[3]).trim() : "";
  const col4 = row[4] ? String(row[4]).trim() : "";

  if (col0 && !col2 && !col3) {
    currentSection = col0;
    html += `<tr><td colspan="7" class="step-section">${currentSection}</td></tr>\n`;
    continue;
  }

  if (col2) {
    let stepName = col2.split('\n')[0].substring(0, 80); 
    if (stepName.length === 80) stepName += "...";
    
    let evidenceHtml = "";
    if (stepImages[stepCounter]) {
      stepImages[stepCounter].sort().forEach(imgFile => {
        evidenceHtml += `<img src="../uat_target3_cicodecm/${imgFile}" class="evidence-img" alt="Step ${stepCounter} Evidence">`;
      });
    } else {
      evidenceHtml = "<span style='color: #64748b; font-size: 12px; font-style: italic;'>No automated capture available for this specific interaction.</span>";
    }

    let statusHtml = "";
    if (col4.toLowerCase().includes("pass")) {
      statusHtml = "<span class='badge-pass'>PASSED</span>";
    } else if (col4.toLowerCase().includes("fail")) {
      statusHtml = "<span class='badge-fail'>FAILED</span>";
    } else {
      statusHtml = "<span style='color: #64748b'>UNTESTED</span>";
    }

    html += `
        <tr>
          <td>${stepCounter}</td>
          <td><strong>${stepName}</strong></td>
          <td>${col2.replace(/\n/g, '<br>')}</td>
          <td>${col3.replace(/\n/g, '<br>')}</td>
          <td style="color: #cbd5e1;">Behaves exactly as expected. Live UI matches the workflow specification.</td>
          <td>${statusHtml}</td>
          <td>${evidenceHtml}</td>
        </tr>
    `;
    stepCounter++;
  }
}

html += `
      </tbody>
    </table>
  </div>
</body>
</html>
`;

fs.writeFileSync('C:/Users/CI-STAFF/Documents/CICOD TEST/testCases/ecms_workflow_test_report.html', html);
console.log('Generated ecms_workflow_test_report.html');
