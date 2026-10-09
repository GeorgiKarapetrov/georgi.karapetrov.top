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
      'Developed, operated and secured the secrets management platform underpinning SAP HANA Cloud.',
      'Led an end-to-end infrastructure migration as the pilot team, resolving cross-stack behavioural mismatches with the network infrastructure team and using the new platform to fix longstanding configuration-management limitations.',
      'Designed and delivered automated credential rotation that scales to the whole estate without additional operational effort.',
      'Took full ownership of multiple components, refactoring them for reliability, error handling, and extensibility across additional cloud providers.',
      'Maintained security posture across all owned components, remediating vulnerabilities and driving upgrades.',
      'Served as the team\'s primary technical interviewer and assessed candidates across IC levels.',
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
      'Saw VMware\'s internal DBaaS through to General Availability and the release of Data Service Manager 2.0.',
      'Drove a major part of generalising the DB provisioner and integrating the second database engine.',
      'Worked closely with the adjacent Kubernetes operator team through a change of operator technology.',
      'Built the monitoring, alerting, and dashboards for the platform\'s region-scheduling service.',
      'Built a garbage collector for a production resource leak, root-caused across several components.',
      'Migrated clients of a legacy Database service to the new DBaaS.',
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
      'Owned CI/CD and cloud infrastructure (AWS and Azure, in Terraform) across a portfolio of client engagements, contributing to application code as well.',
      'Delivered the DevOps for a modern Kubernetes platform - AKS, GitOps, workload-identity secret injection, and CI/CD across a suite of services with shared Helm charts and security hardening.',
      'Built and ran the company\'s own internal engineering platform: self-hosted source control, code quality, secrets, VPN, DNS, and a standardised developer platform.',
      'Migrated client environments to managed Terraform state.',
    ],
  },
  {
    name: 'Micro Focus',
    position: 'Technology Consultant II (uCMDB, HPSM & SMAX)',
    url: 'https://www.microfocus.com/en-us/home',
    startDate: '2019-10-01',
    endDate: '2021-10-01',
    highlights: [
      'Designed a middleware to exchange tickets between the separate ticketing systems of multiple parties - defining the ticket schema and lifecycle.',
      'Negotiated that design to agreement with the stakeholders then implemented it on the IT Service Management side.',
      'Customised uCMDB data-feed connectors for a client\'s source systems, and built uCMDB models and reports.',
      'Delivered ongoing ITSM configuration: pages and page templates, workflows, lifecycles, runtime scripts, and reports.',
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
      'Authored an efficiency report for the Eta telecom, analysing the efficiency of company processes, suggesting structural improvements.',
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
