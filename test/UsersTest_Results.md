# UAT Execution Report: USERS Module

**Test Script Source**: [`ECMS TEST SCRIPT RECENT VERSION.xlsx`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/ECMS%20TEST%20SCRIPT%20RECENT%20VERSION.xlsx) (content physically embedded at the tail of the `CONTACTS` sheet — "Create User (valid Credential)" / "Create User (invalid Credential)", ~38 rows — reconciled here as its own module rather than folded into the Contacts report; see [`test/ContactsTest_Results.md`](ContactsTest_Results.md) for that note)
**Target Environment**: `https://cicodecms.cicodsaasstaging.com/ecms/` (Tenant: `cicodecms`)
**HTML Visual Report**: [`testCases/users_test_report.html`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/testCases/users_test_report.html)
**Executed Date**: September 17, 2026
**Tester Profile**: `raissa.boyomo@crowninteractive.com`
**Scope note**: Functional/UI verification only — no backend/API root-cause analysis beyond confirming whether a user-visible action succeeds or fails.

---

## 1. Executive Summary

| Total Checkpoints Verified | Passed | Deviations | Confirmed Defects | Blocked |
| :--- | :--- | :--- | :--- | :--- |
| **10 checkpoints** | **7** | **0** | **2 rows (same underlying P0 defect, reproduced 2/2)** | **1** |

> [!WARNING]
> **Create User is completely non-functional on this tenant.** Two independent attempts to create a new user — each filling every visibly-required field (`Firstname*`, `Lastname*`, `Email*`, `Phone*`, `Grade Level*`, `Job Title*`, `Regions*`) plus Role, Department, and Line Manager — both ended the same way: the "New User" form silently reset to a blank create page with **no success message, no error message, and no toast of any kind**. A full page reload and a direct search of the Users list by the new user's name/email both confirmed **the user was never created** (Total Records stayed at 12 both times).
>
> Because valid creation itself is broken, the script's specific negative-path check ("Staff ID has been entered already") **could not be executed** — there is no successfully-created user to duplicate against. However, the *other* half of the negative-path scenario (invalid email format, invalid phone format) was tested independently and **works correctly**: the browser's native validation correctly blocks submission with clear, specific messages for both.

---

## 2. Step-by-Step Test Execution & Observations

| # | Feature | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live Execution) | Status | Evidence |
| :-: | :--- | :--- | :--- | :--- | :-: | :--- |
| 1 | **Menu Navigation** | From the Menu click on User | A sub menu "roles, Department, user" should be displayed | Confirmed: sidebar "Users" expands to **Department / Roles / Users** — exact match (script names them in a different order, same 3 items). | ✅ PASSED | [`users_step1_menu.png`](../uat_target3_cicodecm/users_step1_menu.png) |
| 2 | **Click on User sub-menu** | Display User page | "Users" list loads: Total Records 12, Total Active 11, Total Suspended 1, with Name/Email/Phone/Department/Status/Actions columns. | None. | ✅ PASSED | [`users_step3_list.png`](../uat_target3_cicodecm/users_step3_list.png) |
| 3 | **Click on Create button** | Display new user page | "New User" form loads with Firstname*, Lastname*, Email*, Phone*, Role, Department, Grade Level*, Line Manager, Profile Picture, Staff ID, Job Title*, Regions*, Address1/2, City, State, "Make line manager?" — matches and exceeds the script's field list. | None. | ✅ PASSED | [`users_step4_create_form.png`](../uat_target3_cicodecm/users_step4_create_form.png) |
| 4 | **Enter FirstName / Last Name / Email / Phone** | Should display First/Last Name, Email, Phone | "UATValid" / "UserTest" / a fresh unique email / `+2348099887766` all accepted with no validation complaints. | None. | ✅ PASSED | [`users_step9_filled.png`](../uat_target3_cicodecm/users_step9_filled.png) |
| 5 | **Select Role, Department, Grade Level, Line Manager, Regions; enter Staff ID/Job Title** | Display role / Department / list of grade levels / list of users / Region | All selected and confirmed via the underlying native `<select>` elements (not just the display widget): Role = QUALITY ASSURANCE TESTER, Department = Customer Service, Grade Level = Level 1, Line Manager = Raissa Boyomo, Regions = "45b,admiralty road,Eti Osa". Staff ID and Job Title free-text fields also accepted input correctly. | None — the custom multi-select "chosen" widgets do correctly sync to their real form fields (verified via DOM, ruling out a widget-sync bug as the cause of row 6). | ✅ PASSED | [`users_step9_filled.png`](../uat_target3_cicodecm/users_step9_filled.png), [`users_step10_before_submit.png`](../uat_target3_cicodecm/users_step10_before_submit.png) |
| 6 | **Click on Create button (1st attempt, fully valid data)** | Display a successful message, "successfully Created." | 🛑 **CONFIRMED BUG (P0)**: the form silently reset to a blank "New User" page. No success message, no error message, no toast. Verified via a full page reload of the Users list and a text search for "UATValid" that the user was **never created** (Total Records remained 12; search returned "1 of 0"). | ❌ **CONFIRMED BUG — P0** | [`users_step11_create_result.png`](../uat_target3_cicodecm/users_step11_create_result.png), [`users_step12_list_after_create.png`](../uat_target3_cicodecm/users_step12_list_after_create.png), [`users_step13_search_check.png`](../uat_target3_cicodecm/users_step13_search_check.png) |
| 7 | **Reproducibility check (2nd attempt, different valid data)** | Display a successful message, "successfully Created." | Repeated the exact same flow with entirely fresh data ("UATValid2"/"UserTest2", Staff ID "UAT-STAFF-002") and additionally confirmed the underlying `Teams[]` and `Users[districts][]` selects held the correct values immediately before submit. Result was identical: silent reset to a blank form, and a fresh full-page-reload search confirmed "UATValid2" was never created either. **Confirmed 2/2, ruling out a one-off fluke.** | ❌ **CONFIRMED BUG — P0 (2/2 reproductions)** | [`users_step17_regions_open.png`](../uat_target3_cicodecm/users_step17_regions_open.png) |
| 8 | **Create User (invalid Credential) — invalid email format** | Should not accept invalid email address | Entered `not-a-valid-email` (missing `@`). Native browser validation correctly blocked submission: **"Please include an '@' in the email address. 'not-a-valid-email' is missing an '@'."** | ✅ PASSED | [`users_step22_invalid_result.png`](../uat_target3_cicodecm/users_step22_invalid_result.png) |
| 9 | **Create User (invalid Credential) — invalid phone format** | Should not accept invalid phone number | Entered `abc123XYZ` with a valid email this time (to isolate the phone check). Native browser validation correctly blocked submission: **"Please match the requested format. Enter a valid phone number."** | ✅ PASSED | [`users_step23_invalid_phone_result.png`](../uat_target3_cicodecm/users_step23_invalid_phone_result.png) |
| 10 | **Create User (invalid Credential) — duplicate Staff ID** | Display an error message, "Staff ID has been entered already." | **Could not be executed.** This check requires a Staff ID that already belongs to a successfully-created user, but rows 6–7 confirmed no user can currently be created at all on this tenant — there is no valid baseline to duplicate against. Marked as blocked-by-defect-#6, not skipped by choice. | ⛔ **BLOCKED (by row 6/7's defect)** | — |

---

## 3. Confirmed Defects

1. **P0 — Create User is completely broken.** Submitting the New User form with every visibly-required field correctly filled (Firstname, Lastname, Email, Phone, Grade Level, Job Title, Regions, plus Role/Department/Line Manager) does not create a user. The form silently resets to a blank create page with no success or error feedback of any kind. Confirmed twice with two different complete, valid datasets — not a one-off fluke. This blocks the entire "Create User (valid Credential)" scenario and, by extension, the "Create User (invalid Credential)" duplicate-Staff-ID check, since there is no way to establish a baseline user to duplicate against.

## 4. Deviations

- None scored as deviations this session — the one naming/ordering difference (script says "roles, Department, user"; live sidebar order is "Department / Roles / Users") is cosmetic and not worth a separate deviation entry.

---

## 5. Suggested Improvements

### A. Fix priority
1. **P0 — Investigate the Create User silent-failure.** Given that: (a) the underlying form fields and custom dropdown widgets all demonstrably hold the correct values immediately before submit (verified via direct DOM inspection), and (b) the failure is 100% silent with zero client-side error, this strongly suggests either a server-side validation failure that isn't being surfaced to the frontend, or a broken/misconfigured success-handler that fails to redirect or toast even on a genuine success. Recommend checking server logs for the two submission timestamps in this session (17 Sep 2026, staff IDs `UAT-STAFF-001` and `UAT-STAFF-002`) to determine whether the POST even reached a validation step, or failed earlier.
2. **P2 — Add a duplicate-Staff-ID test once #1 is fixed.** The script's specific negative-path scenario (row 10 above) is entirely reasonable and should be re-run as soon as Create User works, to confirm the "Staff ID has been entered already" message actually appears.

### B. Test-script / coverage gaps
- Consider moving these ~38 rows out of the `CONTACTS` sheet into their own `USERS` sheet tab in the source spreadsheet — their current location makes them easy to miss or double-count against Contacts coverage, as happened in this project's own reporting until this session.
- No test exists for what happens when a **required** field (Grade Level, Regions) is left blank on Create User — worth adding once the base Create flow is fixed, both to confirm proper client-side validation and to help diagnose whether the P0 defect here is itself a required-field issue.

---

**Session artifacts**: 23 screenshots captured under [`uat_target3_cicodecm/`](../uat_target3_cicodecm/) (`users_step*.png`). No user was successfully created on the staging tenant this session (both attempts failed per the P0 defect above) — Total Records remained 12 throughout.
