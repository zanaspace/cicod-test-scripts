/**
 * cDrive Data Store & Global State
 */

let isGov = false;
let currentFilter = 'all';
let activeDocForOtp = null;
let activeDocForShare = null;

const docs = [
  { 
    id: 1, 
    name: "Training File.doc", 
    type: "doc", 
    size: "123.00 KB", 
    owner: "Prince Zana", 
    cat: "my-drive", 
    sec: "INTERNAL", 
    secClass: "badge-internal", 
    path: "Personal Vault / Adeola's Files", 
    perms: "canRead: YES, canWrite: YES, canShare: YES" 
  },
  { 
    id: 2, 
    name: "FY2026_Audit_PBC_List.xlsx", 
    type: "sheet", 
    size: "2.4 MB", 
    owner: "KPMG External Audit", 
    cat: "team-drives", 
    sec: "CONFIDENTIAL", 
    secClass: "badge-confidential", 
    path: "Team Drives / Finance / Audit 2026", 
    perms: "canRead: YES, canWrite: NO" 
  },
  { 
    id: 3, 
    name: "MA_Purchase_Agreement_Final.pdf", 
    type: "pdf", 
    size: "8.7 MB", 
    owner: "Legal Directorate", 
    cat: "dealrooms", 
    sec: "RESTRICTED (2FA)", 
    secClass: "badge-confidential", 
    path: "Deal Rooms / Project Alpha M&A", 
    perms: "canRead: YES (Requires 2FA), canWrite: NO" 
  },
  { 
    id: 4, 
    name: "Corporate_Governance_Handbook.pdf", 
    type: "pdf", 
    size: "4.1 MB", 
    owner: "Company Secretary", 
    cat: "archive", 
    sec: "PUBLIC", 
    secClass: "badge-internal", 
    path: "Compliance Vault / Policy Manuals", 
    perms: "canRead: YES" 
  },
  { 
    id: 5, 
    name: "Customs_Bill_of_Lading_SH992.pdf", 
    type: "pdf", 
    size: "540 KB", 
    owner: "Maersk Logistics Ltd", 
    cat: "b2b-exchange", 
    sec: "B2B RECEIVED", 
    secClass: "badge-b2b", 
    path: "B2B Partner Exchange / Maersk", 
    perms: "canRead: YES, canShare: YES" 
  },
  { 
    id: 6, 
    name: "cFlow_Ticket_15747_Field_Inspection.pdf", 
    type: "pdf", 
    size: "3.2 MB", 
    owner: "cFlow Service (Adedero Cosmos)", 
    cat: "app-drives", 
    sec: "CONNECTED APP", 
    secClass: "badge-internal", 
    path: "Connected Apps / cFlow / Complaints / #15747", 
    origin: "cFlow Case #15747",
    retention: "Active Case / SLA Monitored",
    perms: "canRead: YES, canWrite: NO" 
  },
  { 
    id: 7, 
    name: "NetSuite_Vendor_Invoice_INV9821.pdf", 
    type: "pdf", 
    size: "820 KB", 
    owner: "NetSuite ERP Connector", 
    cat: "app-drives", 
    sec: "FINANCIAL RECORD", 
    secClass: "badge-confidential", 
    path: "Connected Apps / Oracle NetSuite / AP Invoices / 2026-Q3", 
    origin: "NetSuite PO #4481",
    retention: "7-Year Statutory Tax Retention",
    perms: "canRead: YES, canWrite: NO" 
  },
  { 
    id: 8, 
    name: "Salesforce_Signed_MSA_Chevron.pdf", 
    type: "pdf", 
    size: "6.5 MB", 
    owner: "Salesforce Revenue Sync", 
    cat: "app-drives", 
    sec: "RESTRICTED (2FA)", 
    secClass: "badge-confidential", 
    path: "Connected Apps / Salesforce / Deals / Energy Sector", 
    origin: "SFDC Deal #OPP-882",
    retention: "Contract Lifecycle: Active",
    perms: "canRead: YES (Requires 2FA), canWrite: NO" 
  }
];
