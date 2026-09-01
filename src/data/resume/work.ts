/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'SAP Labs',
    position: 'Platform Engineer',
    url: 'https://www.sap.com/',
    startDate: '2024-06-01',
    summary: 'Secret management and IAM solutions for SAP Cloud.',
    highlights: [
      'Design and develop features.',
      'Enhance legacy components.',
      'Clear technical debt.',
      'Review code.',
      'Build and maintain virtual infrastructure.',
      'Set up CI/CD automation workflows.',
    ],
  },
  {
    name: 'VMware',
    position: 'Software Engineer',
    url: 'https://www.vmware.com/',
    startDate: '2023-01-01',
    endDate: '2024-02-01',
    summary: 'Database Management Service and Data Service Manager.',
    highlights: [
      'Drove the VMware DBaaS to General Availability.',
      'Drove the Data Service Manager 2.0 release to completion.',
      'Designed and developed features.',
      'Fixed bugs.',
      'Developed platform and SRE tools.',
      'Built and maintained virtual infrastructure.',
      'Set up CI/CD automation workflows.',
      'Solved critical problems in development and production environments.',
      'SRE duties.',
      'Customer support.',
    ],
  },
  {
    name: 'Sciant',
    position: 'DevOps Engineer',
    url: 'https://www.sciant.com/',
    startDate: '2021-10-01',
    endDate: '2022-12-01',
    summary: `Sciant is a software development service company serving the logistics, financial, and hospitality sectors.
    I was responsible for internal and external support, cloud operations, Kubernetes setup, and CI/CD.`,
    highlights: [
      'Implemented integration solution components according to project requirements.',
      'Installed, configured, and automated system and application software.',
      'Developed and used process automation scripts and tools.',
      'Engaged in software performance analysis and system tuning.',
      'Collaborated with development team members to ensure availability, security, and scalability of the software product.',
      'Created and configured cloud-based environments and services.',
      'Set up CI/CD automation workflows.',
      'Solved critical problems in development and production environments.',
      'Provided system, network, and application administration support.',
    ],
  },
  {
    name: 'Micro Focus',
    position: 'Technology Consultant II (uCMDB, HPSM & SMAX)',
    url: 'https://www.microfocus.com/en-us/home',
    startDate: '2019-10-01',
    endDate: '2021-10-01',
    highlights: [
      'Administered Micro Focus IT Operations Management tools such as IT Service Manager (MFSM) and Universal Configuration Management Database (uCMDB) in accordance with the highest ITIL standards.',
      'Specialized in uCMDB integrations.',
      'Promoted to Technology Consultant II in March 2021 for quickly acquiring the skills required to deliver value to the customer.',
      'Designed a ticket exchange mechanism, including business analysis, and developed the design in MFSM.',
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
    startDate: '2019-05-01',
    endDate: '2019-08-01',
    highlights: [
      'Server and Cisco administration for the Eta telecom.',
      'Authored an efficiency report for the Eta telecom, analyzing the efficiency of the company workflow and suggesting structural improvements.',
    ],
  },
  {
    name: 'British School of Sofia',
    position: 'Teacher',
    url: 'https://www.bssofia.bg',
    startDate: '2018-01-01',
    endDate: '2018-05-01',
    highlights: [
      'Taught mathematics to middle school and high school students.',
    ],
  },
];

export default work;
