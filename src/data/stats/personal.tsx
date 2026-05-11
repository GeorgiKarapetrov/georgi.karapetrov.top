'use client';

import { useEffect, useState } from 'react';

import type { StatData } from '../../components/Stats/types';

/** Birth date for age calculation (ISO format) */
const BIRTH_DATE = '1989-05-12T00:43:00';

/** Marriage date for calculation (ISO format) */
const MARRIAGE_DATE = '2021-03-27T12:40:00';

/** Milliseconds in an average year (accounting for leap years) */
const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2421897;

/** Update interval for age display in ms */
const AGE_UPDATE_INTERVAL = 25;

/** Number of decimal places for age display */
const AGE_PRECISION = 8;

/** Number of decimal places for marriage display */
const MARRIAGE_PRECISION = 9;

function Age() {
  const [age, setAge] = useState<string>('');

  const tick = () => {
    const birthTime = new Date(BIRTH_DATE);
    setAge(
      ((Date.now() - birthTime.getTime()) / MS_PER_YEAR).toFixed(AGE_PRECISION),
    );
  };

  useEffect(() => {
    tick(); // Initial tick
    const timer = setInterval(() => tick(), AGE_UPDATE_INTERVAL);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{age} years</>;
}

function Marriage() {
  const [marriage, setMarriage] = useState<string>('');

  const tick = () => {
    const marriageDay = new Date(MARRIAGE_DATE);
    setMarriage(
      ((Date.now() - marriageDay.getTime()) / MS_PER_YEAR).toFixed(
        MARRIAGE_PRECISION,
      ),
    );
  };

  useEffect(() => {
    tick(); // Initial tick
    const timer = setInterval(() => tick(), AGE_UPDATE_INTERVAL);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{marriage} years</>;
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
    value: 'Seven',
    link: 'https://www.google.com/maps/d/embed?mid=1IrgOfUSRP2aBhPE0RV0noWMAfhol4Uyv',
  },
  {
    key: 'location',
    label: 'Home city',
    value: 'Sofia, Bulgaria',
  },
];

export default data;
