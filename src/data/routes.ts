export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Georgi Karapetrov',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  /*
  {
    label: 'Writing',
    path: '/writing',
  },
  */
  /*
  {
    label: 'Archive',
    path: '/projects',
  },
  */
  {
    label: 'Stats',
    path: '/stats',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
  {
    label: 'Donate',
    path: '/donate',
  },
];

export default routes;
