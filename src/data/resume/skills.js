const skills = [
  {
    title: 'ITIL',
    competency: 6,
    category: ['Other'],
  },
  {
    title: 'Kubernetes',
    competency: 8,
    category: ['Other'],
  },
  {
    title: 'Docker',
    competency: 7,
    category: ['Other'],
  },
  {
    title: 'Linux',
    competency: 7,
    category: ['Other'],
  },
  {
    title: 'CloudOps',
    competency: 7,
    category: ['DevOps'],
  },
  {
    title: 'CI/CD',
    competency: 8,
    category: ['DevOps'],
  },
  {
    title: 'IaC',
    competency: 8,
    category: ['DevOps'],
  },
  {
    title: 'GitOps',
    competency: 7,
    category: ['DevOps'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Bash',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'GoLang',
    competency: 7,
    category: ['Languages'],
  },
  {
    title: 'LaTeX',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 6,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'HCL',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Mathematica',
    competency: 4,
    category: ['Languages'],
  },
  // {
  //   title: 'Proxmox',
  //   competency: 0,
  //   category: ['Happy-to-Pick-Up'],
  // },
  // {
  //   title: 'Packer',
  //   competency: 0,
  //   category: ['Happy-to-Pick-Up'],
  // },
  // {
  //   title: 'Ansible',
  //   competency: 0,
  //   category: ['Happy-to-Pick-Up'],
  // },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  // '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
