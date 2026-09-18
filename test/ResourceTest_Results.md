# UAT Execution Report: RESOURCE Module

**Test Script Source**: No dedicated `RESOURCE` sheet exists in [`ECMS TEST SCRIPT RECENT VERSION.xlsx`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/ECMS%20TEST%20SCRIPT%20RECENT%20VERSION.xlsx) — the only "resource" references in the workbook are the unrelated `TICKET`-sheet "Assign to Resource" ticket action and `WORKFLOW`-sheet "hide/show status from Resource" toggles. Neither covers the standalone **Resource** menu (Resource, Resource Type, Resource Level, Resource Shift, Resource Schedule). The scenario/step breakdown below is derived from direct UI exploration of that menu, consistent with the approach used for [`test/ReportsTest_Results.md`](ReportsTest_Results.md).
**Target Environment**: `https://cicodecms.cicodsaasstaging.com/ecms/` (Tenant: `cicodecms`)
**HTML Visual Report**: [`testCases/resource_test_report.html`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/testCases/resource_test_report.html)
**Executed Date**: September 17, 2026
**Tester Profile**: `raissa.boyomo@crowninteractive.com`
**Scope note**: Functional/UI verification only — no backend/API root-cause analysis beyond confirming whether a user-visible action succeeds or fails.

> [!NOTE]
> **Coverage note**: this session exercised the **Resource** list/search and the **Resource Type** sub-page (list, create, suspend) only. **Resource Level**, **Resource Shift**, **Resource Schedule**, Update/Unsuspend/Search on Resource Type, and a direct "+ Create" on the base Resource entity itself were not exercised — see Suggested Improvements. (Note: converting an existing User into a Resource via "Make A Resource" was already covered separately in [`test/UsersTest_Results.md`](UsersTest_Results.md) — the single "Chinwuba Okafor" record seen in Row 1 here is that same test artifact, not a resource created in this session.)

---

## 1. Executive Summary

| Total Checkpoints Verified | Passed | Deviations | Confirmed Defects | Blocked (by defect) |
| :--- | :--- | :--- | :--- | :--- |
| **8 checkpoints** | **6** | **2** | **0** | **0** |

> [!NOTE]
> **No confirmed defects this session — two minor UI deviations worth flagging:**
> 1. The Resource list's KPI header reads Total Records: 2 / Total Active: 2, but the grid itself renders only 1 data row ("Chinwuba Okafor"), with pagination reading "1 of 1". Either the count is stale or a second record isn't rendering — worth a closer look, though it did not block any action.
> 2. On the "New Resource Type" form, selecting a Queue Type correctly adds the chip to the field, but the red "Please select a queue type." validation message stays visible underneath even though a valid value is now selected. It turned out to be cosmetic — clicking Create still succeeded — but it's misleading while filling out the form.
>
> Resource Type's **Create** and **Suspend** actions both work correctly and persist as expected.

---

## 2. Step-by-Step Test Execution & Observations

| # | Feature | Steps to Reproduce | Expected Result | Actual Result (Live Execution) | Status | Evidence |
| :-: | :--- | :--- | :--- | :--- | :-: | :--- |
| 1 | **Resource list** | From the sidebar click "Resource", then click the "Resource" sub-item | Sub-menu shows Resource Type / Resource Level / Resource Shift / Resource Schedule / Resource; "Resource" loads a list of resources | List loads with Name/Email/Phone/Department/Status/Actions columns and a "+ Create" button. KPI header reads Total Records: 2, Total Active: 2, Total Suspended: 0 — but only 1 data row ("Chinwuba Okafor") is actually rendered, with pagination "1 of 1". | ✅ PASSED (deviation — KPI/row-count mismatch) | [`resource_step1_list.png`](../uat_target3_cicodecm/resource_step1_list.png) |
| 2 | **Search Resource** | Type "a" into the Resource list search box | Should filter the list to matching resources | Filtered result still shows the same 1 matching row ("Chinwuba Okafor," which contains "a"); the search mechanism itself works, though the underlying row-count anomaly from Row 1 persists. | ✅ PASSED | [`resource_step2_search_a.png`](../uat_target3_cicodecm/resource_step2_search_a.png) |
| 3 | **Resource Type — list** | Click "Resource Type" sub-item | Should display the Manage Resource Type list | Loads correctly: Total Records 8, Total Active 8, Total Suspended 0, with Name/Description/Date Created/Created By/Date Updated/Updated By/Status/Actions columns — all 8 system-seeded types render correctly (Account Manager, Sales Representative, Sales Manager, Customer Service Representative, Warehouse Manager, Delivery Manager, Logistics Manager, Dispatch Rider). | ✅ PASSED | [`resource_step3_type_list.png`](../uat_target3_cicodecm/resource_step3_type_list.png) |
| 4 | **Create Resource Type — form** | Click Create on the Resource Type list | Should display the New Resource Type form | "New Resource Type" form loads with Name* (text), Description (textarea), Queue Type* (multi-select), and Cancel/Create buttons. | ✅ PASSED | [`resource_step4_type_create.png`](../uat_target3_cicodecm/resource_step4_type_create.png) |
| 5 | **Create Resource Type — fill fields** | Enter Name="UAT Resource Type"; open the Queue Type dropdown | Should display each field correctly | Name field accepts text correctly. Queue Type dropdown opens a searchable list of queue types grouped by parent queue (e.g. "Personnel Complaint (Complaints)", "Payments (Finance)", "Leave Management (Human Resources)"). | ✅ PASSED | [`resource_step5_queuetype_dropdown.png`](../uat_target3_cicodecm/resource_step5_queuetype_dropdown.png) |
| 6 | **Create Resource Type — select Queue Type** | Select "Personnel Complaint (Complaints)" from the dropdown | Should register the selection and clear any required-field error | The chip "× Personnel Complaint (Complaints)" renders correctly in the field, but a red "Please select a queue type." message remains visible directly underneath despite the valid selection already being made. | ✅ PASSED (deviation — stale validation message) | [`resource_step9_real_click.png`](../uat_target3_cicodecm/resource_step9_real_click.png) |
| 7 | **Create Resource Type — submit** | Click Create | Should save successfully | "Successful" confirmation modal shown; new "UAT Resource Type" row appears at the top of the list (Created By "Raissa Boyomo", Status ACTIVE), Total Records incremented 8→9. Confirms Row 6's stale validation message did not actually block submission. | ✅ PASSED | [`resource_step10_after_create_click.png`](../uat_target3_cicodecm/resource_step10_after_create_click.png) |
| 8 | **Suspend Resource Type** | Open the 3-dot Actions menu on "UAT Resource Type", click Suspend | Should suspend the resource type | Actions menu correctly shows Update / Suspend. Clicking Suspend shows a "Suspended" confirmation, status flips to SUSPENDED, Total Suspended increments 0→1. | ✅ PASSED | [`resource_step11_type_actions.png`](../uat_target3_cicodecm/resource_step11_type_actions.png), [`resource_step12_type_suspend.png`](../uat_target3_cicodecm/resource_step12_type_suspend.png) |

---

## 3. Confirmed Defects

None this session.

## 4. Deviations (Not Bugs, But Worth a Note)

- **Resource list KPI/row-count mismatch**: Total Records reads 2 and Total Active reads 2, but only 1 resource row is actually rendered in the grid (pagination "1 of 1"). Worth checking whether a second resource record exists but isn't rendering, or the KPI count is simply stale.
- **Stale "Please select a queue type" validation message on New Resource Type**: the message remains on screen after a valid Queue Type chip has been selected. Purely cosmetic — Create still succeeds — but confusing while filling out the form.

---

## 5. Suggested Improvements

### A. Fix priority
1. **Investigate the Resource list KPI/row-count mismatch** (Row 1) — confirm whether a second resource record actually exists and, if so, why it isn't rendering in the grid.
2. **Clear the Queue Type validation message immediately on selection** (Row 6) rather than leaving it visible until submission succeeds — low-effort UX fix.

### B. Test-script / coverage gaps
- **Resource Level, Resource Shift, and Resource Schedule** (three of the five Resource sub-pages) were not exercised this session — needs its own pass.
- **Update, Unsuspend, and Search** on Resource Type were not exercised — only Create and Suspend were tested.
- A direct **"+ Create"** on the base Resource entity (from the Resource list itself, distinct from "Make A Resource" on an existing User) was not attempted this session.
- Once the Row 1 KPI/row-count mismatch is understood, re-verify Search on the Resource list against a known multi-record baseline.

---

**Session artifacts**: 12 `resource_step*.png` screenshots under [`uat_target3_cicodecm/`](../uat_target3_cicodecm/). One Resource Type ("UAT Resource Type") was created and left SUSPENDED on the staging tenant as a test artifact. See [`test/UsersTest_Results.md`](UsersTest_Results.md) and [`test/ReportsTest_Results.md`](ReportsTest_Results.md) for the related sessions this Resource testing followed.
