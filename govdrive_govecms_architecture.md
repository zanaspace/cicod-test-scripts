# 1Government Cloud (CICOD) — Platform & Module Deep Dive
**Tenant:** `govtest` (Federal Government MDA)  
**Host & Infrastructure:** Galaxy Backbone (GBB)  
**Target URL:** `https://govtest.convergenceondemand.com`

---

## Executive Summary

The **1Government (1Gov) Cloud SaaS** platform (developed in partnership with Galaxy Backbone) is designed to digitize public sector operations, replace paper-based bureaucracy, and enable secure inter-agency collaboration across Nigerian Ministries, Departments, and Agencies (MDAs).

The system is organized around two flagship core engines:
1. **GovDrive (`cde`)**: Collaborative Document Ecosystem & Secure Cloud Storage.
2. **Gov ECMS (`wfm`)**: Enterprise Content Management System & Workflow Manager.

Supported by secondary integrated modules: **Gov InMail (`govmail`)**, **Asset Management / IMS (`ims`)**, **Gov Conference (`conferencing`)**, **Performance Management (`pms`)**, **Gov Knowledge / LMS (`lms`)**, and **Gov CRM (`govcrm`)**.

---

## 1. GovDrive (`cde`) — Collaborative Document Ecosystem

GovDrive serves as the government's centralized, classified document management repository and secure file exchange network.

### A. Directory Structure & Document Zones
GovDrive divides storage into five specialized organizational containers:

1. **My Documents (`/my-documents`)**:
   - The user's private workspace for personal drafts, departmental notes, and active work files.
   - Granular permissions: `canRead`, `canWrite`, `canShare` (YES / NO / SHARED).
2. **Department Documents (`/department-documents`)**:
   - Shared document repository scoped strictly to the user's unit/department within the MDA.
   - Facilitates real-time collaboration among colleagues on active assignments.
3. **Historic Files (`/historic-files`)**:
   - Long-term archival vault for digitized paper records, gazettes, legacy files, and past circulars.
   - Immutable audit logs and read-only preservation controls.
4. **General Documents (`/general-documents`)**:
   - Organization-wide repository accessible to all civil servants in the MDA.
   - Used for official circulars, standard operating procedures (SOPs), policy handbooks, and civil service announcements.
5. **Application Documents (`/application-documents`)**:
   - Automated ingestion zone connecting GovDrive to other 1Gov applications.
   - Files attached to **Gov ECMS tickets**, **Gov InMail messages**, or **Web Forms** automatically sync here.
   - Includes an asynchronous background upload queue (`/application-documents/queues/`).

---

### B. Key Capabilities & Technical Mechanisms

* **Inter-MDA Secure Sharing (`shareFileInterTenant`, `shareFolderInterTenant`)**:
  - Allows an MDA to share sensitive documents directly with another MDA without unencrypted email attachments or flash drives.
  - **Inbound Approval Inbox (`files-pending-acceptance`)**: Incoming cross-agency files are held in pending status until the recipient explicitly reviews and clicks **Accept** or **Reject**.
* **Access Request & Approval Workflows (`requestAccess`, `approveRequest`, `denyRequest`)**:
  - Users lacking read/write permissions on a file can submit an on-demand access request with a business justification.
  - Document owners and line managers receive approval prompts with full audit logging.
* **Document Sensitivity & Security Classification (`addClassificationToFile`)**:
  - Tags documents according to security levels: *Public*, *Restricted*, *Confidential*, *Secret*, *Top Secret*.
  - Step-up **Two-Factor Authentication (2FA)** prompts (`initiate2FAEmail`, `validate2FACode`) prior to viewing or transferring sensitive records.
* **Version Control & Audit Trails (`getAvailableVersions`, `auditTrail`)**:
  - Automatically preserves document versions upon modification.
  - Retains immutable audit trails documenting who viewed, downloaded, shared, or modified each record.
* **Lifecycle & Trash Recovery (`moveToTrash`, `restoreFile`, `findFilesInTrash`)**:
  - Multi-tier deletion lifecycle with soft-delete quarantine (Recycle Bin) and authorized restoration.
* **Storage & Streaming Engine**:
  - Integrates with secure MinIO / S3 object storage (`fileserver.convergenceondemand.com`) with time-limited HMAC-SHA256 pre-signed URLs (`getObjectDownloadUrl/v2`).

---

## 2. Gov ECMS (`wfm`) — Enterprise Content Management & Workflows

Gov ECMS (Workflow Manager) digitizes civil service processes, operational routing, approvals, and formal correspondence.

### A. Core Operational Modules

1. **Electronic Memos & Digital Minuting (`/wfm/index.php?r=memo`)**:
   - **Memo Creation (`memo/create`)**: Digital equivalent of civil service internal and external memos.
   - **Minuting & Routing**: Allows senior officers to add minute notes, endorse, comment, and route files down or up the hierarchy.
   - **Memo Drafts & Reviews (`memo/draft`, `memo/review`)**: Multi-officer draft editing and review prior to formal submission.
   - **Action & Decision Logging**: Tracks approval stages (Pending, Approved, Queried, Rejected).
2. **Work Orders & Tasks Engine (`/wfm/index.php?r=workOrder`)**:
   - **Ticket Lifecycle**: Every request, inspection, maintenance job, or citizen inquiry becomes a ticket with an assigned owner, priority, and SLA target.
   - **Approval Hierarchies (`ticketApproval`)**: Configurable stage gates requiring Line Manager, Director, or Permanent Secretary approval before a task proceeds.
   - **Queue Types (`queueType/index`)**: Categorizes work streams into departmental queues.
3. **Inter-MDA Requests (`/wfm/index.php?r=request`)**:
   - Inter-agency request portal for quotes, shared resources, cross-ministerial approvals, and collaborative funding requests.
   - Submissions receive a persistent tracking ID for transparent inter-agency follow-up.
4. **Automated Escalation Matrix (`dashboard/escalation`, `settings/escalation`)**:
   - SLA timers tied to workflow stages.
   - **Tier 1 (e.g. 48 hours)**: Inactivity trigger sends alert notifications to the assigned officer.
   - **Tier 2 (e.g. 96 hours)**: Escalates directly to Line Managers or Department Heads with auto-reassignment.
5. **Dynamic Process & Web Form Builder (`/wfm/index.php?r=form`)**:
   - Form builder for citizen intake, vendor registration, and internal requisitions.
   - Submitting a form automatically spawns a ticket in the appropriate workflow.
6. **Production & Inventory Bridge (`approvalGroupLevel/index`)**:
   - Links operational task execution with physical inventory issuance and order verification.
7. **Resource & Engineer Dispatch (`engineerWorkOrder`, `dashboard/resourcePerformance`)**:
   - Capacity planning for technical staff, tracking workload bandwidth, turnaround times (TAT), and field technician dispatch.
8. **Operations Dashboard & Reporting (`dashboard/workOrder`, `reports/index`)**:
   - Real-time heatmaps, stage bottlenecks, department utilization rates, and SLA compliance metrics.

---

## 3. Supplementary Platform Modules

| Module Code | Module Name | Primary Purpose & Features |
| :--- | :--- | :--- |
| **`govmail`** | **Gov InMail** | Official `.gov.ng` webmail and communication service; integrates directly with ECMS to turn emails into tickets and auto-archive attachments to GovDrive. |
| **`ims`** | **Asset Management** | Lifecycle tracking of government physical assets, fixed asset registers, depreciation schedules, and maintenance order verification. |
| **`conferencing`** | **Gov Conference** | Secure virtual meeting rooms, webinars, and audio/video collaboration for civil service leadership and inter-MDA consultations. |
| **`pms`** | **Performance Management** | Key Performance Indicator (KPI) monitoring, annual staff appraisals, promotion matrices, and productivity analytics. |
| **`lms`** | **Gov Knowledge / LMS** | Civil service training academy, mandatory onboarding courses, digital library, and professional certification tracking. |
| **`rms`** | **Records Management System** | Physical file indexing, registry ledger automation, file tracking between offices, and dispatch barcode logging. |
| **`govcrm`** | **Gov CRM** | Public directory, citizen feedback collection, contractor/vendor profile directory, and multi-channel case resolution. |
| **`softphone`** | **Gov Softphone** | VoIP internal telephony across ministries and secretariats over GBB secure intranet. |

---

## 4. Integration Matrix: How the Modules Connect

```
           ┌──────────────────────────────────────────────┐
           │        CITIZEN & EXTERNAL CHANNELS           │
           │   • Web Forms  • Gov InMail  • Inter-MDA Req │
           └──────────────────────┬───────────────────────┘
                                  │ Triggers
                                  ▼
           ┌──────────────────────────────────────────────┐
           │             Gov ECMS (Workflows)             │
           │  • Electronic Memos & Minuting               │
           │  • Task State Machine & Approvals            │
           │  • Automated 48h / 96h Escalations           │
           └───────────────┬──────────────┬───────────────┘
                           │              │
       Auto-Sync Documents │              │ Consumes Inventory
                           ▼              ▼
           ┌────────────────────────┐   ┌─────────────────┐
           │       GovDrive         │   │    IMS / Asset  │
           │ • Application Folders  │   │   Management    │
           │ • Inter-MDA Transfer   │   └─────────────────┘
           │ • Versioning & 2FA     │
           └────────────────────────┘
```





