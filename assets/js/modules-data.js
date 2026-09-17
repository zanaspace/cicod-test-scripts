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
        passRate: '100.0%',
        passCount: 9,
        gapCount: 0,
        totalSteps: 9,
        status: '100% VERIFIED',
        images: [
          { file: 'uat_01_signup_page.png', caption: 'Initial Registration & Landing Portal' },
          { file: 'uat_p1_02_signup_form.png', caption: 'MDA Profile & Credentials Form' },
          { file: 'uat_p1_03_signup_filled.png', caption: 'Account Data & Agreement Terms Populated' },
          { file: 'uat_p1_04_signup_after_submit.png', caption: 'Submission Verification & Routing Confirmation' }
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
        passRate: 'Queued',
        passCount: 0,
        gapCount: 0,
        totalSteps: 28,
        status: 'QUEUED FOR TESTING',
        isUpcoming: true,
        summary: 'Official electronic file jackets: chronological minute trails, parallel ministerial endorsements, attachment versioning, and digital signature sealing.',
        targetRoute: '/ecms/memos',
        images: []
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
        passRate: 'Queued',
        passCount: 0,
        gapCount: 0,
        totalSteps: 10,
        status: 'QUEUED FOR TESTING',
        isUpcoming: true,
        summary: 'Institutional registry: accredited government contractor directory, inter-agency nodal contact matrix, and official correspondence logs.',
        targetRoute: '/ecms/contacts',
        images: []
      },
      {
        id: 'ecms_users',
        sheetName: 'Users',
        passRate: 'Queued',
        passCount: 0,
        gapCount: 0,
        totalSteps: 15,
        status: 'QUEUED FOR TESTING',
        isUpcoming: true,
        summary: 'Staff & hierarchy directory: departmental rosters, line manager approval trees, role-based access control (RBAC), and delegation settings.',
        targetRoute: '/ecms/users',
        images: []
      },
      {
        id: 'ecms_resources',
        sheetName: 'Resources',
        passRate: 'Queued',
        passCount: 0,
        gapCount: 0,
        totalSteps: 12,
        status: 'QUEUED FOR TESTING',
        isUpcoming: true,
        summary: 'Field dispatch & physical assets: officer equipment allocation, regional dispatch zones, and capacity load-balancing.',
        targetRoute: '/ecms/resources',
        images: []
      },
      {
        id: 'ecms_reports',
        sheetName: 'Reports',
        passRate: 'Queued',
        passCount: 0,
        gapCount: 0,
        totalSteps: 20,
        status: 'QUEUED FOR TESTING',
        isUpcoming: true,
        summary: 'Audit & compliance reporting: SLA breach logs, executive memo cycle audits, departmental throughput, and archival records.',
        targetRoute: '/ecms/reports',
        images: []
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
