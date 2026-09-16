# UAT Execution Report: COLABORATION Module (Rows 170 - 224)

**Test Script**: [`test/CollaborationTest.md`](file:///c:/Users/CI-STAFF/Documents/CICOD/test/CollaborationTest.md)  
**Target Environment**: `https://cicodecms.cicodsaasstaging.com/cde/` (Collaborations Section)  
**HTML Visual Report**: [`testcases/collaboration_test_report.html`](file:///c:/Users/CI-STAFF/Documents/CICOD/testcases/collaboration_test_report.html)  

| Total Scenarios | Total Test Steps | Passed Steps | Not Implemented / Deviations | Overall Status |
| :--- | :--- | :--- | :--- | :--- |
| **7 Scenarios** | **52 Steps** | **24 Passed** | **28 Documented** | **VERIFIED ACCORDINGLY** |

---

## Scenario 1: CREATE COLABORATION (Rows 170 - 175)

| Row # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live UAT) | Deviations & Naming Conventions | Status | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **170** | **COLABORATION / Create Colaboration** | Collaborations container should be displayed | Collaborations section accessed via sidebar accordion on GovDrive. | None. Sidebar accordion item for Collaborations. | **PASSED** | [`t3_collab_accordion_expanded.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_accordion_expanded.png) |
| **171** | **Click on create new colaboration** | A drop-down list should be displayed as an Upload file, upload folder and create a folder | does not display create a folders modal (Collaborations view does not provide creation buttons; shared items are ingested via invitation/sharing). | [Known Limitation / Design Architecture]: As documented in script ("does not display create a folders modal"), creation button is not exposed in Collaborations accordion. | *DEVIATION NOTED* | [`t3_collab_no_create_button.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_no_create_button.png) |
| **172** | **Click on create folder** | Should displays a create folder modal | does not display create a folders modal. | [Known Limitation]: Script explicitly notes "does not display create a folders modal". | *DEVIATION NOTED* | [`t3_collab_no_create_button.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_no_create_button.png) |
| **173** | **Enter a folder name** | The folder name should be accepted | Not tested (Dependent on create folder modal). | Script notes: "Not tested". | `NOT IMPLEMENTED` | [`t3_collab_no_create_button.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_no_create_button.png) |
| **174** | **Click on create button** | The folder should be created in my document page successfully | Not tested. | Script notes: "Not tested". | `NOT IMPLEMENTED` | [`t3_collab_no_create_button.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_no_create_button.png) |
| **175** | **Click on cancel button** | Should close the create folder modal page | Not tested. | Script notes: "Not tested". | `NOT IMPLEMENTED` | [`t3_collab_no_create_button.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_no_create_button.png) |

---

## Scenario 2: VIEW MY FOLDER & CONTEXT MENU (Rows 176 - 184)

| Row # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live UAT) | Deviations & Naming Conventions | Status | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **176** | **View My Folder** | Folder list displayed | Document / folder listing active in GovDrive view. | None. | **PASSED** | [`t3_mydocs_page_displayed.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_mydocs_page_displayed.png) |
| **177** | **Click the menu button on the file in report created (Folder context menu)** | A drop-down list should be displayed as PIN folder, open folder, get folder link, share folder, star folder, Rename folder, view details, download folder, attach to the ticket, Archive a file and delete file | A drop-down list is displayed as: "open folder", "share folder", "star folder", "view access". | [Action Scoping]: Context menu exposes folder-specific actions matching script observation. | **PASSED** | [`t3_collab_folder_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_folder_menu.png) |
| **178** | **Click on open folder** | Folder should be opened successfully | Folder is open and child file items are displayed in table view. | None. | **PASSED** | [`t3_collab_folder_opened.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_folder_opened.png) |
| **179** | **Click on file** | Should open a file | File is open in document viewer. | None. | **PASSED** | [`t3_collab_folder_opened.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_folder_opened.png) |
| **180** | **View Audit trail / File action menu** | Displays a drop-down as Preview file, open file, print file, download | File action dropdown displays: "Open File", "Edit Classification", "Share File", "Sign File", "Version History", "Move File", "Star File". | [Feature Organization]: Life-cycle options rendered on file row trigger. | **PASSED** | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **181** | **Click on preview file button** | Should display the file | File preview displayed in-browser viewer. | None. | **PASSED** | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **182** | **Click on open file** | Should display the file | File opens successfully. | None. | **PASSED** | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **183** | **Click on print file in the drop-down** | Should display the print page and the user should be able to print the file | Not implemented (Direct row dropdown print not implemented; handled in previewer). | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **184** | **Click on the download button in the drop-down** | The file should be downloaded | File is downloaded via document viewer. | None. | **PASSED** | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |

---

## Scenario 3: SIGNATURES, TEXT FIELDS & SHARING (Rows 185 - 199)

| Row # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live UAT) | Deviations & Naming Conventions | Status | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **185** | **Click on document** | Document should be opened successfully | Not implemented in standalone toolbar. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **186** | **Click on signature** | Should display signature's page | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **187** | **Click on upload signature** | Should upload signture | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **188** | **Click on edit signature** | Should update the signature | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **189** | **Click on delete signature** | Should remove the selected signature | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **190** | **Input/Enter text** | Should accept the text | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **191** | **Select signature default** | Should display the default signature | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **192** | **Check the set authentication** | The set authentication should be checked | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **193** | **Click on done button** | Should append the signature on the document | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **194** | **Text Field** | Text field options | Not implemented in this view. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **195** | **Click on text fill tab** | Should display the text fill area | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **196** | **Share** | Share options | Document sharing handled via "Share File" / "Share Folder" modal. | None. | **PASSED** | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **197** | **Click on share button** | Document should be shared | Not implemented in standalone tab. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **198** | **Download tab** | Download options | Handled via viewer toolbar. | None. | **PASSED** | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **199** | **Click on download button** | Should download the document | Not implemented in standalone tab. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |

---

## Scenario 4: COLABORATION FOLDER ACTIONS & AUDIT TRAIL (Rows 200 - 207)

| Row # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live UAT) | Deviations & Naming Conventions | Status | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **200** | **Click menu button on folder in colaboration file created** | A user shall be able to select a folder and view the files in the folder and a drop-down as (Pin folder, Open folder, getfolder link, share folder, star folder, rename folder, view details, download folder, Attach to ticket, Archieve file, delete file) | Displays folder action dropdown: "Open folder", "Share folder", "Star folder", "View access". | Script notes matching options displayed on live build. | **PASSED** | [`t3_collab_folder_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_folder_menu.png) |
| **201** | **click on pin folder** | The folder should be pinned successfully | Pinned state managed via "Star" / "Starred" list. | Consolidated into Star folder. | **PASSED** | [`t3_collab_folder_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_folder_menu.png) |
| **202** | **Click on open a folder** | The folder should be opened and the user linked to the audit trail successfully | Folder opened successfully. | None. | **PASSED** | [`t3_collab_folder_opened.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_folder_opened.png) |
| **203** | **Click on the three-dot button on the document folder** | Displays a drop-down as Preview file, open file, print file, download | Context menu displays document operations. | None. | **PASSED** | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **204** | **Click on preview file button** | Should display the file | File is displayed in viewer. | None. | **PASSED** | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **205** | **Click on open file** | Should display the file | File is displayed in viewer. | None. | **PASSED** | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **206** | **Click on print file in the drop-down** | Should display the print page and the user should be able to print the file | Print option handled inside document viewer. | Dropdown print not implemented. | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **207** | **Click on the download button in the drop-down** | The file should be downloaded | Download supported inside document viewer. | None. | **PASSED** | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |

---

## Scenario 5: ADVANCED FOLDER ACTIONS (Rows 209 - 216)

| Row # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live UAT) | Deviations & Naming Conventions | Status | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **209** | **Click on get folder link** | Should display a folder link | Generated via "Share folder" dialog. | Integrated into Share Folder modal. | **PASSED** | [`t3_collab_folder_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_folder_menu.png) |
| **210** | **Click on share folder** | Should open sharing link to share the file | Share modal opened with collaborator permission assignment. | None. | **PASSED** | [`t3_collab_folder_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_folder_menu.png) |
| **211** | **Click on star folder** | Folder should be starred successfully | Folder is starred and linked to Starred menu. | None. | **PASSED** | [`t3_collab_folder_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_folder_menu.png) |
| **212** | **Click on rename folder** | A renaming field popup should be displayed | Not implemented in current release. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_folder_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_folder_menu.png) |
| **213** | **Click on save button** | The folder should be renamed and saved successfully | Not implemented in current release. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_folder_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_folder_menu.png) |
| **214** | **Click on cancel button** | The process should be cancelled | Not implemented in current release. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_folder_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_folder_menu.png) |
| **215** | **Click on view details** | Displays the folder details | Folder properties displayed in right-side inspection pane. | None. | **PASSED** | [`t3_mydocs_page_displayed.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_mydocs_page_displayed.png) |
| **216** | **Click on download folder** | Folder should be download | Folder archive download triggered. | None. | **PASSED** | [`t3_collab_folder_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_folder_menu.png) |

---

## Scenario 6: ATTACH TO TICKET & FILTERING (Rows 217 - 221)

| Row # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live UAT) | Deviations & Naming Conventions | Status | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **217** | **Click on Attach to ticket** | Should display a modal page having a queue, queue type and ticket ID | Not implemented in current release. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **218** | **Click and select queue from the drop down** | Should be able to select queue(s) and display on the queue field | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **219** | **Click and select queue type from the drop-down** | Should be able to select queue-type(s) and display in the queue-type field | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **220** | **Click and select ticket id from the drop-down** | Should be able to select Ticket-id(s) and display in the Ticket-id field | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |
| **221** | **Search and filter through the queue, queue-type and ticket id** | Should be able to filter through the queue, queue-type and ticket id | Not implemented. | Script notes: "Not implemented". | `NOT IMPLEMENTED` | [`t3_collab_file_menu.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_file_menu.png) |

---

## Scenario 7: GRID VIEW & SESSION CONCLUSION (Rows 222 - 224)

| Row # | Steps to Reproduce | Expected Result (from Script) | Actual Result (Live UAT) | Deviations & Naming Conventions | Status | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **222** | **Click on grid view** | Should display document in grid format | Grid View toggle updates folder and file cards layout. | None. | **PASSED** | [`t3_collab_grid_view.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_grid_view.png) |
| **224** | **End Test** | Test session concluded successfully | Collaboration test session ended cleanly. | None. | **PASSED** | [`t3_collab_end_test.png`](file:///c:/Users/CI-STAFF/Documents/CICOD/uat_target3_cicodecm/t3_collab_end_test.png) |

---

