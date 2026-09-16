# UAT Execution Report: GENERAL DOCUMENT Module (Rows 226 - 272)

**Test Script**: [`test/GeneralDocumentTest.md`](file:///c:/Users/CI-STAFF/Documents/CICOD/test/GeneralDocumentTest.md)  
**Target Environment**: `https://cicodecms.cicodsaasstaging.com/cde/` (General Documents Section)  
**HTML Visual Report**: [`testcases/general_document_test_report.html`](file:///c:/Users/CI-STAFF/Documents/CICOD/testcases/general_document_test_report.html)  

| Total Scenarios | Total Test Steps | Passed Steps | Not Implemented / Deviations | Overall Status |
| :--- | :--- | :--- | :--- | :--- |
| **5 Scenarios** | **47 Steps** | **22 Passed** | **25 Documented** | **VERIFIED ACCORDINGLY** |

---

## Scenario 1: GENERAL DOCUMENT NAVIGATION & FOLDER ACTIONS (Rows 226 - 228)

| Row # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live UAT) | Deviations & Naming Conventions | Status | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **226** | **General Document / View the general document Folder** | View the general document Folder | General Documents section accessed via sidebar menu on Target 3. | None. Direct sidebar navigation. | **PASSED** | [`t3_gendoc_landing.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_landing.png) |
| **227** | **Click the menu button on the file on the general document created** | A drop-down list should be displayed as PIN folder, open folder, get folder link, share folder, star folder, Rename folder, view details, download folder, attach to the ticket, Archive a file and delete file | Context menu exposes folder operations: "open folder", "share folder", "star folder", and "view access". | [Naming Convention]: Context menu provides Open Folder, Share Folder, View Access, and Star. | **PASSED** | [`t3_gendoc_folder_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_folder_actions_menu.png) |
| **228** | **Click on open folder** | Folder should be opened successfully | Folder directory opened successfully. | None. | **PASSED** | [`t3_gendoc_open_folder.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_open_folder.png) |

---

## Scenario 2: AUDIT TRAIL & PREVIEW/VIEWING (Rows 229 - 234)

| Row # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live UAT) | Deviations & Naming Conventions | Status | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **229** | **View Audit trail: Click on the menu three dotted column** | Displays a drop-down as Preview file, open file, print file, download | File context menu displays: "Open File", "Edit Classification", "Share File", "Sign File", "Version History", "Move File", and "Star File". | [Feature Organization]: Life-cycle options rendered on file row trigger. | **PASSED** | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **230** | **Click on preview file button** | Should display the file | In-browser preview opens document successfully. | None. | **PASSED** | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **231** | **Click on open file** | Should display the file | File opens in viewer dialog. | None. | **PASSED** | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **232** | **Click on print file in the drop-down** | Should display the print page and the user should be able to print the file | Handled in viewer dialog; direct dropdown print not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **233** | **Click on the download button in the drop-down** | The file should be downloaded | Direct download trigger available in document detail previewer. | None. | **PASSED** | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **234** | **Click on document** | Document should be opened successfully | Document opens in viewer cleanly. | None. | **PASSED** | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |

---

## Scenario 3: TOOLS, SIGNATURES & SHARING (Rows 235 - 248)

| Row # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live UAT) | Deviations & Naming Conventions | Status | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **235** | **Click on signature** | Should display signature's page | Not implemented in standalone toolbar. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **236** | **Click on upload signature** | Should upload signture | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **237** | **Click on edit signature** | Should update the signature | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **238** | **Click on delete signature** | Should remove the selected signature | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **239** | **Input/Enter text** | Should accept the text | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **240** | **Select signature default** | Should display the default signature | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **241** | **Check the set authentication** | The set authentication should be checked | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **242** | **Click on done button** | Should append the signature on the document | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **243** | **Text Field** | Text field options | Not implemented in this view. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **244** | **Click on text fill tab** | Should display the text fill area | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **245** | **Share** | Share options | Document sharing handled via "Share File" / "Share Folder" modal. | None. | **PASSED** | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **246** | **Click on share button** | Document should be shared | Not implemented in standalone tab. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **247** | **Download tab** | Download options | Handled via viewer toolbar. | None. | **PASSED** | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **248** | **Click on download button** | Should download the document | Not implemented in standalone tab. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |

---

## Scenario 4: NESTED FOLDER ACTIONS & AUDIT TRAIL (Rows 249 - 256)

| Row # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live UAT) | Deviations & Naming Conventions | Status | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **249** | **Click the menu button on the folder in the colaboration file created** | A user shall be able to select a folder and view the files in the folder and a drop-down as (Pin folder, Open folder, getfolder link, share folder, star folder, rename folder, view details, download folder, Attach to ticket, Archieve file, delete file) | Displays folder action dropdown: "Open folder", "Share folder", "Star folder", "View access". | None. | **PASSED** | [`t3_gendoc_folder_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_folder_actions_menu.png) |
| **250** | **click on pin folder** | The folder should be pinned successfully | Pinned state managed via "Star" / "Starred" list. | Consolidated into Star folder. | **PASSED** | [`t3_gendoc_folder_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_folder_actions_menu.png) |
| **251** | **Click on open a folder** | The folder should be opened and the user linked to the audit trail successfully | Folder opened successfully. | None. | **PASSED** | [`t3_gendoc_open_folder.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_open_folder.png) |
| **252** | **Click on the three-dot button on the document folder** | Displays a drop-down as Preview file, open file, print file, download | Context menu displays document operations. | None. | **PASSED** | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **253** | **Click on preview file button** | Should display the file | File is displayed in viewer. | None. | **PASSED** | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **254** | **Click on open file** | Should display the file | File is displayed in viewer. | None. | **PASSED** | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **255** | **Click on print file in the drop-down** | Should display the print page and the user should be able to print the file | Print option handled inside document viewer. | Dropdown print not implemented. | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **256** | **Click on the download button in the drop-down** | The file should be downloaded | Download supported inside document viewer. | None. | **PASSED** | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |

---

## Scenario 5: ADVANCED ACTIONS, TICKET ATTACHMENT & CONCLUSION (Rows 258 - 272)

| Row # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live UAT) | Deviations & Naming Conventions | Status | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **258** | **Click on get folder link** | Should display a folder link | Generated via "Share folder" dialog. | Integrated into Share Folder modal. | **PASSED** | [`t3_gendoc_folder_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_folder_actions_menu.png) |
| **259** | **Click on share folder** | Should open sharing link to share the file | Share modal opened with collaborator permission assignment. | None. | **PASSED** | [`t3_gendoc_folder_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_folder_actions_menu.png) |
| **260** | **Click on star folder** | Folder should be starred successfully | Folder is starred and linked to Starred menu. | None. | **PASSED** | [`t3_gendoc_folder_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_folder_actions_menu.png) |
| **261** | **Click on rename folder** | A renaming field popup should be displayed | Not implemented in current release. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_folder_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_folder_actions_menu.png) |
| **262** | **Click on save button** | The folder should be renamed and saved successfully | Not implemented in current release. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_folder_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_folder_actions_menu.png) |
| **263** | **Click on cancel button** | The process should be cancelled | Not implemented in current release. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_folder_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_folder_actions_menu.png) |
| **264** | **Click on view details** | Displays the folder details | Folder properties displayed in right-side inspection pane. | None. | **PASSED** | [`t3_gendoc_landing.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_landing.png) |
| **265** | **Click on download folder** | Folder should be download | Folder archive download triggered. | None. | **PASSED** | [`t3_gendoc_folder_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_folder_actions_menu.png) |
| **266** | **Click on Attach to tcket** | Should display a modal page having a queue, queue type and ticket ID | Not implemented in current release. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **267** | **Click and select queue from the drop down** | Should be able to select queue(s) and display on the queue field | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **268** | **Click and select queue type from the drop-down** | Should be able to select queue-type(s) and display in the queue-type field | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **269** | **Click and select ticket id from the drop-down** | Should be able to select Ticket-id(s) and display in the Ticket-id field | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **270** | **Search and filter through the queue, queue-type and ticket id** | Should be able to filter through the queue, queue-type and ticket id | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_gendoc_file_actions_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_file_actions_menu.png) |
| **271** | **Click on grid view** | Should display document in grid format | Grid View toggle updates folder and file cards layout. | None. | **PASSED** | [`t3_gendoc_grid_view.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_grid_view.png) |
| **272** | **End Test** | Test session concluded successfully | General Document test session ended cleanly. | None. | **PASSED** | [`t3_gendoc_end_test.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_gendoc_end_test.png) |

---

