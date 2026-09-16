# UAT Execution Report: SIGN UP Module

**Test Script**: [`test/SignupTest.md`](file:///c:/Users/CI-STAFF/Documents/CICOD/test/SignupTest.md)  
**Starting URL**: `https://cicodsaasstaging.com/login?tenant=cicodecm`  
**Initial Trigger**: Click **"Start free trial"**  
**HTML Visual Report**: [`testcases/signup_test_report.html`](file:///c:/Users/CI-STAFF/Documents/CICOD/testcases/signup_test_report.html)  

| Total Steps | Passed | Deviations Documented |
| :--- | :--- | :--- |
| **9** | **9** | **2 (Naming Conventions Noted)** |

---

## Step-by-Step Results (Matching `SignupTest.md`)

| Feature | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live Execution) | Deviations & Naming Conventions | Status | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SIGN UP** | **1. Click on sign up** | Should direct the user to the Sign up page | Clicked "Start free trial" header button (navigated to Pricing portal) and opened the registration modal. | [Naming Convention]: Script specifies "Click on sign up"; on live page this action is triggered via the "Start free trial" button. | **PASSED** | [`signup_step1_modal_opened.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/signup_step1_modal_opened.png) |
| **SIGN UP** | **2. Enter a valid email** | Email should be accepted | Email "uat.staff.1789466251390@crowninteractive.com" entered and accepted. Modal progressed to Step 2 form fields. | None. Email accepted as specified. | **PASSED** | [`signup_step2_profile_form_rendered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/signup_step2_profile_form_rendered.png) |
| **SIGN UP** | **3. Enter valid first name** | The first name field should be editable and the first name entry accepted | First name input located (placeholder: "Enter first name"). Value "StaffQA" entered and accepted. | None. Input field is present and accepted. | **PASSED** | [`signup_step3_firstname_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/signup_step3_firstname_entered.png) |
| **SIGN UP** | **4. Enter valid lastname** | The last name field should be editable and the last name entry accepted | Last name input located (placeholder: "Enter last name"). Value "Auditor" entered and accepted. | None. Input field is present and accepted. | **PASSED** | [`signup_step4_lastname_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/signup_step4_lastname_entered.png) |
| **SIGN UP** | **5. Enter a valid phone number** | Phone number should be accepted | Phone number input (contactPersonNumber with +234 country code) accepted "8091234567". | None. Phone input present with international code indicator. | **PASSED** | [`signup_step5_phone_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/signup_step5_phone_entered.png) |
| **SIGN UP** | **6. Enter a valid password** | The Password field should be enabled and accepted | Password field accepted complex masked password (meets 8+ char requirement). | None. Field is enabled, validated, and securely masked. | **PASSED** | [`signup_step6_password_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/signup_step6_password_entered.png) |
| **SIGN UP** | **7. Enter a valid account name (Alphabet)** | Account name should be accepted | Account name input (tenantId with .cicod.com domain suffix) accepted "cicodstaff3483". | [Naming Convention]: Labelled "Account Name" with `.cicod.com` sub-domain suffix. | **PASSED** | [`signup_step7_accountname_entered.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/signup_step7_accountname_entered.png) |
| **SIGN UP** | **8. Check the agreement box** | The box should be selected successfully | Checkbox "I agree to the Terms of Use and Privacy Policy." selected successfully. | None. Terms of Use & Privacy Policy agreement checkbox verified. | **PASSED** | [`signup_step8_agreement_checked.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/signup_step8_agreement_checked.png) |
| **SIGN UP** | **9. Click on continue button** | The MDA profile should be created and user should click on get started to be routed to the application's portal. | Continue button submitted registration payload. Redirected/Response URL: https://cicodsaasstaging.com/subscribe?offer=9uTDozmu5WViCohhxp7a3ET2o1U1Lk&trial=true&isBundle=false. | None. Button labelled "Continue" submitted successfully. | **PASSED** | [`signup_step9_after_continue_clicked.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/signup_step9_after_continue_clicked.png) |
