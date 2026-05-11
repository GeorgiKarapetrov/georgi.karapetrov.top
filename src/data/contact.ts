import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/GeorgiKarapetrov',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/georgikarapetrov',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:Georgi.D.Karapetrov@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  /* {
    link: 'https://twitter.com/Georgi_DevOps',
    label: 'Twitter',
    icon: faTwitter,
  }, */
];

export default data;
