export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'KU Leuven',
    degree: 'M.S. in Mathematics',
    link: 'https://www.kuleuven.be/english/',
    year: 2016,
  },
  {
    school: 'University of Sofia',
    degree: 'B.S. in Mathematics',
    link: 'https://www.uni-sofia.bg/',
    year: 2014,
  },
];

export default degrees;
