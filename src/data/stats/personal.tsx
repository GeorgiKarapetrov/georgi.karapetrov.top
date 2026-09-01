'use client';

import useLiveAge from '@/hooks/useLiveAge';
import {
  AGE_PRECISION_FULL,
  agePlaceholder,
  COUNTRIES_VISITED,
  CURRENT_CITY,
  MARRIAGE_DATE,
} from '@/lib/telemetry';

import type { StatData } from '../../components/Stats/types';

/** Decimal places for the marriage readout. */
const MARRIAGE_PRECISION = 9;

/**
 * The stats page reports age at deliberately absurd precision.
 *
 * The placeholder is the rendered content; `useLiveAge` writes the reading into
 * this node directly, so the ticking never re-renders React.
 */
function Age() {
  const ref = useLiveAge<HTMLSpanElement>(AGE_PRECISION_FULL);

  return (
    <span className="stat-live" ref={ref}>
      {agePlaceholder(AGE_PRECISION_FULL)}
    </span>
  );
}

/** A live "married for" readout, anchored at the marriage date. */
function Marriage() {
  const ref = useLiveAge<HTMLSpanElement>(MARRIAGE_PRECISION, MARRIAGE_DATE);

  return (
    <span className="stat-live" ref={ref}>
      {agePlaceholder(MARRIAGE_PRECISION)} years
    </span>
  );
}

const data: StatData[] = [
  {
    key: 'givenName',
    label: 'The anglicization of my name is',
    value: 'George',
  },
  {
    key: 'familyName',
    label: 'My family name means',
    value: 'Blackstone',
  },
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'marriage',
    label: 'Married for',
    value: <Marriage />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: COUNTRIES_VISITED,
    link: 'https://www.google.com/maps/d/embed?mid=1IrgOfUSRP2aBhPE0RV0noWMAfhol4Uyv',
  },
  {
    key: 'location',
    label: 'Home city',
    value: CURRENT_CITY,
  },
];

export default data;
