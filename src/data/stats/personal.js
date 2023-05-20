import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1989-05-12T00:43:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(8));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age} years</>;
};

const Marriage = () => {
  const [marriage, setMarriage] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const marriageDay = new Date('2021-03-27T12:40:00');
    setMarriage(((Date.now() - marriageDay) / divisor).toFixed(9));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{marriage} years</>;
};

const data = [
  {
    key: 'givenName',
    label: 'The anglicanization of my name is',
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
    link:
      'https://www.google.com/maps/d/u/0/edit?mid=1IrgOfUSRP2aBhPE0RV0noWMAfhol4Uyv&usp=sharing',
  },
  {
    key: 'location',
    label: 'Home city',
    value: 'Sofia, Bulgaria',
  },
];

export default data;
