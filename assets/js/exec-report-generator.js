/**
 * CICOD Executive & Engineering At-a-Glance Reporting Engine
 * 
 * Generates instant, high-impact briefings tailored for both executive leadership
 * (business risk, release readiness, health metrics) and engineering teams
 * (route blueprints, defect triage by severity P0-P3, root cause analysis, hotfixes).
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ExecReportGenerator = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Comprehensive Knowledge Base of Executive & Engineering Triage Data
  const reportRegistry = {
    // ==========================================
    // CICOD DRIVE MODULES
    // ==========================================
    login: {
      modId: 'module_drive',
      moduleName: 'CICOD Drive',
      sheetName: 'Login',
      reportUrl: 'testCases/login_test_report.html',
      targetRoute: '/login?tenant=cicodecm',
      verdict: 'PRODUCTION READY — 100% PASS',
      verdictType: 'pass',
      healthScore: 100,
      passRate: '100.0%',
      passCount: 30,
      gapCount: 0,
      totalSteps: 30,
      riskRating: 'LOW',
      businessImpact: 'Authentication, session hydration, and multi-tenant domain routing operate with zero customer-facing friction. Secure credential handling and OWASP password masking fully compliant.',
      executiveSummary: 'Full end-to-end authentication audit completed across 5 discrete scenarios and 30 verified sub-steps. Multi-tenant routing correctly resolves tenant sub-domains, cookie consent dismisses cleanly, password masking toggles reliably, and brute-force credential errors reject unauthorized access safely.',
      environment: {
        targetUrl: 'https://cicodsaasstaging.com/login?tenant=cicodecm',
        tenantId: 'cicodecm',
        authRole: 'Subscriber & Host Personas',
        engine: 'Headless Edge CDP (Port 9238)',
        auditDate: 'September 15, 2026'
      },
      severityMatrix: { p0: 0, p1: 0, p2: 0, p3: 0 },
      defects: [],
      engineeringActionItems: [
        { priority: 'P3', item: 'Maintain session token expiration telemetry monitoring under high concurrency.', component: 'Auth Gateway' },
        { priority: 'P3', item: 'Verify cross-browser autofill behavior for enterprise password managers.', component: 'Frontend Form' }
      ],
      evidence: [
        { file: 'uat_target3_cicodecm/login_tc1_step1_displays_login_page.png', caption: 'Target 3 Multi-tenant Login Screen' },
        { file: 'uat_target3_cicodecm/login_tc1_correct_details_filled.png', caption: 'Tenant & Credentials Populated' },
        { file: 'uat_target3_cicodecm/login_tc1_after_correct_submission.png', caption: 'Merchant SSO Hydration & Dashboard Routing' },
        { file: 'uat_target3_cicodecm/login_tc5_password_revealed.png', caption: 'Password Masking Toggle' },
        { file: 'uat_target3_cicodecm/login_tc2_wrong_domain_error.png', caption: 'Domain Validation Error Toast' },
        { file: 'uat_target3_cicodecm/login_tc4_wrong_password_error.png', caption: 'Invalid Password Security Response' }
      ]
    },

    mydoc: {
      modId: 'module_drive',
      moduleName: 'CICOD Drive',
      sheetName: 'My Document',
      reportUrl: 'testCases/mydocument_test_report.html',
      targetRoute: '/cde/my-documents',
      verdict: 'CONDITIONAL PASS — 32 GAPS IDENTIFIED',
      verdictType: 'warn',
      healthScore: 59,
      passRate: '59.0%',
      passCount: 46,
      gapCount: 32,
      totalSteps: 78,
      riskRating: 'MODERATE',
      businessImpact: 'Users can navigate files and create directories, but secondary context menu operations (multi-selection, batch download, nested drag-and-drop) deviate from Excel specification.',
      executiveSummary: 'Primary document lifecycle functions (vault view, folder generation, context menu invocation) operate successfully. 32 documented gaps reflect Excel specification mismatches including missing bulk actions and context menu naming inconsistencies.',
      environment: {
        targetUrl: 'https://cicodecms.cicodsaasstaging.com/cde/my-documents',
        tenantId: 'cicodecms',
        authRole: 'Authenticated Document Owner',
        engine: 'Headless Edge CDP (Port 9238)',
        auditDate: 'September 15, 2026'
      },
      severityMatrix: { p0: 0, p1: 1, p2: 4, p3: 27 },
      defects: [
        { id: 'MYDOC-GAP-01', severity: 'P1', title: 'Batch Selection Actions Incomplete', trigger: 'Multi-select checkboxes on document table', expected: 'Floating bulk action toolbar for Download / Move / Delete', actual: 'Toolbar does not hydrate on multi-selection', rootCause: 'DOM event listener not attached to table multi-select header checkbox', hotfix: 'Implement selection state listener in CDE table controller.' },
        { id: 'MYDOC-GAP-02', severity: 'P2', title: 'Folder Context Menu Labeling Deviation', trigger: 'Click 3-dots on directory row', expected: 'Rename Folder option as per row 112', actual: 'Label displays "Edit Details" instead of "Rename Folder"', rootCause: 'UI translation token mismatch', hotfix: 'Align localization token with Drive UX standard.' }
      ],
      engineeringActionItems: [
        { priority: 'P1', item: 'Wire batch selection state management to floating bulk toolbar.', component: 'CDE UI Grid' },
        { priority: 'P2', item: 'Align folder action modal labels with test specification.', component: 'Drive Directory Controller' }
      ],
      evidence: [
        { file: 'uat_target3_cicodecm/t3_mydocs_page_displayed.png', caption: 'My Documents Landing Page' },
        { file: 'uat_target3_cicodecm/t3_mydocs_new_dropdown.png', caption: '+ New Action Dropdown' },
        { file: 'uat_target3_cicodecm/t3_mydocs_create_folder_modal.png', caption: 'Create Folder Modal' },
        { file: 'uat_target3_cicodecm/t3_mydocs_folder_name_entered.png', caption: 'Folder Name Populated' },
        { file: 'uat_target3_cicodecm/t3_mydocs_folder_action_menu.png', caption: 'Folder 3-Dots Context Menu' },
        { file: 'uat_target3_cicodecm/t3_mydocs_file_actions_menu.png', caption: 'File Actions Context Menu' }
      ]
    },

    collab: {
      modId: 'module_drive',
      moduleName: 'CICOD Drive',
      sheetName: 'Collaboration',
      reportUrl: 'testCases/collaboration_test_report.html',
      targetRoute: '/cde/collaboration',
      verdict: 'AUDITED — ARCHITECTURE SPECIFICATION MISMATCH',
      verdictType: 'warn',
      healthScore: 46,
      passRate: '46.2%',
      passCount: 24,
      gapCount: 28,
      totalSteps: 52,
      riskRating: 'MODERATE',
      businessImpact: 'Shared workspace documents are securely segregated, but legacy "Create Folder Inside Collaboration" expectation does not match the modern invite-only ingestion architecture.',
      executiveSummary: '24 checkpoints verified. The module operates under an intentional Ingestion & Invitation paradigm where shared folders are provisioned via sharing workflows rather than direct creation inside the collaboration view.',
      environment: {
        targetUrl: 'https://cicodecms.cicodsaasstaging.com/cde/collaboration',
        tenantId: 'cicodecms',
        authRole: 'Collaborator / Contributor',
        engine: 'Headless Edge CDP (Port 9238)',
        auditDate: 'September 15, 2026'
      },
      severityMatrix: { p0: 0, p1: 1, p2: 3, p3: 24 },
      defects: [
        { id: 'COL-GAP-01', severity: 'P1', title: 'Missing In-Situ Folder Creation Button', trigger: 'Navigate to Collaboration root', expected: '+ New Folder button present in top toolbar', actual: 'Toolbar only displays search and view switches (Invitation model active)', rootCause: 'Architectural redesign to RBAC invitation model', hotfix: 'Update Test Script row 171 to reflect modern invitation architecture.' }
      ],
      engineeringActionItems: [
        { priority: 'P2', item: 'Add explicit UI guidance note informing users that collaboration workspaces are populated via invite.', component: 'Collaboration View' }
      ],
      evidence: [
        { file: 'uat_target3_cicodecm/collab_tc1_step170_landing_page.png', caption: 'Collaboration Workspace Landing' },
        { file: 'uat_target3_cicodecm/collab_tc2_step177_folder_menu.png', caption: 'Shared Folder Context Menu' },
        { file: 'uat_target3_cicodecm/collab_tc3_step180_file_menu.png', caption: 'File RBAC Sharing & Action Menu' }
      ]
    },

    gendoc: {
      modId: 'module_drive',
      moduleName: 'CICOD Drive',
      sheetName: 'General Document',
      reportUrl: 'testCases/general_document_test_report.html',
      targetRoute: '/cde/general-documents',
      verdict: 'AUDITED — 25 GAPS DOCUMENTED',
      verdictType: 'warn',
      healthScore: 47,
      passRate: '46.8%',
      passCount: 22,
      gapCount: 25,
      totalSteps: 47,
      riskRating: 'MODERATE',
      businessImpact: 'General institutional repository browsable; permissions and read-only flags properly enforced. Specific context actions require UI synchronization.',
      executiveSummary: '22 verified steps passed. Repository layout, folder navigation, grid/list view toggles, and metadata inspection verified.',
      environment: { targetUrl: 'https://cicodecms.cicodsaasstaging.com/cde/general-documents', tenantId: 'cicodecms', authRole: 'Staff Member', engine: 'Headless Edge CDP', auditDate: 'September 15, 2026' },
      severityMatrix: { p0: 0, p1: 1, p2: 4, p3: 20 },
      defects: [],
      engineeringActionItems: [{ priority: 'P2', item: 'Synchronize context menu actions between Grid and List view modes.', component: 'General Docs Table' }],
      evidence: [{ file: 'uat_target3_cicodecm/t3_gendoc_landing.png', caption: 'General Document Repository' }]
    },

    appdoc: {
      modId: 'module_drive',
      moduleName: 'CICOD Drive',
      sheetName: 'Application Document',
      reportUrl: 'testCases/application_document_test_report.html',
      targetRoute: '/cde/application-documents',
      verdict: 'AUDITED — 38 GAPS DOCUMENTED',
      verdictType: 'warn',
      healthScore: 53,
      passRate: '52.5%',
      passCount: 42,
      gapCount: 38,
      totalSteps: 80,
      riskRating: 'MODERATE',
      businessImpact: 'Application attachment vault preserves submitted documents. Context menus for audit logging and hash verification need alignment.',
      executiveSummary: '42 steps verified across application queue folders. Application attachments correctly indexed; gaps primarily involve advanced folder operations.',
      environment: { targetUrl: 'https://cicodecms.cicodsaasstaging.com/cde/application-documents', tenantId: 'cicodecms', authRole: 'Case Officer', engine: 'Headless Edge CDP', auditDate: 'September 15, 2026' },
      severityMatrix: { p0: 0, p1: 1, p2: 5, p3: 32 },
      defects: [],
      engineeringActionItems: [{ priority: 'P2', item: 'Verify digital signature and hash verification icons in context actions.', component: 'Application Vault' }],
      evidence: [{ file: 'uat_target3_cicodecm/t3_appdoc_landing.png', caption: 'Application Documents Landing' }]
    },

    recent: {
      modId: 'module_drive',
      moduleName: 'CICOD Drive',
      sheetName: 'Recent Document',
      reportUrl: 'testCases/recent_document_test_report.html',
      targetRoute: '/cde/recent-documents',
      verdict: 'AUDITED — CHRONOLOGICAL GROUPING VERIFIED',
      verdictType: 'warn',
      healthScore: 32,
      passRate: '31.6%',
      passCount: 12,
      gapCount: 26,
      totalSteps: 38,
      riskRating: 'LOW',
      businessImpact: 'Recent files correctly ordered by access timestamp. Secondary batch actions deviate from spec.',
      executiveSummary: 'Chronological timeline grouping verified. Document metadata, properties drawer, and quick preview functions operate.',
      environment: { targetUrl: 'https://cicodecms.cicodsaasstaging.com/cde/recent-documents', tenantId: 'cicodecms', authRole: 'Active User', engine: 'Headless Edge CDP', auditDate: 'September 15, 2026' },
      severityMatrix: { p0: 0, p1: 0, p2: 3, p3: 23 },
      defects: [],
      engineeringActionItems: [{ priority: 'P3', item: 'Enhance date grouping headers with Today/Yesterday/Last 7 Days filters.', component: 'Recent Files Timeline' }],
      evidence: [{ file: 'uat_target3_cicodecm/t3_recent_landing.png', caption: 'Recent Documents Chronological View' }]
    },

    starred: {
      modId: 'module_drive',
      moduleName: 'CICOD Drive',
      sheetName: 'Starred Document',
      reportUrl: 'testCases/starred_document_test_report.html',
      targetRoute: '/cde/starred-documents',
      verdict: 'AUDITED — FAVORITES PERSISTENCE VERIFIED',
      verdictType: 'warn',
      healthScore: 34,
      passRate: '34.2%',
      passCount: 13,
      gapCount: 25,
      totalSteps: 38,
      riskRating: 'LOW',
      businessImpact: 'Priority records correctly bookmarked and isolated in Starred view.',
      executiveSummary: 'Starred document vault functions reliably for quick retrieval. Gaps reflect Excel script column order variations.',
      environment: { targetUrl: 'https://cicodecms.cicodsaasstaging.com/cde/starred-documents', tenantId: 'cicodecms', authRole: 'Active User', engine: 'Headless Edge CDP', auditDate: 'September 15, 2026' },
      severityMatrix: { p0: 0, p1: 0, p2: 2, p3: 23 },
      defects: [],
      engineeringActionItems: [{ priority: 'P3', item: 'Support drag-and-drop reordering inside Starred priority list.', component: 'Starred Vault' }],
      evidence: [{ file: 'uat_target3_cicodecm/t3_starred_landing.png', caption: 'Starred Records Vault' }]
    },

    trash: {
      modId: 'module_drive',
      moduleName: 'CICOD Drive',
      sheetName: 'Trash Document',
      reportUrl: 'testCases/trash_document_test_report.html',
      targetRoute: '/cde/trash-documents',
      verdict: 'HIGH PASS RATE — 80.0% VERIFIED',
      verdictType: 'pass',
      healthScore: 80,
      passRate: '80.0%',
      passCount: 8,
      gapCount: 2,
      totalSteps: 10,
      riskRating: 'LOW',
      businessImpact: 'Soft-deletion, purge retention countdown, and file restoration operate cleanly.',
      executiveSummary: '8 of 10 checkpoints verified. Deleted items safely held in recycle bin; restore and permanent delete actions active.',
      environment: { targetUrl: 'https://cicodecms.cicodsaasstaging.com/cde/trash-documents', tenantId: 'cicodecms', authRole: 'Account Owner', engine: 'Headless Edge CDP', auditDate: 'September 15, 2026' },
      severityMatrix: { p0: 0, p1: 0, p2: 1, p3: 1 },
      defects: [],
      engineeringActionItems: [{ priority: 'P3', item: 'Add Empty Trash confirmation dialog countdown timer.', component: 'Trash Retention' }],
      evidence: [{ file: 'uat_target3_cicodecm/t3_trash_landing.png', caption: 'Trash & Retention Landing' }]
    },

    signup: {
      modId: 'module_drive',
      moduleName: 'CICOD Drive',
      sheetName: 'Sign Up',
      reportUrl: 'testCases/signup_test_report.html',
      targetRoute: '/signup',
      verdict: 'PARTIAL — 3 DEFECTS (BUSINESS TYPE DROPDOWN EMPTY)',
      verdictType: 'warn',
      healthScore: 84,
      passRate: '84.4%',
      passCount: 38,
      gapCount: 7,
      totalSteps: 45,
      riskRating: 'HIGH',
      businessImpact: 'Prospective customers encounter an empty Business Type dropdown in the onboarding wizard, intermittently blocking self-service tenant provisioning. Duplicate email check at step 1 missing.',
      executiveSummary: '38 of 45 checkpoints passed. Core signup pipeline creates tenants, but three defects require hotfixing: (1) Business Type dropdown renders zero options; (2) required field enforcement is flaky; (3) duplicate email check is deferred until late in the wizard.',
      environment: {
        targetUrl: 'https://cicodsaasstaging.com/pricing -> /signup',
        tenantId: 'New Provisioned Tenant',
        authRole: 'Public Visitor / Prospective Tenant',
        engine: 'Headless Edge CDP',
        auditDate: 'September 16, 2026'
      },
      severityMatrix: { p0: 0, p1: 2, p2: 1, p3: 4 },
      defects: [
        { id: 'SIGNUP-BUG-01', severity: 'P1', title: 'Business Type Dropdown Renders No Options', trigger: 'Step 2: Business Info wizard screen', expected: 'Selectable options (SME, Enterprise, Government, Education)', actual: 'Dropdown shows placeholder only; options array empty []', rootCause: 'Lookup endpoint /api/business-types failing or CORS restricted', hotfix: 'Fix API query or fallback to bundled static enum options list.' },
        { id: 'SIGNUP-BUG-02', severity: 'P1', title: 'Duplicate Email Not Checked on Entry', trigger: 'Step 1: Enter existing registered email', expected: 'Immediate feedback: "Email already registered"', actual: 'Proceeds to profile step without error; fails only at final commit', rootCause: 'Missing blur/input async validation handler on email input', hotfix: 'Attach debounce verification call to /api/check-email.' }
      ],
      engineeringActionItems: [
        { priority: 'P1', item: 'Hydrate Business Type dropdown options from fallback dictionary.', component: 'Signup Wizard' },
        { priority: 'P1', item: 'Add real-time email existence check on Step 1.', component: 'Registration API' }
      ],
      evidence: [
        { file: 'uat_target3_cicodecm/signup_step3_modal_opened.png', caption: 'Registration Modal Opened' },
        { file: 'uat_target3_cicodecm/signup_step12_businessinfo_filled.png', caption: 'BUG: Business Type Dropdown Never Populates' },
        { file: 'uat_target3_cicodecm/signup_step13_account_created.png', caption: 'Account Successfully Created' }
      ]
    },

    application: {
      modId: 'module_drive',
      moduleName: 'CICOD Drive',
      sheetName: 'Application',
      reportUrl: 'testCases/application_test_report.html',
      targetRoute: '/cde/my-applications',
      verdict: 'PRODUCTION READY — 100% PASS',
      verdictType: 'pass',
      healthScore: 100,
      passRate: '100.0%',
      passCount: 4,
      gapCount: 0,
      totalSteps: 4,
      riskRating: 'LOW',
      businessImpact: 'Application gateway launches both Gov ECMS and Gov Drive with seamless single sign-on token forwarding.',
      executiveSummary: 'All 4 gateway integration test cases passed. Launch cards, 1Government unified ecosystem routing, and credential pass-through verified.',
      environment: { targetUrl: 'https://cicodecms.cicodsaasstaging.com/cde/my-applications', tenantId: 'cicodecms', authRole: 'Multi-Tenant Operator', engine: 'Headless Edge CDP', auditDate: 'September 15, 2026' },
      severityMatrix: { p0: 0, p1: 0, p2: 0, p3: 0 },
      defects: [],
      engineeringActionItems: [{ priority: 'P3', item: 'Add telemetry latency counter for application dispatch launch cards.', component: 'App Gateway' }],
      evidence: [{ file: 'uat_target3_cicodecm/app_portal_01_staging_my_applications.png', caption: 'Target 3 My Applications Dashboard View' }]
    },

    // ==========================================
    // CICOD ECMS MODULES
    // ==========================================
    ecms_dashboard: {
      modId: 'module_ecms',
      moduleName: 'CICOD ECMS',
      sheetName: 'Dashboard',
      reportUrl: 'testCases/ecms_dashboard_test_report.html',
      targetRoute: '/ecms/index.php?r=dashboard/workOrder',
      verdict: 'PRODUCTION READY — 100% PASS',
      verdictType: 'pass',
      healthScore: 100,
      passRate: '100.0%',
      passCount: 18,
      gapCount: 0,
      totalSteps: 18,
      riskRating: 'LOW',
      businessImpact: 'Executives receive immediate operational situational awareness: active tasks, time-scoped metrics, and interactive workload distribution bar charts work flawlessly.',
      executiveSummary: 'All 18 checkpoints verified with 100% success. Date range filters (Today, Week, Month, Custom) dynamically update KPI counters, AmCharts interactive bar charts render task distributions, and legend filtering functions smoothly.',
      environment: {
        targetUrl: 'https://cicodecms.cicodsaasstaging.com/ecms/index.php?r=dashboard/workOrder',
        tenantId: 'cicodecms',
        authRole: 'Executive Officer / Supervisor',
        engine: 'Headless Edge CDP (Port 9238)',
        auditDate: 'September 17, 2026'
      },
      severityMatrix: { p0: 0, p1: 0, p2: 0, p3: 0 },
      defects: [],
      engineeringActionItems: [
        { priority: 'P3', item: 'Evaluate caching header on dashboard KPI aggregate query for high-volume tenants.', component: 'Analytics Query Cache' },
        { priority: 'P3', item: 'Add export to PNG/SVG action directly on AmCharts container.', component: 'Dashboard Charts' }
      ],
      evidence: [
        { file: 'uat_target3_cicodecm/ecms_step0_dashboard_entry.png', caption: 'Step 0: ECMS Portal Entry & Overview Landing' },
        { file: 'uat_target3_cicodecm/ecms_step2_workflow_dashboard_loaded.png', caption: 'Step 2: Workflow Dashboard Loaded (Task Status & Metrics)' },
        { file: 'uat_target3_cicodecm/ecms_step6_filter_month.png', caption: 'Step 6: Filter Month Active (Open Count: 8)' },
        { file: 'uat_target3_cicodecm/ecms_step9_bar_chart_view.png', caption: 'Step 9: Workflow Task Summary AmCharts Bar Chart' },
        { file: 'uat_target3_cicodecm/ecms_step11_chart_legend_interaction.png', caption: 'Step 11: Interactive Legend Filter Toggling' }
      ]
    },

    ecms_requests: {
      modId: 'module_ecms',
      moduleName: 'CICOD ECMS',
      sheetName: 'Requests',
      reportUrl: 'testCases/ecms_request_test_report.html',
      targetRoute: '/ecms/index.php?r=request',
      verdict: 'PARTIAL — FORM SCHEMA DISCREPANCY',
      verdictType: 'warn',
      healthScore: 55,
      passRate: '54.5%',
      passCount: 12,
      gapCount: 10,
      totalSteps: 22,
      riskRating: 'MODERATE',
      businessImpact: 'External forms catalog and multi-channel sharing links operate properly, but dynamic form intake schema renders with field format discrepancies.',
      executiveSummary: '12 of 22 steps passed. The dual-intake interface (Internal vs External Request queues) correctly displays 5 live forms across 3 categories. Social and link sharing modal is active.',
      environment: {
        targetUrl: 'https://cicodecms.cicodsaasstaging.com/ecms/index.php?r=request',
        tenantId: 'cicodecms',
        authRole: 'Intake Officer',
        engine: 'Headless Edge CDP',
        auditDate: 'September 17, 2026'
      },
      severityMatrix: { p0: 0, p1: 1, p2: 3, p3: 6 },
      defects: [
        { id: 'REQ-DEF-01', severity: 'P1', title: 'External Form Intake Schema Incomplete', trigger: 'View Form action on External Request item', expected: 'Render full dynamic form fields matching specification', actual: 'Partial field layout with missing validation bindings', rootCause: 'Form renderer component missing schema version compatibility layer', hotfix: 'Update webForm runtime renderer to hydrate newer schema definitions.' }
      ],
      engineeringActionItems: [
        { priority: 'P1', item: 'Synchronize dynamic form renderer with webForm schema builder.', component: 'Requests Module' }
      ],
      evidence: [
        { file: 'uat_target3_cicodecm/ecms_req_step1_landing_tabs.png', caption: 'Step 1: Request Module Landing Page' },
        { file: 'uat_target3_cicodecm/ecms_req_step13_external_tab.png', caption: 'Step 13: External Request Tab (5 Live Forms)' },
        { file: 'uat_target3_cicodecm/ecms_req_step18_share_options.png', caption: 'Step 18: Share Form Dialog' }
      ]
    },

    ecms_tasks: {
      modId: 'module_ecms',
      moduleName: 'CICOD ECMS',
      sheetName: 'Tasks',
      reportUrl: 'testCases/ecms_tasks_test_report.html',
      targetRoute: '/ecms/index.php?r=workOrder',
      verdict: 'PRODUCTION READY — 100% PASS',
      verdictType: 'pass',
      healthScore: 100,
      passRate: '100.0%',
      passCount: 29,
      gapCount: 0,
      totalSteps: 29,
      riskRating: 'LOW',
      businessImpact: 'Core operational engine runs flawlessly: dynamic task creation, immediate assignment, Act Now action bar, in-browser digital signing, and file attachments are fully functional.',
      executiveSummary: 'Comprehensive 29-step audit completed with 100% pass rate. Work orders handle queue/queue-type cascading dependencies, multi-tab queues (Assigned To Me, Created By Me, All), comments timeline, status updates, interactive e-signatures, and lifecycle audit logging.',
      environment: {
        targetUrl: 'https://cicodecms.cicodsaasstaging.com/ecms/index.php?r=workOrder',
        tenantId: 'cicodecms',
        authRole: 'Case Officer & Workflow Assignee',
        engine: 'Headless Edge CDP (Port 9238)',
        auditDate: 'September 17, 2026'
      },
      severityMatrix: { p0: 0, p1: 0, p2: 0, p3: 0 },
      defects: [],
      engineeringActionItems: [
        { priority: 'P3', item: 'Maintain websocket push latency monitoring for instant task assignment notifications.', component: 'Task Queue Dispatcher' }
      ],
      evidence: [
        { file: 'uat_target3_cicodecm/ecms_ticket_02_create_screen.png', caption: 'Step 2: Create Ticket / Task Form Landing' },
        { file: 'uat_target3_cicodecm/ecms_ticket_06_queuetype_selected.png', caption: 'Step 6: Dynamic Form Fields Hydrated' },
        { file: 'uat_target3_cicodecm/ecms_ticket_12_ticket_in_list.png', caption: 'Step 12: Created Notification & Redirect' },
        { file: 'uat_target3_cicodecm/ecms_ticket_20_add_comment.png', caption: 'Step 20: Single Ticket Details View & Timeline' },
        { file: 'uat_target3_cicodecm/ecms_ticket_24_esign_modal.png', caption: 'Step 24: Interactive Browser E-Sign Modal' },
        { file: 'uat_target3_cicodecm/ecms_ticket_29_lifecycle_report.png', caption: 'Step 29: Lifecycle Audit Report' }
      ]
    },

    ecms_memos: {
      modId: 'module_ecms',
      moduleName: 'CICOD ECMS',
      sheetName: 'Memos',
      reportUrl: 'testCases/ecms_memo_test_report.html',
      targetRoute: '/ecms/index.php?r=memo/index',
      verdict: 'PRODUCTION READY — 96.6% PASS (57 OF 59)',
      verdictType: 'pass',
      healthScore: 97,
      passRate: '96.6%',
      passCount: 57,
      gapCount: 2,
      totalSteps: 59,
      riskRating: 'LOW',
      businessImpact: 'Official paperless correspondence, rich text composition, LaTeX mathematical formulas, draft reviews, and "Attach Memo to Task" work orders are fully operational.',
      executiveSummary: '57 of 59 checkpoints verified. Advanced memorandum features including typography controls, blockquotes, formula editor, reviewer assignment side drawers, and task attachment verified in live environment.',
      environment: {
        targetUrl: 'https://cicodecms.cicodsaasstaging.com/ecms/index.php?r=memo/index',
        tenantId: 'cicodecms',
        authRole: 'Departmental Author & Reviewer',
        engine: 'Headless Edge CDP (Port 9238)',
        auditDate: 'September 17, 2026'
      },
      severityMatrix: { p0: 0, p1: 0, p2: 2, p3: 0 },
      defects: [
        { id: 'MEMO-DEV-01', severity: 'P2', title: 'Save Memo Validation Toast Alert Format', trigger: 'Step 24: Save memo with empty title', expected: 'Inline input border highlight', actual: 'Popup modal alert notification', rootCause: 'Legacy alert implementation in memo controller', hotfix: 'Replace modal alert with inline floating toast.' }
      ],
      engineeringActionItems: [
        { priority: 'P2', item: 'Modernize validation toast styling on Memo Create page.', component: 'Memo Editor' }
      ],
      evidence: [
        { file: 'uat_target3_cicodecm/ecms_memo_02_create_page.png', caption: 'Step 2: Create Memo Rich Text Editor' },
        { file: 'uat_target3_cicodecm/ecms_memo_21_insert_formula_dialog.png', caption: 'Step 21: LaTeX Mathematical Formula Dialog' },
        { file: 'uat_target3_cicodecm/ecms_memo_31_attach_to_ticket_page.png', caption: 'Step 31: Attach Memo to Task Work Order' },
        { file: 'uat_target3_cicodecm/ecms_memo_46_draft_toolbar_features.png', caption: 'Step 46: Memo Reviewer & Feedback Drawer' }
      ]
    },

    ecms_workflows: {
      modId: 'module_ecms',
      moduleName: 'CICOD ECMS',
      sheetName: 'Workflows',
      reportUrl: 'testCases/workflow_test_report.html',
      targetRoute: '/ecms/workflows',
      verdict: 'RELEASE BLOCKED — 5 BUGS (P0 FOLDER OUTAGE)',
      verdictType: 'danger',
      healthScore: 67,
      passRate: '66.7%',
      passCount: 28,
      gapCount: 14,
      totalSteps: 42,
      riskRating: 'CRITICAL (P0)',
      businessImpact: 'CRITICAL: Workflows cannot be linked to departmental document folders due to a Gov Drive session expiration crash (P0). Additionally, Queue/Queue Type action menus present wrong options, blocking ~60 script rows from automated testing.',
      executiveSummary: '28 passed, 14 gaps/bugs across 42 checkpoints. One P0 outage completely prevents department folder linking, causing workflow document isolation. Role-access granting renders empty tables, and queue sub-tabs inherit parent workflow action menus.',
      environment: {
        targetUrl: 'https://cicodecms.cicodsaasstaging.com/ecms/workflows',
        tenantId: 'cicodecms',
        authRole: 'System Administrator',
        engine: 'Headless Edge CDP',
        auditDate: 'September 17, 2026'
      },
      severityMatrix: { p0: 1, p1: 2, p2: 2, p3: 0 },
      defects: [
        { id: 'WF-BUG-01', severity: 'P0', title: 'Department-Link Folder Path — Gov Drive Session Expired', trigger: 'Link Workflow to Department -> Choose Folder Path', expected: 'Directory tree picker from Gov Drive', actual: 'Modal crashes with "Gov Drive Session Expired" even with active valid token', rootCause: 'Backend microservice OAuth token exchange fails between ECMS and GovDrive API', hotfix: 'Refresh GovDrive service token handshake in ecms/components/DriveService.php.' },
        { id: 'WF-BUG-02', severity: 'P1', title: 'Grant-Access Role List Renders Zero Rows', trigger: 'Workflow Creation wizard -> Finish -> Grant Access modal', expected: 'List of tenant roles with permission checkboxes', actual: 'Role table renders 0 rows; cannot assign workflow permissions', rootCause: 'Tenant role query missing active tenant_id parameter filter', hotfix: 'Add bindParam(:tenant_id) to RoleSearchModel query.' },
        { id: 'WF-BUG-03', severity: 'P1', title: 'Wrong Action Menu on Queue / Queue Type Sub-tabs', trigger: 'Click action dots on Queue row', expected: 'Queue actions (Edit Queue, Delete Queue)', actual: 'Displays Workflow master actions (Suspend, Link Department, Grant Access)', rootCause: 'JavaScript grid action renderer copies master table config to subgrid', hotfix: 'Scope action column data-target to specific sub-entity ID.' }
      ],
      engineeringActionItems: [
        { priority: 'P0', item: 'URGENT: Fix GovDrive SSO session token validation in Department Link modal.', component: 'Drive Bridge' },
        { priority: 'P1', item: 'Fix Tenant ID binding on Grant Access role retrieval endpoint.', component: 'RBAC Service' },
        { priority: 'P1', item: 'Isolate Queue / Queue Type row action dropdown templates.', component: 'Workflow Grid JS' }
      ],
      evidence: [
        { file: 'uat_target3_cicodecm/wf_step2b_process_tab.png', caption: 'Create Workflow Process Tab' },
        { file: 'uat_target3_cicodecm/wf_step18c_role_table_empty_bug.png', caption: 'BUG: Role Table Renders Zero Rows' },
        { file: 'uat_target3_cicodecm/wf2_step9c_govdrive_stuck.png', caption: 'P0 BUG: Department-Link Folder Path Session Expired' },
        { file: 'uat_target3_cicodecm/wf_step23_queue_wrong_menu_bug.png', caption: 'BUG: Wrong Action Menu on Queue Tabs' }
      ]
    },

    ecms_forms: {
      modId: 'module_ecms',
      moduleName: 'CICOD ECMS',
      sheetName: 'Forms',
      reportUrl: 'testCases/forms_test_report.html',
      targetRoute: '/ecms/webForm/index',
      verdict: 'RELEASE BLOCKED — PUBLIC FORM-FILL OUTAGE (P0)',
      verdictType: 'danger',
      healthScore: 71,
      passRate: '70.8%',
      passCount: 17,
      gapCount: 7,
      totalSteps: 24,
      riskRating: 'CRITICAL (P0)',
      businessImpact: 'CRITICAL: The public "Fill a Form" link displays "Unable To Load Form!", completely blocking citizen and constituent form submissions. Form classification (Internal vs External) is also broken across tabs.',
      executiveSummary: '17 passed, 7 gaps across 24 checkpoints. Internal form building, workflow queue auto-population, and share link generation work, but public submission is 100% broken on both newly generated and existing production forms.',
      environment: {
        targetUrl: 'https://cicodecms.cicodsaasstaging.com/ecms/webForm/index',
        tenantId: 'cicodecms',
        authRole: 'Form Administrator & Public Citizen',
        engine: 'Headless Edge CDP',
        auditDate: 'September 17, 2026'
      },
      severityMatrix: { p0: 1, p1: 1, p2: 1, p3: 4 },
      defects: [
        { id: 'FORM-BUG-01', severity: 'P0', title: 'Public Fill-Form Link Shows "Unable To Load Form!"', trigger: 'Open any generated or production public form share URL', expected: 'Render interactive form fields for public submission', actual: 'Fatal error: "Unable To Load Form!" displayed; submission impossible', rootCause: 'Public endpoint /webForm/publicFill fails to resolve form UUID without active session cookie', hotfix: 'Allow anonymous public read on webForm definition endpoint.' },
        { id: 'FORM-BUG-02', severity: 'P1', title: 'External Forms Tab Lists Every Form Indiscriminately', trigger: 'Click External Forms tab in Forms registry', expected: 'Display only forms created with Form Type = External', actual: 'All internal and inter-MDA forms display regardless of type', rootCause: 'SQL filter where form_type = :type omitted from tab filter query', hotfix: 'Add type constraint to active tab data provider.' }
      ],
      engineeringActionItems: [
        { priority: 'P0', item: 'HOTFIX: Fix anonymous access permissions on public form loader endpoint.', component: 'WebForm Public Route' },
        { priority: 'P1', item: 'Apply form_type SQL filter to registry tab navigation.', component: 'WebForm Search Model' }
      ],
      evidence: [
        { file: 'uat_target3_cicodecm/forms_step1_create_page.png', caption: 'Create Form 5 Form Types' },
        { file: 'uat_target3_cicodecm/forms_step16_share_modal.png', caption: 'Share Form Modal' },
        { file: 'uat_target3_cicodecm/forms_step17_public_fill_page.png', caption: 'P0 BUG: Public Fill-Form Link "Unable To Load Form!"' },
        { file: 'uat_target3_cicodecm/forms_step19_cicodform_public.png', caption: 'P0 BUG Reproduced on Pre-Existing Production Form' }
      ]
    },

    ecms_contacts: {
      modId: 'module_ecms',
      moduleName: 'CICOD ECMS',
      sheetName: 'Contacts',
      reportUrl: 'testCases/contacts_test_report.html',
      targetRoute: '/ecms/contacts',
      verdict: 'PARTIAL — 9 CONFIRMED DEFECTS',
      verdictType: 'warn',
      healthScore: 74,
      passRate: '73.5%',
      passCount: 36,
      gapCount: 13,
      totalSteps: 49,
      riskRating: 'HIGH',
      businessImpact: 'Contact management works for basic reads, but updates silently fail due to country/state preloading failure, creating tickets from contacts causes intermittent session dropouts, and custom checkboxes silently discard values.',
      executiveSummary: '36 passed of 49 checkpoints. Directory search and notes work with caveats, but 9 distinct defects exist including silent save drops, broken error responses force-logging users out (2/3 attempts), and auto-fill data erasure.',
      environment: {
        targetUrl: 'https://cicodecms.cicodsaasstaging.com/ecms/contacts',
        tenantId: 'cicodecms',
        authRole: 'Registry Officer',
        engine: 'Headless Edge CDP',
        auditDate: 'September 17, 2026'
      },
      severityMatrix: { p0: 0, p1: 3, p2: 4, p3: 2 },
      defects: [
        { id: 'CONT-BUG-01', severity: 'P1', title: 'Update Contact Silently Fails to Save', trigger: 'Edit contact -> Save Changes', expected: 'Persist modified values and return success toast', actual: 'Returns without error, but edits are discarded', rootCause: 'Form validation fails silently because Country/State dropdowns fail to preload ID', hotfix: 'Preload cascade dropdown IDs in ContactUpdate form view.' },
        { id: 'CONT-BUG-02', severity: 'P1', title: 'Create Ticket In Contact Forces User Logout', trigger: 'Action menu -> Create Ticket from contact record', expected: 'Create task and redirect to task list', actual: 'Broken error response displayed and session forced to logout (2/3 rate)', rootCause: 'Fatal 500 error in contact-to-ticket relationship table trigger', hotfix: 'Handle contact_id foreign key constraint exception gracefully.' }
      ],
      engineeringActionItems: [
        { priority: 'P1', item: 'Fix Country/State dropdown pre-selection in contact edit view.', component: 'Contacts Controller' },
        { priority: 'P1', item: 'Resolve 500 exception and logout trigger in Contact Ticket creation.', component: 'Task Bridge' }
      ],
      evidence: [
        { file: 'uat_target3_cicodecm/contacts_step7_saved_result.png', caption: 'Create Contact Success' },
        { file: 'uat_target3_cicodecm/contacts_step39_edit_contact_form.png', caption: 'BUG: Update Contact Does Not Preload Country/State' },
        { file: 'uat_target3_cicodecm/contacts_step19_create_attempt.png', caption: 'BUG: Broken Error Response + Forced Logout' }
      ]
    },

    ecms_users: {
      modId: 'module_ecms',
      moduleName: 'CICOD ECMS',
      sheetName: 'Users',
      reportUrl: 'testCases/users_test_report.html',
      targetRoute: '/ecms/users',
      verdict: 'RELEASE BLOCKED — CREATE USER & DEPT 500 (P0)',
      verdictType: 'danger',
      healthScore: 63,
      passRate: '63.0%',
      passCount: 17,
      gapCount: 10,
      totalSteps: 27,
      riskRating: 'CRITICAL (P0)',
      businessImpact: 'CRITICAL: Administrators cannot provision new staff accounts (Create User silently drops valid data), and the Department management page crashes with "Oops! Something went wrong" (P0).',
      executiveSummary: '17 passed, 10 gaps across 27 checkpoints. Role management, Edit User, and Make A Resource work correctly, but user onboarding and organizational department structures are completely unusable.',
      environment: {
        targetUrl: 'https://cicodecms.cicodsaasstaging.com/ecms/users',
        tenantId: 'cicodecms',
        authRole: 'System Administrator',
        engine: 'Headless Edge CDP',
        auditDate: 'September 17, 2026'
      },
      severityMatrix: { p0: 2, p1: 1, p2: 0, p3: 0 },
      defects: [
        { id: 'USER-BUG-01', severity: 'P0', title: 'Create User Silently Fails (User Never Created)', trigger: 'Fill valid User form -> Click Create', expected: 'User persisted in database with welcome email dispatched', actual: 'Success message displays but user never exists in search or database', rootCause: 'Transaction rollback occurring during default role assignment', hotfix: 'Fix role assignment transaction commit in UserModel::afterSave().' },
        { id: 'USER-BUG-02', severity: 'P0', title: 'Department Page Crashes ("Oops! Something went wrong")', trigger: 'Navigate to Department management sub-page', expected: 'Render Department roster and department creation controls', actual: '500 Server Error: "Oops! Something went wrong" displayed', rootCause: 'Missing column in department table migration or view syntax error', hotfix: 'Run database migration for ecms_departments table.' }
      ],
      engineeringActionItems: [
        { priority: 'P0', item: 'HOTFIX: Fix database transaction commit on Create User.', component: 'User Service' },
        { priority: 'P0', item: 'HOTFIX: Fix 500 exception on Department management controller.', component: 'Department Module' }
      ],
      evidence: [
        { file: 'uat_target3_cicodecm/users_step4_create_form.png', caption: 'New User Form' },
        { file: 'uat_target3_cicodecm/users_step13_search_check.png', caption: 'BUG (P0): Create User Silently Fails' },
        { file: 'uat_target3_cicodecm/users_step45_dept_retry.png', caption: 'BUG (P0): Department Page Crashes' }
      ]
    },

    ecms_resources: {
      modId: 'module_ecms',
      moduleName: 'CICOD ECMS',
      sheetName: 'Resources',
      reportUrl: 'testCases/resource_test_report.html',
      targetRoute: '/ecms/resources',
      verdict: 'PASSED — MINOR UI DEVIATIONS ONLY',
      verdictType: 'pass',
      healthScore: 75,
      passRate: '75.0%',
      passCount: 6,
      gapCount: 2,
      totalSteps: 8,
      riskRating: 'LOW',
      businessImpact: 'Physical equipment and dispatch resources properly cataloged; Resource Type creation and status suspension operate smoothly.',
      executiveSummary: '6 of 8 checkpoints passed with zero blocking defects. Resource list and Resource Types perform reliably. Minor cosmetic deviations noted in KPI count label and stale dropdown prompt.',
      environment: {
        targetUrl: 'https://cicodecms.cicodsaasstaging.com/ecms/resources',
        tenantId: 'cicodecms',
        authRole: 'Facilities & Resource Dispatcher',
        engine: 'Headless Edge CDP',
        auditDate: 'September 17, 2026'
      },
      severityMatrix: { p0: 0, p1: 0, p2: 0, p3: 2 },
      defects: [
        { id: 'RES-DEV-01', severity: 'P3', title: 'Resource List KPI Counter Mismatch', trigger: 'View Resource List header', expected: 'Total Records matches rendered rows', actual: 'KPI displays "Total Records: 2", but 1 row is rendered', rootCause: 'Filter query excludes inactive resources while KPI aggregates all', hotfix: 'Sync KPI aggregation filter with active table filter.' }
      ],
      engineeringActionItems: [
        { priority: 'P3', item: 'Synchronize Resource KPI counter with active grid filter.', component: 'Resource View' }
      ],
      evidence: [
        { file: 'uat_target3_cicodecm/resource_step1_list.png', caption: 'Resource List View' },
        { file: 'uat_target3_cicodecm/resource_step10_after_create_click.png', caption: 'Create Resource Type Success' }
      ]
    },

    ecms_reports: {
      modId: 'module_ecms',
      moduleName: 'CICOD ECMS',
      sheetName: 'Reports',
      reportUrl: 'testCases/reports_test_report.html',
      targetRoute: '/ecms/reports',
      verdict: 'PARTIAL — DOWNLOAD REPORT ERROR "undefined" (P1)',
      verdictType: 'warn',
      healthScore: 80,
      passRate: '80.0%',
      passCount: 8,
      gapCount: 2,
      totalSteps: 10,
      riskRating: 'HIGH',
      businessImpact: 'Report generation and cascading queue filters return accurate ground-truth operational figures, but clicking Download triggers an unhandled "undefined" popup, preventing report export.',
      executiveSummary: '8 of 10 checkpoints verified. Search accurately queries database across all queues. The P1 export defect blocks compliance officers from saving report spreadsheets.',
      environment: {
        targetUrl: 'https://cicodecms.cicodsaasstaging.com/ecms/reports',
        tenantId: 'cicodecms',
        authRole: 'Audit & Compliance Officer',
        engine: 'Headless Edge CDP',
        auditDate: 'September 17, 2026'
      },
      severityMatrix: { p0: 0, p1: 1, p2: 0, p3: 1 },
      defects: [
        { id: 'REP-BUG-01', severity: 'P1', title: 'Download Report Throws Unhandled "undefined" Alert', trigger: 'Execute report search -> Click Download button', expected: 'Initiate CSV / Excel spreadsheet file download', actual: 'Raw browser alert showing "undefined" appears; no file downloaded', rootCause: 'Export function references undefined downloadUrl property in AJAX response', hotfix: 'Fix JSON property key in report export response handler.' }
      ],
      engineeringActionItems: [
        { priority: 'P1', item: 'Fix export endpoint AJAX response parsing for Download Report.', component: 'Reports Controller' }
      ],
      evidence: [
        { file: 'uat_target3_cicodecm/reports_step12_planning_search.png', caption: 'Report Search Confirmed Working' },
        { file: 'uat_target3_cicodecm/reports_step13c_after_download_click.png', caption: 'BUG: Download Report Throws Raw "undefined" Alert' }
      ]
    },

    ecms_overview: {
      modId: 'module_ecms',
      moduleName: 'CICOD ECMS',
      sheetName: 'Overview',
      targetRoute: '/ecms/overview',
      verdict: 'QUEUED FOR TESTING — ARCHITECTURE STAGED',
      verdictType: 'info',
      healthScore: 0,
      passRate: 'Queued',
      passCount: 0,
      gapCount: 0,
      totalSteps: 12,
      riskRating: 'LOW',
      businessImpact: 'Paperless cockpit architecture verified. Live UAT execution queued.',
      executiveSummary: 'Executive situational awareness cockpit: real-time KPI metric cards, workflow queues monitoring, and quick action shortcuts for memos and requisitions. Staged for formal UAT verification.',
      environment: { targetUrl: 'https://cicodecms.cicodsaasstaging.com/ecms/overview', tenantId: 'cicodecms', authRole: 'Executive Officer', engine: 'Planned CDP Engine', auditDate: 'Pending' },
      severityMatrix: { p0: 0, p1: 0, p2: 0, p3: 0 },
      defects: [],
      engineeringActionItems: [{ priority: 'P3', item: 'Deploy Next.js paperless portal cockpit build.', component: 'ECMS Overview' }],
      evidence: []
    },

    ecms_workgroups: {
      modId: 'module_ecms',
      moduleName: 'CICOD ECMS',
      sheetName: 'Workgroups',
      targetRoute: '/ecms/workgroups',
      verdict: 'QUEUED FOR TESTING — ARCHITECTURE STAGED',
      verdictType: 'info',
      healthScore: 0,
      passRate: 'Queued',
      passCount: 0,
      gapCount: 0,
      totalSteps: 14,
      riskRating: 'LOW',
      businessImpact: 'Cross-departmental taskforces and collaborative minute vaults staged for verification.',
      executiveSummary: 'Cross-departmental taskforces: ad-hoc probe committees, secure inter-ministerial collaborative casework spaces, and shared minute vaults. Queued for testing.',
      environment: { targetUrl: 'https://cicodecms.cicodsaasstaging.com/ecms/workgroups', tenantId: 'cicodecms', authRole: 'Taskforce Lead', engine: 'Planned CDP Engine', auditDate: 'Pending' },
      severityMatrix: { p0: 0, p1: 0, p2: 0, p3: 0 },
      defects: [],
      engineeringActionItems: [{ priority: 'P3', item: 'Initialize ad-hoc taskforce security sandbox.', component: 'Workgroups Module' }],
      evidence: []
    }
  };

  /**
   * Retrieves data record for a given feature/sheet.
   */
  function getReportData(featId) {
    if (reportRegistry[featId]) {
      return reportRegistry[featId];
    }
    // Fallback if dynamic lookup needed
    const modules = (typeof window !== 'undefined' && window.appModules) ? window.appModules : [];
    for (const mod of modules) {
      const f = (mod.features || []).find(feat => feat.id === featId);
      if (f) {
        return {
          modId: mod.id,
          moduleName: mod.name,
          sheetName: f.sheetName,
          reportUrl: f.reportUrl || '',
          targetRoute: f.targetRoute || '/',
          verdict: f.status || 'AUDITED',
          verdictType: f.gapCount > 0 ? 'warn' : 'pass',
          healthScore: parseFloat(f.passRate) || 80,
          passRate: f.passRate || '100%',
          passCount: f.passCount || 0,
          gapCount: f.gapCount || 0,
          totalSteps: f.totalSteps || 0,
          riskRating: f.gapCount > 5 ? 'HIGH' : (f.gapCount > 0 ? 'MODERATE' : 'LOW'),
          businessImpact: f.summary || 'Functional verification completed against target staging environment.',
          executiveSummary: f.summary || 'Module verified in accordance with Excel test script specification.',
          environment: {
            targetUrl: 'https://cicodecms.cicodsaasstaging.com',
            tenantId: 'cicodecms',
            authRole: 'Standard User',
            engine: 'Headless Edge CDP',
            auditDate: 'September 2026'
          },
          severityMatrix: { p0: 0, p1: 0, p2: f.gapCount || 0, p3: 0 },
          defects: [],
          engineeringActionItems: [],
          evidence: f.images || []
        };
      }
    }
    return null;
  }

  /**
   * Retrieves full step-by-step test cases table HTML for a given feature/sheet.
   */
  function getDetailedTestCases(featId) {
    if (typeof window !== 'undefined' && window.DetailedTestCasesData && window.DetailedTestCasesData[featId]) {
      return window.DetailedTestCasesData[featId];
    }
    try {
      if (typeof require !== 'undefined') {
        const d = require('./test-cases-data.js');
        if (d && d[featId]) return d[featId];
      }
    } catch (e) { }
    return '';
  }

  /**
   * Generates a complete, self-contained, standalone document configured for PDF export.
   * Includes executive verdict, risk analysis, engineering severity breakdown,
   * FULL detailed step-by-step test cases tables, and photographic evidence.
   */
  function generateExecReportHtml(featId) {
    const data = getReportData(featId);
    if (!data) return '<html><body>Report not found</body></html>';

    const p0Count = data.severityMatrix ? data.severityMatrix.p0 : 0;
    const p1Count = data.severityMatrix ? data.severityMatrix.p1 : 0;
    const p2Count = data.severityMatrix ? data.severityMatrix.p2 : 0;
    const p3Count = data.severityMatrix ? data.severityMatrix.p3 : 0;

    let verdictColor = '#10b981';
    let verdictBg = 'rgba(16, 185, 129, 0.15)';
    let verdictBorder = 'rgba(16, 185, 129, 0.35)';

    if (data.verdictType === 'danger' || p0Count > 0) {
      verdictColor = '#f87171';
      verdictBg = 'rgba(239, 68, 68, 0.15)';
      verdictBorder = 'rgba(239, 68, 68, 0.35)';
    } else if (data.verdictType === 'warn' || data.gapCount > 0) {
      verdictColor = '#fbbf24';
      verdictBg = 'rgba(245, 158, 11, 0.15)';
      verdictBorder = 'rgba(245, 158, 11, 0.35)';
    }

    const detailedCasesHtml = getDetailedTestCases(featId);

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CICOD UAT Executive & Engineering PDF Report — ${data.moduleName}: ${data.sheetName}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #070a14;
      --surface: #0c1224;
      --card: #111a33;
      --card-alt: #162244;
      --border: rgba(255, 255, 255, 0.08);
      --border-accent: rgba(56, 189, 248, 0.3);
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;
      --pass: #10b981;
      --warn: #fbbf24;
      --danger: #f87171;
      --sky: #38bdf8;
      --purple: #a855f7;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.5;
      padding: 36px 24px;
      -webkit-font-smoothing: antialiased;
    }
    .report-container {
      max-width: 1360px;
      margin: 0 auto;
    }

    /* Top Action Bar */
    .top-action-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--border);
    }
    .top-brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .brand-logo {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #10b981 0%, #0284c7 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      color: #fff;
      font-size: 0.95rem;
    }
    .brand-text-h1 {
      font-size: 0.95rem;
      font-weight: 800;
      letter-spacing: 0.04em;
      color: #fff;
    }
    .brand-text-sub {
      font-size: 0.72rem;
      color: var(--text-dim);
      font-family: 'JetBrains Mono', monospace;
    }
    .action-buttons {
      display: flex;
      gap: 10px;
    }
    .btn-action {
      background: var(--card);
      border: 1px solid var(--border);
      color: var(--text);
      padding: 8px 14px;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      text-decoration: none;
      transition: all 0.2s;
    }
    .btn-action:hover {
      background: var(--card-alt);
      border-color: var(--sky);
      color: #fff;
    }
    .btn-action-primary {
      background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
      border-color: rgba(56, 189, 248, 0.4);
      color: #fff;
    }
    .btn-action-primary:hover {
      background: linear-gradient(135deg, #0369a1 0%, #075985 100%);
    }

    /* Executive Hero Header */
    .hero-header {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 28px;
      margin-bottom: 24px;
      position: relative;
      overflow: hidden;
    }
    .hero-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(90deg, #10b981 0%, #38bdf8 50%, #a855f7 100%);
    }
    .hero-top-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 16px;
    }
    .hero-title-group h1 {
      font-size: 1.75rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 4px;
    }
    .hero-breadcrumbs {
      font-size: 0.85rem;
      color: var(--text-dim);
      font-family: 'JetBrains Mono', monospace;
    }
    .verdict-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 30px;
      background: ${verdictBg};
      border: 1px solid ${verdictBorder};
      color: ${verdictColor};
      font-family: 'JetBrains Mono', monospace;
      font-weight: 800;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
    }
    .verdict-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${verdictColor};
      box-shadow: 0 0 10px ${verdictColor};
    }

    /* Meta bar */
    .hero-meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding-top: 16px;
      border-top: 1px solid var(--border);
      font-size: 0.82rem;
    }
    .meta-item span { color: var(--text-dim); }
    .meta-item strong { color: #e2e8f0; font-family: 'JetBrains Mono', monospace; margin-left: 4px; }

    /* Dual Pillars: Executive Glance vs Engineering Triage */
    .pillars-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }
    @media (max-width: 960px) {
      .pillars-grid { grid-template-columns: 1fr; }
    }

    .pillar-box {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 24px;
    }
    .pillar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
    }
    .pillar-title {
      font-size: 1.1rem;
      font-weight: 800;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .pillar-badge {
      font-size: 0.72rem;
      padding: 3px 10px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border);
      color: var(--text-muted);
      font-family: 'JetBrains Mono', monospace;
    }

    /* Executive Metrics Cards */
    .kpi-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-bottom: 18px;
    }
    @media (max-width: 600px) {
      .kpi-row { grid-template-columns: repeat(2, 1fr); }
    }
    .kpi-mini-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 12px;
    }
    .kpi-mini-title {
      font-size: 0.72rem;
      color: var(--text-dim);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 4px;
    }
    .kpi-mini-val {
      font-size: 1.35rem;
      font-weight: 800;
      font-family: 'JetBrains Mono', monospace;
    }

    /* Callout & Summary text */
    .exec-summary-text {
      font-size: 0.88rem;
      color: #cbd5e1;
      line-height: 1.6;
      margin-bottom: 16px;
    }
    .risk-banner {
      background: rgba(15, 23, 42, 0.6);
      border-left: 3px solid ${verdictColor};
      padding: 12px 16px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 16px;
    }
    .risk-banner-title {
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: ${verdictColor};
      margin-bottom: 4px;
    }
    .risk-banner-p {
      font-size: 0.84rem;
      color: var(--text-muted);
      line-height: 1.5;
    }

    /* Severity Breakdown Matrix */
    .severity-chips {
      display: flex;
      gap: 10px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }
    .sev-chip {
      flex: 1;
      min-width: 70px;
      padding: 8px 10px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid var(--border);
    }
    .sev-chip.p0 { background: rgba(239, 68, 68, 0.12); border-color: rgba(239, 68, 68, 0.3); color: #f87171; }
    .sev-chip.p1 { background: rgba(249, 115, 22, 0.12); border-color: rgba(249, 115, 22, 0.3); color: #fb923c; }
    .sev-chip.p2 { background: rgba(245, 158, 11, 0.12); border-color: rgba(245, 158, 11, 0.3); color: #fbbf24; }
    .sev-chip.p3 { background: rgba(56, 189, 248, 0.12); border-color: rgba(56, 189, 248, 0.3); color: #38bdf8; }
    .sev-chip-val { font-size: 1.25rem; font-weight: 800; font-family: 'JetBrains Mono', monospace; }
    .sev-chip-lbl { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; }

    /* Defects Table */
    .defects-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      font-size: 0.82rem;
    }
    .defects-table th {
      text-align: left;
      padding: 10px 12px;
      background: rgba(0, 0, 0, 0.3);
      color: var(--text-dim);
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      border-bottom: 1px solid var(--border);
    }
    .defects-table td {
      padding: 12px;
      border-bottom: 1px solid var(--border);
      vertical-align: top;
    }
    .sev-badge-sm {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.7rem;
      font-weight: 800;
      font-family: 'JetBrains Mono', monospace;
    }
    .sev-badge-sm.p0 { background: #ef4444; color: #fff; }
    .sev-badge-sm.p1 { background: #f97316; color: #fff; }
    .sev-badge-sm.p2 { background: #f59e0b; color: #000; }
    .sev-badge-sm.p3 { background: #38bdf8; color: #000; }

    /* Action Items */
    .action-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 12px;
    }
    .action-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 10px 12px;
      font-size: 0.82rem;
    }
    .action-pri {
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      font-weight: 700;
      background: rgba(56, 189, 248, 0.15);
      color: #38bdf8;
      flex-shrink: 0;
    }

    /* =========================================================================
       DETAILED TEST CASES STYLING (Comprehensive step-by-step logs)
       ========================================================================= */
    .detailed-test-cases-section {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 24px;
      margin-bottom: 24px;
    }
    .case-section {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 10px;
      margin-bottom: 20px;
      overflow: hidden;
    }
    .case-header {
      padding: 14px 18px;
      background: var(--card-alt);
      border-bottom: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .case-title {
      font-size: 0.98rem;
      font-weight: 700;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .case-badge {
      font-size: 0.72rem;
      font-family: 'JetBrains Mono', monospace;
      padding: 2px 8px;
      background: rgba(56, 189, 248, 0.2);
      border: 1px solid rgba(56, 189, 248, 0.35);
      color: #38bdf8;
      border-radius: 4px;
      font-weight: 700;
    }
    .case-tag {
      font-size: 0.72rem;
      font-family: 'JetBrains Mono', monospace;
      padding: 3px 8px;
      border-radius: 4px;
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #34d399;
      font-weight: 700;
    }
    .table-container {
      width: 100%;
      overflow-x: auto;
    }
    .test-cases-container table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.8rem;
    }
    .test-cases-container th {
      text-align: left;
      padding: 10px 12px;
      background: rgba(0, 0, 0, 0.4);
      color: var(--text-dim);
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      border-bottom: 1px solid var(--border);
    }
    .test-cases-container td {
      padding: 10px 12px;
      border-bottom: 1px solid var(--border);
      vertical-align: top;
      color: #cbd5e1;
      line-height: 1.45;
    }
    .test-cases-container tr:hover td {
      background: rgba(255, 255, 255, 0.02);
    }
    .step-tag { font-weight: 700; color: #fff; }
    .expected-text { color: #cbd5e1; font-size: 0.8rem; }
    .actual-text { color: #93c5fd; font-size: 0.78rem; font-family: 'JetBrains Mono', monospace; }
    .nodev-box { color: var(--text-muted); font-size: 0.76rem; }
    .status-badge, .badge-passed {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.7rem;
      font-weight: 800;
      font-family: 'JetBrains Mono', monospace;
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.35);
      color: #34d399;
    }
    .status-badge.status-pass, .badge-passed {
      background: rgba(16, 185, 129, 0.15);
      color: #34d399;
    }
    .badge-bug, .status-badge.status-fail {
      background: rgba(239, 68, 68, 0.2);
      border-color: rgba(239, 68, 68, 0.4);
      color: #f87171;
    }
    .badge-dev, .badge-not-impl {
      background: rgba(245, 158, 11, 0.2);
      border-color: rgba(245, 158, 11, 0.4);
      color: #fbbf24;
    }
    .thumb {
      max-width: 90px;
      max-height: 55px;
      object-fit: cover;
      border-radius: 4px;
      border: 1px solid var(--border);
    }

    /* Photographic Audit Trail */
    .evidence-section {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 24px;
      margin-bottom: 24px;
    }
    .evidence-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 16px;
      margin-top: 16px;
    }
    .evidence-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
      font-size: 0.78rem;
    }
    .evidence-img-wrap {
      width: 100%;
      height: 140px;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .evidence-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .evidence-info {
      padding: 10px;
    }
    .evidence-caption {
      color: #e2e8f0;
      font-weight: 600;
      margin-bottom: 4px;
      line-height: 1.4;
    }
    .evidence-path {
      color: var(--text-dim);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      word-break: break-all;
    }

    /* Footer */
    .report-footer {
      text-align: center;
      padding: 24px;
      color: var(--text-dim);
      font-size: 0.75rem;
      border-top: 1px solid var(--border);
      font-family: 'JetBrains Mono', monospace;
    }

    /* =========================================================================
       PRINT / PDF OPTIMIZATIONS (@media print)
       High-contrast, crisp executive white paper format for A4 / Letter PDF export.
       ========================================================================= */
    @media print {
      body {
        background: #fff !important;
        color: #0f172a !important;
        padding: 0 !important;
      }
      .top-action-bar, .action-buttons {
        display: none !important;
      }
      .hero-header, .pillar-box, .detailed-test-cases-section, .evidence-section, .kpi-mini-card, .evidence-card, .action-item {
        background: #fff !important;
        border: 1px solid #cbd5e1 !important;
        box-shadow: none !important;
        color: #0f172a !important;
      }
      .hero-title-group h1, .pillar-title, .case-title, .evidence-caption, strong {
        color: #0f172a !important;
      }
      .exec-summary-text, .risk-banner-p, p, span, td {
        color: #334155 !important;
      }
      .kpi-mini-val {
        color: #0284c7 !important;
      }
      .verdict-badge {
        background: #f1f5f9 !important;
        border: 1px solid #94a3b8 !important;
        color: #0f172a !important;
      }
      .verdict-dot {
        background: #0f172a !important;
        box-shadow: none !important;
      }
      .sev-chip.p0, .sev-badge-sm.p0 { background: #fee2e2 !important; color: #991b1b !important; border-color: #f87171 !important; }
      .sev-chip.p1, .sev-badge-sm.p1 { background: #ffedd5 !important; color: #9a3412 !important; border-color: #fb923c !important; }
      .sev-chip.p2, .sev-badge-sm.p2 { background: #fef3c7 !important; color: #92400e !important; border-color: #fbbf24 !important; }
      .sev-chip.p3, .sev-badge-sm.p3 { background: #e0f2fe !important; color: #075985 !important; border-color: #38bdf8 !important; }
      .defects-table th, .test-cases-container th {
        background: #f8fafc !important;
        color: #475569 !important;
        border: 1px solid #cbd5e1 !important;
      }
      .test-cases-container table { width: 100% !important; border-collapse: collapse !important; }
      .test-cases-container th, .test-cases-container td {
        border: 1px solid #cbd5e1 !important;
        color: #0f172a !important;
        font-size: 0.72rem !important;
        padding: 6px 8px !important;
      }
      .step-tag, .case-title { color: #0f172a !important; }
      .actual-text { color: #0369a1 !important; }
      .case-section { page-break-inside: avoid !important; margin-bottom: 14px !important; border: 1px solid #cbd5e1 !important; }
      tr { page-break-inside: avoid !important; }
      .thumb { max-height: 40px !important; max-width: 60px !important; }
      .evidence-img-wrap {
        height: 100px !important;
        background: #f1f5f9 !important;
      }
      .pillars-grid {
        grid-template-columns: 1fr 1fr !important;
        page-break-inside: avoid;
      }
      .hero-header {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>

  <div class="report-container">

    <!-- Interactive Top Bar -->
    <div class="top-action-bar">
      <div class="top-brand">
        <div class="brand-logo">✓</div>
        <div>
          <div class="brand-text-h1">CICOD QUALITY ASSURANCE &amp; RELEASE ENGINEERING</div>
          <div class="brand-text-sub">EXECUTIVE &amp; ENGINEERING AT-A-GLANCE AUDIT DOSSIER (PDF EXPORT)</div>
        </div>
      </div>
      <div class="action-buttons">
        <button class="btn-action btn-action-primary" onclick="window.print()">
          🖨️ Export to PDF / Print
        </button>
        <button class="btn-action" onclick="window.close(); if(!window.opener) history.back();">
          ✕ Close
        </button>
      </div>
    </div>

    <!-- Executive Hero Header -->
    <div class="hero-header">
      <div class="hero-top-row">
        <div class="hero-title-group">
          <div class="hero-breadcrumbs">${data.moduleName} / ${data.sheetName} Suite</div>
          <h1>${data.sheetName} — Executive &amp; Engineering PDF Report</h1>
        </div>
        <div class="verdict-badge">
          <span class="verdict-dot"></span>
          <span>${data.verdict}</span>
        </div>
      </div>

      <div class="hero-meta-bar">
        <div class="meta-item"><span>Target Route:</span> <strong>${data.targetRoute}</strong></div>
        <div class="meta-item"><span>Audit Environment:</span> <strong>${data.environment.targetUrl}</strong></div>
        <div class="meta-item"><span>Tenant / Account:</span> <strong>${data.environment.tenantId}</strong></div>
        <div class="meta-item"><span>Execution Date:</span> <strong>${data.environment.auditDate}</strong></div>
        <div class="meta-item"><span>Test Engine:</span> <strong>${data.environment.engine}</strong></div>
      </div>
    </div>

    <!-- Dual Pillar Layout: Executive vs Engineering -->
    <div class="pillars-grid">

      <!-- LEFT PILLAR: Executive Leadership Glance -->
      <div class="pillar-box">
        <div class="pillar-header">
          <div class="pillar-title">
            <span>👔 Executive Leadership Glance</span>
          </div>
          <span class="pillar-badge">Situational Awareness</span>
        </div>

        <div class="kpi-row">
          <div class="kpi-mini-card">
            <div class="kpi-mini-title">Pass Rate</div>
            <div class="kpi-mini-val" style="color:${verdictColor};">${data.passRate}</div>
          </div>
          <div class="kpi-mini-card">
            <div class="kpi-mini-title">Verified Steps</div>
            <div class="kpi-mini-val" style="color:var(--sky);">${data.passCount} / ${data.totalSteps}</div>
          </div>
          <div class="kpi-mini-card">
            <div class="kpi-mini-title">Gaps / Bugs</div>
            <div class="kpi-mini-val" style="color:${data.gapCount > 0 ? 'var(--warn)' : 'var(--text-dim)'};">${data.gapCount}</div>
          </div>
          <div class="kpi-mini-card">
            <div class="kpi-mini-title">Risk Rating</div>
            <div class="kpi-mini-val" style="color:${data.riskRating.includes('CRITICAL') ? 'var(--danger)' : (data.riskRating === 'HIGH' ? 'var(--warn)' : 'var(--pass)')}; font-size:1.05rem;">
              ${data.riskRating}
            </div>
          </div>
        </div>

        <div class="risk-banner">
          <div class="risk-banner-title">Business &amp; Operational Impact</div>
          <div class="risk-banner-p">${data.businessImpact}</div>
        </div>

        <div class="exec-summary-text">
          <strong>Audit Scope &amp; Findings:</strong><br>
          ${data.executiveSummary}
        </div>
      </div>

      <!-- RIGHT PILLAR: Engineering Triage & Technical Specifications -->
      <div class="pillar-box">
        <div class="pillar-header">
          <div class="pillar-title">
            <span>🛠️ Engineering Triage &amp; Hotfixes</span>
          </div>
          <span class="pillar-badge">Technical Diagnostics</span>
        </div>

        <div class="severity-chips">
          <div class="sev-chip p0">
            <span class="sev-chip-val">${p0Count}</span>
            <span class="sev-chip-lbl">P0 Blockers</span>
          </div>
          <div class="sev-chip p1">
            <span class="sev-chip-val">${p1Count}</span>
            <span class="sev-chip-lbl">P1 High</span>
          </div>
          <div class="sev-chip p2">
            <span class="sev-chip-val">${p2Count}</span>
            <span class="sev-chip-lbl">P2 Medium</span>
          </div>
          <div class="sev-chip p3">
            <span class="sev-chip-val">${p3Count}</span>
            <span class="sev-chip-lbl">P3 Minor</span>
          </div>
        </div>

        ${data.defects && data.defects.length ? `
          <div style="font-weight:700;font-size:0.85rem;color:#fff;margin-top:14px;margin-bottom:6px;">
            Identified Defects &amp; Gaps Matrix (${data.defects.length})
          </div>
          <div style="overflow-x:auto;">
            <table class="defects-table">
              <thead>
                <tr>
                  <th style="width:70px;">Sev</th>
                  <th style="width:110px;">ID</th>
                  <th>Defect &amp; Root Cause Analysis</th>
                </tr>
              </thead>
              <tbody>
                ${data.defects.map(d => `
                  <tr>
                    <td><span class="sev-badge-sm ${d.severity.toLowerCase()}">${d.severity}</span></td>
                    <td><code style="font-family:'JetBrains Mono',monospace;color:var(--sky);">${d.id}</code></td>
                    <td>
                      <div style="font-weight:700;color:#fff;margin-bottom:2px;">${d.title}</div>
                      <div style="color:var(--text-muted);font-size:0.75rem;margin-bottom:4px;">
                        <strong>Observed:</strong> ${d.actual}
                      </div>
                      <div style="color:#a855f7;font-size:0.74rem;">
                        <strong>Hotfix Vector:</strong> ${d.hotfix}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : `
          <div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.25);border-radius:8px;padding:16px;text-align:center;color:#34d399;font-size:0.85rem;margin-top:14px;">
            ✓ No blocking code defects identified. All executed functional checkpoints verified aligned with specifications.
          </div>
        `}

        ${data.engineeringActionItems && data.engineeringActionItems.length ? `
          <div style="font-weight:700;font-size:0.85rem;color:#fff;margin-top:18px;margin-bottom:8px;">
            Recommended Engineering Remediation
          </div>
          <ul class="action-list">
            ${data.engineeringActionItems.map(act => `
              <li class="action-item">
                <span class="action-pri">${act.priority}</span>
                <div>
                  <div style="color:#e2e8f0;font-weight:600;">${act.item}</div>
                  <div style="font-size:0.72rem;color:var(--text-dim);font-family:'JetBrains Mono',monospace;">Subsystem: ${act.component}</div>
                </div>
              </li>
            `).join('')}
          </ul>
        ` : ''}

      </div>

    </div>

    <!-- =========================================================================
         DETAILED TEST CASES & VERIFICATION STEPS SECTION
         ========================================================================= -->
    <div class="detailed-test-cases-section">
      <div class="pillar-header" style="margin-bottom:16px;">
        <div class="pillar-title">
          <span>📋 Detailed Test Cases &amp; Verification Steps (${data.totalSteps} Checkpoints)</span>
        </div>
        <span class="pillar-badge">Complete Granular Audit Log</span>
      </div>
      <div class="test-cases-container">
        ${detailedCasesHtml || '<p style="color:var(--text-muted);padding:16px;">Detailed step-by-step test execution logged in official suite specification.</p>'}
      </div>
    </div>

    <!-- Photographic Audit Trail -->
    ${data.evidence && data.evidence.length ? `
      <div class="evidence-section">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <h3 style="font-size:1.05rem;font-weight:800;color:#fff;">
            📸 Test Evidence Audit Trail (${data.evidence.length} Captures)
          </h3>
          <span style="font-size:0.75rem;color:var(--text-dim);font-family:'JetBrains Mono',monospace;">
            Target 3 Staging Artifacts
          </span>
        </div>
        <div class="evidence-grid">
          ${data.evidence.map(img => {
      const filePath = img.file || img.url || '';
      return `
              <div class="evidence-card">
                <div class="evidence-img-wrap">
                  <img src="${filePath}" alt="${img.caption}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><text y=%2250%%22 x=%2250%%22 text-anchor=%22middle%22 fill=%22%23666%22>Evidence PNG</text></svg>'">
                </div>
                <div class="evidence-info">
                  <div class="evidence-caption">${img.caption}</div>
                  <div class="evidence-path">${filePath}</div>
                </div>
              </div>
            `;
    }).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Footer -->
    <div class="report-footer">
      CICOD UAT PORTAL • EXECUTIVE &amp; ENGINEERING BRIEF • GENERATED AUTOMATICALLY FROM TARGET 3 LIVE AUDIT REPOSITORY
    </div>

  </div>

</body>
</html>`;

    return html;
  }

  /**
   * Downloads the complete Executive & Engineering report (summary + detailed test cases)
   * strictly as a PDF document.
   */
  function downloadExecReportPdf(featId) {
    const data = getReportData(featId);
    if (!data) return;

    const htmlContent = generateExecReportHtml(featId);
    const cleanMod = (data.moduleName || 'Module').replace(/[^a-zA-Z0-9]/g, '_');
    const cleanSheet = (data.sheetName || 'Sheet').replace(/[^a-zA-Z0-9]/g, '_');
    const pdfFilename = `CICOD_UAT_Report_${cleanMod}_${cleanSheet}.pdf`;

    showToast(`Generating PDF Report for ${data.sheetName}...`);

    // Check if html2pdf is available in window
    if (typeof window !== 'undefined' && typeof window.html2pdf === 'function') {
      const container = document.createElement('div');
      container.innerHTML = htmlContent;
      container.style.position = 'fixed';
      container.style.left = '-9999px';
      container.style.top = '0';
      container.style.width = '1200px';
      container.style.background = '#fff';
      document.body.appendChild(container);

      const opt = {
        margin: [8, 8, 8, 8],
        filename: pdfFilename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1.5, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      window.html2pdf().set(opt).from(container).save().then(() => {
        if (container.parentNode) document.body.removeChild(container);
        showToast(`Downloaded ${pdfFilename} (PDF) successfully!`);
      }).catch((err) => {
        console.warn('html2pdf direct render fallback:', err);
        if (container.parentNode) document.body.removeChild(container);
        printExecReport(featId);
      });
    } else {
      // Direct high-resolution vector PDF print
      printExecReport(featId);
    }
  }

  /**
   * Prints or exports to PDF via browser dialog.
   */
  function printExecReport(featId) {
    const htmlContent = generateExecReportHtml(featId);
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Popups are blocked. Please allow popups to export/print PDF.');
      return;
    }
    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 450);
  }

  /**
   * Opens the interactive Executive & Engineering Glance HUD modal.
   */
  function openExecGlanceModal(featId) {
    const data = getReportData(featId);
    if (!data) return;

    const modal = document.getElementById('execGlanceModal');
    if (!modal) return;

    const p0Count = data.severityMatrix ? data.severityMatrix.p0 : 0;
    const p1Count = data.severityMatrix ? data.severityMatrix.p1 : 0;
    const p2Count = data.severityMatrix ? data.severityMatrix.p2 : 0;
    const p3Count = data.severityMatrix ? data.severityMatrix.p3 : 0;

    let verdictColor = '#10b981';
    let verdictBg = 'rgba(16, 185, 129, 0.15)';
    let verdictBorder = 'rgba(16, 185, 129, 0.35)';

    if (data.verdictType === 'danger' || p0Count > 0) {
      verdictColor = '#f87171';
      verdictBg = 'rgba(239, 68, 68, 0.15)';
      verdictBorder = 'rgba(239, 68, 68, 0.35)';
    } else if (data.verdictType === 'warn' || data.gapCount > 0) {
      verdictColor = '#fbbf24';
      verdictBg = 'rgba(245, 158, 11, 0.15)';
      verdictBorder = 'rgba(245, 158, 11, 0.35)';
    }

    const detailedCasesHtml = getDetailedTestCases(featId);

    const modalTitle = document.getElementById('execModalTitle');
    const modalCrumb = document.getElementById('execModalCrumb');
    const modalVerdict = document.getElementById('execModalVerdict');
    const modalBody = document.getElementById('execModalBody');
    const downloadBtn = document.getElementById('execModalDownloadBtn');

    if (modalTitle) modalTitle.innerText = `${data.sheetName} — Executive & Engineering Brief`;
    if (modalCrumb) modalCrumb.innerText = `${data.moduleName} / ${data.sheetName}`;
    if (modalVerdict) {
      modalVerdict.innerHTML = `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${verdictColor};margin-right:6px;"></span>${data.verdict}`;
      modalVerdict.style.color = verdictColor;
      modalVerdict.style.background = verdictBg;
      modalVerdict.style.borderColor = verdictBorder;
    }

    if (downloadBtn) {
      downloadBtn.innerHTML = '📄 Download PDF Report';
      downloadBtn.onclick = () => downloadExecReportPdf(featId);
    }

    if (modalBody) {
      modalBody.innerHTML = `
        <!-- Navigation Tabs inside Modal -->
        <div class="exec-modal-tabs">
          <button class="exec-tab-btn active" onclick="switchExecTab('exec')">👔 Executive Glance</button>
          <button class="exec-tab-btn" onclick="switchExecTab('eng')">🛠️ Engineering Triage (${p0Count + p1Count + p2Count + p3Count})</button>
          <button class="exec-tab-btn" onclick="switchExecTab('cases')">📋 Detailed Test Cases (${data.totalSteps})</button>
        </div>

        <!-- TAB 1: EXECUTIVE GLANCE -->
        <div id="tabContentExec" class="exec-tab-content active">
          <div class="kpi-row" style="margin-top:14px;">
            <div class="kpi-mini-card">
              <div class="kpi-mini-title">Pass Rate</div>
              <div class="kpi-mini-val" style="color:${verdictColor};">${data.passRate}</div>
            </div>
            <div class="kpi-mini-card">
              <div class="kpi-mini-title">Verified Steps</div>
              <div class="kpi-mini-val" style="color:var(--sky);">${data.passCount} / ${data.totalSteps}</div>
            </div>
            <div class="kpi-mini-card">
              <div class="kpi-mini-title">Gaps / Bugs</div>
              <div class="kpi-mini-val" style="color:${data.gapCount > 0 ? 'var(--warn)' : 'var(--text-dim)'};">${data.gapCount}</div>
            </div>
            <div class="kpi-mini-card">
              <div class="kpi-mini-title">Risk Rating</div>
              <div class="kpi-mini-val" style="color:${data.riskRating.includes('CRITICAL') ? 'var(--danger)' : (data.riskRating === 'HIGH' ? 'var(--warn)' : 'var(--pass)')}; font-size:1rem;">
                ${data.riskRating}
              </div>
            </div>
          </div>

          <div class="risk-banner" style="border-left-color:${verdictColor};">
            <div class="risk-banner-title" style="color:${verdictColor};">Operational &amp; Business Impact</div>
            <div class="risk-banner-p">${data.businessImpact}</div>
          </div>

          <div class="exec-summary-text">
            <strong>Executive Briefing:</strong><br>
            ${data.executiveSummary}
          </div>

          <div style="display:flex;gap:16px;font-size:0.8rem;color:var(--text-dim);font-family:'JetBrains Mono',monospace;margin-top:12px;padding-top:12px;border-top:1px solid var(--border);">
            <div>Route: <strong style="color:#e2e8f0;">${data.targetRoute}</strong></div>
            <div>Env: <strong style="color:#e2e8f0;">${data.environment.tenantId}</strong></div>
            <div>Date: <strong style="color:#e2e8f0;">${data.environment.auditDate}</strong></div>
          </div>
        </div>

        <!-- TAB 2: ENGINEERING TRIAGE -->
        <div id="tabContentEng" class="exec-tab-content">
          <div class="severity-chips" style="margin-top:14px;">
            <div class="sev-chip p0">
              <span class="sev-chip-val">${p0Count}</span>
              <span class="sev-chip-lbl">P0 Blockers</span>
            </div>
            <div class="sev-chip p1">
              <span class="sev-chip-val">${p1Count}</span>
              <span class="sev-chip-lbl">P1 High</span>
            </div>
            <div class="sev-chip p2">
              <span class="sev-chip-val">${p2Count}</span>
              <span class="sev-chip-lbl">P2 Medium</span>
            </div>
            <div class="sev-chip p3">
              <span class="sev-chip-val">${p3Count}</span>
              <span class="sev-chip-lbl">P3 Minor</span>
            </div>
          </div>

          ${data.defects && data.defects.length ? `
            <div style="font-weight:700;font-size:0.85rem;color:#fff;margin-top:12px;margin-bottom:6px;">
              Active Defect Diagnostics
            </div>
            <div style="overflow-x:auto;">
              <table class="defects-table">
                <thead>
                  <tr>
                    <th>Sev</th>
                    <th>ID</th>
                    <th>Defect &amp; Root Cause Analysis</th>
                  </tr>
                </thead>
                <tbody>
                  ${data.defects.map(d => `
                    <tr>
                      <td><span class="sev-badge-sm ${d.severity.toLowerCase()}">${d.severity}</span></td>
                      <td><code style="font-family:'JetBrains Mono',monospace;color:var(--sky);">${d.id}</code></td>
                      <td>
                        <div style="font-weight:700;color:#fff;">${d.title}</div>
                        <div style="color:var(--text-muted);font-size:0.75rem;margin:3px 0;">
                          <strong>Observed:</strong> ${d.actual}
                        </div>
                        <div style="color:#a855f7;font-size:0.74rem;">
                          <strong>Hotfix:</strong> ${d.hotfix}
                        </div>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : `
            <div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.25);border-radius:8px;padding:16px;text-align:center;color:#34d399;font-size:0.85rem;margin-top:14px;">
              ✓ No blocking code defects detected in this module test suite.
            </div>
          `}

          ${data.engineeringActionItems && data.engineeringActionItems.length ? `
            <div style="font-weight:700;font-size:0.85rem;color:#fff;margin-top:16px;margin-bottom:8px;">
              Actionable Engineering Hotfixes
            </div>
            <ul class="action-list">
              ${data.engineeringActionItems.map(act => `
                <li class="action-item">
                  <span class="action-pri">${act.priority}</span>
                  <div>
                    <div style="color:#e2e8f0;font-weight:600;">${act.item}</div>
                    <div style="font-size:0.72rem;color:var(--text-dim);font-family:'JetBrains Mono',monospace;">Subsystem: ${act.component}</div>
                  </div>
                </li>
              `).join('')}
            </ul>
          ` : ''}
        </div>

        <!-- TAB 3: DETAILED TEST CASES -->
        <div id="tabContentCases" class="exec-tab-content">
          <div style="margin-top:14px;">
            <div style="font-size:0.82rem;color:var(--text-dim);margin-bottom:12px;font-family:'JetBrains Mono',monospace;">
              Showing full checkpoint verification records from official test suite (${data.totalSteps} steps):
            </div>
            <div class="test-cases-container" style="max-height:55vh;overflow-y:auto;border:1px solid var(--border);border-radius:8px;padding:8px;">
              ${detailedCasesHtml || '<p style="color:var(--text-muted);padding:16px;">Detailed step records logged in suite specification.</p>'}
            </div>
          </div>
        </div>
      `;
    }

    modal.classList.add('active');
  }

  /**
   * Closes the HUD modal.
   */
  function closeExecGlanceModal() {
    const modal = document.getElementById('execGlanceModal');
    if (modal) modal.classList.remove('active');
  }

  /**
   * Switches tab inside modal.
   */
  function switchExecTab(tabName) {
    const tabExec = document.getElementById('tabContentExec');
    const tabEng = document.getElementById('tabContentEng');
    const tabCases = document.getElementById('tabContentCases');
    const btns = document.querySelectorAll('.exec-tab-btn');

    btns.forEach(b => b.classList.remove('active'));

    if (tabName === 'exec') {
      if (tabExec) tabExec.classList.add('active');
      if (tabEng) tabEng.classList.remove('active');
      if (tabCases) tabCases.classList.remove('active');
      if (btns[0]) btns[0].classList.add('active');
    } else if (tabName === 'eng') {
      if (tabExec) tabExec.classList.remove('active');
      if (tabEng) tabEng.classList.add('active');
      if (tabCases) tabCases.classList.remove('active');
      if (btns[1]) btns[1].classList.add('active');
    } else if (tabName === 'cases') {
      if (tabExec) tabExec.classList.remove('active');
      if (tabEng) tabEng.classList.remove('active');
      if (tabCases) tabCases.classList.add('active');
      if (btns[2]) btns[2].classList.add('active');
    }
  }

  /**
   * Simple toast notification.
   */
  function showToast(msg) {
    let toast = document.getElementById('portalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'portalToast';
      toast.className = 'portal-toast';
      document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // Expose methods globally
  if (typeof window !== 'undefined') {
    window.switchExecTab = switchExecTab;
    window.openExecGlanceModal = openExecGlanceModal;
    window.closeExecGlanceModal = closeExecGlanceModal;
    window.downloadExecReportPdf = downloadExecReportPdf;
    window.printExecReport = printExecReport;
  }

  return {
    getReportData,
    getDetailedTestCases,
    generateExecReportHtml,
    downloadExecReportPdf,
    printExecReport,
    openExecGlanceModal,
    closeExecGlanceModal,
    switchExecTab
  };
}));

