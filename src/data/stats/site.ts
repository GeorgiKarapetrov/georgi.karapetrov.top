import dayjs from 'dayjs';

import { StatData } from '../../components/Stats/types';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/GeorgiKarapetrov/georgi.karapetrov.top
 */
const data: StatData[] = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/GeorgiKarapetrov/georgi.karapetrov.top/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/GeorgiKarapetrov/georgi.karapetrov.top/stargazers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/GeorgiKarapetrov/georgi.karapetrov.top/network',
  },
  {
    label: 'Number of spoons',
    value: '0',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    // GitHub's open_issues_count includes open pull requests, so the label
    // says what the number actually counts rather than overstating issues.
    label: 'Open github issues and pull requests',
    key: 'open_issues_count',
    link: 'https://github.com/GeorgiKarapetrov/georgi.karapetrov.top/issues',
  },
  {
    label: 'Last updated on',
    key: 'pushed_at',
    link: 'https://github.com/GeorgiKarapetrov/georgi.karapetrov.top/commits',
    format: (x: unknown) => dayjs(x as string).format('MMMM DD, YYYY'),
  },
  {
    // Counted from the working tree at build time by `Site.tsx`; see
    // `src/lib/loc.ts`. Do not hardcode a number here — the previous one
    // drifted by nearly 2,000 lines before anyone noticed.
    label: 'Lines of TypeScript powering this website',
    key: 'source_lines',
    link: 'https://github.com/GeorgiKarapetrov/georgi.karapetrov.top/graphs/contributors',
  },
];

export default data;
