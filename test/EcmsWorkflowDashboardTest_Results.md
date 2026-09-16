# UAT Execution Report: ECMS Workflow Dashboard Module

**Test Script Source**: [`ECMS TEST SCRIPT RECENT VERSION.xlsx`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/ECMS%20TEST%20SCRIPT%20RECENT%20VERSION.xlsx) (Sheet: `DASHBOARD`, Rows 13–32)  
**Target Environment**: `https://cicodecms.cicodsaasstaging.com/` (Tenant: `cicodecms`)  
**HTML Visual Report**: [`testCases/ecms_dashboard_test_report.html`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/testCases/ecms_dashboard_test_report.html)  
**Executed Date**: September 16, 2026  
**Tester Profile**: `raissa.boyomo@crowninteractive.com`  

---

## 1. Executive Summary

| Total Scenarios / Steps | Execution Status | Environmental Blocker | Overall Health |
| :--- | :--- | :--- | :--- |
| **17 Test Steps** | **Blocked on Staging Entry** | **502 Bad Gateway (`api.cicodsaasstaging.com`)** | **SSO Redirection Defect Identified** |

> [!WARNING]
> **Staging Environment Blocker Identified:**  
> While authentication to the primary tenant portal (`https://cicodecms.cicodsaasstaging.com/admin/merchant`) succeeds, launching the **Enterprise Content Management** application (`//cicodecms.cicodsaasstaging.com/ecms/`) fails due to a **502 Bad Gateway** response from the backend authorization endpoint (`api.cicodsaasstaging.com/sso/auth/authorize`). This triggers a circular browser redirect loop (`ERR_TOO_MANY_REDIRECTS`) between `/ecms/index.php?r=site/login` and `/login?returnUrl=...`.

---

## 2. Step-by-Step Test Execution & Observations

| # | Feature / Scenario | Steps to Reproduce | Expected Result (from Script) | Actual Live Behavior (`cicodecms.cicodsaasstaging.com`) | Status | Evidence |
| :-: | :--- | :--- | :--- | :--- | :-: | :--- |
| **0** | **ECMS Launch** | Click Enterprise Content Management card on merchant dashboard | ECMS portal loads with left sidebar menu | Card is present on `/admin/merchant`. Clicking redirects to `/ecms/index.php?r=site/login&authorize=...`, triggering an infinite redirect loop (`ERR_TOO_MANY_REDIRECTS`) due to 502 on `api.cicodsaasstaging.com`. | ⚠️ **BLOCKED** | [`cicodecms_01_after_login.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/cicodecms_01_after_login.png)<br>[`cicodecms_02_ecms_entry.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/cicodecms_02_ecms_entry.png) |
| **1** | **Expand Dashboard** | From the left menu, click **Dashboard** | Dashboard Page Expands | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | [`cicodecms_02_ecms_entry.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/cicodecms_02_ecms_entry.png) |
| **2** | **Load Workflow Dashboard** | Click **Workflow Dashboard** | Workflow Dashboard loads successfully | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | [`cicodecms_02_ecms_entry.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/cicodecms_02_ecms_entry.png) |
| **3** | **New Ticket Tooltip** | Hover over the green **"New Ticket"** tab under Ticket Status | Tooltip appears showing: *“This refers to new tickets created on a particular day.”* | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **4** | **Filter: Today** | Click **Today** filter | Ticket Status updates to show today’s ticket statistics | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **5** | **Filter: Week** | Click **Week** filter | Ticket Status updates to show ticket statistics for the current week | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **6** | **Filter: Month** | Click **Month** filter | Ticket Status updates to show statistics for the current month | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **7** | **Filter: Custom Range** | Select a custom date range from the date filter | Ticket Status updates based on the selected date range | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **8** | **Metric Validation** | Verify that Open, In Progress, and Closed ticket counts update correctly | Values update dynamically according to applied filters | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **9** | **Bar Chart Display** | Scroll to **Workflow Ticket Summary** (Bar Chart) | Chart loads correctly with bars for each workflow | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **10** | **Bar Tooltip Hover** | Hover over a bar in the chart | Tooltip displays workflow name + count of Open / In Progress / Closed tickets | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **11** | **Legend: Open** | Click **Open** status Badge (legend) | Only In-Progress and Closed bars are displayed | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **12** | **Legend: In Progress** | Click **In Progress** Badge | Only Closed bars are displayed | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **13** | **Legend: Closed** | Click **Closed** Badge | No bar is displayed | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **14** | **Multi-Status View** | Click multiple statuses at once (e.g., Open + In Progress + Closed) | Combined status view is displayed | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **15** | **Chart Readability** | Validate that all chart labels and legends are readable | UI elements render correctly, no overlaps | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **16** | **Queue Distribution** | Click on any queue (e.g., Complaints, QA, Correspondence) | Workflow Ticket Summary updates to display the ticket distribution for the selected queue | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **17** | **Queue Summary Hover** | Hover over the bar for the selected queue | Tooltip shows correct workflow summary for that queue | Blocked by SSO handshake loop on staging `/ecms/`. | ⏸️ **BLOCKED** | — |
| **18** | **Session End** | Conclude test scenario | End Test state validated | Application session maintained on `/admin/merchant`. | ✅ **PASSED** | [`cicodecms_01_after_login.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/cicodecms_01_after_login.png) |

---

## 3. Technical Defect Analysis for DevOps

1. **Defect**: Circular Redirect Loop (`ERR_TOO_MANY_REDIRECTS`)
2. **Impact**: Prevents users from accessing Enterprise Content Management (ECMS / Workflow Manager) from the tenant dashboard.
3. **Root Cause**:
   - Step 1: User navigates to `https://cicodecms.cicodsaasstaging.com/ecms/`.
   - Step 2: Gateway redirects to `https://cicodsaasstaging.com/login?returnUrl=...`.
   - Step 3: SSO generates `authorize=<token>` and redirects back to `https://cicodecms.cicodsaasstaging.com/ecms/index.php?r=site/login&authorize=<token>`.
   - Step 4: Staging API server `api.cicodsaasstaging.com` responds with `502 Bad Gateway` during token resolution, causing the PHP application to reject the token and redirect back to SSO.
4. **Resolution Required**:
   - Restart/repair the SSO authorization microservice on `api.cicodsaasstaging.com`.
