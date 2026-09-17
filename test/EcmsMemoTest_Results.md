# ECMS Memo Module - UAT Test Execution Report

## Executive Summary
- **Module Name**: ECMS Memo Module (Rich Text Editor, Memos Index, Drafts, & Reviews)
- **Environment**: Live Staging (`https://cicodecms.cicodsaasstaging.com/`)
- **Total Test Steps**: 59
- **Passed Steps**: 58
- **Failed Steps**: 1
- **Pass Rate**: 98.3%
- **Tester**: Chinwuba Okafor
- **Date**: September 17, 2026

---

## Key Observations & Issues Identified
1. **Save Memo Submission Error (Row 43)**: Attempting to submit/save a completed memo generates a popup error message *"Failed to create memo."* while downloading the memo file.
2. **Terminology Inconsistency (Row 48)**: Action menu button on View All Memo table is labeled *"Attach to Ticket"* instead of *"Attach to Task"*.

---

## Detailed Test Execution Results

| # | Excel Row | Section | Action Description | Expected Result | Status | Remarks & Notes | Screenshot Evidence |
|---|---|---|---|---|---|---|---|
| 1 | Row 19 | CREATE MEMO | Navigate to and click on the “Memo” dropdown. | The Memo dropdown expands and displays a list of features including Create Memo, View All Memo, Memo Draft, and Memo Draft Preview. | ✅ **PASS** | - | [ecms_memo_01_menu_dropdown.png](../uat_target3_cicodecm/ecms_memo_01_menu_dropdown.png) |
| 2 | Row 20 | CREATE MEMO | Click on “Create Memo” to access the memo editor page. | The Create Memo page loads with the rich text editor, title field, and formatting toolbar. | ✅ **PASS** | - | [ecms_memo_02_create_page.png](../uat_target3_cicodecm/ecms_memo_02_create_page.png) |
| 3 | Row 21 | CREATE MEMO | Review the memo editor guide carefully and select the “Don’t show this guide again” checkbox. | The editor guide overlay checkbox is selected and preference is stored. | ✅ **PASS** | - | [ecms_memo_03_editor_guide.png](../uat_target3_cicodecm/ecms_memo_03_editor_guide.png) |
| 4 | Row 22 | CREATE MEMO | Navigate to and click on the Create Memo title field to enter memo metadata. | The title field receives focus and accepts user text input cleanly. | ✅ **PASS** | - | [ecms_memo_04_editor_title_input.png](../uat_target3_cicodecm/ecms_memo_04_editor_title_input.png) |
| 5 | Row 23 | CREATE MEMO | Click on "sans serif module" / Font Family dropdown. | Font family selector opens allowing font style selection. | ✅ **PASS** | - | [ecms_memo_05_font_family_dropdown.png](../uat_target3_cicodecm/ecms_memo_05_font_family_dropdown.png) |
| 6 | Row 24 | CREATE MEMO | Click on "Styles menu" / Text Size dropdown. | Font size options drop down for headers and paragraph formatting. | ✅ **PASS** | - | [ecms_memo_06_style_size_menu.png](../uat_target3_cicodecm/ecms_memo_06_style_size_menu.png) |
| 7 | Row 25 | CREATE MEMO | Click on "Bold module". | Selected text or editor state switches to bold styling. | ✅ **PASS** | - | [ecms_memo_07_bold_format.png](../uat_target3_cicodecm/ecms_memo_07_bold_format.png) |
| 8 | Row 26 | CREATE MEMO | Click on "Italic Module". | Selected text is formatted in italics. | ✅ **PASS** | - | [ecms_memo_08_italic_format.png](../uat_target3_cicodecm/ecms_memo_08_italic_format.png) |
| 9 | Row 27 | CREATE MEMO | Click on "Underline module". | Selected text applies underline decoration. | ✅ **PASS** | - | [ecms_memo_09_underline_format.png](../uat_target3_cicodecm/ecms_memo_09_underline_format.png) |
| 10 | Row 28 | CREATE MEMO | Click on "strikethrough module". | Strikethrough formatting is applied to text. | ✅ **PASS** | - | [ecms_memo_10_strikethrough_format.png](../uat_target3_cicodecm/ecms_memo_10_strikethrough_format.png) |
| 11 | Row 29 | CREATE MEMO | Click on the “A” icon to change the text color. | Color picker palette opens to select foreground text color. | ✅ **PASS** | - | [ecms_memo_11_text_color_palette.png](../uat_target3_cicodecm/ecms_memo_11_text_color_palette.png) |
| 12 | Row 30 | CREATE MEMO | Click on the “A” icon to change the text background color. | Background color palette opens to select text highlight color. | ✅ **PASS** | - | [ecms_memo_12_background_color_palette.png](../uat_target3_cicodecm/ecms_memo_12_background_color_palette.png) |
| 13 | Row 31 | CREATE MEMO | Click on the “Alignment” module to view text alignment options. | Alignment menu shows Left, Center, Right, and Justified options. | ✅ **PASS** | - | [ecms_memo_13_alignment_options.png](../uat_target3_cicodecm/ecms_memo_13_alignment_options.png) |
| 14 | Row 32 | CREATE MEMO | Click on the “Order” module to apply numeric ordering to text. | Numeric ordered list format is applied. | ✅ **PASS** | - | [ecms_memo_14_ordered_list.png](../uat_target3_cicodecm/ecms_memo_14_ordered_list.png) |
| 15 | Row 33 | CREATE MEMO | Click on the “Bullet List” module to apply bullet formatting. | Unordered bullet list formatting is applied. | ✅ **PASS** | - | [ecms_memo_15_bullet_list.png](../uat_target3_cicodecm/ecms_memo_15_bullet_list.png) |
| 16 | Row 34 | CREATE MEMO | Click on the “Decrease Indent” module to reduce the text indentation. | Paragraph indent level is decreased. | ✅ **PASS** | - | [ecms_memo_16_decrease_indent.png](../uat_target3_cicodecm/ecms_memo_16_decrease_indent.png) |
| 17 | Row 35 | CREATE MEMO | Click on the “Increase Indent” module to add indentation to the text. | Paragraph indent level is increased. | ✅ **PASS** | - | [ecms_memo_17_increase_indent.png](../uat_target3_cicodecm/ecms_memo_17_increase_indent.png) |
| 18 | Row 36 | CREATE MEMO | Click on the “Blockquote” module to apply blockquote formatting. | Highlighted text is formatted as an indented blockquote block. | ✅ **PASS** | - | [ecms_memo_18_blockquote_format.png](../uat_target3_cicodecm/ecms_memo_18_blockquote_format.png) |
| 19 | Row 37 | CREATE MEMO | Highlight a text and click on the “Insert Link” module. | Hyperlink insertion modal appears allowing URL input. | ✅ **PASS** | - | [ecms_memo_19_insert_link_dialog.png](../uat_target3_cicodecm/ecms_memo_19_insert_link_dialog.png) |
| 20 | Row 38 | CREATE MEMO | Click on the “Insert Image” module. | Image upload or URL modal opens. | ✅ **PASS** | - | [ecms_memo_20_insert_image_dialog.png](../uat_target3_cicodecm/ecms_memo_20_insert_image_dialog.png) |
| 21 | Row 39 | CREATE MEMO | Highlight a text and click on the “Insert Formula” module. | Math formula editor modal appears for entering LaTeX / KaTeX expressions. | ✅ **PASS** | - | [ecms_memo_21_insert_formula_dialog.png](../uat_target3_cicodecm/ecms_memo_21_insert_formula_dialog.png) |
| 22 | Row 40 | CREATE MEMO | Click on the “Clear Formatting” module. | All rich formatting is stripped and text returns to plain default style. | ✅ **PASS** | - | [ecms_memo_22_clear_formatting.png](../uat_target3_cicodecm/ecms_memo_22_clear_formatting.png) |
| 23 | Row 42 | CREATE MEMO | Navigate to and click on “Save Draft”. | Modal asks for preferred filename and saves draft memo successfully. | ✅ **PASS** | - | [ecms_memo_23_save_draft_dialog.png](../uat_target3_cicodecm/ecms_memo_23_save_draft_dialog.png) |
| 24 | Row 43 | CREATE MEMO | Navigate to and click on “Save Memo”. | Memo is saved and confirmation message is displayed. | ❌ **FAIL** | Download the memo file, but a pop-up appears indicating "Failed to create memo." | [ecms_memo_24_save_memo_submission.png](../uat_target3_cicodecm/ecms_memo_24_save_memo_submission.png) |
| 25 | Row 46 | VIEW ALL MEMO | Navigate to and click on the “Memo” dropdown. | Memo navigation menu expands showing View All Memo option. | ✅ **PASS** | - | [ecms_memo_25_view_all_dropdown.png](../uat_target3_cicodecm/ecms_memo_25_view_all_dropdown.png) |
| 26 | Row 47 | VIEW ALL MEMO | Click on “View All Memo”. | View All Memo table page opens listing all created memos with title, date, and status. | ✅ **PASS** | - | [ecms_memo_26_view_all_page.png](../uat_target3_cicodecm/ecms_memo_26_view_all_page.png) |
| 27 | Row 48 | VIEW ALL MEMO | Select a memo and click on the "action" module. | Dropdown menu displays options for View, Update, and Attach to Ticket/Task. | ✅ **PASS** | Action button reads "Attach to Ticket" instead of "Attach to Task". | [ecms_memo_27_action_menu.png](../uat_target3_cicodecm/ecms_memo_27_action_menu.png) |
| 28 | Row 49 | VIEW ALL MEMO | Click on the “View” module. | Selected memo opens in read-only view mode. | ✅ **PASS** | - | [ecms_memo_28_view_memo_readonly.png](../uat_target3_cicodecm/ecms_memo_28_view_memo_readonly.png) |
| 29 | Row 50 | VIEW ALL MEMO | Navigate to and click on the “Update” module. | Memo opens in edit mode allowing modifications. | ✅ **PASS** | - | [ecms_memo_29_update_memo_editmode.png](../uat_target3_cicodecm/ecms_memo_29_update_memo_editmode.png) |
| 30 | Row 51 | VIEW ALL MEMO | Observe the toolbar for the newly added “Add Reviewer” and “view feedbacks” modules. | Toolbar displays Add Reviewer and View Feedbacks options. | ✅ **PASS** | - | [ecms_memo_30_toolbar_reviewers_feedback.png](../uat_target3_cicodecm/ecms_memo_30_toolbar_reviewers_feedback.png) |
| 31 | Row 52 | VIEW ALL MEMO | Click on “Attach to Ticket” to initiate task creation. | Create Task interface is loaded to link memo with task/ticket. | ✅ **PASS** | - | [ecms_memo_31_attach_to_ticket_page.png](../uat_target3_cicodecm/ecms_memo_31_attach_to_ticket_page.png) |
| 32 | Row 53 | VIEW ALL MEMO | Select a queue and its corresponding queue type from available options. | Queue selection populates corresponding sub-categories. | ✅ **PASS** | - | [ecms_memo_32_queue_selected.png](../uat_target3_cicodecm/ecms_memo_32_queue_selected.png) |
| 33 | Row 54 | VIEW ALL MEMO | Click on the "Create Module" button. | Task creation form is displayed. | ✅ **PASS** | - | [ecms_memo_33_create_task_form.png](../uat_target3_cicodecm/ecms_memo_33_create_task_form.png) |
| 34 | Row 55 | VIEW ALL MEMO | Enter the "Task Title". | Task title is accepted in the title input field. | ✅ **PASS** | - | [ecms_memo_34_task_title_entered.png](../uat_target3_cicodecm/ecms_memo_34_task_title_entered.png) |
| 35 | Row 56 | VIEW ALL MEMO | Click on the “Attach Memo” link to upload a memo file to the task. | File selection dialog or memo lookup modal appears. | ✅ **PASS** | - | [ecms_memo_35_attach_memo_link_clicked.png](../uat_target3_cicodecm/ecms_memo_35_attach_memo_link_clicked.png) |
| 36 | Row 57 | VIEW ALL MEMO | Select a memo file and click on the “Attach” module. | Selected memo is attached to the task record. | ✅ **PASS** | - | [ecms_memo_36_memo_file_attached.png](../uat_target3_cicodecm/ecms_memo_36_memo_file_attached.png) |
| 37 | Row 58 | VIEW ALL MEMO | Verify memo attachment preview in task form. | Memo attachment badge displays selected document filename. | ✅ **PASS** | - | [ecms_memo_37_attachment_verified.png](../uat_target3_cicodecm/ecms_memo_37_attachment_verified.png) |
| 38 | Row 59 | VIEW ALL MEMO | Complete all remaining required fields in the task creation form. | Form data is complete and ready for submission. | ✅ **PASS** | - | [ecms_memo_38_form_fields_completed.png](../uat_target3_cicodecm/ecms_memo_38_form_fields_completed.png) |
| 39 | Row 60 | VIEW ALL MEMO | Check the box for "Would you like to assign this task right away?" to enable immediate assignment. | Assignee dropdown becomes enabled. | ✅ **PASS** | - | [ecms_memo_39_immediate_assign_checked.png](../uat_target3_cicodecm/ecms_memo_39_immediate_assign_checked.png) |
| 40 | Row 61 | VIEW ALL MEMO | Click on the dropdown menu and select the user to whom the task will be assigned. | Selected assignee user is chosen. | ✅ **PASS** | - | [ecms_memo_40_assignee_selected.png](../uat_target3_cicodecm/ecms_memo_40_assignee_selected.png) |
| 41 | Row 62 | VIEW ALL MEMO | Click on the "Create Module" button to finalize the creation of task. | Task is created successfully with notification displaying new Task ID. | ✅ **PASS** | - | [ecms_memo_41_task_created_notification.png](../uat_target3_cicodecm/ecms_memo_41_task_created_notification.png) |
| 42 | Row 65 | MEMO DRAFT | Navigate to and click on the “Memo” dropdown. | Memo dropdown menu opens with Memo Draft link. | ✅ **PASS** | - | [ecms_memo_42_memo_draft_dropdown.png](../uat_target3_cicodecm/ecms_memo_42_memo_draft_dropdown.png) |
| 43 | Row 66 | MEMO DRAFT | Click on "Memo Draft". | Memo Drafts table loads showing all drafts in progress. | ✅ **PASS** | - | [ecms_memo_43_memo_draft_page.png](../uat_target3_cicodecm/ecms_memo_43_memo_draft_page.png) |
| 44 | Row 67 | MEMO DRAFT | Select a memo draft and click on the “Action” module. | Draft action dropdown displays View and Update options. | ✅ **PASS** | - | [ecms_memo_44_draft_action_menu.png](../uat_target3_cicodecm/ecms_memo_44_draft_action_menu.png) |
| 45 | Row 68 | MEMO DRAFT | Click on the “View” module. | Draft memo is opened in read-only preview mode. | ✅ **PASS** | - | [ecms_memo_45_draft_view_readonly.png](../uat_target3_cicodecm/ecms_memo_45_draft_view_readonly.png) |
| 46 | Row 69 | MEMO DRAFT | Observe the toolbar for the newly added “Add Reviewer”, “view feedbacks” and "View access" modules. | Draft toolbar contains Add Reviewer, View Feedbacks, and View Access controls. | ✅ **PASS** | - | [ecms_memo_46_draft_toolbar_features.png](../uat_target3_cicodecm/ecms_memo_46_draft_toolbar_features.png) |
| 47 | Row 70 | MEMO DRAFT | Click on the "Add Reviewer" module. | Add Reviewer modal dialog opens with user multi-select. | ✅ **PASS** | - | [ecms_memo_47_add_reviewer_modal.png](../uat_target3_cicodecm/ecms_memo_47_add_reviewer_modal.png) |
| 48 | Row 71 | MEMO DRAFT | Click on the “Add” module. | Selected reviewers are assigned to draft memo and notification email is sent. | ✅ **PASS** | - | [ecms_memo_48_reviewer_added_confirmation.png](../uat_target3_cicodecm/ecms_memo_48_reviewer_added_confirmation.png) |
| 49 | Row 72 | MEMO DRAFT | Click on the “View Feedback” module. | Side drawer panel slides open displaying feedback and reviewers comments. | ✅ **PASS** | - | [ecms_memo_49_draft_view_feedback_panel.png](../uat_target3_cicodecm/ecms_memo_49_draft_view_feedback_panel.png) |
| 50 | Row 73 | MEMO DRAFT | Click on the “View Access” module. | Access permission modal opens displaying memo owner and authorized users. | ✅ **PASS** | - | [ecms_memo_50_draft_view_access_modal.png](../uat_target3_cicodecm/ecms_memo_50_draft_view_access_modal.png) |
| 51 | Row 74 | MEMO DRAFT | Navigate to and click on the “Update” module. | Draft memo opens in editable state. | ✅ **PASS** | - | [ecms_memo_51_draft_update_editmode.png](../uat_target3_cicodecm/ecms_memo_51_draft_update_editmode.png) |
| 52 | Row 75 | MEMO DRAFT | Click on the “Cancel” module. | Edit session is cancelled and user returns to draft list view. | ✅ **PASS** | - | [ecms_memo_52_draft_update_cancelled.png](../uat_target3_cicodecm/ecms_memo_52_draft_update_cancelled.png) |
| 53 | Row 78 | MEMO DRAFT REVIEW | Navigate to and click on the “Memo” dropdown. | Memo dropdown menu displays Memo Draft Review option. | ✅ **PASS** | - | [ecms_memo_53_memo_review_dropdown.png](../uat_target3_cicodecm/ecms_memo_53_memo_review_dropdown.png) |
| 54 | Row 79 | MEMO DRAFT REVIEW | Click on "Memo Draft REVIEW". | Memo Draft Review table loads displaying memos assigned for review. | ✅ **PASS** | - | [ecms_memo_54_memo_review_page.png](../uat_target3_cicodecm/ecms_memo_54_memo_review_page.png) |
| 55 | Row 80 | MEMO DRAFT REVIEW | Select a memo and click on the “Action” module. | Action menu displays Review option. | ✅ **PASS** | - | [ecms_memo_55_review_action_menu.png](../uat_target3_cicodecm/ecms_memo_55_review_action_menu.png) |
| 56 | Row 81 | MEMO DRAFT REVIEW | Click on the “Review” module. | Memo opens in review mode with inline commenting tools. | ✅ **PASS** | - | [ecms_memo_56_review_mode_interface.png](../uat_target3_cicodecm/ecms_memo_56_review_mode_interface.png) |
| 57 | Row 82 | MEMO DRAFT REVIEW | Click on the “View Feedback” module. | Side panel opens displaying reviewer comments and notes. | ✅ **PASS** | - | [ecms_memo_57_review_view_feedback_panel.png](../uat_target3_cicodecm/ecms_memo_57_review_view_feedback_panel.png) |
| 58 | Row 83 | MEMO DRAFT REVIEW | Click on the “View Access” module. | Access list modal displays memo permissions. | ✅ **PASS** | - | [ecms_memo_58_review_view_access_modal.png](../uat_target3_cicodecm/ecms_memo_58_review_view_access_modal.png) |
| 59 | Row 84 | MEMO DRAFT REVIEW | Click on the “Cancel” module. | Review mode is exited cleanly and returns to review table. | ✅ **PASS** | - | [ecms_memo_59_review_cancelled.png](../uat_target3_cicodecm/ecms_memo_59_review_cancelled.png) |
