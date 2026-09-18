# UAT Execution Report: REPORTS Module

**Test Script Source**: No dedicated `REPORTS` sheet exists in [`ECMS TEST SCRIPT RECENT VERSION.xlsx`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/ECMS%20TEST%20SCRIPT%20RECENT%20VERSION.xlsx) — the only "report" references in the workbook are the unrelated `TICKET`-sheet "Ticket Lifecycle Report" download rows. The scenario/step breakdown below is derived from direct UI exploration of the standalone **Reports** menu (Queue/Queue Type cascading filters, results grid, and Download export), which is not represented anywhere in the workbook.
**Target Environment**: `https://cicodecms.cicodsaasstaging.com/ecms/` (Tenant: `cicodecms`)
**HTML Visual Report**: [`testCases/reports_test_report.html`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/testCases/reports_test_report.html)
**Executed Date**: September 17, 2026
**Tester Profile**: `raissa.boyomo@crowninteractive.com`
**Scope note**: Functional/UI verification only — no backend/API root-cause analysis beyond confirming whether a user-visible action succeeds or fails.

> [!NOTE]
> **Coverage note**: this session exercised the **Reports** sub-page only (Queue, Queue Type, and the results grid's Download action). The **Audit Log** sub-page, and the Status / Priority / Date / Task State / Created By / Assigned To filters plus the grid's **Bulk Actions** and **Custom View** controls, were not exercised — see Suggested Improvements.

---

## 1. Executive Summary

| Total Checkpoints Verified | Passed | Deviations | Confirmed Defects | Blocked (by defect) |
| :--- | :--- | :--- | :--- | :--- |
| **10 checkpoints** | **8** | **1** | **1** | **0** |

> [!WARNING]
> **One confirmed defect this session:**
> 1. **P1 — Download Report throws a raw, unhandled "undefined" alert instead of exporting a file.** Confirmed 2/2: with a populated result set on screen (Queue = PLANNING AND SCHEDULING, 1 matching task), clicking **Download** pops a native browser alert reading literally `undefined` — no file is produced, and the message is an un-caught raw value rather than any real user-facing text.
>
> **Report search itself works correctly.** Two queues (Complaints, "UAT Test Queue 90355") initially appeared to return zero results, which looked suspicious — but cross-checking against the **Tasks** module as ground truth confirmed those queues genuinely have no matching tasks, while re-running the search against `PLANNING AND SCHEDULING` (which the Tasks list confirmed does have data) correctly returned its 1 matching row, with the Bulk Actions / Download / Custom View action buttons correctly appearing only once. The cascading Queue → Queue Type dropdowns also work correctly.

---

## 2. Step-by-Step Test Execution & Observations

| # | Feature | Steps to Reproduce | Expected Result | Actual Result (Live Execution) | Status | Evidence |
| :-: | :--- | :--- | :--- | :--- | :-: | :--- |
| 1 | **Menu Navigation & Generate Report form** | From the sidebar click "Reports", then click the "Reports" sub-item | Sub-menu shows "Reports" / "Audit Log"; "Reports" loads a "Generate Report" filter form | Confirmed: sub-menu expands to Reports / Audit Log, and the form loads with Queue* (required), Queue Type, Status, Priority, Date, Task State, Created By, Assigned To, plus Clear all / Search buttons. | ✅ PASSED | [`reports_step1_index.png`](../uat_target3_cicodecm/reports_step1_index.png) |
| 2 | **Search with the required Queue field blank** | Click Search without selecting a Queue | Queue is marked required (*) — should not silently run a report | No result table was rendered and the form stayed in place, so the required-field guard held; a validation toast appeared but had already faded to a barely-legible ghost overlay by the time the screenshot was captured, so its exact wording could not be confirmed. | ✅ PASSED (minor deviation — toast not legible in evidence) | [`reports_step4_empty_search_attempt.png`](../uat_target3_cicodecm/reports_step4_empty_search_attempt.png), [`reports_step4b_empty_search_toast.png`](../uat_target3_cicodecm/reports_step4b_empty_search_toast.png) |
| 3 | **Select Queue** | Select "Complaints" from the Queue dropdown | Queue Type dropdown should unlock/populate | Confirmed: Queue Type changed from the disabled "Select Queue first" placeholder to a live, selectable dropdown. | ✅ PASSED | [`reports_step5_queue_selected.png`](../uat_target3_cicodecm/reports_step5_queue_selected.png) |
| 4 | **Select Queue Type** | Select "Product/Service Complaint" from Queue Type | Value should be accepted, ready to search | Confirmed: dropdown correctly shows "Product/Service Complaint" selected. | ✅ PASSED | [`reports_step6_queuetype_selected.png`](../uat_target3_cicodecm/reports_step6_queuetype_selected.png) |
| 5 | **Generate report — Complaints / Product-Service Complaint** | Click Search with Queue=Complaints, Queue Type=Product/Service Complaint | Should display a results grid | Grid renders with correct headers (Task ID / Title / Queue / Queue Type / Assigned to / Status / Actions) and pagination "1 of 1", but zero data rows and no Bulk Actions/Download/Custom View buttons — i.e. a clean, correctly-rendered empty state. | ✅ PASSED | [`reports_step7_search_result.png`](../uat_target3_cicodecm/reports_step7_search_result.png), [`reports_step8_scrolled_table.png`](../uat_target3_cicodecm/reports_step8_scrolled_table.png) |
| 6 | **Broaden search — Queue only** | Clear Queue Type, search with Queue=Complaints alone | Should widen the match, if any exist | Still zero rows returned — consistent with row 5, not a narrower-filter artifact. | ✅ PASSED | [`reports_step9_broad_search_complaints.png`](../uat_target3_cicodecm/reports_step9_broad_search_complaints.png) |
| 7 | **Search a different queue** | Select Queue="UAT Test Queue 90355", search | Should display that queue's tasks, if any exist | Still zero rows returned. | ✅ PASSED | [`reports_step10_uat_queue_search.png`](../uat_target3_cicodecm/reports_step10_uat_queue_search.png) |
| 8 | **Ground-truth cross-check via Tasks module** | Navigate to Tasks → All Tasks (independent of Reports) | Confirm whether real task data exists anywhere in the tenant | Confirmed: 48 Total Tasks exist tenant-wide, with several tied to Queue "PLANNING AND SCHEDULING" (Task IDs 1048, 1045, 1044, 1043, 1041, etc.) — establishes ground truth for row 9. | ✅ PASSED | [`reports_step11_tasks_ground_truth.png`](../uat_target3_cicodecm/reports_step11_tasks_ground_truth.png) |
| 9 | **Generate report — PLANNING AND SCHEDULING (control)** | Back in Reports, select Queue="PLANNING AND SCHEDULING", click Search | Should return the task(s) confirmed in row 8 | Correctly returned 1 matching row (Task 1048, "UAT Sanity Check Original Que…", Queue Type "WORK BREAKDOWN STRUCTURE", Status OPEN); Bulk Actions / Download / Custom View buttons correctly appeared now that results exist. Confirms rows 5–7's zero-row results were genuine (no matching data), not a search defect. | ✅ PASSED | [`reports_step12_planning_search.png`](../uat_target3_cicodecm/reports_step12_planning_search.png) |
| 10 | **Download report** | With the row-9 result set on screen, click "Download" | Should export/download the report (e.g. as a file) | 🛑 **CONFIRMED BUG (2/2 reproductions)**: clicking Download pops a native browser alert reading literally **"undefined"**. No file is downloaded, and the dialog is a raw, un-caught value rather than any real message. Repeated once more — identical result. | ❌ **CONFIRMED BUG (P1)** | [`reports_step13c_after_download_click.png`](../uat_target3_cicodecm/reports_step13c_after_download_click.png), [`reports_step14_download_repro2.png`](../uat_target3_cicodecm/reports_step14_download_repro2.png) |

---

## 3. Confirmed Defects

1. **P1 — Download Report throws a raw "undefined" alert instead of exporting a file.** With a valid, populated report result set on screen, clicking the grid's "Download" button does not produce a file — it surfaces a native JS `alert("undefined")` dialog, indicating an un-caught error or an unresolved value being passed straight to `alert()`. Confirmed via 2 independent reproductions on the same result set.

## 4. Deviations (Not Bugs, But Worth a Note)

- Submitting Search with the required Queue field blank shows a validation toast, but it had already faded to an unreadable ghost overlay by the time it could be captured — worth a longer toast duration or a persistent inline error instead, so testers/users can actually read the message.

---

## 5. Suggested Improvements

### A. Fix priority
1. **P1 — Fix the Download action.** Check what the Download button's click handler passes to `alert()` — the literal string `"undefined"` strongly suggests a variable (e.g. a file URL, blob, or API response field) is unset at the point the handler fires. Likely an async response not yet resolved, or a renamed/missing field in the download-request payload.

### B. Test-script / coverage gaps
- **Audit Log** (the Reports module's second sub-page) was not exercised this session — needs its own pass.
- The **Status, Priority, Date, Task State, Created By, and Assigned To** filters (all present on the Generate Report form) were never combined with Queue/Queue Type in this session — worth a follow-up pass once Download is fixed, so each filter can be validated against a known result set the way Queue was in rows 8–9.
- **Bulk Actions** and **Custom View**, both visible once a result set is present (row 9 onward), were not exercised — scope for a follow-up session.
- Once Download is fixed, verify the exported file's format and content match the on-screen grid (e.g. correct columns, correct filtered rows).

---

**Session artifacts**: 15 `reports_step*.png` screenshots under [`uat_target3_cicodecm/`](../uat_target3_cicodecm/). No data was created or modified on the staging tenant during this session — purely read-only search/filter/export testing. See [`test/UsersTest_Results.md`](UsersTest_Results.md) for the related session this Reports testing followed.
