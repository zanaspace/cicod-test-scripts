# UAT Execution Report: USERS Module

**Test Script Source**: [`ECMS TEST SCRIPT RECENT VERSION.xlsx`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/ECMS%20TEST%20SCRIPT%20RECENT%20VERSION.xlsx) (Sheet: `USER`, 1156 raw rows / 19 real scenarios / ~163 in-scope steps — see script-quirk note below)
**Target Environment**: `https://cicodecms.cicodsaasstaging.com/ecms/` (Tenant: `cicodecms`)
**HTML Visual Report**: [`testCases/users_test_report.html`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/testCases/users_test_report.html)
**Executed Date**: September 17, 2026
**Tester Profile**: `raissa.boyomo@crowninteractive.com`
**Scope note**: Functional/UI verification only — no backend/API root-cause analysis beyond confirming whether a user-visible action succeeds or fails.

> [!NOTE]
> **Script-organization quirk**: the last ~13 rows of the `USER` sheet ("Create Form Module" / "Sub Module Act Now" — Add Comment, Append Signature, Assign to Resource/User, Request Assets, Update Status/Ticket, Upload Document) are misplaced `TICKET`-module content, not Users content. Out of scope for this report, consistent with the same kind of quirk already found and documented in the Contacts sheet.

---

## 1. Executive Summary

| Total Checkpoints Verified | Passed | Deviations | Confirmed Defects | Blocked (by defect) |
| :--- | :--- | :--- | :--- | :--- |
| **27 checkpoints** | **17** | **2** | **3** | **5 rows (Department module entirely inaccessible)** |

> [!WARNING]
> **Three distinct confirmed defects this session, one of them severe:**
> 1. **P0 — Create User is completely broken.** Confirmed 2/2 with fully valid data (see the original finding, retained from the prior session): the form silently resets with no success or error message, and no user is ever persisted.
> 2. **P0 — The entire Department page is broken.** Both the sidebar link and a direct URL visit to `r=team/index` return "Oops! Something went wrong. We are fixing it!" every time (confirmed 2/2). This blocks all five Department scenarios (Create/Edit/Suspend/Unsuspend/Search Department) outright — there is no way to reach the feature at all.
> 3. **P1 — Suspend User can be blocked by an unrelated "Job Title cannot be blank" validation error.** Attempting to suspend a user whose Job Title field has never been filled in (true for most of this tenant's seed users) fails with that message instead of suspending them. Confirmed via a clean A/B test: the exact same action succeeded immediately on a user whose Job Title had been filled in moments earlier.
>
> In sharp contrast to the Contacts module, **View User, Edit User, Unsuspend User, Make A Resource, Search Users, and every Role scenario (Create/Edit/Suspend/Unsuspend/Search) all work correctly** — this module is not uniformly broken, the defects above are specific and isolable.

---

## 2. Step-by-Step Test Execution & Observations

| # | Feature | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live Execution) | Status | Evidence |
| :-: | :--- | :--- | :--- | :--- | :-: | :--- |
| 1 | **Menu Navigation** | From the Menu click on User | A sub menu "roles, Department, user" should be displayed | Confirmed: sidebar "Users" expands to **Department / Roles / Users** — exact match (different order, same 3 items). | ✅ PASSED | [`users_step1_menu.png`](../uat_target3_cicodecm/users_step1_menu.png) |
| 2 | **Click on User sub-menu** | Display User page | "Users" list loads: Total Records 12, Total Active 11, Total Suspended 1, with Name/Email/Phone/Department/Status/Actions columns. | ✅ PASSED | [`users_step3_list.png`](../uat_target3_cicodecm/users_step3_list.png) |
| 3 | **Click on Create button** | Display new user page | "New User" form loads with Firstname*, Lastname*, Email*, Phone*, Role, Department, Grade Level*, Line Manager, Profile Picture, Staff ID, Job Title*, Regions*, Address1/2, City, State — matches and exceeds the script's field list. | ✅ PASSED | [`users_step4_create_form.png`](../uat_target3_cicodecm/users_step4_create_form.png) |
| 4 | **Enter valid Firstname/Lastname/Email/Phone, select Role/Department/Grade Level/Line Manager/Regions, enter Staff ID/Job Title** | Display each field correctly | All fields accepted and confirmed via the underlying native `<select>` elements (not just the display widget) immediately before submit — ruling out a widget-sync bug as the cause of row 5. | ✅ PASSED | [`users_step10_before_submit.png`](../uat_target3_cicodecm/users_step10_before_submit.png) |
| 5 | **Click on Create button (fully valid data)** | Display a successful message, "successfully Created." | 🛑 **CONFIRMED BUG (P0, 2/2 reproductions)**: the form silently resets to a blank "New User" page. No success message, no error message, no toast. Verified via a full page reload and a text search that the user was never created (Total Records unchanged; search returned "1 of 0"). Repeated with entirely fresh data a second time — identical silent failure. | ❌ **CONFIRMED BUG (P0)** | [`users_step13_search_check.png`](../uat_target3_cicodecm/users_step13_search_check.png), [`users_step17_regions_open.png`](../uat_target3_cicodecm/users_step17_regions_open.png) |
| 6 | **Create User (invalid Credential) — invalid email format** | Should not accept invalid email address | Entered `not-a-valid-email` (missing `@`). Native browser validation correctly blocked submission: "Please include an '@' in the email address..." | ✅ PASSED | [`users_step22_invalid_result.png`](../uat_target3_cicodecm/users_step22_invalid_result.png) |
| 7 | **Create User (invalid Credential) — invalid phone format** | Should not accept invalid phone number | Entered `abc123XYZ` with a valid email to isolate the check. Native browser validation correctly blocked submission: "Please match the requested format..." | ✅ PASSED | [`users_step23_invalid_phone_result.png`](../uat_target3_cicodecm/users_step23_invalid_phone_result.png) |
| 8 | **Create User (invalid Credential) — duplicate Staff ID** | Display an error message, "Staff ID has been entered already." | Could not be executed — requires a Staff ID belonging to a successfully-created user, but row 5 confirmed no user can currently be created at all. Blocked by row 5's defect. | ⛔ **BLOCKED (by row 5)** | — |
| 9 | **Create User (invalid Credential) — leaving compulsory fields empty** | Should not accept blank required fields | Submitted the form with every field blank. Native browser validation correctly blocked submission on the first required field: "Please fill out this field." | ✅ PASSED | [`users_step68_empty_submit.png`](../uat_target3_cicodecm/users_step68_empty_submit.png) |
| 10 | **View User** | Click into an existing user | Display user profile page | Opened "Chinwuba Okafor" — full profile renders correctly: Email, Phone, Role, Job Title, Department, Grade Level, Location, Assigned Tasks summary, "Assign to region"/"Assign to department" actions. | ✅ PASSED | [`users_step25_view_user.png`](../uat_target3_cicodecm/users_step25_view_user.png) |
| 11 | **Edit User — form pre-fill** | Click Update on a user | Display the update form, pre-filled | Update User form correctly pre-fills every field including the multi-select **Regions** (shown as "45b,admiralty road,Eti Osa , SELF-SERVICE") and **State** ("Lagos") — a clean contrast to the equivalent Contacts-module bug. | ✅ PASSED | [`users_step27_scrolled_fields.png`](../uat_target3_cicodecm/users_step27_scrolled_fields.png) |
| 12 | **Edit User — save and persist** | Update a field and save | Should update successfully | Set Job Title to "UAT Updated Job Title" and saved. **"Successful"** confirmation shown; reopening the profile confirmed the new Job Title persisted correctly. | ✅ PASSED | [`users_step28_update_result.png`](../uat_target3_cicodecm/users_step28_update_result.png) |
| 13 | **Suspend User (target with blank Job Title)** | Should suspend the user | 🛑 **CONFIRMED BUG**: attempting to suspend "Reb Saku" (Job Title never filled in) failed with **"Job Title cannot be blank."** — an unrelated full-profile validation error blocking what should be a simple status toggle. User remained ACTIVE. | ❌ **CONFIRMED BUG** | [`users_step32_after_suspend_error.png`](../uat_target3_cicodecm/users_step32_after_suspend_error.png) |
| 14 | **Suspend User (target with Job Title filled) — isolating control** | Should suspend the user | Immediately suspended "Chinwuba Okafor" (whose Job Title was set to "UAT Updated Job Title" in row 12) — succeeded cleanly: **"Suspended"** confirmation, status flipped to SUSPENDED, Total Suspended incremented. Confirms the root cause is specifically the blank Job Title, not a general Suspend failure. | ✅ PASSED (isolates row 13's root cause) | [`users_step34_okafor_suspend_result.png`](../uat_target3_cicodecm/users_step34_okafor_suspend_result.png) |
| 15 | **Unsuspend User** | Should unsuspend the user | Unsuspended "Chinwuba Okafor" immediately after row 14. **"Un-Suspended"** confirmation shown, status correctly reverted to ACTIVE. | ✅ PASSED | [`users_step36_unsuspend_result.png`](../uat_target3_cicodecm/users_step36_unsuspend_result.png) |
| 16 | **Make A Resource** | Should convert the user into a bookable Resource | "New Resource" form opened with Next of Kin, Address, State*, Date Joined* (defaulted to `01-01-1970` — a cosmetic quirk worth flagging, see Deviations), Resource Type*, Resource Level*, Resource Schedule. Filled State/Type/Level and submitted: **"Successful"**. User was removed from the standard Users list (Total Records 12→11) and correctly appeared in the Resource module's own list instead. | ✅ PASSED | [`users_step40_makeresource_submitted.png`](../uat_target3_cicodecm/users_step40_makeresource_submitted.png), [`users_step41_resource_list.png`](../uat_target3_cicodecm/users_step41_resource_list.png) |
| 17 | **Search Users** | Filter user by name | Confirmed: searching "Prince" correctly narrowed the list to the single matching user, "Prince Ekpenyong." | ✅ PASSED | [`users_step42_search_result.png`](../uat_target3_cicodecm/users_step42_search_result.png) |
| 18 | **Create Department** | Display Department page, then create a new department | 🛑 **CONFIRMED BUG (P0, 2/2 reproductions)**: both clicking the sidebar "Department" link and navigating directly to `index.php?r=team/index` return **"Oops! Something went wrong. We are fixing it! Please come back in a while."** every time. The page never loads, so Create Department cannot be reached at all. | ❌ **CONFIRMED BUG (P0)** | [`users_step45_dept_retry.png`](../uat_target3_cicodecm/users_step45_dept_retry.png) |
| 19 | **Edit Department** | Display Department page, then update an existing department | Blocked by row 18's defect — the Department page itself never loads, so this scenario cannot be reached. | ⛔ **BLOCKED (by row 18)** | [`users_step45_dept_retry.png`](../uat_target3_cicodecm/users_step45_dept_retry.png) |
| 20 | **Suspend Department** | Display Department page, then suspend a department | Blocked by row 18's defect. | ⛔ **BLOCKED (by row 18)** | [`users_step45_dept_retry.png`](../uat_target3_cicodecm/users_step45_dept_retry.png) |
| 21 | **Unsuspend Department** | Display Department page, then unsuspend a department | Blocked by row 18's defect. | ⛔ **BLOCKED (by row 18)** | [`users_step45_dept_retry.png`](../uat_target3_cicodecm/users_step45_dept_retry.png) |
| 22 | **Search Department** | Display Department page, then filter by name | Blocked by row 18's defect. | ⛔ **BLOCKED (by row 18)** | [`users_step45_dept_retry.png`](../uat_target3_cicodecm/users_step45_dept_retry.png) |
| 23 | **Create Role** | Should display Create Role form, then save successfully | "Create Role" form (Role Name, Description) accepted "UAT Test Role" / description. Proceeding through the "Give role access" feature-checklist wizard (1 of 2) and workflow-queue-access wizard (2 of 2, left unchecked), **"Role Successfully Created."** confirmed and persisted on reload. | ✅ PASSED | [`users_step49_role_step2.png`](../uat_target3_cicodecm/users_step49_role_step2.png) |
| 24 | **Edit Role — form pre-fill and save** | Should display Update Role form pre-filled, then save | Opened Update on "UAT Test Role" — Role Name and Description correctly pre-filled, feature-access checklist correctly pre-checked from creation. Edited the description and completed the same 2-step wizard through to Finish: change persisted correctly on reload (confirmed via `document.body.innerText`). | ✅ PASSED | [`users_step62_role_updated_view.png`](../uat_target3_cicodecm/users_step62_role_updated_view.png) |
| 25 | **Suspend Role** | Should suspend the role | Confirmed working: **"Suspended"** message shown, status flipped, Total Suspended incremented. The native confirm dialog reads "Suspend this **Region** to Role?" — a minor copy/label bug (should say "Suspend this Role?"), not a functional defect. | ✅ PASSED (with a minor copy deviation) | [`users_step64_role_suspend_result.png`](../uat_target3_cicodecm/users_step64_role_suspend_result.png) |
| 26 | **Unsuspend Role** | Should unsuspend the role | Confirmed working: **"Un-Suspended"** message shown, status correctly reverted to ACTIVE. Same minor "...Region to Role?" dialog-text quirk as row 25. | ✅ PASSED | [`users_step66_role_unsuspend_result.png`](../uat_target3_cicodecm/users_step66_role_unsuspend_result.png) |
| 27 | **Search Roles** | Filter role by name | Confirmed: searching "QUALITY" correctly narrowed the list to the single matching role, "QUALITY ASSURANCE TESTER." | ✅ PASSED | [`users_step67_role_search_result.png`](../uat_target3_cicodecm/users_step67_role_search_result.png) |

---

## 3. Confirmed Defects

1. **P0 — Create User is completely broken.** Submitting the New User form with every visibly-required field correctly filled does not create a user, with zero feedback of any kind. Confirmed 2/2 with two different complete, valid datasets.
2. **P0 — The entire Department feature is inaccessible.** Both the sidebar link and a direct URL visit consistently return a generic error page ("Oops! Something went wrong"). This blocks Create, Edit, Suspend, Unsuspend, and Search Department entirely — none of the 5 could be executed because the page itself never loads.
3. **P1 — Suspend User can be blocked by an unrelated "Job Title cannot be blank" validation.** Any user whose Job Title was never filled in (which describes most of this tenant's existing users, since none went through a working Create User flow) cannot be suspended — the action fails with a full-profile validation error instead of performing what should be a simple status change. Confirmed via a controlled A/B test on two different users in the same session.

## 4. Deviations (Not Bugs, But Worth a Note)

- **"Make A Resource"**'s Date Joined field defaults to `01-01-1970` (Unix epoch) rather than blank or today's date — easy to miss and submit unintentionally.
- The Suspend/Unsuspend **Role** confirm dialogs read "...this **Region** to Role?" instead of "...this Role?" — a copy/label bug, functionally harmless.
- Both "Create Role" and "Edit Role" route through the same 2-step "give role access" wizard (feature checklist, then workflow/queue access) rather than a single save — consistent with the pattern, not a defect, but worth knowing when scripting against this flow.

---

## 5. Suggested Improvements

### A. Fix priority
1. **P0 — Investigate the Create User silent-failure** (carried over from the prior session's finding): all form fields and custom widgets demonstrably hold correct values immediately before submit, yet the result is 100% silent. Check server logs for the submission timestamps in this session to determine whether the POST reached validation at all.
2. **P0 — Restore the Department page.** This is a complete feature outage, not a partial defect — check the same class of error (`r=team/index`) against recent deploys or config changes, since Roles (`r=rightTemplate/index`) on the same "Users" menu works fine.
3. **P1 — Decouple Suspend User from full-profile validation.** A status-toggle action should not re-validate unrelated fields like Job Title; either relax that validation for the suspend/unsuspend endpoints specifically, or make Job Title genuinely required at Create User time so this state can never occur.

### B. Test-script / coverage gaps
- Once Create User is fixed, re-run the duplicate-Staff-ID negative test (row 8) — it's a reasonable check that simply has no valid baseline to run against right now.
- Once Department is restored, execute the 5 blocked scenarios (Create/Edit/Suspend/Unsuspend/Search Department) that could not be reached this session at all.
- Consider a dedicated regression check tying Suspend/Unsuspend to a full-profile-completeness matrix (blank vs. filled Job Title, Staff ID, etc.) given how easily row 13's defect was found — there may be other required-but-not-required fields lurking in the same validation path.

---

**Session artifacts**: 73 `users_step*.png` screenshots under [`uat_target3_cicodecm/`](../uat_target3_cicodecm/). One role ("UAT Test Role") was created and left ACTIVE on the staging tenant; one existing user ("Chinwuba Okafor") had its Job Title updated and was converted into a Resource via "Make A Resource" (no longer appears in the standard Users list, appears in Resource instead) as part of this testing — both are safe, intentional test artifacts. No new user could be created via Create User (P0 defect). See [`test/ContactsTest_Results.md`](ContactsTest_Results.md) for the related Contacts-module testing that this report was split out from.
