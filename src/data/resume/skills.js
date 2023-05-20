// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 6,
    category: ['Languages'],
  },
  {
    title: 'ITIL',
    competency: 7,
    category: ['Other'],
  },
  {
    title: 'Bash',
    competency: 6,
    category: ['Languages'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'LaTeX',
    competency: 6,
    category: ['Languages'],
  },
  {
    title: 'Portainer',
    competency: 4,
    category: ['Containers/Virtualization'],
  },
  {
    title: 'ESXi',
    competency: 1,
    category: ['Containers/Virtualization'],
  },
  {
    title: 'Arch based distributions',
    competency: 6,
    category: ['Linux'],
  },
  {
    title: 'Debian based distributions',
    competency: 8,
    category: ['Linux'],
  },
  {
    title: 'RHEL based distributions',
    competency: 4,
    category: ['Linux'],
  },
  {
    title: 'Kubernetes',
    competency: 5,
    category: ['Containers/Virtualization'],
  },
  {
    title: 'Docker',
    competency: 6,
    category: ['Containers/Virtualization'],
  },
  {
    title: 'Jenkins',
    competency: 4,
    category: ['CI/CD'],
  },
  {
    title: 'Artefactory',
    competency: 4,
    category: ['CI/CD'],
  },
  {
    title: 'SonarQube',
    competency: 4,
    category: ['CI/CD'],
  },
  {
    title: 'Urban Code Deploy',
    competency: 2,
    category: ['CI/CD'],
  },
  {
    title: 'GitLab',
    competency: 7,
    category: ['CI/CD'],
  },
  {
    title: 'Azure DevOps',
    competency: 8,
    category: ['CI/CD'],
  },
  {
    title: 'GitHub Actions',
    competency: 0,
    category: ['CI/CD', 'Happy-to-Pick-Up'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Python/Jython',
    competency: 6,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'HCL',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'WSDL/XSD/XML',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Mathematica',
    competency: 6,
    category: ['Languages'],
  },
  {
    title: 'Cisco',
    competency: 3,
    category: ['Other'],
  },
  {
    title: 'NginX/Apache',
    competency: 6,
    category: ['Other'],
  },
  {
    title: 'Terraform',
    competency: 8,
    category: ['Cloud'],
  },
  {
    title: 'Azure',
    competency: 6,
    category: ['Cloud'],
  },
  {
    title: 'AWS',
    competency: 7,
    category: ['Cloud'],
  },
  {
    title: 'GCP',
    competency: 0,
    category: ['Cloud', 'Happy-to-Pick-Up'],
  },
  {
    title: 'Proxmox',
    competency: 0,
    category: ['Happy-to-Pick-Up', 'Containers/Virtualization'],
  },
  {
    title: 'KVM',
    competency: 2,
    category: ['Containers/Virtualization'],
  },
  {
    title: 'Zabbix/Prometheus',
    competency: 0,
    category: ['Happy-to-Pick-Up', 'Monitoring'],
  },
  {
    title: 'pfSense',
    competency: 2,
    category: ['Other'],
  },
  {
    title: 'Packer',
    competency: 0,
    category: ['Happy-to-Pick-Up', 'Configuration Managment'],
  },
  {
    title: 'Ansible',
    competency: 0,
    category: ['Happy-to-Pick-Up', 'Configuration Managment'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
