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
    startDate: '2024-06',
    summary: 'Secret management and IAM solutions for SAP cloud',
    highlights: [
      'Design and Develop features',
      'Enhance old components',
      'Clear technical debt',
      'Code review',
      'Build and maintain virtual infrastructure',
      'Set up CI/CD automation workflows',
    ],
  },
  {
    name: 'VMWare',
    position: 'Software Engineer',
    url: 'https://www.vmware.com/',
    startDate: '2023-01',
    endDate: '2024-02',
    summary: 'Database Management Service and Data Service Manager',
    highlights: [
      'Drive the VMWare DBaaS to General Availability',
      'Drive the Data Service Manager 2.0 release to completion',
      'Design and develop features',
      'Fix bugs',
      'Develop platform and SRE tools',
      'Build and maintain virtual infrastructure',
      'Set up CI/CD automation workflows',
      'Solve critical problems in development or production environments',
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
    summary: `Sciant is a Software Development service company serving the Logistics, Financial and Hospitality sectors.
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
      'Administer Micro Focus IT Operation Management tools such as IT Service Manager (MFSM) and Universal Configuration Management Database (uCMDB) in accordance with highest ITIL standards.',
      'Specialized in uCMDB integrations.',
      'Promoted to Technology Consultant II in March, 2021, for quickly acquiring the required skill to deliver value to the customer.',
      'Designed a ticket exchange mechanism including business analysis and developed the design in MFSM.',
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
