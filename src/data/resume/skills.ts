export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // Other / Platform
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
  // DevOps
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
  // Languages
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

/**
 * Build categories from skills, all using the accent color token.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
