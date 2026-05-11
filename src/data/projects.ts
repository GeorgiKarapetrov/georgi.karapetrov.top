export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

// TODO: Add a couple lines about each project
const data: Project[] = [
  {
    title: 'Test',
    subtitle: 'We won n-th place',
    link: 'https://www.dummy.com/',
    image: '/images/projects/test.jpg',
    date: '2021-04-20',
    desc: 'point 1, point 2.',
    featured: true,
  },
];

export default data;
