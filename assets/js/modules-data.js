/**
 * CICOD User Acceptance Testing & Multi-Module Registry
 * 
 * Contains full definitions for:
 * 1. CICOD Drive: 10 verified sheet test suites, pass rates, embedded report paths & evidence captures.
 * 2. CICOD ECMS: 10 upcoming portal features, planned routes, and architecture briefings.
 */

const appModules = [
  {
    id: 'module_drive',
    name: 'CICOD Drive',
    icon: '📁',
    badge: '10 Features',
    expanded: false,
    features: [
      {
        id: 'login',
        sheetName: 'Login',
        reportUrl: 'testCases/login_test_report.html',
        passRate: '100.0%',
        passCount: 30,
        gapCount: 0,
        totalSteps: 30,
        status: '100% VERIFIED',
        images: [
          { file: 'uat_target3_cicodecm/login_tc1_step1_displays_login_page.png', caption: 'Target 3 Multi-tenant Login Screen' },
          { file: 'uat_target3_cicodecm/login_tc1_correct_details_filled.png', caption: 'Tenant & Credentials Populated' },
          { file: 'uat_target3_cicodecm/login_tc1_after_correct_submission.png', caption: 'Merchant SSO Hydration & Dashboard Routing' },
          { file: 'uat_target3_cicodecm/login_tc5_password_revealed.png', caption: 'Password Masking Toggle' },
          { file: 'uat_target3_cicodecm/login_tc2_wrong_domain_error.png', caption: 'Domain Validation Error Toast' },
          { file: 'uat_target3_cicodecm/login_tc4_wrong_password_error.png', caption: 'Invalid Password Security Response' }
        ]
      },
      {
        id: 'mydoc',
        sheetName: 'My Document',
        reportUrl: 'testCases/mydocument_test_report.html',
        passRate: '59.0%',
        passCount: 46,
        gapCount: 32,
        totalSteps: 78,
        status: 'AUDITED (32 GAPS)',
        images: [
          { file: 'uat_target3_cicodecm/t3_mydocs_page_displayed.png', caption: 'My Documents Landing Page' },
          { file: 'uat_target3_cicodecm/t3_mydocs_new_dropdown.png', caption: '+ New Action Dropdown' },
          { file: 'uat_target3_cicodecm/t3_mydocs_create_folder_modal.png', caption: 'Create Folder Modal' },
          { file: 'uat_target3_cicodecm/t3_mydocs_folder_name_entered.png', caption: 'Folder Name Populated' },
          { file: 'uat_target3_cicodecm/t3_mydocs_folder_action_menu.png', caption: 'Folder 3-Dots Context Menu' },
          { file: 'uat_target3_cicodecm/t3_mydocs_file_actions_menu.png', caption: 'File Actions Context Menu' }
        ]
      },
      {
        id: 'collab',
        sheetName: 'Collaboration',
        reportUrl: 'testCases/collaboration_test_report.html',
        passRate: '46.2%',
        passCount: 24,
        gapCount: 28,
        totalSteps: 52,
        status: 'AUDITED (28 GAPS)',
        images: [
          { file: 'uat_target3_cicodecm/collab_tc1_step170_landing_page.png', caption: 'Collaboration Workspace Landing' },
          { file: 'uat_target3_cicodecm/collab_tc1_step170_accordion_expanded.png', caption: 'GovDrive Sidebar Accordion Expanded' },
          { file: 'uat_target3_cicodecm/collab_tc1_step171_no_create_button.png', caption: 'Ingestion & Invitation Architecture' },
          { file: 'uat_target3_cicodecm/collab_tc2_step177_folder_menu.png', caption: 'Shared Folder Context Menu' },
          { file: 'uat_target3_cicodecm/collab_tc2_step178_folder_opened.png', caption: 'Shared Folder In-View Listing' },
          { file: 'uat_target3_cicodecm/collab_tc3_step180_file_menu.png', caption: 'File RBAC Sharing & Action Menu' },
          { file: 'uat_target3_cicodecm/collab_tc4_step222_grid_view.png', caption: 'Collaboration Grid View' },
          { file: 'uat_target3_cicodecm/collab_tc5_step224_end_test.png', caption: 'Verification Concluded Successfully' }
        ]
      },
      {
        id: 'gendoc',
        sheetName: 'General Document',
        reportUrl: 'testCases/general_document_test_report.html',
        passRate: '46.8%',
        passCount: 22,
        gapCount: 25,
        totalSteps: 47,
        status: 'AUDITED (25 GAPS)',
        images: [
          { file: 'uat_target3_cicodecm/t3_gendoc_landing.png', caption: 'General Document Repository' },
          { file: 'uat_target3_cicodecm/t3_gendoc_folder_actions_menu.png', caption: 'Folder Context Actions' },
          { file: 'uat_target3_cicodecm/t3_gendoc_open_folder.png', caption: 'Inside General Document Folder' },
          { file: 'uat_target3_cicodecm/t3_gendoc_file_actions_menu.png', caption: 'File Actions Menu' },
          { file: 'uat_target3_cicodecm/t3_gendoc_grid_view.png', caption: 'Grid Card View' },
          { file: 'uat_target3_cicodecm/t3_gendoc_end_test.png', caption: 'End Test Verification' }
        ]
      },
      {
        id: 'appdoc',
        sheetName: 'Application Document',
        reportUrl: 'testCases/application_document_test_report.html',
        passRate: '52.5%',
        passCount: 42,
        gapCount: 38,
        totalSteps: 80,
        status: 'AUDITED (38 GAPS)',
        images: [
          { file: 'uat_target3_cicodecm/t3_appdoc_landing.png', caption: 'Application Documents Landing' },
          { file: 'uat_target3_cicodecm/t3_appdoc_folder_actions_menu.png', caption: 'Queue Folder Actions' },
          { file: 'uat_target3_cicodecm/t3_appdoc_queue_folder_click.png', caption: 'Queue Navigation' },
          { file: 'uat_target3_cicodecm/t3_appdoc_inside_folder.png', caption: 'Inside Application Vault' },
          { file: 'uat_target3_cicodecm/t3_appdoc_file_actions_menu.png', caption: 'File Context Actions' },
          { file: 'uat_target3_cicodecm/t3_appdoc_grid_view.png', caption: 'Grid Layout View' }
        ]
      },
      {
        id: 'recent',
        sheetName: 'Recent Document',
        reportUrl: 'testCases/recent_document_test_report.html',
        passRate: '31.6%',
        passCount: 12,
        gapCount: 26,
        totalSteps: 38,
        status: 'AUDITED (26 GAPS)',
        images: [
          { file: 'uat_target3_cicodecm/t3_recent_landing.png', caption: 'Recent Documents Chronological View' },
          { file: 'uat_target3_cicodecm/t3_recent_records_grouped.png', caption: 'Records Grouped By Date' },
          { file: 'uat_target3_cicodecm/t3_recent_properties_pane.png', caption: 'Audit Metadata & Properties Pane' },
          { file: 'uat_target3_cicodecm/t3_recent_file_actions_menu.png', caption: 'File Actions Context Menu' },
          { file: 'uat_target3_cicodecm/t3_recent_grid_view.png', caption: 'Recent Records Grid View' },
          { file: 'uat_target3_cicodecm/t3_recent_end_test.png', caption: 'End Test State' }
        ]
      },
      {
        id: 'starred',
        sheetName: 'Starred Document',
        reportUrl: 'testCases/starred_document_test_report.html',
        passRate: '34.2%',
        passCount: 13,
        gapCount: 25,
        totalSteps: 38,
        status: 'AUDITED (25 GAPS)',
        images: [
          { file: 'uat_target3_cicodecm/t3_starred_landing.png', caption: 'Starred Records Vault' },
          { file: 'uat_target3_cicodecm/t3_starred_records_table.png', caption: 'Priority Records List' },
          { file: 'uat_target3_cicodecm/t3_starred_properties_pane.png', caption: 'Starred Document Properties' },
          { file: 'uat_target3_cicodecm/t3_starred_file_actions_menu.png', caption: 'File Context Actions' },
          { file: 'uat_target3_cicodecm/t3_starred_grid_view.png', caption: 'Starred Grid Cards View' },
          { file: 'uat_target3_cicodecm/t3_starred_end_test.png', caption: 'Verification Completed' }
        ]
      },
      {
        id: 'trash',
        sheetName: 'Trash Document',
        reportUrl: 'testCases/trash_document_test_report.html',
        passRate: '80.0%',
        passCount: 8,
        gapCount: 2,
        totalSteps: 10,
        status: 'AUDITED (2 GAPS)',
        images: [
          { file: 'uat_target3_cicodecm/t3_trash_landing.png', caption: 'Trash & Retention Landing' },
          { file: 'uat_target3_cicodecm/t3_trash_records_table.png', caption: 'Deleted Records Table' },
          { file: 'uat_target3_cicodecm/t3_trash_properties_pane.png', caption: 'Retention Properties & Expiry' },
          { file: 'uat_target3_cicodecm/t3_trash_file_actions_menu.png', caption: 'Restore & Purge Actions' },
          { file: 'uat_target3_cicodecm/t3_trash_grid_view.png', caption: 'Trash Grid View' },
          { file: 'uat_target3_cicodecm/t3_trash_end_test.png', caption: 'End Test State' }
        ]
      },
      {
        id: 'signup',
        sheetName: 'Sign Up',
        reportUrl: 'testCases/signup_test_report.html',
        passRate: '84.4%',
        passCount: 38,
        gapCount: 7,
        totalSteps: 45,
        status: 'PARTIAL — 3 CONFIRMED DEFECTS/GAPS (BUSINESS TYPE DROPDOWN, ITS FLAKY VALIDATION, NO DUPLICATE-EMAIL CHECK)',
        summary: 'Multi-step registration wizard: email capture, MDA profile details, an undocumented Business Info step, and Terms of Use agreement, ending in real tenant provisioning — plus all 6 previously-proposed negative/edge-case scenarios (31 steps), now executed live. Re-executed live end-to-end this session after the prior session\'s evidence was found corrupted (6 of 9 screenshots were stuck on an undismissed cookie-consent overlay — a narrow-viewport capture artifact, fixed by re-running at 1440x900). 38 of 45 checkpoints passed. Three confirmed defects: (1) a wizard step, "We want to know more about you," exists live but is missing from test/SignupTest.md, and within it the Business Type dropdown never populates with any options; (2) that field\'s "required" enforcement is flaky — across 4 attempts, final submission succeeded once and was blocked 3 times with the same unfilled field; (3) no email-uniqueness check exists at the point of email entry — a known-duplicate email proceeds straight to the profile step with zero warning. Of the 6 proposed scenarios, 5 came back clean (weak password rejection, duplicate account name with a better-than-spec real-time check, the mandatory agreement checkbox, input sanitization against XSS/SQLi payloads, and abandon/resume restarting cleanly); duplicate email registration surfaced defect 3, and abandon/resume\'s final "no duplicate tenant" checkpoint is inconclusive due to defect 2 confounding final submission.',
        images: [
          { file: 'uat_target3_cicodecm/signup_step3_modal_opened.png', caption: 'Registration Modal Opened via a Plan\'s "Try Now" Link' },
          { file: 'uat_target3_cicodecm/signup_step12_businessinfo_filled.png', caption: 'BUG: Business Type Dropdown Never Populates (Placeholder Only)' },
          { file: 'uat_target3_cicodecm/signup_prop1_email_step_not_blocked.png', caption: 'GAP: Duplicate Email Proceeds With Zero Warning' },
          { file: 'uat_target3_cicodecm/signup_prop3_duplicate_account_error.png', caption: 'Duplicate Account Name Correctly Caught in Real Time (Exceeds Spec)' },
          { file: 'uat_target3_cicodecm/signup_step13_account_created.png', caption: 'Account Successfully Created Despite the Business Type Bug' },
          { file: 'uat_target3_cicodecm/signup_step14_admin_portal_landing.png', caption: 'Final Landing: New Tenant\'s CICOD Admin Portal' }
        ]
      },
      {
        id: 'application',
        sheetName: 'Application',
        reportUrl: 'testCases/application_test_report.html',
        passRate: '100.0%',
        passCount: 4,
        gapCount: 0,
        totalSteps: 4,
        status: '100% VERIFIED',
        images: [
          { file: 'uat_target3_cicodecm/app_portal_01_staging_my_applications.png', caption: 'Target 3 My Applications Dashboard View' },
          { file: 'uat_target3_cicodecm/app_portal_02_staging_ecms_drive_cards.png', caption: 'Gov ECMS & Drive Application Dispatch Cards' },
          { file: 'uat_target3_cicodecm/app_portal_03_1gov_applications_comparison.png', caption: '1Government Unified Applications Ecosystem' },
          { file: 'uat_target3_cicodecm/app_portal_04_end_test.png', caption: 'Application Gateway Test Session Concluded' }
        ]
      }
    ]
  },
  {
    id: 'module_ecms',
    name: 'CICOD ECMS',
    icon: '🏛️',
    badge: 'Next Up',
    expanded: false,
    features: [
      {
        id: 'ecms_overview',
        sheetName: 'Overview',
        passRate: 'Queued',
        passCount: 0,
        gapCount: 0,
        totalSteps: 12,
        status: 'QUEUED FOR TESTING',
        isUpcoming: true,
        summary: 'Executive situational awareness cockpit: real-time KPI metric cards, workflow queues monitoring, and quick action shortcuts for memos and requisitions.',
        targetRoute: '/ecms/overview',
        images: []
      },
      {
        id: 'ecms_dashboard',
        sheetName: 'Dashboard',
        reportUrl: 'testCases/ecms_dashboard_test_report.html',
        passRate: '100.0%',
        passCount: 18,
        gapCount: 0,
        totalSteps: 18,
        status: '100% VERIFIED',
        isUpcoming: false,
        summary: 'Workflow Dashboard: Real-time task status metrics (Today, Week, Month, Custom date ranges), Open/In Progress/Closed distribution, and Workflow Task Summary interactive AmCharts bar charts.',
        targetRoute: '/ecms/index.php?r=dashboard/workOrder',
        images: [
          { file: 'uat_target3_cicodecm/ecms_step0_dashboard_entry.png', caption: 'Step 0: ECMS Portal Entry & Overview Landing' },
          { file: 'uat_target3_cicodecm/ecms_step1_dashboard_expanded.png', caption: 'Step 1: Dashboard Accordion Expanded in Sidebar' },
          { file: 'uat_target3_cicodecm/ecms_step2_workflow_dashboard_loaded.png', caption: 'Step 2: Workflow Dashboard Loaded (Task Status & Metrics)' },
          { file: 'uat_target3_cicodecm/ecms_step3_new_ticket_tooltip.png', caption: 'Step 3: New Task Tooltip & Metric Indicator' },
          { file: 'uat_target3_cicodecm/ecms_step4_filter_today.png', caption: 'Step 4: Filter Today Active' },
          { file: 'uat_target3_cicodecm/ecms_step5_filter_week.png', caption: 'Step 5: Filter Week Active' },
          { file: 'uat_target3_cicodecm/ecms_step6_filter_month.png', caption: 'Step 6: Filter Month Active (Open Count: 8)' },
          { file: 'uat_target3_cicodecm/ecms_step7_filter_custom_range.png', caption: 'Step 7: Custom Date Range Selector' },
          { file: 'uat_target3_cicodecm/ecms_step9_bar_chart_view.png', caption: 'Step 9: Workflow Task Summary AmCharts Bar Chart' },
          { file: 'uat_target3_cicodecm/ecms_step11_chart_legend_interaction.png', caption: 'Step 11: Interactive Legend Filter Toggling' },
          { file: 'uat_target3_cicodecm/ecms_step18_end_test.png', caption: 'Step 18: Concluded Session State' }
        ]
      },
      {
        id: 'ecms_requests',
        sheetName: 'Requests',
        reportUrl: 'testCases/ecms_request_test_report.html',
        passRate: '54.5%',
        passCount: 12,
        gapCount: 10,
        totalSteps: 22,
        status: '54.5% VERIFIED',
        isUpcoming: false,
        summary: 'Dual internal & external form intake: populated external queue with 5 live forms across 3 categories, search bar filter, form context menu (View/Share), and multi-channel share dialog.',
        targetRoute: '/ecms/index.php?r=request',
        images: [
          { file: 'uat_target3_cicodecm/ecms_req_step1_landing_tabs.png', caption: 'Step 1: Request Module Landing Page with Dual Intake Tabs & Search Bar' },
          { file: 'uat_target3_cicodecm/ecms_req_step2_internal_view.png', caption: 'Step 2: Internal Request Tab (Empty Queue Container)' },
          { file: 'uat_target3_cicodecm/ecms_req_step2b_search_filter.png', caption: 'Step 2b: Search Filter Bar with Active User Query' },
          { file: 'uat_target3_cicodecm/ecms_req_step13_external_tab.png', caption: 'Step 13: External Request Tab displaying 3 Categories & 5 Live Forms' },
          { file: 'uat_target3_cicodecm/ecms_req_step14_external_actions.png', caption: 'Step 14: Form Card Action Dropdown (View Form & Share Form)' },
          { file: 'uat_target3_cicodecm/ecms_req_step18_share_options.png', caption: 'Step 18: Share Form Dialog with Social Channels & Unique Web Link' },
          { file: 'uat_target3_cicodecm/ecms_req_step15_view_form.png', caption: 'Step 15: External Form Intake View (Schema Load Deviation)' },
          { file: 'uat_target3_cicodecm/ecms_req_step22_end_test.png', caption: 'Step 22: External Request Verification Concluded' }
        ]
      },
      {
        id: 'ecms_tasks',
        sheetName: 'Tasks',
        reportUrl: 'testCases/ecms_tasks_test_report.html',
        passRate: '100.0%',
        passCount: 29,
        gapCount: 0,
        totalSteps: 29,
        status: '100% VERIFIED',
        isUpcoming: false,
        summary: 'Operational work orders & tickets engine: dynamic task creation form, queue + queue type mapping, multi-tab registry (Assigned To Me, Created By Me, All, Inactive), search & column customization, single task details view, Act Now action toolbar (Add Comment, Assign User, Reassign Workflow, Update Status, Update Task, File Attachments), interactive browser-native E-Signing, and lifecycle audit report.',
        targetRoute: '/ecms/index.php?r=workOrder',
        images: [
          { file: 'uat_target3_cicodecm/ecms_ticket_01_menu_expand.png', caption: 'Step 1: Left Navigation Menu Expand' },
          { file: 'uat_target3_cicodecm/ecms_ticket_02_create_screen.png', caption: 'Step 2: Create Ticket / Task Form Landing' },
          { file: 'uat_target3_cicodecm/ecms_ticket_03_queue_dropdown.png', caption: 'Step 3: Queue Dropdown Selector' },
          { file: 'uat_target3_cicodecm/ecms_ticket_04_queue_selected.png', caption: 'Step 4: Queue Selected & Queue Type Activated' },
          { file: 'uat_target3_cicodecm/ecms_ticket_05_queuetype_dropdown.png', caption: 'Step 5: Queue Type Dropdown Options' },
          { file: 'uat_target3_cicodecm/ecms_ticket_06_queuetype_selected.png', caption: 'Step 6: Dynamic Form Fields Hydrated' },
          { file: 'uat_target3_cicodecm/ecms_ticket_07_fields_verified.png', caption: 'Step 7: Required Form Labels & Validation Alignment' },
          { file: 'uat_target3_cicodecm/ecms_ticket_08_form_filled.png', caption: 'Step 8: Input Form Filled with Valid Test Data' },
          { file: 'uat_target3_cicodecm/ecms_ticket_09_assign_toggle_on.png', caption: 'Step 9: Assign Right Away Toggle Activated' },
          { file: 'uat_target3_cicodecm/ecms_ticket_10_user_selected.png', caption: 'Step 10: Authorized Officer Assigned' },
          { file: 'uat_target3_cicodecm/ecms_ticket_11_created_popup.png', caption: 'Step 11: Creation Form Submission & Validation' },
          { file: 'uat_target3_cicodecm/ecms_ticket_12_ticket_in_list.png', caption: 'Step 12: Created Notification & Redirect' },
          { file: 'uat_target3_cicodecm/ecms_ticket_13_all_tickets_tabs.png', caption: 'Step 13: Task Verified in Main Registry List' },
          { file: 'uat_target3_cicodecm/ecms_ticket_14_workflow_toggle.png', caption: 'Step 14: All Tickets Page & Navigation Tabs' },
          { file: 'uat_target3_cicodecm/ecms_ticket_15_search_filter.png', caption: 'Step 15: My Workflow / All Tickets Toggle' },
          { file: 'uat_target3_cicodecm/ecms_ticket_16_custom_view_modal.png', caption: 'Step 16: Multi-Criteria Search Filter Input' },
          { file: 'uat_target3_cicodecm/ecms_ticket_17_filter_modal.png', caption: 'Step 17: Custom View Column Customization Modal' },
          { file: 'uat_target3_cicodecm/ecms_ticket_18_inactive_tickets.png', caption: 'Step 18: Registry Filter Criteria Modal' },
          { file: 'uat_target3_cicodecm/ecms_ticket_19_ticket_details.png', caption: 'Step 19: Inactive / Archived Tickets Tab View' },
          { file: 'uat_target3_cicodecm/ecms_ticket_20_add_comment.png', caption: 'Step 20: Single Ticket Details View & Timeline' },
          { file: 'uat_target3_cicodecm/ecms_ticket_21_assign_user.png', caption: 'Step 21: Act Now Action Toolbar Dropdown Menu' },
          { file: 'uat_target3_cicodecm/ecms_ticket_22_assign_confirm.png', caption: 'Step 22: Add Comment Modal Dialog' },
          { file: 'uat_target3_cicodecm/ecms_ticket_23_reassign_workflow.png', caption: 'Step 23: Assign User Selection Modal' },
          { file: 'uat_target3_cicodecm/ecms_ticket_24_esign_modal.png', caption: 'Step 24: User Assignment Confirmed & Notified' },
          { file: 'uat_target3_cicodecm/ecms_ticket_25_update_status.png', caption: 'Step 25: Reassign Ticket to Workflow Modal' },
          { file: 'uat_target3_cicodecm/ecms_ticket_26_update_ticket_page.png', caption: 'Step 26: Interactive Browser E-Sign Modal' },
          { file: 'uat_target3_cicodecm/ecms_ticket_27_upload_file.png', caption: 'Step 27: Update Status Modal & Notification Toggle' },
          { file: 'uat_target3_cicodecm/ecms_ticket_28_file_actions.png', caption: 'Step 28: Update Ticket Edit Attributes Form' },
          { file: 'uat_target3_cicodecm/ecms_ticket_29_lifecycle_report.png', caption: 'Step 29: Upload File Modal (Device & GovDrive)' }
        ]
      },
      {
        id: 'ecms_memos',
        sheetName: 'Memos',
        passRate: '96.6%',
        passCount: 57,
        gapCount: 2,
        totalSteps: 59,
        status: '100% VERIFIED',
        isUpcoming: false,
        reportUrl: 'testCases/ecms_memo_test_report.html',
        summary: 'Official electronic file jackets: rich text memorandum editor, font/color controls, math formula editor, Save Draft, Save Memo submission, View All Memo table, row actions, Attach to Task workflow, Memo Drafts, and Memo Draft Reviews.',
        targetRoute: '/ecms/index.php?r=memo/index',
        images: [
          { url: 'uat_target3_cicodecm/ecms_memo_01_menu_dropdown.png', caption: 'Step #1: Navigate to and click Memo dropdown' },
          { url: 'uat_target3_cicodecm/ecms_memo_02_create_page.png', caption: 'Step #2: Access Create Memo rich text editor page' },
          { url: 'uat_target3_cicodecm/ecms_memo_03_editor_guide.png', caption: 'Step #3: Memo editor guide and checkbox selection' },
          { url: 'uat_target3_cicodecm/ecms_memo_04_editor_title_input.png', caption: 'Step #4: Create Memo title field entry' },
          { url: 'uat_target3_cicodecm/ecms_memo_05_font_family_dropdown.png', caption: 'Step #5: Font family selector options' },
          { url: 'uat_target3_cicodecm/ecms_memo_06_style_size_menu.png', caption: 'Step #6: Font styles and text size selector' },
          { url: 'uat_target3_cicodecm/ecms_memo_07_bold_format.png', caption: 'Step #7: Bold formatting applied to headline text' },
          { url: 'uat_target3_cicodecm/ecms_memo_08_italic_format.png', caption: 'Step #8: Italic formatting applied to note text' },
          { url: 'uat_target3_cicodecm/ecms_memo_09_underline_format.png', caption: 'Step #9: Underline decoration formatting applied' },
          { url: 'uat_target3_cicodecm/ecms_memo_10_strikethrough_format.png', caption: 'Step #10: Strikethrough style applied to legacy text' },
          { url: 'uat_target3_cicodecm/ecms_memo_11_text_color_palette.png', caption: 'Step #11: Text foreground color picker palette' },
          { url: 'uat_target3_cicodecm/ecms_memo_12_background_color_palette.png', caption: 'Step #12: Text background highlight color picker' },
          { url: 'uat_target3_cicodecm/ecms_memo_13_alignment_options.png', caption: 'Step #13: Text alignment menu with Center alignment' },
          { url: 'uat_target3_cicodecm/ecms_memo_14_ordered_list.png', caption: 'Step #14: Numeric ordered list formatting' },
          { url: 'uat_target3_cicodecm/ecms_memo_15_bullet_list.png', caption: 'Step #15: Unordered bullet list formatting' },
          { url: 'uat_target3_cicodecm/ecms_memo_16_decrease_indent.png', caption: 'Step #16: Decreased paragraph indent level' },
          { url: 'uat_target3_cicodecm/ecms_memo_17_increase_indent.png', caption: 'Step #17: Increased paragraph indent level' },
          { url: 'uat_target3_cicodecm/ecms_memo_18_blockquote_format.png', caption: 'Step #18: Indented blockquote block formatting' },
          { url: 'uat_target3_cicodecm/ecms_memo_19_insert_link_dialog.png', caption: 'Step #19: Hyperlink insertion modal dialog' },
          { url: 'uat_target3_cicodecm/ecms_memo_20_insert_image_dialog.png', caption: 'Step #20: Image upload and URL modal dialog' },
          { url: 'uat_target3_cicodecm/ecms_memo_21_insert_formula_dialog.png', caption: 'Step #21: Mathematical formula LaTeX modal dialog' },
          { url: 'uat_target3_cicodecm/ecms_memo_22_clear_formatting.png', caption: 'Step #22: Clear rich text formatting applied' },
          { url: 'uat_target3_cicodecm/ecms_memo_23_save_draft_dialog.png', caption: 'Step #23: Save Draft filename modal dialog' },
          { url: 'uat_target3_cicodecm/ecms_memo_24_save_memo_submission.png', caption: 'Step #24: Save Memo submission failure error popup' },
          { url: 'uat_target3_cicodecm/ecms_memo_25_view_all_dropdown.png', caption: 'Step #25: Memo navigation menu for View All' },
          { url: 'uat_target3_cicodecm/ecms_memo_26_view_all_page.png', caption: 'Step #26: View All Memo table repository page' },
          { url: 'uat_target3_cicodecm/ecms_memo_27_action_menu.png', caption: 'Step #27: View All Memo row action dropdown menu' },
          { url: 'uat_target3_cicodecm/ecms_memo_28_view_memo_readonly.png', caption: 'Step #28: Read-only memo details view modal' },
          { url: 'uat_target3_cicodecm/ecms_memo_29_update_memo_editmode.png', caption: 'Step #29: Update memo edit mode interface' },
          { url: 'uat_target3_cicodecm/ecms_memo_30_toolbar_reviewers_feedback.png', caption: 'Step #30: Update toolbar Add Reviewer & Feedbacks buttons' },
          { url: 'uat_target3_cicodecm/ecms_memo_31_attach_to_ticket_page.png', caption: 'Step #31: Initiate Task creation from Memo (Attach to Ticket)' },
          { url: 'uat_target3_cicodecm/ecms_memo_32_queue_selected.png', caption: 'Step #32: Queue and Queue Type selection' },
          { url: 'uat_target3_cicodecm/ecms_memo_33_create_task_form.png', caption: 'Step #33: Create Task form loaded with memo link' },
          { url: 'uat_target3_cicodecm/ecms_memo_34_task_title_entered.png', caption: 'Step #34: Entered Task Title' },
          { url: 'uat_target3_cicodecm/ecms_memo_35_attach_memo_link_clicked.png', caption: 'Step #35: Attach Memo link modal dialog' },
          { url: 'uat_target3_cicodecm/ecms_memo_36_memo_file_attached.png', caption: 'Step #36: Selected memo file attached to task' },
          { url: 'uat_target3_cicodecm/ecms_memo_37_attachment_verified.png', caption: 'Step #37: Memo attachment filename badge verified' },
          { url: 'uat_target3_cicodecm/ecms_memo_38_form_fields_completed.png', caption: 'Step #38: Completed remaining task form fields' },
          { url: 'uat_target3_cicodecm/ecms_memo_39_immediate_assign_checked.png', caption: 'Step #39: Checked immediate task assignment checkbox' },
          { url: 'uat_target3_cicodecm/ecms_memo_40_assignee_selected.png', caption: 'Step #40: Selected assignee user in dropdown' },
          { url: 'uat_target3_cicodecm/ecms_memo_41_task_created_notification.png', caption: 'Step #41: Finalized task creation with notification' },
          { url: 'uat_target3_cicodecm/ecms_memo_42_memo_draft_dropdown.png', caption: 'Step #42: Memo dropdown with Memo Draft link' },
          { url: 'uat_target3_cicodecm/ecms_memo_43_memo_draft_page.png', caption: 'Step #43: Memo Drafts table page loaded' },
          { url: 'uat_target3_cicodecm/ecms_memo_44_draft_action_menu.png', caption: 'Step #44: Draft table row action dropdown' },
          { url: 'uat_target3_cicodecm/ecms_memo_45_draft_view_readonly.png', caption: 'Step #45: Draft memo read-only preview modal' },
          { url: 'uat_target3_cicodecm/ecms_memo_46_draft_toolbar_features.png', caption: 'Step #46: Draft toolbar features (Add Reviewer, Feedbacks, Access)' },
          { url: 'uat_target3_cicodecm/ecms_memo_47_add_reviewer_modal.png', caption: 'Step #47: Add Reviewer modal dialog' },
          { url: 'uat_target3_cicodecm/ecms_memo_48_reviewer_added_confirmation.png', caption: 'Step #48: Reviewer assigned notification confirmation' },
          { url: 'uat_target3_cicodecm/ecms_memo_49_draft_view_feedback_panel.png', caption: 'Step #49: View Feedback side drawer comments panel' },
          { url: 'uat_target3_cicodecm/ecms_memo_50_draft_view_access_modal.png', caption: 'Step #50: View Access permissions list modal' },
          { url: 'uat_target3_cicodecm/ecms_memo_51_draft_update_editmode.png', caption: 'Step #51: Update draft memo editable interface' },
          { url: 'uat_target3_cicodecm/ecms_memo_52_draft_update_cancelled.png', caption: 'Step #52: Draft edit cancelled confirmation' },
          { url: 'uat_target3_cicodecm/ecms_memo_53_memo_review_dropdown.png', caption: 'Step #53: Memo dropdown with Memo Draft REVIEW link' },
          { url: 'uat_target3_cicodecm/ecms_memo_54_memo_review_page.png', caption: 'Step #54: Memo Draft Review queue table page' },
          { url: 'uat_target3_cicodecm/ecms_memo_55_review_action_menu.png', caption: 'Step #55: Review queue table row action menu' },
          { url: 'uat_target3_cicodecm/ecms_memo_56_review_mode_interface.png', caption: 'Step #56: Review mode active evaluation interface' },
          { url: 'uat_target3_cicodecm/ecms_memo_57_review_view_feedback_panel.png', caption: 'Step #57: Review feedback comments side drawer' },
          { url: 'uat_target3_cicodecm/ecms_memo_58_review_view_access_modal.png', caption: 'Step #58: Reviewer access control list modal' },
          { url: 'uat_target3_cicodecm/ecms_memo_59_review_cancelled.png', caption: 'Step #59: Exit review mode return to queue' }
        ]
      },
      {
        id: 'ecms_workflows',
        sheetName: 'Workflows',
        reportUrl: 'testCases/workflow_test_report.html',
        passRate: '66.7%',
        passCount: 28,
        gapCount: 14,
        totalSteps: 42,
        status: 'PARTIAL — 5 CONFIRMED BUGS',
        isUpcoming: false,
        summary: 'Core workflow configuration engine: Create Workflow wizard (Process/Form/Escalation/Approval), Queue/Queue Type/Status setup, My Workflows list, and Department linking. 42 checkpoints verified across 8 scenarios (28 passed, 3 deviations, 5 confirmed bugs). One defect (Department-link Folder Path) is a full feature outage (P0); a systemic wrong-menu bug additionally blocks ~60 of the ~208 full script rows, which remain untested pending a fix.',
        targetRoute: '/ecms/workflows',
        images: [
          { file: 'uat_target3_cicodecm/wf_step2b_process_tab.png', caption: 'Create Workflow — Process Tab (Queue/Queue Type/Status)' },
          { file: 'uat_target3_cicodecm/wf_step11b_approval_add_form.png', caption: 'Approval Level Form (Undocumented Branching)' },
          { file: 'uat_target3_cicodecm/wf_step17_finish_clicked.png', caption: 'Workflow Created — Grant Access Prompt' },
          { file: 'uat_target3_cicodecm/wf_step18c_role_table_empty_bug.png', caption: 'BUG: Grant-Access Role List Renders Zero Rows' },
          { file: 'uat_target3_cicodecm/wf_step23_queue_wrong_menu_bug.png', caption: 'BUG: Wrong Action Menu on Queue/Queue Type/Status Tabs' },
          { file: 'uat_target3_cicodecm/wf_step19b_suspend_result.png', caption: 'Suspend Workflow — Active/Suspended Counters Update Correctly' },
          { file: 'uat_target3_cicodecm/wf2_step9c_govdrive_stuck.png', caption: 'P0 BUG: Department-Link Folder Path — Gov Drive Session Expired' },
          { file: 'uat_target3_cicodecm/wf2_step38_final_state.png', caption: 'My Workflows — Confirms Department Link Never Applied (Departments: No)' }
        ]
      },
      {
        id: 'ecms_forms',
        sheetName: 'Forms',
        reportUrl: 'testCases/forms_test_report.html',
        passRate: '70.8%',
        passCount: 17,
        gapCount: 7,
        totalSteps: 24,
        status: 'PARTIAL — PUBLIC FORM-FILL BROKEN (P0)',
        isUpcoming: false,
        summary: 'Form builder engine: Internal/External/Inter MDA form creation, Queue/Queue Type linkage (auto-populates fields from the linked workflow), field builder, Share (Link/Embed/WhatsApp/Mail/Twitter/Facebook), Update, and Suspend/Unsuspend. 24 checkpoints verified across 5 scenarios (17 passed, 2 deviations, 3 confirmed defects). The public "Fill a Form" link is completely non-functional (P0, confirmed on 2 forms including a real pre-existing one), and Form Type classification (Internal/External) is broken across the grid column and both filter tabs. ~174 of 198 script rows were not executed given these blockers.',
        targetRoute: '/ecms/webForm/index',
        images: [
          { file: 'uat_target3_cicodecm/forms_step1_create_page.png', caption: 'Create Form — 5 Form Types (Internal/External/Inter MDA/Status/Data Capture)' },
          { file: 'uat_target3_cicodecm/forms_step6_queue_selected.png', caption: 'Queue Type Selection Auto-Populates Fields from Linked Workflow' },
          { file: 'uat_target3_cicodecm/forms_step14_update_form_shows_internal.png', caption: 'BUG: Grid Shows "External" for a Form Actually Saved as Internal' },
          { file: 'uat_target3_cicodecm/forms_step24_external_tab.png', caption: 'BUG: External Forms Tab Lists Every Form Regardless of Real Type' },
          { file: 'uat_target3_cicodecm/forms_step16_share_modal.png', caption: 'Share Form Modal — Link/Embed/WhatsApp/FB/Twitter/Email' },
          { file: 'uat_target3_cicodecm/forms_step17_public_fill_page.png', caption: 'P0 BUG: Public Fill-Form Link — "Unable To Load Form!"' },
          { file: 'uat_target3_cicodecm/forms_step19_cicodform_public.png', caption: 'P0 BUG Reproduced on Pre-Existing Production Form (CICOD Form)' },
          { file: 'uat_target3_cicodecm/forms_step21_after_suspend.png', caption: 'Suspend Form — Status Updates Correctly' }
        ]
      },
      {
        id: 'ecms_workgroups',
        sheetName: 'Workgroups',
        passRate: 'Queued',
        passCount: 0,
        gapCount: 0,
        totalSteps: 14,
        status: 'QUEUED FOR TESTING',
        isUpcoming: true,
        summary: 'Cross-departmental taskforces: ad-hoc probe committees, secure inter-ministerial collaborative casework spaces, and shared minute vaults.',
        targetRoute: '/ecms/workgroups',
        images: []
      },
      {
        id: 'ecms_contacts',
        sheetName: 'Contacts',
        reportUrl: 'testCases/contacts_test_report.html',
        passRate: '73.5%',
        passCount: 36,
        gapCount: 13,
        totalSteps: 49,
        status: 'PARTIAL — 9 CONFIRMED DEFECTS',
        isUpcoming: false,
        summary: 'Institutional registry: contact directory with Create/Update Contact (incl. Add Field toggles, Cancel), Create Ticket In Contact (auto-fills Name/Phone from the contact), Search Ticket By ID, and Notes (Create/Update/Delete). 49 checkpoints verified across 8 scenarios (36 passed, 2 deviations, 9 distinct confirmed defects across 11 rows, 1 at a ~2/3 reproduction rate). Update Contact does not preload Country/State and then silently fails to save; Create Note silently fails unless a "Call Driver" is selected; Create Ticket In Contact frequently (2/3 attempts) returned a broken raw error page and force-logged the session out even though the ticket was actually created; dynamic form-builder Check Box fields and the "assign task right away" checkbox both silently discard their state; the Contact view page never displays Prefix/Middle Name despite saving them; toggling the ticket form\'s "Existing" checkbox irreversibly wipes the auto-filled contact data. A deep dive to reach the script\'s address/attach-file/signature fields (built a new Queue Type via the Workflow module, fixed a role-access gap) surfaced a further defect: ticket creation silently fails against any newly-created Queue Type. Zero items left not-executed. The related "Create User" scenario (misplaced in this sheet) was split out into its own module — see Users below — where it was found completely broken.',
        targetRoute: '/ecms/contacts',
        images: [
          { file: 'uat_target3_cicodecm/contacts_step7_saved_result.png', caption: 'Create Contact — "Contact created" Success' },
          { file: 'uat_target3_cicodecm/contacts_step39_edit_contact_form.png', caption: 'BUG: Update Contact Does Not Preload Country/State' },
          { file: 'uat_target3_cicodecm/contacts_step42_save_state.png', caption: 'BUG: Update Contact Save Fails Silently (No Error Shown)' },
          { file: 'uat_target3_cicodecm/contacts_step18_scrolled.png', caption: 'Create Ticket In Contact — Name/Phone Auto-Filled from Contact' },
          { file: 'uat_target3_cicodecm/contacts_step19_create_attempt.png', caption: 'BUG: Broken "Not Successful!" Response + Forced Logout (2/3 Attempts)' },
          { file: 'uat_target3_cicodecm/contacts_step27_search_enter.png', caption: 'Search Ticket By ID — Correctly Filtered to Matching Row' },
          { file: 'uat_target3_cicodecm/contacts_step32_notes_reload_check.png', caption: 'BUG: Create Note Silently Fails Without Call Driver Selected' },
          { file: 'uat_target3_cicodecm/contacts_step38_note_update_result.png', caption: 'Update Notes — "Note updated!" Success' },
          { file: 'uat_target3_cicodecm/contacts_step53_addfield_view.png', caption: 'BUG: Prefix/Middle Name Saved But Never Displayed on View Page' },
          { file: 'uat_target3_cicodecm/contacts_step69_ticket1045_detail.png', caption: 'BUG: Check Box Field & Assign-Task Checkbox Both Silently Discarded' },
          { file: 'uat_target3_cicodecm/contacts_step65_existing_unchecked.png', caption: 'BUG: Toggling "Existing" Checkbox Irreversibly Wipes Auto-Fill' },
          { file: 'uat_target3_cicodecm/contacts_step81_final_tasklist.png', caption: 'BUG: Ticket Creation Silently Fails on Newly-Created Queue Types' }
        ]
      },
      {
        id: 'ecms_users',
        sheetName: 'Users',
        reportUrl: 'testCases/users_test_report.html',
        passRate: '63.0%',
        passCount: 17,
        gapCount: 10,
        totalSteps: 27,
        status: 'PARTIAL — CREATE USER & DEPARTMENT BOTH BROKEN (P0)',
        isUpcoming: false,
        summary: 'Staff & hierarchy directory: user CRUD, Make A Resource, departmental rosters, and role-based access control (RBAC). 27 checkpoints verified across 8 scenarios (17 passed, 2 deviations, 3 confirmed defects, 5 rows blocked by one of those defects). Create User silently fails with fully valid data (P0, confirmed 2/2, no error shown); the entire Department page is inaccessible ("Oops! Something went wrong", P0, confirmed 2/2), blocking Create/Edit/Suspend/Unsuspend/Search Department outright; Suspend User can be blocked by an unrelated "Job Title cannot be blank" validation when the target user\'s Job Title was never filled in (P1, confirmed via A/B test). In contrast, View User, Edit User, Unsuspend User, Make A Resource, Search Users, and every Role scenario (Create/Edit/Suspend/Unsuspend/Search) all work correctly.',
        targetRoute: '/ecms/users',
        images: [
          { file: 'uat_target3_cicodecm/users_step4_create_form.png', caption: 'New User Form — All Scripted Fields Present' },
          { file: 'uat_target3_cicodecm/users_step13_search_check.png', caption: 'BUG (P0): Create User Silently Fails — User Never Persisted' },
          { file: 'uat_target3_cicodecm/users_step22_invalid_result.png', caption: 'Invalid Email Format Correctly Rejected' },
          { file: 'uat_target3_cicodecm/users_step23_invalid_phone_result.png', caption: 'Invalid Phone Format Correctly Rejected' },
          { file: 'uat_target3_cicodecm/users_step45_dept_retry.png', caption: 'BUG (P0): Department Page Is Entirely Inaccessible' },
          { file: 'uat_target3_cicodecm/users_step32_after_suspend_error.png', caption: 'BUG: Suspend User Blocked by "Job Title cannot be blank"' },
          { file: 'uat_target3_cicodecm/users_step28_update_result.png', caption: 'Edit User Works Correctly — "Successful"' },
          { file: 'uat_target3_cicodecm/users_step41_resource_list.png', caption: 'Make A Resource — User Correctly Converted to Resource' }
        ]
      },
      {
        id: 'ecms_resources',
        sheetName: 'Resources',
        reportUrl: 'testCases/resource_test_report.html',
        passRate: '75.0%',
        passCount: 6,
        gapCount: 2,
        totalSteps: 8,
        status: 'PASSED — MINOR UI DEVIATIONS ONLY (NO BLOCKING DEFECTS)',
        isUpcoming: false,
        summary: 'Field dispatch & physical assets: Resource list/search plus the Resource Type sub-page (list, create, suspend). 8 checkpoints verified across 5 scenarios (6 passed, 2 minor deviations, 0 confirmed defects). Resource Type\'s Create and Suspend actions both work correctly and persist as expected. Two deviations found: the Resource list\'s KPI header (Total Records: 2) doesn\'t match the 1 row actually rendered in the grid, and the New Resource Type form leaves a stale "Please select a queue type" message on screen after a valid selection is made (cosmetic only — Create still succeeds). Resource Level, Resource Shift, Resource Schedule, and Update/Unsuspend/Search on Resource Type were not exercised this session.',
        targetRoute: '/ecms/resources',
        images: [
          { file: 'uat_target3_cicodecm/resource_step1_list.png', caption: 'Deviation: Resource List KPI Shows 2 Records, Only 1 Row Rendered' },
          { file: 'uat_target3_cicodecm/resource_step9_real_click.png', caption: 'Deviation: Stale "Please select a queue type" Message After Valid Selection' },
          { file: 'uat_target3_cicodecm/resource_step10_after_create_click.png', caption: 'Create Resource Type Works Correctly — "Successful"' },
          { file: 'uat_target3_cicodecm/resource_step12_type_suspend.png', caption: 'Suspend Resource Type Works Correctly — "Suspended"' }
        ]
      },
      {
        id: 'ecms_reports',
        sheetName: 'Reports',
        reportUrl: 'testCases/reports_test_report.html',
        passRate: '80.0%',
        passCount: 8,
        gapCount: 2,
        totalSteps: 10,
        status: 'PARTIAL — DOWNLOAD REPORT THROWS "undefined" ERROR (P1)',
        isUpcoming: false,
        summary: 'Report generation & audit workflows: cascading Queue/Queue Type filters, results grid, and per-report Download export. 10 checkpoints verified across 6 scenarios (8 passed, 1 minor deviation, 1 confirmed defect). Report search itself works correctly — cross-checked against the Tasks module as ground truth, confirming that two queues returning zero rows (Complaints, UAT Test Queue 90355) genuinely have no matching tasks, while Queue=PLANNING AND SCHEDULING correctly returns its 1 matching task. However, clicking Download on a populated report throws a raw, unhandled "undefined" alert instead of exporting a file (confirmed 2/2) — a P1 defect since export is a core Reports capability. Audit Log (the module\'s second sub-page) and the Status/Priority/Date/Task State/Created By/Assigned To filters were not exercised this session.',
        targetRoute: '/ecms/reports',
        images: [
          { file: 'uat_target3_cicodecm/reports_step12_planning_search.png', caption: 'Report Search Confirmed Working — Queue=PLANNING AND SCHEDULING Returns Its 1 Matching Task' },
          { file: 'uat_target3_cicodecm/reports_step13c_after_download_click.png', caption: 'BUG (P1): Download Report Throws Raw "undefined" Alert Instead of Exporting' },
          { file: 'uat_target3_cicodecm/reports_step9_broad_search_complaints.png', caption: 'Zero Results for Complaints Queue — Confirmed Genuine via Tasks Ground-Truth Check' },
          { file: 'uat_target3_cicodecm/reports_step11_tasks_ground_truth.png', caption: 'Ground-Truth Check: Tasks Module Confirms Real Data Exists (48 Total Tasks)' }
        ]
      }
    ]
  }
];

// Ensure global accessibility for browser scripts & backwards compatibility
if (typeof window !== 'undefined') {
  window.appModules = appModules;
}

// Support CommonJS export if used in Node.js test runners
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { appModules };
}
