/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'SAP Labs',
    position: 'Software Engineer',
    url: 'https://www.sap.com/',
    startDate: '2024-06',
    summary: 'SAP is using my skills to develop SAP cloud.',
    highlights: [
      'Focusing on secret management and IAM solutions',
      'Enhance old components',
      'Refactor technical debt',
      'Code review',
      'Develop platform and SRE tools',
      'Set up CI/CD automation workflows',
    ],
  },
  {
    name: 'VMWare',
    position: 'Software Engineer',
    url: 'https://www.vmware.com/',
    startDate: '2023-01',
    endDate: '2024-02',
    summary: 'VMWare employed me to help create its Database Managment Service.',
    highlights: [
      'Drove the VMWare DBaaS to General Availability',
      'Drove the Data Service Manage 2.0 release to completion',
      'Designed and developed features',
      'Fixed bugs',
      'Developed platform and SRE tools',
      'Built and maintained virtual infrastructure',
      'Set up CI/CD automation workflows',
      'Solved critical problems in development or production environments',
      'SRE Duties',
      'Customer Support',
    ],
  },
  {
    name: 'Sciant',
    position: 'DevOps Engineer',
    url: 'https://www.sciant.com/',
    startDate: '2021-10',
    endDate: '2022-12',
    summary: `Sciant is Software Development service company serving the Logistics, Financial and Hospitality sectors.
    I was responsible for internal and external support, cloud operations, Kubernetes setup and CICD.`,
    highlights: [
      'Implement integration solution components according to the project requirements',
      'Install, configure and automate system and application software',
      'Develop and use process automation scripts and tools',
      'Engage in software performance analysis and system tuning',
      'Collaborate with development team members to ensure availability, security, and scalability of the software product',
      'Create and configure cloud-based environments and services',
      'Set up CI/CD automation workflows',
      'Solve critical problems in development or production environments',
      'System, network and application administration support.',
    ],
  },
  {
    name: 'Micro Focus',
    position: 'Technology Consultant II (uCDMB, HPSM & SMAX)',
    url: 'https://www.microfocus.com/en-us/home',
    startDate: '2019-10',
    endDate: '2021-10',
    highlights: [
      'Administer Micro Focus IT Operation Managment tools such as IT Service Manager (MFSM) and Universal Configuration Management Databese (uCMDB) in accordance with highest ITIL standards.',
      'Specialized in uCMDB integrations.',
      'Promoted to Technology Consultant II in March, 2021, for quickly acquiring the required skill to deliver value to the customer.',
      'Designed a ticket exchange mechanism including business analysis and developed the design in MFSM.',
      /* 'Understand proposed solution and identify tasks for configurations',
      'Gather requirements for implementations',
      'Full deployment of SM, SMAX and its components along with its integration',
      'SMAX application administration, tailoring, and L2/L3 level support',
      'Importing data, configuring workflows, notifications, Approvals, custom actions, etc',
      'Write and trouble shoot Java Script/Python scripts',
      'Trouble shooting SMAX integrations, Connect-It (CIT), On Premises Bridge Agent',
      'Document Implementation and Configuration Guides, Health Checklists, Change proposals, etc',
      'Integrate with Connect IT, UCMDB, OMI, AM, LDAP, Email',
      'Integration using Web services (SOAP and RESTAPI)',
      'Specialized skills on JavaScript\'s, Basic\'s and SQL Queries',
      'Handling upgrades',
      'Implementing SSL and SSO',
      'Configure using Process Designer, JavaScript, Document engine, SMIS, Web services, Triggers',
      'Wizards, Macros, Format, Format Control, Links, Display Option and Display Screens',
      'Consult, suggest and propose best practices in SM and SMAX and its integration',
      'Create and review HLD and LLD with required architecture diagrams',
      'Suggest, propose, and execute Performance upgrades and SIP for new and existing customers',
      'Suggest, propose and implement automated health checks, Monitoring and SOP',
      'Understanding of in house RAD applications',
      'Installing and configuring UCMDB/UD/UCMDB Browser/UCMDB REST API',
      'UCMDB Advanced configurations like SSL,SSO, LDAP and HA',
      'Discovery including hosts, host resources, Database, Middle ware and Application discovery',
      'Set up WMI, SSH, NTCMD, SNMP, VIM discovery',
      'Creation of Views, TQL queries and Reports',
      'Application Modeling and Automatic Service Modelling (ASM)',
      'Enrichment creation',
      'Impact Analysis creation exposure',
      'UCMDB Upgrade',
      'UCMDB integration with Service Manager/Service Now, NNMi, BSM/APM and AM',
      'Jython/Python  scripting',
      'Troubleshooting UCMDB Server, Probe issues and discovery issues', */
    ],
  },
  {
    name: 'Eta Zheleva Ltd',
    position: 'Network Administrator',
    url: 'https://www.eta.bg',
    startDate: '2019-05',
    endDate: '2019-08',
    highlights: [
      'Server and Cisco administration for the Eta telecom',
      'An efficiency report for the ETA telecom, analyzing the efficiency of the company work-flow and suggesting structural improvements.',
    ],
  },
  {
    name: 'British School of Sofia',
    position: 'Teacher',
    url: 'https://www.bssofia.bg',
    startDate: '2018-01',
    endDate: '2018-05',
    highlights: [
      'Taught mathematics to middle school and high school students.',
    ],
  },
];

export default work;
