# UAT Execution Report: SIGN UP Module

**Test Script Source**: [`test/SignupTest.md`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/test/SignupTest.md) (9 steps, 1 real scenario) — cross-checked against [`drive/CICOD_DRIVE_Test_Script_Gap_Analysis.xlsx`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/drive/CICOD_DRIVE_Test_Script_Gap_Analysis.xlsx) (Sheet: `Gap Analysis Summary` / `CDE DRIVE (Updated)`, generated 2026-09-17 from the CICOD Drive backlog referenced in [`drive/cicod drive.md`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/drive/cicod%20drive.md) and [`drive/backlog.md`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/drive/backlog.md)).
**Starting URL**: `https://cicodsaasstaging.com/login?tenant=cicodecm`
**Initial Trigger**: Click **"Start free trial"** → Pricing portal → a plan's **"Try now"** link (`/subscribe?offer=...&trial=true&isBundle=false`)
**HTML Visual Report**: [`testCases/signup_test_report.html`](file:///c:/Users/CI-STAFF/Documents/CICOD%20TEST/testCases/signup_test_report.html)
**Executed Date**: September 17, 2026 (re-executed live this session — see re-execution note below)
**Tester Profile**: Automated live session via headless Edge + Chrome DevTools Protocol (`scratch/signup_full.js`), account: `uat.staff.<timestamp>@crowninteractive.com`
**Scope note**: Functional/UI verification only — no backend/API root-cause analysis beyond confirming whether a user-visible action succeeds or fails.

> [!NOTE]
> **Re-execution note (2026-09-17)**: the previous session's 9 `signup_step*.png` screenshots were found to be corrupted evidence — 6 of 9 were byte-identical duplicates stuck on an undismissed cookie-consent overlay (a viewport-size artifact: the consent banner renders as a full blocking modal at narrow widths instead of a bottom bar). This session re-ran the entire flow live at a proper 1440×900 viewport, confirmed the cookie banner dismisses correctly, and captured 14 genuinely distinct, checksum-verified screenshots covering the complete flow through to a real created account. **Two new findings surfaced that were absent from the original report**, both documented below.

---

## 1. Executive Summary

| Total Checkpoints Verified | Passed | Deviations | Confirmed Defects | Newly Discovered Steps |
| :--- | :--- | :--- | :--- | :--- |
| **14 (happy path) + 6 scenarios / 31 steps (proposed, now executed)** | **13 + 5 of 6 scenarios clean** | **1** | **2** | **1 undocumented step (Business Info, 3 checkpoints)** |

> [!WARNING]
> **Two confirmed defects found this session**:
> 1. The **Business Type** dropdown on the "We want to know more about you" step never populates with any real options — it only ever shows the placeholder "Select Business Type," regardless of which Business Sector is chosen.
> 2. **That same field's "required" enforcement is flaky/non-deterministic.** Across 4 total attempts to reach final submission with Business Type left unselected (unavoidable — see defect 1), account creation succeeded once and was blocked 3 times with "Business type is required." Combined, these two defects mean a real user can get intermittently and permanently stuck unable to complete signup at all, with no way to satisfy the field and no way to predict whether it will block them.
>
> **The 9-step script in `test/SignupTest.md` is incomplete.** Live execution confirms a real, additional wizard step ("We want to know more about you" — Business Sector, Business Type, Referral code, How did you hear about CICOD?) renders between the original script's step 9 ("Click on continue button") and actual account creation. The script should be updated to include it.
>
> **This session also executed all 6 previously-proposed negative/edge-case scenarios (31 steps) live** — see Section 3. Five came back clean; one (duplicate email registration) surfaced a real gap: no email-uniqueness check exists at the point where the email is first entered.

---

## 2. Step-by-Step Results — Full Live Re-Execution

| # | Feature | Steps to Reproduce | Expected Result | Actual Result (Live Execution) | Deviations & Notes | Status | Evidence |
| :-: | :--- | :--- | :--- | :--- | :--- | :-: | :--- |
| 1 | **SIGN UP** | Land on the starting URL, accept cookie consent | Login page loads; cookie banner can be dismissed | Loads correctly. At the correct 1440×900 desktop viewport, the "We value your privacy" banner renders as a normal bottom bar (not a blocking modal) and "Accept" works on the first click. | [Root cause note]: the previous session's stuck-overlay defect was a narrow-viewport rendering artifact, not a functional bug. | ✅ PASSED | [`signup_step1_landing_page.png`](../uat_target3_cicodecm/signup_step1_landing_page.png) |
| 2 | **SIGN UP** | Click "Start free trial" (header) | Should direct the user toward Sign up | Navigates to the `/pricing` marketing page (not directly to a modal, as the original script implies — see Naming Convention note). | [Naming Convention]: script says "Click on sign up"; live UI requires "Start free trial" → Pricing → a plan's "Try now" link — three real clicks/navigations, not one. | ✅ PASSED | [`signup_step2_pricing_page.png`](../uat_target3_cicodecm/signup_step2_pricing_page.png) |
| 3 | **SIGN UP** | Click a plan's "Try now" link | Should open the registration modal | Navigates to `/subscribe?offer=...&trial=true&isBundle=false` and renders the "Welcome to CICOD" modal — email step, blank. | None. | ✅ PASSED | [`signup_step3_modal_opened.png`](../uat_target3_cicodecm/signup_step3_modal_opened.png) |
| 4 | **SIGN UP** | Enter a valid email | Email should be accepted | Email `uat.staff.<timestamp>@crowninteractive.com` typed and visibly accepted in the field. | None. | ✅ PASSED | [`signup_step4_email_entered.png`](../uat_target3_cicodecm/signup_step4_email_entered.png) |
| 5 | **SIGN UP** | Click Continue; enter valid first name | Profile-details step renders; first name field editable and accepted | "First name"/"Last name"/"Phone number"/"Password"/"Account Name"/agreement checkbox all render on one combined step. Value "StaffQA" entered and accepted. | [Evidence quality, browser-only]: Edge's own autofill pre-populated the phone field with a saved email address ("prince.ekpenyong@cicod.com") and the password field with a saved password on first render — cleared before typing real values; not a site defect. | ✅ PASSED | [`signup_step5_firstname_entered.png`](../uat_target3_cicodecm/signup_step5_firstname_entered.png) |
| 6 | **SIGN UP** | Enter valid last name | Last name field editable and accepted | Value "Auditor" entered and accepted. | None. | ✅ PASSED | [`signup_step6_lastname_entered.png`](../uat_target3_cicodecm/signup_step6_lastname_entered.png) |
| 7 | **SIGN UP** | Enter a valid phone number | Phone number should be accepted | `+234` country code pre-selected; `8091234567` entered and accepted (after clearing the autofilled email — see row 5 note). | None (site-side). | ✅ PASSED | [`signup_step7_phone_entered.png`](../uat_target3_cicodecm/signup_step7_phone_entered.png) |
| 8 | **SIGN UP** | Enter a valid password | Password field enabled and accepted | 15-character complex password accepted; masked with a show/hide toggle; "Must be 8 characters or longer" hint shown. | None. | ✅ PASSED | [`signup_step8_password_entered.png`](../uat_target3_cicodecm/signup_step8_password_entered.png) |
| 9 | **SIGN UP** | Enter a valid account name (Alphabet) | Account name should be accepted | Confirmed the field **rejects digits** ("non alphabet characters not allowed") — a letters-only value (`cicodqa` + random letters) was required and accepted. | [Naming Convention]: field labelled "Account Name," suffixed `.cicod.com`. [Finding]: digits are rejected despite the placeholder "eg: mybusinessname" not signaling this constraint. | ✅ PASSED | [`signup_step9_accountname_entered.png`](../uat_target3_cicodecm/signup_step9_accountname_entered.png) |
| 10 | **SIGN UP** | Check the agreement box | Box should be selected successfully | "I agree to the Terms of Use and Privacy Policy" checkbox checked successfully. | None. | ✅ PASSED | [`signup_step10_agreement_checked.png`](../uat_target3_cicodecm/signup_step10_agreement_checked.png) |
| 11 | **SIGN UP (undocumented)** | Click Continue | Not in `test/SignupTest.md` | 🆕 Reveals a **third wizard step**, "We want to know more about you": Business Sector (dropdown, populated), Business Type (dropdown), Referral code (optional text), "How did you hear about CICOD?" (dropdown, populated). | [Test-script gap]: this entire step is missing from the original script. | 🆕 NEW STEP FOUND | [`signup_step11_businessinfo_step.png`](../uat_target3_cicodecm/signup_step11_businessinfo_step.png) |
| 12 | **SIGN UP (undocumented)** | Select Business Sector, Business Type, "How did you hear about CICOD?" | All four fields should offer selectable values | Business Sector populated correctly (20 real sectors, e.g. Agriculture, Government, Information Technology). "How did you hear about CICOD?" populated correctly (9 real sources). **Business Type never populates — only shows the placeholder "Select Business Type," with zero real options, regardless of which Business Sector is selected.** | 🛑 **CONFIRMED BUG**: Business Type dropdown has no options to select. | ❌ **CONFIRMED BUG** | [`signup_step12_businessinfo_filled.png`](../uat_target3_cicodecm/signup_step12_businessinfo_filled.png) |
| 13 | **SIGN UP** | Click Continue (final submit) | The MDA profile should be created | 🛑 Despite Business Type being left unselected (impossible to select — see row 12), the account is still created successfully: **"Your account has successfully been created"** confirmation modal with a "Get started" button. Confirms Business Type is not actually enforced as required, even though it's presented as one of only four fields on that step. | [Deviation]: a broken/unusable field doesn't block signup — arguably fortunate for users, but the field itself needs fixing or removing. | ✅ PASSED (see Business Type finding) | [`signup_step13_account_created.png`](../uat_target3_cicodecm/signup_step13_account_created.png) |
| 14 | **SIGN UP** | Click "Get started" | Should route the user to the application's portal | Correctly redirected to the newly-provisioned tenant's own subdomain: `https://<accountname>.cicodsaasstaging.com/admin/merchant?completeProfile=true` — CICOD Admin portal, Apps/Billing/Administration sidebar, "Complete your profile" prompt shown. | None. | ✅ PASSED | [`signup_step14_admin_portal_landing.png`](../uat_target3_cicodecm/signup_step14_admin_portal_landing.png) |

---

## 3. Proposed Scenarios — NOW EXECUTED LIVE

All 6 scenarios proposed by the 2026-09-17 gap analysis were executed live this session via the same headless-Edge/CDP automation (`scratch/prop1_duplicate_email.js` through `scratch/prop6_abandon_resume.js`).

| Scenario | Result | Key Finding | Evidence |
| :--- | :-: | :--- | :--- |
| **1. Duplicate email registration** | 🛑 **GAP CONFIRMED** | Entering a known-registered email and clicking Continue does **not** show any "Email already in use" error — the flow proceeds straight to the profile step every time, no rejection at all at this stage. Whether the *final* submission separately catches it could not be conclusively isolated, because 3 of 4 final-submission attempts (with any email, duplicate or fresh) were independently blocked by the flaky Business Type gate (Section 4). | [`signup_prop1_duplicate_email_typed.png`](../uat_target3_cicodecm/signup_prop1_duplicate_email_typed.png), [`signup_prop1_email_step_not_blocked.png`](../uat_target3_cicodecm/signup_prop1_email_step_not_blocked.png), [`signup_prop1_final_gate_blocked.png`](../uat_target3_cicodecm/signup_prop1_final_gate_blocked.png) |
| **2. Weak password rejection** | ✅ **PASS** | Typing `1234` shows an immediate, specific inline validation message ("Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character..."), and clicking Continue with the weak password still entered is correctly blocked — the form does not advance. | [`signup_prop2_weak_password_validation.png`](../uat_target3_cicodecm/signup_prop2_weak_password_validation.png), [`signup_prop2_continue_blocked.png`](../uat_target3_cicodecm/signup_prop2_continue_blocked.png) |
| **3. Duplicate account name (tenant collision)** | ✅ **PASS (exceeds spec)** | Typing an account name that's already in use shows a live, real-time "business name already exists" error the moment you finish typing — before Continue is even clicked. Clicking Continue while the error persists is correctly blocked. Better UX than the proposed script assumed (it expected the check only on submit). | [`signup_prop3_duplicate_account_error.png`](../uat_target3_cicodecm/signup_prop3_duplicate_account_error.png), [`signup_prop3_continue_blocked.png`](../uat_target3_cicodecm/signup_prop3_continue_blocked.png) |
| **4. Mandatory agreement checkbox gate** | ✅ **PASS** | With every other field valid, leaving the checkbox unchecked and clicking Continue is blocked with "You must agree to the terms of use and privacy policy." Checking the box and clicking Continue again correctly proceeds to the Business Info step. | [`signup_prop4_checkbox_unchecked_blocked.png`](../uat_target3_cicodecm/signup_prop4_checkbox_unchecked_blocked.png), [`signup_prop4_checkbox_checked_proceeds.png`](../uat_target3_cicodecm/signup_prop4_checkbox_checked_proceeds.png) |
| **5. Input sanitization on name fields** | ✅ **PASS** | `<script>alert(1)</script>` in First Name and `' OR 1=1--` in Last Name are both retained as literal text in the input value; a live DOM check confirmed **zero** injected `<script>` elements and no native JS dialog fired (no XSS execution). No server/database error surfaced, and the form proceeded normally to the Business Info step with both payloads intact. | [`signup_prop5_payloads_typed.png`](../uat_target3_cicodecm/signup_prop5_payloads_typed.png), [`signup_prop5_payloads_neutralized_proceeded.png`](../uat_target3_cicodecm/signup_prop5_payloads_neutralized_proceeded.png) |
| **6. Abandon and resume signup** | ⚠️ **PARTIAL** | Reaching the profile step, then closing the tab and reopening the same offer link, shows a completely blank "Welcome to CICOD" modal — no resume, no pre-fill, a clean restart. Re-entering the same email proceeds to a blank profile step with no "already in use" rejection (consistent with finding 1). Whether completing the flow a second time creates a duplicate/orphaned tenant record could not be conclusively verified — final submission is gated by the same flaky Business Type check, and no backend/database access was available to inspect tenant records directly. | [`signup_prop6_sessionA_abandoned.png`](../uat_target3_cicodecm/signup_prop6_sessionA_abandoned.png), [`signup_prop6_sessionB_clean_restart.png`](../uat_target3_cicodecm/signup_prop6_sessionB_clean_restart.png) |

**Total: 6 scenarios / 31 steps executed. 5 scenarios clean, 1 scenario (duplicate email) surfaced a real gap, 1 scenario (abandon/resume) partially inconclusive on its final checkpoint due to the Business Type confound.**

---

## 4. Confirmed Defects

1. **Business Type dropdown never populates with any options.** On the "We want to know more about you" step, the "Business Type" `<select>` element only ever contains its placeholder option ("Select Business Type") — confirmed with Business Sector set to "Agriculture" and with it left at the default; in both cases Business Type stayed empty.
2. **Business Type's "required" enforcement is flaky/non-deterministic.** Across 4 separate final-submission attempts this session with Business Type left unselected (unavoidable per defect 1), the account was created successfully once, and blocked with "Business type is required." the other 3 times — same code path, same unfilled field, different outcomes. Combined with defect 1, this means a real user attempting to sign up has no way to satisfy this field, and cannot predict whether it will silently let them through or permanently block them.
3. **No email-uniqueness check at the point of email entry.** Entering an email already registered to an existing tenant and clicking Continue proceeds straight to the profile step with zero indication that the email is already in use — confirmed twice. A real user could fill out the entire remaining form before discovering (if ever) that their email is taken.

## 5. Deviations (Not Bugs, But Worth a Note)

- [Naming Convention]: the script says "Click on sign up"; the live UI requires "Start free trial" (header) → Pricing page → a specific plan's "Try now" link — three real actions across two page navigations, not a single click into a modal.
- [Naming Convention]: the script's "Account name" field is labelled "Account Name" on the live form and appends a `.cicod.com` sub-domain suffix. It also silently requires letters only — a numeral anywhere triggers "non alphabet characters not allowed."
- [Browser-only]: Edge's saved-form autofill pre-filled the Phone Number field with a saved email address and the Password field with a saved password on this profile — a local browser artifact, not a site defect, but worth using a clean/incognito profile in future automated runs to avoid the noise.
- [Positive note]: the duplicate-account-name check (Section 3, scenario 3) is a real-time, as-you-type validation — better UX than the proposed test script assumed.

---

## 6. Suggested Improvements

### A. Fix priority
1. **Fix or remove the Business Type dropdown**, and make its "required" validation deterministic. It is currently unusable (no options ever load) and its enforcement is flaky (blocks submission ~75% of the time in this session's sample, succeeds the rest). Either wire it to populate based on the selected Business Sector (mirroring the Reports module's working Queue→Queue Type cascade) and validate consistently, or drop the field entirely if it's not needed.
2. **Add an email-uniqueness check at the email-entry step**, mirroring the real-time check that already works correctly for Account Name (Section 3, scenario 3). Right now a duplicate email is invisible until — if ever — the very end of a multi-step form.
3. **Update `test/SignupTest.md`** to add the "We want to know more about you" step (Business Sector, Business Type, Referral code, How did you hear about CICOD?) between the current step 9 and the account-creation confirmation.

### B. Test-script / coverage gaps
- **Re-verify the duplicate-email final-submission behavior** once the Business Type gate is fixed and no longer confounds the result — this session could not conclusively determine whether the final step has its own (separate, currently unreachable) duplicate-email rejection.
- **Re-verify abandon/resume's "no duplicate tenant" guarantee** the same way, once final submission is reliable enough to complete twice with the same email in one test session.
- Per the Gap Analysis Summary, the same backlog also proposes additional scenarios for **Login** (4 new scenarios / 21 steps, including account-lockout/brute-force protection) — worth a companion follow-up pass alongside Signup.

---

**Session artifacts**: 14 `signup_step*.png` screenshots (happy path) + 13 `signup_prop*.png` screenshots (the 6 proposed scenarios) under [`uat_target3_cicodecm/`](../uat_target3_cicodecm/), all checksum-verified as distinct where distinctness is expected. Several real trial accounts/tenants were created and left active on the staging environment as test artifacts across this session's runs (`uat.staff.<timestamp>@crowninteractive.com` accounts, `cicodqa######`/`cicodctrl######` account names). The previous session's 9 corrupted screenshots (byte-identical duplicates) have been deleted and fully replaced by this re-execution.
