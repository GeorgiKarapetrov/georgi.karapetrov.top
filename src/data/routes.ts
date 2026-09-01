import { AUTHOR_NAME } from '@/lib/utils';

export interface Route {
  label: string;
  path: string;
  index?: boolean;
  primary?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: AUTHOR_NAME,
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
  // Routable but intentionally kept out of the primary nav.
  {
    label: 'Archive',
    path: '/projects',
    primary: false,
  },
  /*
  {
    label: 'Writing',
    path: '/writing',
  },
  */
];

export default routes;
