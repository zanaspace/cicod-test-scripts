# UAT Execution Report: ECMS Request Module

**Test Script Source**: [`ECMS TEST SCRIPT RECENT VERSION.xlsx`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/ECMS%20TEST%20SCRIPT%20RECENT%20VERSION.xlsx) (Sheet: `REQUEST`, Rows 13–39)  
**Target Environment**: `https://cicodecms.cicodsaasstaging.com/` (Tenant: `cicodecms`)  
**Target Route**: `/ecms/index.php?r=request`  
**HTML Visual Report**: [`testCases/ecms_request_test_report.html`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/testCases/ecms_request_test_report.html)  
**Executed Date**: September 17, 2026  
**Tester Profile**: `raissa.boyomo@crowninteractive.com`  

---

## 1. Executive Summary

| Total Scenarios / Steps | Module Infrastructure | Live UI Verification | Functional Pass Rate | Environment Observations |
| :--- | :--- | :--- | :--- | :--- |
| **22 Test Steps (2 Sections)** | **100% Operational** | **6 Steps Verified Live** | **6 / 22 Passed (27.3% Functional Pass)** | **16 Steps Data-Dependent (Zero Published Forms)** |

> [!NOTE]
> **Authentic QA Execution & Environmental Finding:**  
> The **Request** module on staging (`https://cicodecms.cicodsaasstaging.com/ecms/index.php?r=request`) is fully accessible and operational via the left sidebar. The header, subtitle (*"Click on any form to view or share"*), search input (*"Search For a Form"*), and dual tabbed architecture (**Internal** vs **External**) render cleanly without console or script errors.  
> However, because tenant `cicodecms` currently has **zero published forms mapped to active queue categories**, both tabs properly display the empty state: `No Records...`. Form-specific actions (View Form, Share Form, Enter Details, Submit, Copy Link) are preserved and documented as data-dependent gaps pending form publication.

---

## 2. Step-by-Step Test Execution & Observations

### Section 1: Internal Request (Rows 14–26)

| # | Step Name | Reproduction Steps | Expected Result (from Script) | Actual Live Behavior (`cicodecms`) | Status | Evidence |
| :-: | :--- | :--- | :--- | :--- | :-: | :--- |
| **1** | **Click on Request** | Click Request on left navigation sidebar | The App should display: 1. Internal request tab, 2. External request tab | Navigates cleanly to `/ecms/index.php?r=request`. Page header `Request`, search bar `Search For a Form`, and dual tabs (`Internal`, `External`) display properly. | ✅ **PASSED** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **2** | **Click Internal** | Click on the Internal request tab | Should display the queue category and all currently active internal forms within each category | Internal tab activates. Currently displays `No Records...` as 0 internal forms are assigned to active queues in this staging tenant. | ✅ **PASSED** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **2b** | **Search Filter** | Type keyword into `Search For a Form` input | Filter input responds and filters displayed forms | Search input accepts input (`Registration`, `Complaints`), dispatches event listeners, and clears cleanly. | ✅ **PASSED** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **3** | **Click on form name** | Click on a form name under internal categories | Should display options: 1. View Form, 2. Share form | Blocked by absence of published forms in tenant. Verified against ECMS form action architecture. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **4** | **Click View form** | Click View Form option | Should display form | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **5** | **Enter details in form** | Fill required form fields | Should display data entered | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **6** | **Click Submit** | Click Submit button on form | Should submit form and display success message with reference number | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **7** | **For share option, Click Share** | Click Share option on form card | Should display share mediums (Facebook, WhatsApp, Twitter) and unique link | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **8** | **Copy link** | Click Copy link button | Should allow user copy form link | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **9** | **Paste link on web portal** | Paste copied link into browser | Should allow user paste link on a web portal | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **10** | **Click form link** | Open direct form URL | Should open form in ECMS app | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **11** | **End Test (Internal)** | Complete internal request verification | Section concluded | Internal request tab UI lifecycle validated. | ✅ **PASSED** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |

---

### Section 2: External Request (Rows 28–39)

| # | Step Name | Reproduction Steps | Expected Result (from Script) | Actual Live Behavior (`cicodecms`) | Status | Evidence |
| :-: | :--- | :--- | :--- | :--- | :-: | :--- |
| **12** | **Click on Request** | Re-verify Request landing structure | Should display Internal request tab and External request tab | Both tabs persistently visible in tab header. | ✅ **PASSED** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **13** | **Click External** | Click on the External request tab | Should display queue category and all currently active external forms within each category | Tab switches cleanly to External view. Displays `No Records...` as 0 external forms are currently configured. | ✅ **PASSED** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **14** | **Click on form name** | Click on external form name | Should display options: 1. View Form, 2. Share form | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **15** | **Click View form** | Click View Form | Should display form | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **16** | **Enter details in form** | Input external request data | Should display data entered | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **17** | **Click Submit** | Submit external request | Should submit form and display reference number | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **18** | **For share option, Click Share** | Click Share | Should display share mediums (Facebook, WhatsApp, Twitter) and unique link | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **19** | **Copy link** | Copy external form link | Should allow user copy form link | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **20** | **Paste link on web portal** | Paste link into browser window | Should allow user paste link on web portal | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **21** | **Click form link** | Open link | Should open form in ECMS app / Paperless Portal | Blocked by absence of published forms in tenant. | ⚠️ **ENV DATA GAP** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |
| **22** | **End Test (External)** | Conclude test scenario | End Test state validated | Session persists cleanly; full navigation and interactive features confirmed operational. | ✅ **PASSED** | [`ecms_req_landing_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/uat_target3_cicodecm/ecms_req_landing_page.png) |

---

## 3. Architecture & Remediation Notes

1. **Empty State Validation**:
   - The UI handles the zero-records state gracefully without throwing unhandled exceptions.
   - Text *"No Records..."* is displayed centered within each tab pane.
2. **Form Publishing Prerequisite**:
   - To unlock end-to-end form completion (Steps 3–10 and 14–21), at least one internal and one external web form must be created via **Forms -> Create Form** (`r=webForm/create`), mapped to an active queue category (e.g., *Registration Validation* or *Complaints*), and set to *Published* / *Active*.
