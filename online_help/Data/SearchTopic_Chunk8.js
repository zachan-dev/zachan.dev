define({"806":{i:0.000371717406250717,u:"../Content/PC/ui_runs_trend_view_tab.htm",a:"Performance Test Designer \u003e Test Runs Trend View / Test Runs Trend Tab   Displays a trend graph which monitors the test runs of a selected test  over time. User interface elements are described below:",t:"Performance Test Designer \u003e Test Runs Trend View / Test Runs Trend Tab "},"807":{i:0.000732525360151074,u:"../Content/PC/ui_performance_test_designer_window.htm",a:"This window enables you to define a performance test. Defining a performance test includes selecting scripts for the test, scheduling how many Vusers to run in each script and for how long to run them, choosing topologies and monitor profiles for the test, and enabling collection of diagnostics data ...",t:"Performance Test Designer Window"},"808":{i:0.00046756732000523,u:"../Content/PC/ui_pal_create_new_performance_test_dialog_box.htm",a:"Create New Performance Test Dialog Box This dialog box enables you to create a performance test. ",t:"Create New Performance Test Dialog Box"},"809":{i:0.000419390486739522,u:"../Content/PC/ui_test_validation_results_db.htm",a:"Test Validation Results Dialog Box This dialog box displays the validation results of your performance test. ",t:"Test Validation Results Dialog Box"},"810":{i:0.000166479769990371,u:"../Content/PC/menu_defining_performance_test_workloads_main.htm",a:"Defining Performance Test Workloads This\n       section  includes:\n      ",t:"Defining Performance Test Workloads"},"811":{i:0.00104654585523014,u:"../Content/PC/c_performance_test_workload_overview.htm",a:"When you create a performance test you need to define a workload for the test. Defining a workload involves selecting a type of workload for the test, creating Vuser groups that emulate groups of users running on the application, and configuring how they should behave during the test. You select a ...",t:"Performance Test Workload Overview"},"812":{i:0.000495263199905891,u:"../Content/PC/c_noise_tests.htm",a:"You can approach performance testing in the following ways:  Create a performance test that runs complex Vuser scripts. These scripts perform a business process and contain transactions, complex flows, checkpoints, and so forth. Create a load on the server by having a large number of users (real or ...",t:"Noise Generator Scripts"},"813":{i:0.000644556703728357,u:"../Content/PC/c_rendezvous_points.htm",a:"During a test run, you can instruct multiple Vusers to perform tasks simultaneously by using rendezvous points. A rendezvous point creates intense user load on the server, enabling you to measure server performance under load.  Suppose you want to measure the performance of an application when 10 ...",t:"Rendezvous Points"},"814":{i:0.00249698927332783,u:"../Content/PC/t_defining_performance_test_workload.htm",a:"This task describes how to define a performance test workload. This task is part of a higher-level task. For details, see  How to Design a Performance Test . To learn more about performance testing, see  Performance Test Workload Overview . Prerequisite Create a performance test. For details, see  ...",t:"How to Define a Performance Test Workload"},"815":{i:0.000467103827100494,u:"../Content/PC/t_distribute_vusers_among_vuser_groups.htm",a:"This task describes how to distribute Vusers in a performance test among the Vuser groups. You distribute Vusers according to the Vuser distribution method you selected for the workload. You can distribute the Vusers by number, by percentage (manually), or by percentage using the relative ...",t:"How to Distribute Vusers Among Vuser Groups"},"816":{i:0.000166479769990371,u:"../Content/PC/menu_defining_performance_test_workloads_ui.htm",a:"Defining Performance Test Workloads User Interface  This section includes:  ",t:"Defining Performance Test Workloads User Interface "},"817":{i:0.000720789947848486,u:"../Content/PC/ui_performance_test_designer_workload_tab.htm",a:"Performance Test Designer \u003e Groups \u0026 Workload This view enables you to define a workload for the test. You select a Controller for the test, scripts to run in the test, and load generators on which to run the Vusers. You also define a run schedule for the test.",t:"Performance Test Designer \u003e Groups \u0026 Workload"},"818":{i:0.000444580963344759,u:"../Content/PC/ui_workload_type_db.htm",a:"Workload Types Dialog Box This dialog box enables you to select a type of workload for the performance test. The type of workload you choose determines the type of schedule by which the test will run, and how the Vusers will be distributed at runtime. ",t:"Workload Types Dialog Box"},"819":{i:0.000331386072946275,u:"../Content/PC/ui_select_controller_db_from_the_workload_tab.htm",a:"Select Controller Dialog Box This dialog box enables you to select a Controller for the performance test.  User interface elements are described below:",t:"Select Controller Dialog Box"},"820":{i:0.000198726927310927,u:"../Content/PC/ui_relative_distribution_db.htm",a:"Relative Distribution Dialog Box This dialog box enables you to provide a ratio by which Performance Center calculates the percentage of Vusers to distribute to each Vuser group. User interface elements are described below (unlabeled elements are shown in angle brackets):",t:"Relative Distribution Dialog Box"},"821":{i:0.000521470432107091,u:"../Content/PC/ui_rendezvous_db.htm",a:"This dialog box enables you to enable/disable rendezvous points defined in the Vuser scripts and to set rendezvous policies that determine how the Controller handles Vusers at a rendezvous point. User interface elements are described below (unlabeled elements are shown in angle brackets):",t:"Rendezvous Dialog Box"},"822":{i:0.00162301577262519,u:"../Content/PC/ui_test_options_db_from_workload_tab.htm",a:"Test Options Dialog Box This dialog box enables you to set general Scheduler and testing options. User interface elements are described below:",t:"Test Options Dialog Box"},"823":{i:0.000166479769990371,u:"../Content/PC/menu_sev_chapter.htm",a:"Integrating Virtualized Services This\n       section  includes:\n      ",t:"Integrating Virtualized Services"},"824":{i:0.00138005599836249,u:"../Content/PC/c_sev_Overview.htm",a:"Integrating Virtualized Services Overview As part of your performance test, you may want to test applications that depend on other services which are a part of your business scenario. Instead of loading actual services, you can use simulated services in your test run. The virtualized services are a ...",t:"Using Virtualized Services"},"825":{i:0.000594467830523328,u:"../Content/PC/c_sev_MonitoringOverview.htm",a:"The HP Service Virtualization monitors enable you to analyze the status and performance of the simulated services during the performance test run. For example, you may integrate a payment process service containing the following operations into your script:  The online monitors measure the overall ...",t:"Service Virtualization Monitoring"},"826":{i:0.000557521083366502,u:"../Content/PC/c_sev_LockingOverview.htm",a:"Service Virtualization Locking When your performance test contains virtualized services, those services are automatically locked and cannot be used by other users while the test is running. Virtualized services may be locked by you or other users for editing, simulation, deployment.  If your test ...",t:"Using Virtualized Services"},"827":{i:0.00162783558996747,u:"../Content/PC/t_sev_AddServicesToLoadTest.htm",a:"The task describes how to configure virtual services to run when designing a performance test. Prerequisites  Create your virtualized services in HP Service Virtualization Designer. For details on creating projects that contain virtualized services, see the HP Service Virtualization User Guide. In ...",t:"How to Add Virtualized Services to Performance Tests"},"828":{i:0.000166479769990371,u:"../Content/PC/ui_menu_sev.htm",a:"Integrating Virtualized Services User Interface This section includes:  ",t:"Integrating Virtualized Services User Interface"},"829":{i:0.00109851316176968,u:"../Content/PC/ui_VirtualizedServiceSettings.htm",a:"This dialog box provides integration with HP Service Virtualization designer. This integration allows you to test services with virtualized services instead of real-time services. User interface elements are described below (unlabeled elements are shown in angle brackets):  ",t:"HP Service Virtualization Dialog Box"},"830":{i:0.000572896764511344,u:"../Content/PC/ui_AddProject.htm",a:"Add Services Dialog Box This dialog box enables you to add Service Virtualization services from a project file or from a running SV server to your performance test. User interface elements are described below:",t:"Add Services Dialog Box"},"831":{i:0.000572896764511344,u:"../Content/PC/ui_DeployCheckResults.htm",a:"Deployment Check Results Dialog Box This dialog box enables you to check if the projects and their virtualized services are deployed on the server at the specified URL address. User interface elements are described below:",t:"Deployment Check Results Dialog Box"},"832":{i:0.000572896764511344,u:"../Content/PC/ui_ConfigureVirtualizedServers.htm",a:"Server Credentials Dialog Box This dialog box enables you to configure login information for the SV server. User interface elements are described below:  ",t:"Server Credentials Dialog Box"},"833":{i:0.0002825807705951,u:"../Content/PC/menu_load_generator_distribution_main.htm",a:"Load Generator Distribution  This\n       section  includes:\n      ",t:"Load Generator Distribution "},"834":{i:0.00115118303568466,u:"../Content/PC/c_load_generator_distribution_overview.htm",a:"Load generators are Performance Center hosts on which Vusers run during a test run.  To estimate the number of load generators that are needed to run a Vuser script, you can use the Load Generator Calculator tool (Technical Preview). On the host machine, select Start \u003e Programs \u003e HP Software \u003e ...",t:"Load Generator Distribution Overview"},"835":{i:0.000686955331741252,u:"../Content/PC/t_distributing_load_generators_among_vuser_groups.htm",a:"This task describes how to distribute load generators automatically and manually among Vuser groups participating in the performance test. This task is part of a higher-level task. For details, see  How to Define a Performance Test Workload . To learn more about load generator distribution, see  ...",t:"How to Distribute Load Generators Among Vuser Groups"},"836":{i:0.000166479769990371,u:"../Content/PC/menu_load_generators_ui.htm",a:"Load Generators User Interface  This section includes:  ",t:"Load Generators User Interface "},"837":{i:0.000296049683625297,u:"../Content/PC/ui_assign_load_generators_to_multiple_groups_db.htm",a:"This dialog box enables you to assign one or more load generators—automatch or specific—to multiple Vuser groups at once. You can also use this dialog box to remove one or more load generators from multiple Vuser groups at once. User interface elements are described below (unlabeled elements are ...",t:"Assign Load Generators to Multiple Groups Dialog Box"},"838":{i:0.000556543412636197,u:"../Content/PC/ui_select_load_generator_db.htm",a:"Select Load Generators Dialog Box  This dialog box enables you to assign one or more load generators—automatch or specific—to a Vuser group.",t:"Select Load Generators Dialog Box "},"839":{i:0.000751520624234782,u:"../Content/PC/ui_automatch_load_generators_properties_db.htm",a:"This dialog box enables you to define properties for an automatch load generator. Properties include a location, and other host attributes. At runtime, a specific load generator in the host pool of the project matching these properties is assigned to the Vuser group.",t:"Automatch Load Generators Properties Dialog Box"},"840":{i:0.000166479769990371,u:"../Content/PC/menu_scheduling_scheduler_main.htm",a:"Scheduling Performance Tests  This\n       section  includes:\n      ",t:"Scheduling Performance Tests "},"841":{i:0.000455215027129052,u:"../Content/PC/c_scheduling_performance_tests_overview.htm",a:"You use the Scheduler to create a schedule that distributes load in a performance test in a controlled manner.  Using the Scheduler, you can: Set the time at which the test should begin running, and specify how long the Scheduler should wait after the Run Test command is issued, and before running ...",t:"Scheduling Performance Tests Overview"},"842":{i:0.00107007219274405,u:"../Content/PC/t_defining_schedule_for_the_performance_test.htm",a:"This task describes how to define a schedule for a performance test.  This task is part of a higher-level task. For details, see  How to Define a Performance Test Workload . Prerequisites Open Performance Test Designer  \u003e Groups \u0026 Workload, under the Groups section, make sure the test contains ...",t:"How to Define a Schedule for the Performance Test"},"843":{i:0.000443840719848474,u:"../Content/PC/t_adding_actions_to_test_schedule.htm",a:"This task describes how to add actions to a real-world test schedule.  You can add actions to a real-world schedule only. Add an action to the schedule from the Global Scheduler grid A new action is always added after the action selected in the Global scheduler grid. In the Global scheduler grid, ...",t:"How to Add Actions to a Test Schedule"},"844":{i:0.000443840719848474,u:"../Content/PC/t_editing_scheduler_actions.htm",a:"This task describes how to edit scheduler actions. You can edit all types of actions. For details about each action type, see  Global Scheduler Actions . To edit a scheduler action: In the Actions grid, select the action that you want to edit. The Properties column becomes editable.  Modify the ...",t:"How to Edit Scheduler Actions"},"845":{i:0.000166479769990371,u:"../Content/PC/menu_scheduling_performance_tests_ui.htm",a:"Scheduling Performance Tests User Interface  This section includes:  ",t:"Scheduling Performance Tests User Interface "},"846":{i:0.000198726927310927,u:"../Content/PC/ui_scheduler_pane.htm",a:"Global Scheduler Pane This pane enables you to define a schedule for running your performance test.",t:"Global Scheduler Pane"},"847":{i:0.00191344602891441,u:"../Content/PC/ui_scheduler_actions.htm",a:"A performance test schedule contains a sequence of actions that instruct the test when to start running a Vuser group, how to initialize Vusers, when to start and stop running Vusers, and how long to run an action. The following sections describe the available scheduler actions. Start Group The ...",t:"Global Scheduler Actions"},"848":{i:0.000281167958075706,u:"../Content/PC/menu_service_level_agreements_main.htm",a:"Service Level Agreements This\n       section  includes:\n      ",t:"Service Level Agreements"},"849":{i:0.00269294532176966,u:"../Content/PC/c_service_level_agreements_overview.htm",a:"Service level agreements (SLAs) are specific goals that you define for your performance test. After a test run, HPE LoadRunner Analysis compares these goals against performance related data that was gathered and stored during the course of the run, and determines whether the SLA passed or failed. ...",t:"Service Level Agreements Overview"},"850":{i:0.00154876969583952,u:"../Content/PC/c_sla_tracking_period.htm",a:"When you define service level agreements (SLAs) for measurements that are evaluated over a timeline, Analysis determines SLA statuses at specified time intervals within that timeline. The frequency of the time intervals is called the tracking period. An internally-calculated tracking period is ...",t:"Tracking Period"},"851":{i:0.00114292796264589,u:"../Content/PC/t_defining_service_level_agreement.htm",a:"This task describes how to define service level agreements (SLAs). You can define service level agreements (SLAs) which measure performance test goals over time intervals during a test run, or over a whole performance test run. To learn more, see  Service Level Agreements Overview  and the HPE ...",t:"How to Define Service Level Agreements"},"852":{i:0.000365621016858763,u:"../Content/PC/uc_defining_service_level_agreements.htm",a:"This use-case scenario describes how to define a service level agreement (SLA) for Average Transaction Response Time. For a task related to this scenario, see  How to Define Service Level Agreements . Background The administrator of HP Web Tours would like to know when the average transaction ...",t:"How to Define Service Level Agreements - Use-Case Scenario"},"853":{i:0.000166479769990371,u:"../Content/PC/menu_service_level_agreement_ui.htm",a:" Service Level Agreement User Interface  This section includes:  ",t:" Service Level Agreement User Interface "},"854":{i:0.000226832841764535,u:"../Content/PC/ui_service_level_agreement_pane.htm",a:"Service Level Agreement Pane This pane lists all the service level agreements (SLAs) defined for the performance test.  User interface elements are described below:",t:"Service Level Agreement Pane"},"855":{i:0.000676528502685272,u:"../Content/PC/ui_service_level_agreement_wizard.htm",a:"This wizard enables you to define service level agreements (SLAs). SLAs enable you to define performance targets or goals for your performance test. During a test run, ALM measures performance and collects data. This data is compared against thresholds defined in the SLAs.",t:"Service Level Agreement Wizard"},"856":{i:0.000637238658660248,u:"../Content/PC/ui_service_level_agreement_wizard_measurement_page.htm",a:"Measurement Page This wizard page enables you to select a measurement for the SLA. Some measurements are measured at time intervals over a timeline, and others are measured over the whole test run.",t:"Measurement Page"},"857":{i:0.000637238658660248,u:"../Content/PC/ui_service_level_agreement_wizard_transactions_page.htm",a:"Transactions Page This wizard page enables you to include transactions critical to your test in the evaluation.",t:"Transactions Page"},"858":{i:0.000558162402951143,u:"../Content/PC/ui_service_level_agreement_wizard_load_criteria.htm",a:"This wizard page enables you to select a load criterion for your goal and define appropriate load value ranges. For example, you can define the SLA to show the behavior of errors per second when there are less than 5 running Vusers, when there are between 5 and 10 running Vusers, and when there are ...",t:"Load Criteria Page"},"859":{i:0.000637238658660248,u:"../Content/PC/ui_service_level_agreement_wizard_thresholds_page.htm",a:"Thresholds Page  This wizard page enables you to define thresholds for the selected measurement. ",t:"Thresholds Page "},"860":{i:0.000637238658660248,u:"../Content/PC/ui_service_level_agreement_wizard_summary_page.htm",a:"Summary Page This wizard page displays a summary of the SLA you defined and enables you to define more SLAs.",t:"Summary Page"},"861":{i:0.00106246047359165,u:"../Content/PC/ui_tracking_period_db.htm",a:"Tracking Period Dialog Box This dialog box enables you to set a tracking period for service level agreements.",t:"Tracking Period Dialog Box"},"862":{i:0.000214377717082469,u:"../Content/PC/menu_enabling_configuring_ERP_CRM_J2EE_NET_diagnostics_main.htm",a:"Enabling and Configuring ERP/CRM and J2EE/.NET Diagnostics  This\n       section  includes:\n      ",t:"Enabling and Configuring ERP/CRM and J2EE/.NET Diagnostics "},"863":{i:0.00165196471554798,u:"../Content/PC/t_enabling_configuring_ERP_CRM_diagnostics.htm",a:"This task describes how to configure the ERP/CRM Diagnostics modules to communicate with the Mediator, and how to define the servers that you want to monitor in order to generate diagnostics data. To learn more about ERP/CRM diagnostics, refer to the  HPE ALM Lab Management Guide :  ERP/CRM ...",t:"How to Enable and Configure ERP/CRM Diagnostics"},"864":{i:0.000991768632140494,u:"../Content/PC/t_enabling_configuring_J2EE_NET_diagnostics.htm",a:"This step describes how to capture J2EE/.NET diagnostics metrics in a performance test, and how to select the probes that are included in the test. To learn more about J2EE/.NET diagnostics, refer to the  HPE ALM Lab Management Guide :  J2EE/.NET Diagnostics Overview . This task is part of a ...",t:"How to Enable and Configure J2EE/.NET Diagnostics"},"865":{i:0.000166479769990371,u:"../Content/PC/t_viewing_diagnostics_results.htm",a:" You view results for ERP/CRM as well as J2EE/.NET diagnostics in HPE LoadRunner Analysis. Open Analysis Navigate to \u003cHP Performance Center Host directory\u003e Applications \u003e Analysis. Open the desired results file from the following location:  \u003cLTS installation\u003e\\orchidtmp\\Results\\\u003cDomain Name+Project ...",t:"How to View Diagnostics Results "},"866":{i:0.000166479769990371,u:"../Content/PC/menu_diagnostics_ui.htm",a:" Diagnostics User Interface  This section includes:  ",t:" Diagnostics User Interface "},"867":{i:0.000963449117560565,u:"../Content/PC/ui_performance_test_designer_diagnostics_tab.htm",a:"Performance Test Designer \u003e Diagnostics This view enables you to enable and define the ERP/CRM and J2EE/.NET diagnostics modules for a performance test.",t:"Performance Test Designer \u003e Diagnostics"},"868":{i:0.000283472627262322,u:"../Content/PC/ui_diagnostics_j2ee_net_config_db.htm",a:"J2EE/.NET Configuration Dialog Box  This dialog box enables you to set up the J2EE/.NET diagnostics module.",t:"J2EE/.NET Configuration Dialog Box "},"869":{i:0.000432318963424708,u:"../Content/PC/ui_diagnostics_oracle_config_db.htm",a:"Oracle 11i Configuration Dialog Box This dialog box enables you to set up the Oracle 11i Diagnostics module to communicate with the Mediator.",t:"Oracle 11i Configuration Dialog Box"},"870":{i:0.000350219245909012,u:"../Content/PC/ui_diagnostics_oracle_server_config_db.htm",a:"Oracle 11i Server Configuration Dialog Box This dialog box enables you to add Oracle 11i servers and to add server information.",t:"Oracle 11i Server Configuration Dialog Box"},"871":{i:0.000283472627262322,u:"../Content/PC/ui_diagnostics_sap_config_db.htm",a:"SAP Configuration Dialog Box This dialog box enables you to add SAP servers and to add server information.",t:"SAP Configuration Dialog Box"},"872":{i:0.000402724621181143,u:"../Content/PC/ui_diagnostics_siebel_config_db.htm",a:"Siebel Configuration Dialog Box This dialog box enables you to set up the Siebel Diagnostics module to communicate with the Mediator.",t:"Siebel Configuration Dialog Box"},"873":{i:0.000491507647911837,u:"../Content/PC/ui_diagnostics_siebel_db_config_db.htm",a:"Siebel DB Configuration Dialog Box This dialog box enables you to add Siebel DB servers and to add server information.",t:"Siebel DB Configuration Dialog Box"},"874":{i:0.000489482886349101,u:"../Content/PC/ui_diagnostics_siebel_db_server_config_db.htm",a:"Siebel DB Server Configuration Dialog Box This dialog box enables you to add Siebel DB servers and add server information.",t:"Siebel DB Server Configuration Dialog Box"},"875":{i:0.000280587425688968,u:"../Content/PC/ui_diagnostics_siebel_server_config_db.htm",a:"Siebel Server Configuration Dialog Box This dialog box enables you to add Siebel servers and enter server information.",t:"Siebel Server Configuration Dialog Box"},"876":{i:0.000373090074530256,u:"../Content/PC/menu_configuring_terminal_sessions_main.htm",a:"Configuring Terminal Sessions This section includes:  ",t:"Configuring Terminal Sessions"},"877":{i:0.000378835712457386,u:"../Content/PC/c_terminal_sessions_overview.htm",a:"Using Performance Center\u0027s terminal sessions, you can run multiple load generators simultaneously in your performance test on a terminal server. Performance Center allows you to create a new terminal session, or connect to an existing session. Using terminal sessions enables you to overcome the ...",t:"Terminal Sessions Overview"},"878":{i:0.00104852774948545,u:"../Content/PC/t_creating_terminal_session.htm",a:"This task describes how to create a new terminal session. To learn about terminal sessions, see  Terminal Sessions Overview .   You can enable terminal sessions when configuring performance tests with manual load generator distribution only.  The Terminal Services Manager does not support terminal ...",t:"How to Create a Terminal Session"},"879":{i:0.000200578716947893,u:"../Content/PC/t_connecting_to_terminal_session.htm",a:"This task describes how to connect to an existing terminal session. To learn about terminal sessions, see  Terminal Sessions Overview . You can enable terminal sessions when configuring performance tests with manual load generator distribution only.  The Terminal Services Manager does not support ...",t:"How to Connect to a Terminal Session"},"880":{i:0.000378835712457386,u:"../Content/PC/t_configuring_terminal_session_over_firewall.htm",a:"This task describes how to configure a terminal session on a load generator that is located over a firewall. Open the load generator machine console. If the Performance Center Agent is not running as a process, run \u003cload generator host installation\u003e\\launch_service\\bin\\magentproc.exe.  Configure the ...",t:"How to Configure a Terminal Session over a Firewall"},"881":{i:0.000166479769990371,u:"../Content/PC/menu_terminal_sessions_ui.htm",a:" Terminal Sessions User Interface  This section includes:  ",t:" Terminal Sessions User Interface "},"882":{i:0.000618186431985401,u:"../Content/PC/ui_terminal_services_db.htm",a:"Terminal Services Dialog Box This dialog box enables you to configure terminal sessions.",t:"Terminal Services Dialog Box"},"883":{i:0.000166479769990371,u:"../Content/PC/ui_pc_agent__running_settings_db.htm",a:"Performance Center Agent Runtime Settings Dialog Box  This dialog box enables you to run the Performance Center Agent as a service, or as a process. User interface elements are described below: ",t:"Performance Center Agent Runtime Settings Dialog Box "},"884":{i:0.000511388392043446,u:"../Content/PC/menu_multiple_ip_addresses_main.htm",a:"Multiple IP Addresses This\n       section  includes:\n      ",t:"Multiple IP Addresses"},"885":{i:0.000166479769990371,u:"../Content/PC/c_multiple_ip_addresses_overview.htm",a:" Application servers and network devices use IP addresses to identify clients. The application server often caches information about clients coming from the same machine. Network routers try to cache source and destination information to optimize throughput. If many users have the same IP address, ...",t:"Multiple IP Addresses Overview "},"886":{i:0.00107589540827497,u:"../Content/PC/t_enabling_ip_spoofing_in_alm.htm",a:"The following steps describe how to add IP addresses to a load generator to enable IP Spoofing. Create multiple IP addresses on the load generator. Windows: Run the IP Wizard to create multiple IP addresses. For details on running the IP Wizard, see  IP Wizard . The new IP addresses are added to the ...",t:"How to Enable IP Spoofing in ALM"},"887":{i:0.00039511985736257,u:"../Content/PC/t_config_multi_ip_addresses_unix.htm",a:"The following section describe how to manually configure multiple IP addresses on the Linux load generator. To define multiple IP addresses for a single Ethernet card, you need IP Aliasing compiled into the kernel. To do this, use the ifconfig command: /sbin/ifconfig eth0:0 x.x.x.x netmask ...",t:"How to Configure Multiple IP Addresses on Linux"},"888":{i:0.00039511985736257,u:"../Content/PC/ui_ip_wizard.htm",a:"IP Wizard This wizard enables you to create and save new IP addresses on Windows machines.",t:"IP Wizard"},"889":{i:0.000182323702145454,u:"../Content/PC/menu_customize_analysis_templates_main.htm",a:"Customizing Analysis Templates This\n       section  includes:\n      ",t:"Customizing Analysis Templates"},"890":{i:0.000344393808208991,u:"../Content/PC/c_analysis_templates_overview.htm",a:"Analysis Templates Overview You can customize your analysis reports using templates. In HPE LoadRunner Analysis, you create the customized templates. You then import the templates to ALM and access the specific template you want for each test in Performance Center.",t:"Analysis Templates Overview"},"891":{i:0.000681974335193262,u:"../Content/PC/t_customizing_analysis_templates.htm",a:"This task describes how to customize analysis templates.  You can customize analysis templates to display your performance test run reports in a format that is suitable to your needs. To learn more, see  Analysis Templates Overview  and the HPE LoadRunner Analysis User Guide. This task is part of a ...",t:"How to Customize Analysis Templates"},"892":{i:0.000206698279144686,u:"../Content/PC/menu_analysis_template_ui.htm",a:" Analysis Template User Interface  This section includes:  ",t:" Analysis Template User Interface "},"893":{i:0.000166479769990371,u:"../Content/PC/ui_create_analysis_template.htm",a:"Create New Analysis Template Dialog Box This dialog box enables you to create a new analysis template.. ",t:"Create New Analysis Template Dialog Box"},"894":{i:0.000344393808208991,u:"../Content/PC/ui_upload_analysis_template.htm",a:"Upload Analysis Template Dialog Box This dialog box enables you to upload analysis template files to ALM. ",t:"Upload Analysis Template Dialog Box"},"895":{i:0.000415077971416496,u:"../Content/PC/ui_analysis_template_options.htm",a:"Analysis Template Options Dialog Box This dialog box enables you to apply an analysis template to a selected performance test run report. ",t:"Analysis Template Options Dialog Box"},"896":{i:0.000352064844907701,u:"../Content/PC/menu_wan_emulation_main.htm",a:"Network Virtualization This\n       section  includes:\n      ",t:"Network Virtualization"},});