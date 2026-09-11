/**
 * usecases/js/data.js
 * Master Knowledge & Mapping Data Store for 1Government vs. CICOD Enterprise
 */

// Master Data Store: 10 Drive Modules + 10 Modern Flow Modules
const useCasesData = [
  // ========================== DRIVE MODULES (10) ==========================
  {
    id: "d1",
    engine: "drive",
    name: "Personal Vault vs. My Documents",
    cName: "Personal Vault (My Drive)",
    gName: "My Documents",
    cSidebar: "Personal Vault (My Drive)",
    gSidebar: "My Documents",
    icon: "📁",
    endpoint: "document/getPersonalParentFolder",
    govContext: "Civil servants drafting internal memos, recording sensitive disciplinary notes, or working on personal promotion dossiers prior to submission.",
    comContext: "Executive, financial, or legal working drafts, private spreadsheets, scratch calculations, and sensitive HR compensation notes.",
    mechanism: "Allocates an isolated root folder token per user with default private permissions (canRead: YES, canWrite: YES, canShare: NO).",
    playbooks: ["audit", "legal"]
  },
  {
    id: "d2",
    engine: "drive",
    name: "Team Spaces vs. Departments",
    cName: "Team Drives & Spaces",
    gName: "Department Documents",
    cSidebar: "Team Drives & Spaces",
    gSidebar: "Department Documents",
    icon: "🏢",
    endpoint: "document/getDepartmentChildFolders",
    govContext: "Ministerial directorates (Finance & Accounts, PRS, Procurement) collaborating on departmental circulars and budget allocations within their unit.",
    comContext: "Corporate department drives (Finance, Legal, Product, Engineering) preventing cross-department visibility while enabling internal team collaboration.",
    mechanism: "Scoper query filtering documents by tenant unit/department ID with inherited role-based group permissions.",
    playbooks: ["audit", "supply", "health"]
  },
  {
    id: "d3",
    engine: "drive",
    name: "Deal Rooms & Portals vs. Collaborations & Classified Masking",
    cName: "Deal Rooms & Client Portals",
    gName: "Collaborations & Classified Masking",
    cSidebar: "Deal Rooms & Client Portals",
    gSidebar: "Collaborations",
    icon: "💼",
    endpoint: "document/findCollaboratedFiles / 2FA",
    govContext: "Inter-ministerial probe task forces, classified defense procurement bids, and multi-agency joint operations requiring code names and third-party clearance.",
    comContext: "M&A due diligence, investor data rooms, and external audit workpaper portals with masked code names, watermarked viewing, and zero-trust OTP.",
    mechanism: "Combines alias masking (code name), secondary encryption password, third-party approval clearance, and mandatory 2FA OTP.",
    playbooks: ["legal", "board", "audit"]
  },
  {
    id: "d4",
    engine: "drive",
    name: "Inbound Reception Desk vs. Files Pending Acceptance",
    cName: "Inbound Reception Desk",
    gName: "Files Pending Acceptance",
    cSidebar: "Inbound Reception Desk",
    gSidebar: "Files Pending Acceptance",
    icon: "📥",
    endpoint: "document/findFilesPendingAcceptance",
    govContext: "Cross-ministerial file dispatches arriving at the Permanent Secretary's registry, quarantined until formally accepted into official records.",
    comContext: "Client document intake and supplier delivery gate: auditors verify and accept client trial balances; logistics coordinators accept shipping manifests.",
    mechanism: "Inbound transfer queue holding external files in 'SHARED' quarantine until recipient triggers accept (moves to drive) or reject (returns with reason).",
    playbooks: ["audit", "supply", "health"]
  },
  {
    id: "d5",
    engine: "drive",
    name: "B2B Partner Exchange vs. Inter-MDA Sharing",
    cName: "B2B Partner Exchange",
    gName: "Inter-MDA Sharing",
    cSidebar: "B2B Partner Exchange",
    gSidebar: "Inter-MDA Sharing",
    icon: "🤝",
    endpoint: "document/shareFileInterTenant",
    govContext: "Direct cross-tenant document routing between federal ministries (e.g. Ministry of Finance transmitting statutory frameworks to Ministry of Aviation).",
    comContext: "Direct company-to-company extranet file transfers (e.g. manufacturer to offshore supplier) eliminating insecure email zip attachments.",
    mechanism: "Cryptographic tenant-to-tenant dispatch verifying both registered tenant identities and logging delivery receipts.",
    playbooks: ["supply", "legal", "audit"]
  },
  {
    id: "d6",
    engine: "drive",
    name: "Company Library vs. General Documents",
    cName: "Company Library & Policies",
    gName: "General Documents",
    cSidebar: "Company Library",
    gSidebar: "General Documents",
    icon: "📚",
    endpoint: "document/getGeneralFolder",
    govContext: "Civil service-wide public service rules (PSR), circulars, establishment notices, and official government gazettes read-accessible to all personnel.",
    comContext: "All-hands company handbook, standard operating procedures (SOPs), brand assets, code of conduct, and corporate benefits documentation.",
    mechanism: "Global tenant-wide read-only folder partition automatically mapped to every active employee directory.",
    playbooks: ["board", "health"]
  },
  {
    id: "d7",
    engine: "drive",
    name: "Connected App Drives vs. Application Documents",
    cName: "Connected ERP/CRM Drives",
    gName: "Application Documents",
    cSidebar: "Connected Apps Drive",
    gSidebar: "Application Documents",
    icon: "🔌",
    endpoint: "document/getApplicationFolders",
    govContext: "Automated storage containers linked to specialized civil service apps: GovMail attachments, PMS appraisal dossiers, and LMS training certificates.",
    comContext: "Automated synchronization pipelines for Salesforce, QuickBooks, HubSpot, and ERP systems to store invoices, signed POs, and contract receipts.",
    mechanism: "System service account token mapping external application UUIDs directly to structured document trees.",
    playbooks: ["supply", "audit"]
  },
  {
    id: "d8",
    engine: "drive",
    name: "Compliance Vault vs. Historic Files",
    cName: "Compliance Vault / Cold Archive",
    gName: "Historic Files",
    cSidebar: "Compliance Vault",
    gSidebar: "Historic Files",
    icon: "📜",
    endpoint: "document/getPolicyFolder",
    govContext: "Long-term read-only preservation of national gazettes, civil service commission decrees, and retired officer pension archives.",
    comContext: "SOC 2, ISO 27001, IRS, and NDPR regulatory legal hold: locking audited financials, tax filings, and contracts against deletion.",
    mechanism: "Read-only policy container with immutable audit retention and legal-hold preservation locks.",
    playbooks: ["board", "audit", "legal"]
  },
  {
    id: "d9",
    engine: "drive",
    name: "Enterprise Audit Logs vs. Civil Service Audit Log",
    cName: "Enterprise SOC 2 Audit Logs",
    gName: "Civil Service Audit Log",
    cSidebar: "Enterprise Audit Logs",
    gSidebar: "Audit Log",
    icon: "🛡️",
    endpoint: "document/auditTrail",
    govContext: "Disciplinary accountability: investigating which civil servant viewed, downloaded, or leaked an unreleased executive memo or policy.",
    comContext: "SOC 2 and NDPR compliance telemetry: forensic proof that customer data and PII were accessed strictly on a verified need-to-know basis.",
    mechanism: "Append-only chronological logging of timestamp, user ID, tenant ID, action (READ/WRITE/2FA), and IP signature.",
    playbooks: ["audit", "health", "legal"]
  },
  {
    id: "d10",
    engine: "drive",
    name: "Retention Recovery Bin vs. Trash",
    cName: "Retention & Recovery Bin",
    gName: "Trash",
    cSidebar: "Retention & Recovery Bin",
    gSidebar: "Trash",
    icon: "🗑️",
    endpoint: "document/findFilesInTrash",
    govContext: "Protects against accidental loss of official public records by requiring supervisory confirmation before permanent purge.",
    comContext: "30/60/90-day anti-ransomware enterprise recovery bin preserving folder tokens and permissions for instant rollback.",
    mechanism: "Soft-delete quarantine state (fileDisplayStatus = TRASH) with one-click folder tree restoration.",
    playbooks: ["audit", "legal"]
  },

  // ========================== FLOW MODULES (10 MODERN ECMS MODULES) ==========================
  {
    id: "f_overview",
    engine: "flow",
    name: "Mission Control Cockpit vs. Executive Overview",
    cName: "Mission Control Cockpit",
    gName: "Executive Overview",
    cSidebar: "Mission Control Cockpit",
    gSidebar: "Overview",
    icon: "🔲",
    endpoint: "/ecms/overview",
    govContext: "Civil service executive landing page: instant real-time KPI cards (My Workflows, Tasks Assigned To Me, Tasks Awaiting My Approval, My Notifications) and direct queue cards.",
    comContext: "Executive home cockpit: single-pane situational awareness tracking team queues, personal pending approvals, and active customer pipeline status.",
    mechanism: "Real-time consolidated telemetry aggregator polling assigned ticket counts, approval gates, unread mentions, and workflow health metrics.",
    playbooks: ["board", "audit", "health"]
  },
  {
    id: "f1",
    engine: "flow",
    name: "Executive KPI Dashboard vs. Ministerial Command Center",
    cName: "Executive KPI Dashboard",
    gName: "Ministerial Command Dashboard",
    cSidebar: "Executive KPI Dashboard",
    gSidebar: "Dashboard",
    icon: "📊",
    endpoint: "/ecms/dashboard",
    govContext: "Permanent Secretaries and Directors monitor real-time file velocity, SLA bottlenecks, active ministerial dockets, and officer turnaround times across directorates.",
    comContext: "C-suite executives and operations managers monitor active business pipeline, open support cases, SLA breach risks, and staff throughput.",
    mechanism: "Aggregates real-time ticket counters, 48h/96h breach heatmaps, and resource utilization metrics across departments.",
    playbooks: ["board", "audit", "health"]
  },
  {
    id: "f2",
    engine: "flow",
    name: "B2B Requisitions vs. Inter-MDA Requests",
    cName: "B2B Cross-Company Requisitions",
    gName: "Inter-MDA Requests",
    cSidebar: "B2B Requisitions",
    gSidebar: "Requests",
    icon: "📄",
    endpoint: "/ecms/requests",
    govContext: "Formal inter-agency statutory requests between federal ministries (e.g. Ministry of Solid Minerals requesting environmental clearance from Ministry of Environment).",
    comContext: "Vendor quotation requests, joint-venture partner requisitions, and subcontractor work authorizations with persistent reference tracking.",
    mechanism: "Inter-entity request routing generating mutual tracking IDs with status updates shared across organizations.",
    playbooks: ["supply", "audit", "board"]
  },
  {
    id: "f3",
    engine: "flow",
    name: "Business Process Tasks vs. Public Service Tasks",
    cName: "Business Process Tasks & Work Orders",
    gName: "Public Service Tasks & Work Orders",
    cSidebar: "Tasks & Work Orders",
    gSidebar: "Tasks",
    icon: "📑",
    endpoint: "/ecms/tasks",
    govContext: "Specific assignments, public works inspections, committee tasks, and citizen service requests routed through approval queues.",
    comContext: "Enterprise task orchestration: IT support tickets, client onboarding cases, and compliance audits with stage checklists and assignees.",
    mechanism: "Dynamic queue classification (queueType/index) routing payloads to qualified team members with capacity checks.",
    playbooks: ["supply", "health"]
  },
  {
    id: "f4",
    engine: "flow",
    name: "Corporate Memos & Minuting vs. Civil Service Minuting",
    cName: "Corporate Memos & Digital Minuting",
    gName: "Civil Service Electronic Memos",
    cSidebar: "Digital Memos & Approvals",
    gSidebar: "Memos",
    icon: "📝",
    endpoint: "/ecms/memos",
    govContext: "Replaces physical paper file jackets: desk officers, assistant directors, and permanent secretaries append chronological minute remarks and endorsements.",
    comContext: "Internal corporate approvals: formal capital expenditure requests, hiring requisitions, and multi-executive sign-off threads without lost emails.",
    mechanism: "State-tracked minute ledger appending immutable author, timestamp, and endorsement notes to the parent memo.",
    playbooks: ["board", "audit", "legal"]
  },
  {
    id: "f5",
    engine: "flow",
    name: "Project Squads & Pods vs. Inter-Ministerial Workgroups",
    cName: "Project Teams & Workgroups",
    gName: "Inter-Ministerial Workgroups",
    cSidebar: "Project Teams & Pods",
    gSidebar: "Workgroups",
    icon: "👥",
    endpoint: "/ecms/workgroups",
    govContext: "Cross-ministerial probe task forces, ad-hoc committee panels, and inter-agency working groups collaborating on designated federal mandates.",
    comContext: "Cross-functional client engagement squads, deal teams, product strike squads, and audit teams sharing task queues and documents.",
    mechanism: "Multi-user collaborative workspace scoping permissions and memo visibility across specific group members.",
    playbooks: ["board", "legal", "audit"]
  },
  {
    id: "f7",
    engine: "flow",
    name: "CRM Client Directory vs. Civil Service Contacts",
    cName: "Enterprise Client & Partner Directory",
    gName: "Inter-Agency & Official Directory",
    cSidebar: "Client & Partner Directory",
    gSidebar: "Contacts",
    icon: "👤",
    endpoint: "/ecms/contacts",
    govContext: "Official directory of accredited contractors, diplomatic corps, external regulators, and civil servant departmental contacts.",
    comContext: "Corporate B2B CRM customer registry storing client accounts, stakeholder emails, phone numbers, and historical ticket histories.",
    mechanism: "Indexed relational directory linking contact UUIDs directly to all associated memos, work orders, and requisitions.",
    playbooks: ["audit", "supply", "health"]
  },
  {
    id: "f_users",
    engine: "flow",
    name: "Org & Agile Pods vs. Users & Ministerial Departments",
    cName: "Organization, Divisions & Pods",
    gName: "Users (Departments Directory)",
    cSidebar: "Users › Departments & Pods",
    gSidebar: "Users › Departments",
    icon: "👤",
    endpoint: "/ecms/users/departments",
    govContext: "Civil service establishment tree: departmental directorates (Finance, Works, PRS, Procurement), line manager minute routing chains, and approval delegation.",
    comContext: "Agile matrix organization: functional departments + cross-functional Product Pods/Deal Teams, tiered CapEx approval thresholds (<₦1M, <₦10M, >₦10M), and automated OOO delegation.",
    mechanism: "Hierarchical relational tree mapping ministerial directorates, Line Manager delegation rules, and value-based approval authorization matrices.",
    playbooks: ["board", "audit", "legal"]
  },
  {
    id: "f_resources",
    engine: "flow",
    name: "Workforce & Capacity Planner vs. Technical Resources",
    cName: "Workforce & Capacity Planner",
    gName: "Resources (Type, Shift, Schedule)",
    cSidebar: "Resources › Roles, Shifts & Schedule",
    gSidebar: "Resources › Type, Shift, Schedule",
    icon: "🛠️",
    endpoint: "/ecms/resources",
    govContext: "Field workforce governance: Resource Type (civil/electrical skills), Resource Shift (core day, after-hours, 24/7 emergency), and Resource Schedule (Gantt capacity rostering).",
    comContext: "Enterprise resource orchestration: billable role margins ($/hr), 24/7 Follow-the-Sun SLA shift handoffs (EMEA/Americas/APAC), and AI-powered Smart Dispatch matching certified skills and workload.",
    mechanism: "Multi-dimensional capacity engine computing real-time shift availability, skill license tags (COREN/NIQS), and active ticket load to optimize assignment.",
    playbooks: ["supply", "health"]
  },
  {
    id: "f8",
    engine: "flow",
    name: "Audit Telemetry & TAT Analytics vs. Civil Service Reports",
    cName: "Enterprise Analytics, TAT & Audit Logs",
    gName: "Civil Service Reports & Audit Log",
    cSidebar: "Analytics, TAT & Audit Logs",
    gSidebar: "Reports",
    icon: "📈",
    endpoint: "/ecms/reports",
    govContext: "Ministerial performance reviews: auditing Turnaround Time (TAT) on files, tracking officer memo queues, and monitoring compliance logs.",
    comContext: "SLA compliance reporting, employee billable hour utilization, customer ticket resolution TAT, and SOC 2 forensic audit trails.",
    mechanism: "Time-series analytics engine querying ticket duration, stage timestamps, and user action audit trails.",
    playbooks: ["audit", "health", "supply"]
  }
];

// Playbook definitions
const playbooksData = {
  audit: {
    title: "📊 Accounting, Audit & Tax Advisory (PBC Workpaper Management)",
    desc: "Transforming manual email-heavy client intake into a secure, zero-trust PBC (Provided by Client) workpaper vault.",
    steps: [
      { stage: "Step 1: Client Engagement Setup", action: "Partner creates dedicated Client Workspace with strict folder permissions (canRead/canWrite only within client upload subfolder)." },
      { stage: "Step 2: Intake via Inbound Reception", action: "Client uploads trial balances and payroll ledgers; external files land in 'Inbound Reception Desk' awaiting senior auditor verification." },
      { stage: "Step 3: Verification & Acceptance", action: "Audit senior inspects the trial balance preview and clicks 'Accept', automatically moving the file into the verified PBC folder." },
      { stage: "Step 4: Audit Minuting & Sign-Off", action: "cFlow memo initiated for technical review; partner and manager append digital minute endorsements." },
      { stage: "Step 5: Immutable Legal Hold", action: "Completed audit pack locked into Compliance Vault with 7-year regulatory retention lock." }
    ]
  },
  legal: {
    title: "⚖️ Legal M&A & Private Equity (Virtual Deal Rooms)",
    desc: "Replacing expensive proprietary Virtual Data Rooms (VDRs) with self-hosted cDrive Deal Rooms featuring code-name masking and 2FA.",
    steps: [
      { stage: "Step 1: Code-Name Deal Creation", action: "Acquisition target masked under code name (e.g. 'PROJECT TITAN') to protect market confidentiality." },
      { stage: "Step 2: Granular Access Restrictions", action: "Bidder legal counsel granted view-only permissions (canRead: YES, canWrite: NO, canShare: NO) with dynamic watermark." },
      { stage: "Step 3: Zero-Trust Step-up OTP", action: "Bidders opening sensitive disclosures or IP contracts must enter a 6-digit OTP sent to their mobile/email." },
      { stage: "Step 4: Real-time Forensic Telemetry", action: "Enterprise audit log captures every document open, print attempt, and session duration for deal compliance." }
    ]
  },
  supply: {
    title: "🚢 Supply Chain, Logistics & Maritime Clearance",
    desc: "Direct B2B tenant-to-tenant document routing between shipping lines, customs brokers, and importers without untracked email attachments.",
    steps: [
      { stage: "Step 1: Commercial Invoice Dispatch", action: "Foreign manufacturer dispatches shipping manifest and bill of lading via 'B2B Partner Exchange'." },
      { stage: "Step 2: Customs Broker Intake", action: "Files arrive in broker's Inbound Reception Desk; clearing agent accepts files directly into the active shipment case." },
      { stage: "Step 3: cFlow Customs Clearance Ticket", action: "Intake form spawns clearance work order; 48h SLA watchdog ensures demurrage fees are prevented." },
      { stage: "Step 4: Warehouse Stock Verification", action: "Fulfillment bridge verifies incoming container serials against ERP inventory before gate pass release." }
    ]
  },
  health: {
    title: "🏥 Healthcare & HMO Claims Adjudication",
    desc: "End-to-end HIPAA/NDPR compliant medical dossier transmission between hospitals and insurance underwriters.",
    steps: [
      { stage: "Step 1: Patient Referral Intake", action: "Clinic submits diagnostic scans and treatment requests via encrypted Dynamic Web Forms." },
      { stage: "Step 2: PII Sensitivity Tagging", action: "cDrive automatically classifies patient file as 'Restricted / PII', requiring step-up 2FA for insurance adjudicators." },
      { stage: "Step 3: Medical Director Minuting", action: "Chief Medical Officer reviews claim in cFlow and appends digital authorization minute." },
      { stage: "Step 4: Archival & Audit Trail", action: "Claim authorization permanently logged to tamper-proof audit trail for healthcare regulatory audits." }
    ]
  },
  board: {
    title: "🏛️ Corporate Secretariats & Virtual Boardrooms",
    desc: "Secure distribution and executive sign-off on board packs, committee resolutions, and statutory filings.",
    steps: [
      { stage: "Step 1: Board Pack Assembly", action: "Company Secretary compiles committee papers and financial packs into a dedicated Board Workspace." },
      { stage: "Step 2: Secure Non-Executive Access", action: "Independent Directors access read-only documents with dynamic screen watermarks and restricted download." },
      { stage: "Step 3: Digital Board Resolutions", action: "cFlow electronic memos capture director votes, signature endorsements, and minute remarks in real time." },
      { stage: "Step 4: Compliance Vault Preservation", action: "Approved AGM minutes and board resolutions permanently archived in read-only Compliance Vault." }
    ]
  }
};

// 4-Stage Interactive Cross-Entity Scenario Steps
const runSteps = [
  {
    icon: "📤",
    title: "Stage 1: External Origin Dispatch",
    desc: "<strong>Government:</strong> Ministry of Aviation sends statutory aviation audit report to Ministry of Finance via <code>shareFileInterTenant</code>.<br><strong>Commercial:</strong> KPMG Audit Partner sends FY2026 PBC Workpapers to Client Corporation via B2B Partner Connect."
  },
  {
    icon: "📥",
    title: "Stage 2: Arrival at Reception Intake Gate",
    desc: "<strong>Government:</strong> Lands in Permanent Secretary's 'Files Pending Acceptance' queue.<br><strong>Commercial:</strong> Enters the Client's 'Inbound Document Reception Desk' without contaminating local drives until verified."
  },
  {
    icon: "✓",
    title: "Stage 3: Review & Explicit Acceptance",
    desc: "<strong>Government:</strong> Desk officer verifies security classification and clicks 'Accept File'.<br><strong>Commercial:</strong> Finance Manager reviews workpaper preview and clicks 'Accept into Audit Team Drive'."
  },
  {
    icon: "📜",
    title: "Stage 4: Immutable Cryptographic Archival",
    desc: "<strong>Government:</strong> File moves to Historic Files vault; logged to Civil Service Audit Trail.<br><strong>Commercial:</strong> File saved in Compliance Cold Vault; logged to SOC 2 / NDPR immutable telemetry."
  }
];
