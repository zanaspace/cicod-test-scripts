# 1Government (1Gov) ➔ CICOD Cloud (cDrive & cFlow)
## White-Labeling & Commercial Transformation Blueprint

---

### Executive Overview
This document outlines the strategic, architectural, and naming transformation required to repurpose the **1Government (1Gov)** platform (developed with Galaxy Backbone) into a commercial, enterprise-grade B2B SaaS suite: **CICOD Drive (`cDrive`)** and **CICOD Workflow (`cFlow`)**.

The interactive architecture and live UI prototype can be viewed in [gov_architecture.html](file:///c:/Users/CI-STAFF/Documents/CICOD/gov_architecture.html).

---

## 1. Core Enterprise Use Cases (Beyond Government)

1. **Accounting, Audit & Tax Advisory (PBC Workpaper Management)**
   * **Problem:** External audit firms struggle with unstructured email exchanges of client financial records and trial balances.
   * **cDrive Edge:** Audit firms set up client workspaces. Inbound client files arrive in the **Inbound Reception Desk** (`files-pending-acceptance`), where seniors must formally accept or query each workpaper before it enters the engagement drive.

2. **Legal M&A & Private Equity (Virtual Deal Rooms)**
   * **Problem:** Traditional Virtual Data Rooms (VDRs) charge exorbitant per-page or per-deal fees.
   * **cDrive Edge:** Self-hosted deal rooms with granular permissions (`canRead: YES`, `canWrite: NO`, `canShare: NO`), dynamic on-screen watermarking, and **Zero-Trust Step-up 2FA** on sensitive acquisition disclosures.

3. **Supply Chain, Logistics & Maritime Clearance (B2B Cross-Company Ingestion)**
   * **Problem:** Multi-party shipping documentation (bills of lading, customs releases, inspection certs) moves across disparate email chains.
   * **cDrive Edge:** Direct cross-company transfer (`shareFileInterTenant`) between shipping lines, customs brokers, and importers with tamper-proof delivery receipts.

4. **Healthcare & HMO Claims Adjudication**
   * **Problem:** Patient diagnostic files and treatment authorizations risk leakage across unencrypted channels.
   * **cDrive Edge:** Dedicated patient dossiers protected with *Restricted (PII)* classifications requiring SMS/authenticator OTP step-up verification before viewing.

5. **Corporate Secretariats & Virtual Boardrooms**
   * **Problem:** Board of Directors papers and resolutions require strictly controlled access for non-executive directors.
   * **cDrive Edge:** Dedicated Board Drive with automatic archival into an immutable **Compliance Cold Vault**.

---

## 2. Terminology & Naming Conversion Matrix

| Original Government Term | New Commercial / White-Label Term | Technical & UX Rationale |
| :--- | :--- | :--- |
| **`GovDrive` (`cde`)** | **`CICOD Drive` / `cDrive`** | Clean, modern enterprise brand identity. |
| **`Gov ECMS` (`wfm`)** | **`CICOD Workflow` / `cFlow`** | Enterprise process orchestration and memo automation. |
| **`MDA / Tenant`** | **`Organization / Workspace`** | Standard multi-tenant B2B terminology. |
| **`Inter-MDA Sharing`** | **`B2B Partner Exchange / Partner Connect`** | Cross-company document exchange between suppliers, clients, and partners. |
| **`Files Pending Acceptance`** | **`Inbound Reception Desk / Intake Queue`** | Professional intake mechanism to inspect and accept/decline external files. |
| **`Department Documents`** | **`Team Drives / Department Spaces`** | Familiar terminology across corporate units (Finance, HR, Legal). |
| **`My Documents`** | **`Personal Vault / My Drive`** | Private user space for individual drafts. |
| **`Historic Files`** | **`Compliance Vault / Legal Cold Storage`** | Long-term archival for regulatory retention and audits. |
| **`General Documents`** | **`Company Library / Policy Hub`** | All-hands corporate resources, SOPs, and handbooks. |
| **`Application Documents`** | **`Connected App Drives`** | Automated folder sync with CRM, ERP, and billing systems. |
| **`Classification (Restricted, Secret)`** | **`Data Sensitivity Labels (Public, Internal, Confidential, Restricted / PII)`** | Aligns with ISO 27001, SOC 2, and NDPR data classifications. |
| **`GovOTP / 2FA Validation`** | **`Zero-Trust Step-up OTP`** | Enterprise 2FA via authenticator apps or corporate email OTP. |
| **`Permanent Secretary / Director`** | **`Managing Director / Executive Approver`** | Commercial management hierarchy. |

---

## 3. UI & Sidebar Architecture (Dedicated Sidebar Per Module)

The new interface adopts a **dual-tier sidebar architecture**:

### 1. Global Left App Rail (Slim Icons)
* 📁 **cDrive (Document Cloud)**
* 📝 **cFlow (Business Workflows & Memos)**
* 🌐 **Architecture & Blueprint**
* 📥 **Quick Intake Desk** (With live badge for pending inbound files)
* 💼 **Deal Rooms & Portals**
* ⚙️ **Workspace Settings & Telemetry**

### 2. Contextual Module Sidebar (Dedicated per Module)

#### When cDrive is Active:
* **Header:** Workspace selector (`Acme Global Workspace`) + `+ New Document / Folder` button
* **Workspaces:**
  - `All Files & Folders`
  - `Personal Vault (My Drive)`
  - `Team Drives & Spaces` (Finance, Legal, HR, Operations)
  - `Deal Rooms & Client Portals` (Project Alpha M&A)
* **B2B & External:**
  - `Inbound Reception Desk` (With badge count for unreviewed external documents)
  - `B2B Partner Exchange` (Direct cross-company channels)
* **Governance:**
  - `Compliance Vault / Cold Archive`
  - `Enterprise Audit Logs`
  - `Retention & Recovery Bin`
* **Storage Meter:** `24.5 GB of 100 GB used` (MinIO / S3 Encrypted)

#### When cFlow is Active (Modern Next.js /ecms/ Structure):
* **Header:** Workspace selector + `+ Quick Actions` / `+ New Memo`
* **Executive & Analytics:**
  - `🔲 Overview` (4 Live KPI cards, My Workflows grid, Starred/All Task filters)
  - `📊 Dashboard` (SLA watchdog 48h/96h matrix, workflow pipeline, capacity)
* **Intake & Execution:**
  - `📄 Requests` (Inbound B2B requisitions & statutory intake gate)
  - `📑 Tasks` (Operational tickets, line manager task approvals, checklists)
  - `📝 Memos` (Executive digital minuting, immutable trail, drafts, reviews)
* **Collaboration & People:**
  - `👥 Workgroups` (Inter-departmental project squads & deal teams)
  - `👤 Contacts` (Enterprise CRM directory, accredited vendor registry)
  - `👤 Users` (`Departments`) ➔ `Organization, Divisions & Pods` (Ministerial departments / commercial matrix pods, tiered CapEx/OpEx approval matrix, automated OOO delegation)
  - `🛠️ Resources` (`Resource Type`, `Resource Shift`, `Resource Schedule`) ➔ `Workforce & Capacity Planner` (Billable roles & margins, 24/7 Follow-the-Sun SLA shifts, AI Smart Dispatch & Gantt capacity balancing)
* **Governance:**
  - `📈 Reports` (Turnaround Time analytics, officer backlog audits, forensic audit logs)
* **Footer:**
  - `Help & Support` (Get Support, Start Tour)
  - `Settings` (Preferences, Log out)

---

## 4. Technical Migration: Mapping Existing APIs to cDrive Features

| Existing Backend API in `cde` | New Commercial Feature in `cDrive` | Implementation Note |
| :--- | :--- | :--- |
| `document/shareFileInterTenant` | **B2B Secure Dispatch** | Sends documents across registered commercial tenants. |
| `document/findFilesPendingAcceptance` | **Document Intake Reception Desk** | Fetches external files awaiting formal acceptance. |
| `document/acceptFileSharing` / `reject` | **Accept / Decline Inbound Files** | Moves accepted files into selected Team Drive; logs audit record. |
| `document/addClassificationToFile` | **Data Loss Prevention (DLP)** | Tags files with enterprise sensitivity labels. |
| `document/initiate2FAEmail` / `validate` | **Zero-Trust Step-up OTP** | Prompts for 6-digit OTP before decrypting confidential records. |
| `document/getAvailableVersions` | **Smart Version History** | Shows revision diffs and one-click rollback. |
| `document/getApplicationFolders` | **Connected ERP / CRM Folders** | Automatically syncs invoice attachments and ticket files. |
| `document/auditTrail` | **SOC 2 / NDPR Audit Log** | Immutable event timeline. |
| `document/getObjectDownloadUrl/v2` | **S3 Pre-signed Streaming** | Direct-to-browser streaming via expiring HMAC-SHA256 tokens. |

---

## 5. Comprehensive Review of 1Gov Drive Sharing Capabilities & Streamlined B2B Architecture

### 5.1 Deep-Dive: 1Gov Drive (`cde`) Sharing Architecture

Reverse-engineering the live 1Government Next.js client bundles (`9534-*.js`, `3403-*.js`) and API payloads on `convergenceondemand.com` reveals five distinct sharing modalities and security layers:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          1GOV DRIVE (CDE) SHARING MODES                         │
├────────────────────────┬──────────────────────────┬─────────────────────────────┤
│ 1. Intra-MDA Sharing   │ 2. Cross-MDA / Tenant    │ 3. Link Sharing Gateway     │
├────────────────────────┼──────────────────────────┼─────────────────────────────┤
│ • document/shareFile   │ • #share-multi-tenant UI │ • document/allowLinkSharing │
│ • document/shareFolder │ • document/getTenants    │ • AUTHENTICATED (5-Day Exp) │
│ • canRead: "YES"       │ • shareFileInterTenant   │ • UNAUTHENTICATED (Public)  │
│ • canWrite: "YES"|"NO" │ • Pending Acceptance     │ • Mandatory 5-row Reason    │
│ • canShare: "YES"|"NO" │   quarantine gate        │ • /file-download?fileToken= │
└────────────────────────┴──────────────────────────┴─────────────────────────────┘
                                  │
                                  ▼
        ┌────────────────────────────────────────────────────────┐
        │ 4. Classification & Zero-Trust Security Controls       │
        ├────────────────────────────────────────────────────────┤
        │ • Top Secret (TS) / Secret (S) enforces View-Only mode │
        │ • document/initiate2FAEmail & validate2FACode step-up  │
        │ • Integrated E-Sign iframe (/esign/cde-sign)           │
        └────────────────────────────────────────────────────────┘
```

#### Detailed Findings on 1Gov Drive:
1. **Intra-Tenant Sharing**:
   * Dispatches to `document/shareFile` and `document/shareFolder`.
   * Accepts an array `shareWithEmail: []` and binary permissions `canRead: "YES"`, `canWrite: "YES"|"NO"`, `canShare: "YES"|"NO"`.
2. **Cross-MDA / Inter-Tenant Sharing**:
   * Activated via a checkbox toggle (`#share-multi-tenant`) labeled *"Other MDA & Service Provider?"*.
   * Queries `document/getTenants` to list government agencies, then `document/getTenantUsers/{tenantId}` to resolve recipients.
   * Dispatches via `document/shareFileInterTenant` with payload `{ fileToken, shareWithOthers: [{ email, cicodNumber, tenantId }], canRead, canWrite, canShare }`.
3. **Inbound Quarantine Gate (`findFilesPendingAcceptance`)**:
   * Files shared across agencies do **not** directly appear in the recipient's main drive.
   * Instead, the client polls `document/findFilesPendingAcceptance` (every 60 seconds).
   * Files sit in quarantine until the recipient explicitly executes `document/acceptFileSharing/{token}` or `document/rejectFileSharing/{token}`.
4. **Link Sharing**:
   * Controlled by `document/allowLinkSharing`, `updateSharingType`, and `removeLinkSharing`.
   * Supports two link classes:
     - `AUTHENTICATED`: Strictly hardcoded to a 5-day expiration window (`shareDetails.linkExpirationDate`); requires 1Gov login.
     - `UNAUTHENTICATED`: Public download token via `/file-download?fileToken={token}` and `document/getNonExpiryFileDownloadURL`.
   * Enforces a mandatory justification textarea (`#link-sharing-reason`, `rows="5"`) before enabling link generation.
5. **Classifications & Policy Locks**:
   * High-classification files (`TS` Top Secret, `S` Secret) disable the Editor radio button: `disabled: "TS" === w || "S" === w`.
   * Restricted documents require two-factor step-up authentication (`document/initiate2FAEmail` / `validate2FACode`).

---

### 5.2 Friction Points & Limitations in the Government UX

| 1Gov Friction Point | Why It Fails in Modern B2B SaaS |
| :--- | :--- |
| **Clunky "Other MDA" Checkbox** | Users must manually tick a small checkbox to reveal external sharing fields. In commercial environments, inviting external clients or vendors should be natural and context-aware. |
| **Rigid 5-Day Expiration** | Commercial deal rooms and client audits need flexible expiry windows (e.g. 24 hours for M&A, 30 days for quarterly tax audits, or permanent links with revoke tokens). |
| **Mandatory 5-Line Justification Box** | Requiring users to type a 5-line essay before sharing a link introduces severe friction in fast-paced corporate workflows. |
| **Binary Roles ("Editor" vs "View Only")** | Lacks modern enterprise collaborative tiers such as **Reviewer** (can comment and markup without modifying text) and **Protected Viewer** (dynamic watermark preventing leaks). |
| **No Domain or Password Link Guards** | Link sharing lacks modern enterprise security controls like "Only people with @client.com domain" or password-protected public shares. |

---

### 5.3 The Streamlined Commercial B2B Architecture in CICOD Drive (`cDrive`)

In `cDrive` ([cdrive.html](file:///c:/Users/CI-STAFF/Documents/CICOD/cdrive.html)), we redesigned document sharing into a modern, unified modal with 3 streamlined tabs:

#### 1. Tab 1: Workspace Members (`👥 Workspace Members`)
* **Quick Auto-complete**: Fast email/name input for internal colleagues.
* **4-Tier Granular Permissions**:
  - **Viewer**: Read-only with dynamic on-screen session watermarking.
  - **Reviewer**: Comments, suggestion annotations, and track-changes markup.
  - **Editor**: Full editing, collaborative sync, and sharing delegation.
  - **Co-Owner**: Manage security classification and delete lifecycle.

#### 2. Tab 2: B2B Partner / Client Extranet (`🏢 B2B Partner / Client`)
* Replaces the confusing "Other MDA" checkbox with dedicated **B2B Extranet Dispatch**.
* Directly leverages the existing backend power of `document/shareFileInterTenant`.
* **Partner Tenant Selector**: Select external partner organization (e.g., *PwC Advisory*, *Maersk Logistics*, *KPMG Audit*).
* **Business Purpose Presets**: Replaces the tedious 5-line text box with fast, audit-ready purpose dropdowns:
  - *PBC Audit Workpapers Intake*
  - *Virtual Deal Room (VDR) M&A Due Diligence*
  - *Customs & Maritime Bill of Lading Clearance*
  - *Cross-Entity Contract Review & Sign-Off*
* **Inbound Quarantine Preservation**: Retained as a premier enterprise security feature. Files sent to partner organizations land in their **Inbound Reception Desk** for formal verification before entering production drives.

#### 3. Tab 3: Secure Link Sharing (`🔗 Secure Link`)
* Replaces the rigid 5-day restriction with customizable controls:
  - **Configurable Expiry**: 24 Hours (M&A Deal Room), 7 Days (Standard), 30 Days (Client Audit), or No Expiration.
  - **Security Protocols**:
    * *SSO Domain Verified Only* (restricts access to verified partner corporate email domains).
    * *Password Protected* (generates high-entropy passcode for external contractors).
    * *Watermarked Public Link* (for broad distribution with leakage deterrence).
  - One-click copy with instant clipboard confirmation and expiring S3 pre-signed tokens.

---

### 5.4 Live Implementation Reference
* **Interactive UI & Share Modal**: [cdrive.html](file:///c:/Users/CI-STAFF/Documents/CICOD/cdrive.html) (Click `📤 Share` on any document card or from within the detail drawer).
* **Integrated Suite Preview**: [gov_architecture.html](file:///c:/Users/CI-STAFF/Documents/CICOD/gov_architecture.html) (Switch between Commercial `cDrive` and Government `GovDrive` modes).

---

## 6. Application Documents Module: Architecture & Enterprise Tailoring

### 6.1 Purpose in 1Gov Cloud
1Gov Cloud contains satellite operational systems:
1. **ECMS (Electronic Content Management System)**: Ministerial memos, circulars, and departmental memos.
2. **WFM (Workforce Management)**: Service requests, complaints, maintenance tickets, and meter inspections.

The **"Application Documents"** module solves the challenge of centralizing attachments generated in these applications into GovDrive automatically without forcing civil servants to manually copy files between systems.

### 6.2 The 4-Tier Under-The-Hood Hierarchy
Discovered through Next.js client chunk `9534-24b649f03d5c8769.js` and live API verification:
* **Root Application Folders**: `GET /cde/document/getApplicationFolders`
  - Returns root application buckets (`ECMS` and `WFM`), provisioned under system account `Ann Nya`.
* **Level 1 (Queues)**: `GET /cde/document/getQueuesFolder/{appFolderToken}/{page}/{size}`
  - High-level business queues (e.g. `COMPLAINTS` under WFM, `1GOV TEST` under ECMS).
* **Level 2 (Queue Types)**: `GET /cde/document/getQueueTypesFolder/{queueFolderToken}/{page}/{size}`
  - Specific complaint/issue categories (e.g. `ACCOUNT SET UP COMPLAINTS`).
* **Level 3 (Tickets / Memos)**: `GET /cde/document/getTicketFolders/{queueTypeFolderToken}/{page}/{size}`
  - Specific ticket/memo numbers (e.g. Ticket `#15747` created by `Adedero Cosmos`).
* **Level 4 (Ticket Attachments)**: `GET /cde/document/getFilesInTicketFolder/{ticketFolderToken}/{page}/{size}`
  - Document payloads attached to that ticket. RBAC is enforced here: non-assignees receive `Access denied on the files in this folder!`.

### 6.3 Shortcomings in 1Gov
1. **Hardcoded 2-App Restriction**: Only connects ECMS and WFM.
2. **Folder Fatigue**: Requires 4 sequential directory clicks to find a single attachment.
3. **Orphaned Context**: No 1-click deep link back to open the live ticket or memo in the source app.
4. **Static Lifecycles**: No automated retention policies (tax, legal hold) or compliance schedules.

### 6.4 Commercial Enterprise Tailoring: `Connected App Drives`
In CICOD Enterprise `cDrive`:
1. **Multi-Platform Connector Hub**: Connects Native **cFlow** (BPM & tickets), **ERP** (SAP/NetSuite/QuickBooks for POs/Invoices), **CRM** (Salesforce/HubSpot for MSAs/SOWs), and **HRIS** (Workday/Deel for offer letters/NDAs).
2. **Smart Facet Filter & Flattened Feed**: Instant search by Ticket #, PO #, Invoice #, or Customer without 4 levels of folder clicking.
3. **Bi-Directional Deep Linking**: Every file card displays live origin links (`🔗 Ingested from cFlow Ticket #15747 (Open ↗)`).
4. **Automated Statutory Retention**: Auto-tags financial files with 7-year IRS tax retention and enables 1-click Legal Holds.
5. **Scoped Service Principals**: Replaces static user accounts with OAuth2 Service Principals and granular RBAC.

