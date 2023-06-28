define({"319":{i:0.000395708791070846,u:"../Content/UG/t_edit_apixp_scripts.htm",a:" After you have created a VAPI-XP test script using the HP VAPI-XP Wizard, you can edit it in the Test Script tab. To learn more about VAPI-XP tests, see  VAPI-XP Tests Overview . You can display the Test Script tab in a separate window by selecting View \u003e Window Screen, or clicking the Window ...",t:"How to Edit VAPI-XP Test Scripts "},"320":{i:0.00027859999781964,u:"../Content/UG/t_additional_editing_funcs.htm",a:"You can perform the following editing functions in the Test Script tab: To undo a previous action, click the Undo button  . To restore an action that was undone, click the Redo button  .  To remove a section of code from one part of your script, and place it in another part of the script, select the ...",t:"Additional Editing Functions"},"321":{i:0.000324953763147289,u:"../Content/UG/t_vapi_aut_parameters.htm",a:"ALM Editions:  AUT Environments and Functional test sets are available only for ALM Edition. For more information about ALM editions and their functionality, see  ALM Editions . To find out what edition of ALM you are using, ask your ALM site administrator. VAPI-XP tests can be run using server-side ...",t:"How to Use AUT Environments with VAPI-XP"},"322":{i:0.000507829018900114,u:"../Content/UG/t_vapixp_api.htm",a:"The VAPI-XP tool contains a built-in library of VAPI-XP object definitions that you can reference as you are creating your test script. To learn more about VAPI-XP tests, see  VAPI-XP Tests Overview . This section includes: Using the TDHelper Object Using the TDInput Object Using the TDOutput Object ...",t:"How to Use the VAPI-XP API"},"323":{i:0.000252812909310472,u:"../Content/UG/t_tdhelper_object.htm",a:"The TDHelper object supplies the following functions that you can use to perform ALM-related tasks. RunTestSet Executes the selected test set and returns the accumulated test set execution status. RunTestSet([Name = \"default\"], [Filter = \"\"], [Locally = FALSE], [Host = \"\"], [HostGroup = \"\"]) Name. ...",t:"Using the TDHelper Object"},"324":{i:0.000252812909310472,u:"../Content/UG/t_tdinput_object.htm",a:"The TDInput object supplies the following function that you can use to obtain an input value from an end user. GetInput Displays the Input dialog box, enabling you to obtain an input value from an end user. GetInput([Caption],[Name]) Caption. Dialog box caption. Optional. Name. Name of the input ...",t:"Using the TDInput Object"},"325":{i:0.000252812909310472,u:"../Content/UG/t_tdoutput_object.htm",a:"The TDOutput object supplies the following functions that you can use to control the VAPI-XP Output tab. Clear Method Clears the Output tab. Clear Print Method Prints the text message to a new line in the Output tab. Print(Msg) HookDebug Property Sets or removes the hook for the OutputDebugString ...",t:"Using the TDOutput Object"},"326":{i:0.000252812909310472,u:"../Content/UG/t_xtools_object.htm",a:"The XTools object supplies the following functions that you can use to perform general tasks. run Runs command line with passed attributes. run(Command, [Args = \"\"], [Timeout = -1], [UseOutput = TRUE]) Command. Application executable file. Args. Application arguments. Optional. Default = \"\" Timeout. ...",t:"Using the XTools Object"},"327":{i:0.000463062646273721,u:"../Content/UG/t_vapixp_debug_mode.htm",a:" After you have created and edited your VAPI-XP test script, you can run it in debug mode or test mode. Running a VAPI-XP test in debug mode enables you to execute the test without including it in a test set and without creating test run data in the ALM project. It is generally recommended that you ...",t:"How to Run VAPI-XP Tests in Debug Mode "},"328":{i:0.000324953763147289,u:"../Content/UG/t_vapixp_test_mode.htm",a:" You can run your VAPI-XP test in test mode once you have added the test to a test set in the Test Lab module.  When you run a VAPI-XP test in test mode, test run data is created in the ALM project. You can run your VAPI-XP test in test mode from either the Test Plan or Test Lab module. To run ...",t:"How to Run VAPI-XP Tests in Test Mode "},"329":{i:0.000324953763147289,u:"../Content/UG/t_debug_vapixp.htm",a:" If your test run was not successfully completed, you can use VAPI-XP\u0027s Integrated Debugger to assist you in debugging your VAPI-XP test script.  You cannot use the Integrated Debugger to debug PerlScript or PythonScript test scripts. To learn more about VAPI-XP tests, see  VAPI-XP Tests Overview . ...",t:"How to Debug VAPI-XP Tests Scripts Test Mode "},"330":{i:0.000166479769990371,u:"../Content/UG/ui_menu_vapixp.htm",a:"VAPI-XP User Interface  This section includes:  ",t:"VAPI-XP User Interface "},"331":{i:0.000166479769990371,u:"../Content/UG/ui_vapixp_wizard.htm",a:"HP VAPI-XP Wizard This wizard enables you to create VAPI-XP test scripts. For more details, see  How to Create VAPI-XP Test Scripts .",t:"HP VAPI-XP Wizard"},"332":{i:0.000166479769990371,u:"../Content/UG/ui_vapixp_test_script_tab.htm",a:"Test Script Tab This tab enables you to view and edit your VAPI-XP test scripts. For more details, see: How to Edit VAPI-XP Test Scripts  How to Use the VAPI-XP API",t:"Test Script Tab"},"333":{i:0.000172140172224256,u:"../Content/UG/part_test_lab.htm",a:"Test Lab Test Lab contains the following sections:  ",t:"Test Lab"},"334":{i:0.000166479769990371,u:"../Content/UG/menu_test_exec_intro.htm",a:"Introducing Test Execution This\n       section  includes:\n    ",t:"Introducing Test Execution"},"335":{i:0.00127396651916078,u:"../Content/UG/c_test_exec_overview.htm",a:"You begin test execution by creating test sets and choosing tests to include in each set. A test set contains a subset of the tests in an HPE Application Lifecycle Management (ALM) project designed to achieve specific test goals. As your application changes, you can run the manual and automated ...",t:"Test Execution Overview"},"336":{i:0.000620028187132497,u:"../Content/UG/c_draft_runs.htm",a:"Setting a test as a draft run instructs ALM to ignore the run results. When you set a test instance as a draft run, the outcome of the run does not impact the execution status of the test, the status of the test instance, or the coverage status. ALM also ignores draft runs when calculating the ...",t:"Draft Runs"},"337":{i:0.00257389714923547,u:"../Content/UG/t_run_tests.htm",a:"This task describes how to run tests in your project using the ALM Test Lab module. This task is part of a higher-level task. For details, see  Introducing ALM . Create test sets Create and define test sets in the Test Lab module. After you have created test sets, you can assign test set folders to ...",t:"How to Run Tests in ALM"},"338":{i:0.000342162238985668,u:"../Content/UG/t_draft_runs.htm",a:"This task describes how to set test runs as draft runs. You can set a test run as a draft in the following ways: Before a test run. You can mark a test that you are running manually as a draft run before performing the test. In the Manual Runner: Run Details page, set the value of the Draft Run ...",t:"How to Work with Draft Runs"},"339":{i:0.00340720238477959,u:"../Content/UG/c_end_to_end_deploy_and_test.htm",a:"ALM Editions:  Many of the tasks below include components available only for users with ALM Edition. For more information about ALM editions and their functionality, see  ALM Editions . To find out what edition of ALM you are using, ask your ALM site administrator. ALM enables you to completely ...",t:"Deploying and Testing your Application in ALM"},"340":{i:0.000166479769990371,u:"../Content/UG/ui_menu_test_lab.htm",a:"The Test Lab Module User Interface  This section includes:  ",t:"The Test Lab Module User Interface "},"341":{i:0.00138505924673064,u:"../Content/UG/ui_test_lab_window.htm",a:"Test Lab Module Window This window enables you to create test sets and perform test runs.",t:"Test Lab Module Window"},"342":{i:0.00062747166696433,u:"../Content/UG/ui_test_lab_menus.htm",a:"Test Lab Module Menus and Buttons This section describes the menus and buttons available in the Test Lab module.",t:"Test Lab Module Menus and Buttons"},"343":{i:0.000417284661293006,u:"../Content/UG/ui_test_lab_icons.htm",a:"Test Lab Module Icons This section describes the icons displayed in the Test Lab module.",t:"Test Lab Module Icons"},"344":{i:0.00130094078118748,u:"../Content/UG/ui_test_lab_fields.htm",a:"Test Lab Module Fields This section describes the Test Lab module fields. ",t:"Test Lab Module Fields"},"345":{i:0.000166479769990371,u:"../Content/UG/menu_test_set_spec.htm",a:"Test Set Specification This\n       section  includes:\n    ",t:"Test Set Specification"},"346":{i:0.00129504512564506,u:"../Content/UG/c_test_set_spec_overview.htm",a:"After you design tests in the Test Plan module, you organize test execution by creating test sets in the Test Lab module. A test set contains a subset of the tests in your project designed to achieve specific test goals. ALM supports different types of test sets. The following table describes each ...",t:"Test Set Specification Overview"},"347":{i:0.00247049116146629,u:"../Content/UG/t_create_test_sets.htm",a:"This task describes how to create and define test sets in the Test Lab module. To learn more about test sets, see  Test Set Specification Overview . Higher-level task: This task is part of a higher-level task. For details, see  How to Run Tests in ALM . Define test sets Define a hierarchical ...",t:"How to Create Test Sets"},"348":{i:0.000166479769990371,u:"../Content/UG/ui_menu_test_set_spec.htm",a:"Test Sets User Interface  This section includes:  ",t:"Test Sets User Interface "},"349":{i:0.00140793965119045,u:"../Content/UG/ui_execution_grid.htm",a:"Execution Grid Tab This tab displays test instance data in a grid. Each line in the grid displays a separate record. You can run and view tests in the Execution Grid.",t:"Execution Grid Tab"},"350":{i:0.000312667272605441,u:"../Content/UG/ui_select_testing_host.htm",a:"Select Testing Host Dialog Box This dialog box enables you to select a testing host to run a test in a Functional test set.",t:"Select Testing Host Dialog Box"},"351":{i:0.000477536998910252,u:"../Content/UG/ui_test_instance_details.htm",a:"Test Instance Details Dialog Box This dialog box enables you to view run details and results for a test instance. You can also view and set test run configuration information.",t:"Test Instance Details Dialog Box"},"352":{i:0.00023685055326285,u:"../Content/UG/ui_test_instance_details_runs.htm",a:"Test Instance Details - Runs View This view enables you to compare the results of a test run with the results of previous runs. You can view run details and step results for all the runs of a selected test instance.",t:"Test Instance Details - Runs View"},"353":{i:0.00088181797523332,u:"../Content/UG/ui_test_instance_details_execution.htm",a:"Test Instance Details - Execution Settings View This view enables you to view or set the test parameter values for a manual test instance or an automated test instance. You can also view and edit the On Failure rules for an automated test instance.",t:"Test Instance Details - Execution Settings View"},"354":{i:0.000590321827293966,u:"../Content/UG/ui_demands_tab.htm",a:"Requested Hosts Tab This tab enables you to manage which hosts are requested for a Functional test set execution. ",t:"Requested Hosts Tab"},"355":{i:0.00063706528436381,u:"../Content/UG/ui_automation_tab.htm",a:"Automation Tab This tab enables you to set test set notification rules and On Failure rules to define what action ALM takes when selected events occur during a test set run. For example, you can arrange for ALM to send email to specified users when a test fails, or to rerun a test upon failure. ",t:"Automation Tab"},"356":{i:0.000427763490421341,u:"../Content/UG/ui_new_test_set.htm",a:"New Test Set Dialog Box This dialog box enables you to add a test set to a test set folder.",t:"New Test Set Dialog Box"},"357":{i:0.000705186914482451,u:"../Content/UG/ui_select_tests_pane.htm",a:"Select Tests Pane This pane enables you to select tests for inclusion in a test set. ALM adds instances of the selected tests to the test set. Each instance contains a defined test configuration.",t:"Select Tests Pane"},"358":{i:0.000177828265349097,u:"../Content/UG/ui_test_set_details.htm",a:"Test Set Details Dialog Box  This dialog box enables you to view and update details of a test set.",t:"Test Set Details Dialog Box "},"359":{i:0.000301863346918215,u:"../Content/UG/ui_on_test_failure.htm",a:"On Test Failure Dialog Box  This dialog box enables you to change the default failure rules for tests in a test set. These rules instruct ALM in the event that an automated test in the test set fails.",t:"On Test Failure Dialog Box "},"360":{i:0.000197105595068738,u:"../Content/UG/ui_paste_test_set_folders.htm",a:"Paste Test Set Folders To Target Project Dialog Box This dialog box enables you to select the way in which test sets are copied from one project to another project.",t:"Paste Test Set Folders To Target Project Dialog Box"},"361":{i:0.000166479769990371,u:"../Content/UG/menu_test_run_schedules.htm",a:"Test Run Schedules  This\n        section  includes:\n    ",t:"Test Run Schedules "},"362":{i:0.000664677050350831,u:"../Content/UG/c_run_schedules_overview.htm",a:"You can control the execution of test instances in a test set. Using the Execution Flow tab of the Test Lab module, you can specify a date and time, and set conditions for executing a test instance. A condition is based on the results of another specified test instance in the Execution Flow. By ...",t:"Test Run Schedules Overview"},"363":{i:0.00135544092881104,u:"../Content/UG/t_schedule_runs.htm",a:"This task describes how to schedule test runs in the Execution Flow tab. To learn more about scheduling test run, see  Test Run Schedules Overview . This task is part of a higher-level task. For details, see  How to Run Tests in ALM . Display a test set In the Test Lab module, select a test set from ...",t:"How to Schedule Test Runs"},"364":{i:0.000166479769990371,u:"../Content/UG/ui_menu_run_schedule.htm",a:"Test Run Schedules User Interface  This section includes:",t:"Test Run Schedules User Interface "},"365":{i:0.000416011211542327,u:"../Content/UG/ui_excecution_flow.htm",a:"Execution Flow Tab This tab displays test data in a diagram. You use the Execution Flow to control the way your test instances are executed. You can specify when and under what conditions you want a test to be executed.",t:"ui_excecution_flow"},"366":{i:0.000483481476685618,u:"../Content/UG/ui_execution_condition.htm",a:"Execution Condition Page This page enables you to specify under what conditions you want a test instance to be executed.",t:"Execution Condition Page"},"367":{i:0.000537872250150871,u:"../Content/UG/ui_time_dependency.htm",a:"Time Dependency Page This page enables you to specify when you want a test to be executed.",t:"Time Dependency Page"},"368":{i:0.000166479769990371,u:"../Content/UG/menu_functional_test_exec.htm",a:"Functional Test Execution This\n        section  includes:\n    ",t:"Functional Test Execution"},"369":{i:0.000287620422393626,u:"../Content/UG/c_func_perf_test_execution_overview.htm",a:"ALM Editions:  Functional test execution is available only for users with ALM Edition. For more information about ALM editions and their functionality, see  ALM Editions . To find out what edition of ALM you are using, ask your ALM site administrator. You can run server-side Functional and ...",t:"Functional Test Execution Overview"},"370":{i:0.000491705401511009,u:"../Content/UG/t_running_func_perf.htm",a:"ALM Editions:  Functional test execution is available only for users with ALM Edition. For more information about ALM editions and their functionality, see  ALM Editions . To find out what edition of ALM you are using, ask your ALM site administrator. This task describes how to run server-side ...",t:"How to Run Functional Tests"},"371":{i:0.000166479769990371,u:"../Content/UG/tr_troubleshooting_functional_tests.htm",a:"If the testing hosts being requested for a test set exceed the limits of the available testing hosts in  the host pool of your project, the test set becomes invalid. A message will be displayed in the Messages panel (found in the Requested Hosts tab) indicating that the test set cannot be executed ...",t:"Troubleshooting Functional Testing"},"372":{i:0.000166479769990371,u:"../Content/UG/ui_menu_func_perf_exec.htm",a:"Functional Test Execution User Interface This section includes:",t:"Functional Test Execution User Interface"},"373":{i:0.000800014635470136,u:"../Content/UG/ui_run_entity_test_db.htm",a:"Run \u003cEntity\u003e Dialog Box This dialog box enables you to run Functional and Performance tests, test sets, and build verification suites. ",t:"Run \u003cEntity\u003e Dialog Box"},"374":{i:0.000299314263674327,u:"../Content/UG/ui_suggested_duration.htm",a:"Suggested Duration Dialog Box This dialog box enables you to use the recorded durations of previous server-side executions to get a suggested duration for your current run.",t:"Suggested Duration Dialog Box"},"375":{i:0.000824912524811551,u:"../Content/UG/ui_execution_report.htm",a:"This page enables you to view the current state of Functional tests, test sets, and build verification suite runs.  If you have Internet Explorer 10 or later, the Execution Report appears in the ALM Web Client. For details, see  Execution Report Page - Web Client .",t:"Execution  Report Page - Desktop Client"},"376":{i:0.00025413059851544,u:"../Content/UG/ui_execution_report_web.htm",a:"The Execution Report  automatically appears when you run a functional test or test set, or a build verification suite. You run these tests from the ALM Desktop Client, but the report appears in the ALM Web Client if you have Internet Explorer 10 or later. If you have Internet Explorer 9 or below, ...",t:"Execution Report Page - Web Client"},"377":{i:0.000166479769990371,u:"../Content/UG/menu_default_test_execution.htm",a:"Default Test Execution This\n        section  includes:\n    ",t:"Default Test Execution"},"378":{i:0.000166479769990371,u:"../Content/UG/c_default_test_exec_overview.htm",a:"You can run client-side automatic and manual tests and test sets from HPE Application Lifecycle Management (ALM) regardless of which version of ALM you have. You can run manual tests from a Default test set in ALM using Sprinter or the Manual Runner. For more information about manual test execution ...",t:"Default Test Execution Overview"},"379":{i:0.000237234797913928,u:"../Content/UG/menu_manual_execution.htm",a:"Manual Test Execution This section includes:",t:"Manual Test Execution"},"380":{i:0.000508199907137166,u:"../Content/UG/c_manual_execution_overview.htm",a:"When you run tests in a Default test set manually, you follow the test steps and perform operations on the application under test. You pass or fail each step, depending on whether the actual application results match the expected output. You can run both manual and automated tests manually. The ...",t:"Manual Test Execution Overview"},"381":{i:0.000737210106034239,u:"../Content/UG/c_sprinter_overview.htm",a:"You run tests manually from HPE Application Lifecycle Management (ALM) using HPE Sprinter. Sprinter provides advanced functionality and tools to assist you in the manual testing process. Sprinter is fully integrated with ALM, enabling you to get the maximum benefit from both solutions. ALM Editions: ...",t:"HPE Sprinter Overview"},"382":{i:0.00143055231870932,u:"../Content/UG/t_run_tests_manually.htm",a:"This task describes how to run tests manually.  To learn more about running tests manually, see  Manual Test Execution Overview .   This task is part of a higher-level task. For details, see  How to Run Tests in ALM . ALM Editions: Sprinter functionality described in this section is not available ...",t:"How to Run Tests Manually"},"383":{i:0.000166479769990371,u:"../Content/UG/ui_menu_manual_execution.htm",a:"Manual Test Execution User Interface  This section includes:  ",t:"Manual Test Execution User Interface "},"384":{i:0.000177828265349097,u:"../Content/UG/ui_manual_test_run.htm",a:"Manual Test Run Dialog Box This dialog box enables you to select whether to run tests using Sprinter, the Manual Runner, or the Automatic Runner.",t:"Manual Test Run Dialog Box"},"385":{i:0.000658475188615306,u:"../Content/UG/ui_manual_runner_wizard.htm",a:"Manual Runner Wizard This wizard enables you to run tests manually. You can run both manual and automated tests manually.",t:"Manual Runner Wizard"},"386":{i:0.000399468237547232,u:"../Content/UG/ui_manual_runner_run_details.htm",a:"Manual Runner: Run Details Page  This wizard page enables you to review run details and run tests manually.",t:"Manual Runner: Run Details Page "},"387":{i:0.000535072639808365,u:"../Content/UG/ui_manual_runner_step_details.htm",a:"Manual Runner: Step Details Page This wizard page enables you to set the pass/fail status for each step, and add, delete, or modify steps during the run.  After you finish executing the test, you can save your design steps with the changes you make. ",t:"Manual Runner: Step Details Page"},"388":{i:0.000237234797913928,u:"../Content/UG/menu_auto_test_execution.htm",a:"Automatic Test Execution This section includes:",t:"Automatic Test Execution"},"389":{i:0.000718386440761942,u:"../Content/UG/c_auto_execution_overview.htm",a:"You can run tests in a Default test set automatically from HPE Application Lifecycle Management (ALM). You can choose to run tests on your machine or on remote testing hosts. A testing host is any machine connected to your network on which a testing tool has already been installed. As opposed to ...",t:"Automatic Test Execution Overview"},"390":{i:0.00147947692382549,u:"../Content/UG/t_run_auto_tests.htm",a:"This task describes how to run Default test sets automatically. To learn more about running tests automatically, see  Automatic Test Execution Overview . This task is part of a higher-level task. For details, see  How to Run Tests in ALM . Prerequisites Set up hosts for remote test execution. Before ...",t:"How to Run Tests Automatically"},"391":{i:0.000372557034431757,u:"../Content/UG/c_qtp_execution_overview_qtp.htm",a:"HPE Unified Functional Testing (UFT) comprises the product formerly known as HPE QuickTest Professional and the product known as HPE Service Test.  Functionality provided by QuickTest is now known as GUI testing in UFT. Functionality provided by Service Test is also known as API testing in UFT. When ...",t:"How to Run Unified Functional Testing (UFT) GUI Tests"},"392":{i:0.000166479769990371,u:"../Content/UG/ui_menu_auto_execution.htm",a:"Automatic Test Execution User Interface  This section includes:  ",t:"Automatic Test Execution User Interface "},"393":{i:0.000755872590569817,u:"../Content/UG/ui_auto_runner.htm",a:"Automatic Runner Dialog Box This dialog box enables you to run tests from a Default test set automatically. You can run an entire test set or specific tests, including both automated and manual tests.",t:"Automatic Runner Dialog Box"},"394":{i:0.000177828265349097,u:"../Content/UG/ui_host_manager.htm",a:"Host Manager Dialog Box (for Default test sets only) This dialog box enables you to create a list of available hosts for remote test execution within a Default test set. You can also organize hosts into groups to be used for a specific project.",t:"Host Manager Dialog Box (for Default test sets only)"},"395":{i:0.000303590420433686,u:"../Content/UG/ui_order_test_instances.htm",a:"Order Test Instances Dialog Box This dialog box enables you to change the execution order of the tests in the Execution Grid or Execution Flow.",t:"Order Test Instances Dialog Box"},"396":{i:0.000561830336458134,u:"../Content/UG/ui_execution_log.htm",a:"Execution Log Dialog Box This dialog box enables you to view details about Default tests executed by the Automatic Runner.",t:"Execution Log Dialog Box"},"397":{i:0.000279954244698949,u:"../Content/UG/menu_external_test_exec.htm",a:"Integrating External Tests This\n       section  includes:\n    ",t:"Integrating External Tests"},"398":{i:0.00141438521884345,u:"../Content/UG/c_integrating_external_test_exec_overview.htm",a:"ALM enhances your testing capabilities by enabling you to synch externally executed test results  with ALM. Automation tests executed by Jenkins or other testing frameworks will be integrated into ALM along with the latest test runs, giving quality teams comprehensive quality coverage. When working ...",t:"Integrating External Tests Overview"},"399":{i:0.00098396896219932,u:"../Content/UG/t_integrate_external_tests_from_jenkins.htm",a:"This task describes how to integrate test results from Jenkins to ALM.  To learn more about integrating external test results with ALM, see  Integrating External Tests Overview . Import result file from Jenkins to the Test Plan module. On the ALM sidebar, under Testing, select Test Plan. Right-click ...",t:"How to Integrate Tests from Jenkins"},"400":{i:0.000861864305762267,u:"../Content/UG/t_integrate_external_tests_to_alm.htm",a:"This task describes how to integrate test results from an external tool to ALM.  If you are working with Jenkins, see  How to Integrate Tests from Jenkins . To learn more about integrating external test results with ALM, see  Integrating External Tests Overview . Import result file from your ...",t:"How to Integrate Tests from an External Tool"},"401":{i:0.000898457933453287,u:"../Content/UG/t_integrate_external_tests_viewing_results.htm",a:"This task describes how to view external test results in ALM.  To learn more about integrating external test results with ALM, see  Integrating External Tests Overview . View results in the Test Lab module. On the ALM sidebar, under Testing, select Test Lab. Select a test set and click the Execution ...",t:"How to View External Results in ALM"},"402":{i:0.000166479769990371,u:"../Content/UG/ui_menu_external_tests.htm",a:"Integrating External Tests User Interface This section includes:  ",t:"Integrating External Tests User Interface"},"403":{i:0.000506992306760325,u:"../Content/UG/ui_generate_tests_from_external_test_results.htm",a:"Generate Tests from External Test Results Dialog Box This dialog box enables you to import your tests from an external file to your Test Plan Tree.",t:"Generate Tests from External Test Results Dialog Box"},"404":{i:0.000512800925575277,u:"../Content/UG/ui_import_external_test_results.htm",a:"Import External Test Results Dialog Box This dialog box enables you to import a results file generate from an external tool to ALM.",t:"Import External Test Results Dialog Box"},"405":{i:0.000293093040083208,u:"../Content/UG/part_build_verification.htm",a:"Build Verification Build Verification contains the following section:",t:"Build Verification"},"406":{i:0.000166479769990371,u:"../Content/UG/menu_build_verification_process.htm",a:"Build Verification Suites This\n       section  includes:\n    ",t:"Build Verification Suites"},"407":{i:0.00083675133762278,u:"../Content/UG/c_build_verification_overview.htm",a:"The Build Verification module enables you to define a suite of automated functional test sets bundled together with a single performance test (called a build verification suite). When run together, the build verification suite checks the overall status of your build.  When defining a build ...",t:"Build Verification Overview"},"408":{i:0.00102022880977527,u:"../Content/UG/t_create_build_verification_suite.htm",a:"This task describes how to create a build verification suite, which enables you to test the status of a particular build of your application under test. To learn more about build verification, see  Build Verification Overview . This task includes the following steps: Prerequisites In the Test Lab ...",t:"How to Work with Build Verification Suites in ALM"},"409":{i:0.000166479769990371,u:"../Content/UG/ui_build_verification_toc.htm",a:"Build Verification User Interface This section includes:",t:"Build Verification User Interface"},"410":{i:0.000780392613469265,u:"../Content/UG/ui_build_verification_module.htm",a:"Build Verification Module Window This window enables you to create and manage build verification suites.",t:"Build Verification Module Window"},"411":{i:0.00022678584688468,u:"../Content/UG/ui_build_verification_menus.htm",a:"Build Verification Module Menus and Buttons This section describes the menus and buttons available in the Build Verification module.",t:"Build Verification Module Menus and Buttons"},"412":{i:0.000239650397416236,u:"../Content/UG/ui_build_verification_icons.htm",a:"Build Verification Module Icons This section describes the icons displayed in the Test Lab module.",t:"Build Verification Module Icons"},"413":{i:0.00072221463373706,u:"../Content/UG/ui_build_verification_fields.htm",a:"Build Verification Module Fields This section describes the Build Verification module fields. ",t:"Build Verification Module Fields"},"414":{i:0.000353024866686705,u:"../Content/UG/ui_build_verification_func_test_tab.htm",a:"Functional Test Sets Tab This tab enables you to add functional test sets to a build verification suite.",t:"Functional Test Sets Tab"},"415":{i:0.000353024866686705,u:"../Content/UG/ui_build_verification_perf_test_tab.htm",a:"Performance Test Tab This dialog box enables you to add a performance test to a build verification suite. User interface elements are described below (unlabeled elements are shown in angle brackets):",t:"Performance Test Tab"},"416":{i:0.000246063176604322,u:"../Content/UG/ui_build_verification_suite_details_db.htm",a:"Build Verification Suite Details Dialog Box This dialog box enables you to view and update details for a build verification suite.",t:"Build Verification Suite Details Dialog Box"},});