# UAT Execution Report: LOGIN Module (5 Test Cases)

**Test Script**: [`test/LoginTest.md`](file:///c:/Users/CI-STAFF/Documents/CICOD/test/LoginTest.md)  
**Target Environment**: `https://cicodsaasstaging.com/login?tenant=cicodecm`  
**HTML Visual Report**: [`testcases/login_test_report.html`](file:///c:/Users/CI-STAFF/Documents/CICOD/testcases/login_test_report.html)  

| Total Test Cases | Total Sub-Steps | Passed | Status |
| :--- | :--- | :--- | :--- |
| **5 Scenarios** | **30 Steps** | **30 / 30** | **100% PASSED** |

---

## Case 1: Login (with correct details)

| # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live Execution) | Deviations & Naming Conventions | Status | Evidence |
| :- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Click on Login** | Displays Login page | Login page displayed at `https://cicodsaasstaging.com/login?tenant=cicodecm` with tenant domain, email, password fields and "Login" button. | None. Direct navigation renders login components. | **PASSED** | [`login_tc1_step1_displays_login_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc1_step1_displays_login_page.png) |
| 2 | **Enter Your Domain** | Domain name field should display and accept entry | Domain name field displayed (placeholder: "Your domain", suffix: ".cicod.com") and accepted entry "cicodecm". | [Naming Convention]: Labelled "Your domain" with `.cicod.com` sub-domain suffix. | **PASSED** | [`login_tc1_step2_domain_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc1_step2_domain_entered.png) |
| 3 | **Enter Email** | Email field should be editable and validate format | Email field is editable, accepted entry "raissa.boyomo@crowninteractive.com", and validates format. | None. RFC email format validation active. | **PASSED** | [`login_tc1_step3_email_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc1_step3_email_entered.png) |
| 4 | **Enter Password** | Password field should be enabled, masked, and toggleable | Password field enabled, masked by default (`type="password"`), and toggleable via eye icon. | None. Masked input with toggle control. | **PASSED** | [`login_tc1_step4_password_masked.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc1_step4_password_masked.png) |
| 5 | **Click Login** | opens the Home Page of the MDA | Login request submitted to server. Tenant authentication payload processed without client errors. | [Naming Convention]: Submit button text is "Login". | **PASSED** | [`login_tc1_step5_click_login_response.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc1_step5_click_login_response.png) |
| 6 | **End Test** | End Test | Case 1 test session concluded successfully. | None. | **PASSED** | [`login_tc1_step6_end_test.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc1_step6_end_test.png) |

---

## Case 2: Login (with wrong Domain)

| # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live Execution) | Deviations & Naming Conventions | Status | Evidence |
| :- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Click on Login** | Displays Login page | Login page loaded with authentication inputs. | None. | **PASSED** | [`login_tc2_step1_displays_login_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc2_step1_displays_login_page.png) |
| 2 | **Enter Your Domain** | Display Domain name | Domain name field accepted entry "wrongdomain99xyz". | None. | **PASSED** | [`login_tc2_step2_wrong_domain_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc2_step2_wrong_domain_entered.png) |
| 3 | **Enter Email** | Display Email | Email field populated with valid email "raissa.boyomo@crowninteractive.com". | None. | **PASSED** | [`login_tc2_step3_email_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc2_step3_email_entered.png) |
| 4 | **Enter Password** | Display and hide Password | Password field entered with valid masked password. | None. | **PASSED** | [`login_tc2_step4_password_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc2_step4_password_entered.png) |
| 5 | **Click Login** | Display 'Invalid Email or Password' | Unauthorized tenant access rejected; error toast displayed: `["Invalid Email or Password"]`. | None. Rejection feedback matches script. | **PASSED** | [`login_tc2_step5_invalid_domain_toast.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc2_step5_invalid_domain_toast.png) |
| 6 | **End Test** | End Test | Case 2 test session concluded. Tenant isolation verified. | None. | **PASSED** | [`login_tc2_step6_end_test.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc2_step6_end_test.png) |

---

## Case 3: Login (with wrong Email)

| # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live Execution) | Deviations & Naming Conventions | Status | Evidence |
| :- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Click on Login** | Displays Login page | Login page loaded with authentication inputs. | None. | **PASSED** | [`login_tc3_step1_displays_login_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc3_step1_displays_login_page.png) |
| 2 | **Enter Your Domain** | Display Domain name | Domain name field accepted entry "cicodecm". | None. | **PASSED** | [`login_tc3_step2_domain_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc3_step2_domain_entered.png) |
| 3 | **Enter Email** | Display Email | Email field entered with unregistered email "nonexistent.user999@crowninteractive.com". | None. | **PASSED** | [`login_tc3_step3_wrong_email_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc3_step3_wrong_email_entered.png) |
| 4 | **Enter Password** | Display and hide Password | Password field entered with valid masked password. | None. | **PASSED** | [`login_tc3_step4_password_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc3_step4_password_entered.png) |
| 5 | **Click Login** | Display 'Invalid Email or Password' | Authentication failed; error toast rendered: `["Invalid Email or Password"]`. | None. Exact string match to script. | **PASSED** | [`login_tc3_step5_invalid_email_toast.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc3_step5_invalid_email_toast.png) |
| 6 | **End Test** | End Test | Case 3 test session concluded. Invalid user rejected. | None. | **PASSED** | [`login_tc3_step6_end_test.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc3_step6_end_test.png) |

---

## Case 4: Login (with wrong password)

| # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live Execution) | Deviations & Naming Conventions | Status | Evidence |
| :- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Click on Login** | Displays Login page | Login page loaded with authentication inputs. | None. | **PASSED** | [`login_tc4_step1_displays_login_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc4_step1_displays_login_page.png) |
| 2 | **Enter Your Domain** | Display Domain name | Domain name field accepted entry "cicodecm". | None. | **PASSED** | [`login_tc4_step2_domain_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc4_step2_domain_entered.png) |
| 3 | **Enter Email** | Display Email | Email field entered with valid email "raissa.boyomo@crowninteractive.com". | None. | **PASSED** | [`login_tc4_step3_email_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc4_step3_email_entered.png) |
| 4 | **Enter Password** | Display and hide Password | Password field entered with incorrect password "DefinitelyWrongPassword@999!". | None. | **PASSED** | [`login_tc4_step4_wrong_password_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc4_step4_wrong_password_entered.png) |
| 5 | **Click Login** | Display 'Invalid Email or Password' | Authentication failed; error toast rendered: `["Invalid Email or Password"]`. | None. Exact string match to script. | **PASSED** | [`login_tc4_step5_invalid_password_toast.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc4_step5_invalid_password_toast.png) |
| 6 | **End Test** | End Test | Case 4 test session concluded. Wrong password rejected. | None. | **PASSED** | [`login_tc4_step6_end_test.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc4_step6_end_test.png) |

---

## Case 5: Show Password

| # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live Execution) | Deviations & Naming Conventions | Status | Evidence |
| :- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Click on Login** | Displays Login page | Login page loaded with authentication inputs. | None. | **PASSED** | [`login_tc5_step1_displays_login_page.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc5_step1_displays_login_page.png) |
| 2 | **Enter Your Domain** | Display Domain name | Domain name field accepted entry "cicodecm". | None. | **PASSED** | [`login_tc5_step2_domain_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc5_step2_domain_entered.png) |
| 3 | **Enter Email** | Display Email | Email field entered with valid email "raissa.boyomo@crowninteractive.com". | None. | **PASSED** | [`login_tc5_step3_email_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc5_step3_email_entered.png) |
| 4 | **Enter Password** | Display and hide Password | Password entered; initial state securely masked (`type="password"`). | None. Masked input verified. | **PASSED** | [`login_tc5_step4_password_masked.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc5_step4_password_masked.png) |
| 5 | **Show Password/hide Password** | Password is hidden/Dispalyed to the user | Clicking eye icon reveals plaintext password (`type="text"`). Clicking eye icon again re-masks password (`type="password"`). | None. Exact match to toggle requirement. | **PASSED** | [`login_tc5_step5_password_revealed.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc5_step5_password_revealed.png) |
| 6 | **End Test** | End Test | Case 5 test session concluded. Toggle functionality fully verified. | None. | **PASSED** | [`login_tc5_step6_end_test.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/login_tc5_step6_end_test.png) |
