export interface Skill {
  name: string;
  icon: string;
  category: string;
  hoverColor: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
  background: string;
  logoType: 'svg' | 'image';
  svgContent?: string;
}

export interface Project {
  repo: string;
  featured?: boolean;
}

export interface PersonalInfo {
  name: string;
  logo: string;
  title: string;
  description: string;
  blogUrl: string;
  socialLinks: {
    github: string;
    linkedin: string;
    facebook: string;
    instagram: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: 'Austin',
  logo: 'Austin',
  title: "Hi all, I'm Austin",
  description:
    'I love software development, machine learning and deep learning. I know a little bit of Web Dev too and Flutter! Want to discuss regarding any project or just want to say a Hi? I am always available to listen you :)',
  blogUrl: 'https://your-blog-url.com', // Replace with your actual blog URL
  socialLinks: {
    github: 'https://github.com/AustinXu',
    linkedin: 'https://linkedin.com/in/austin-xu-0000000000',
    facebook: 'https://facebook.com/austin',
    instagram: 'https://instagram.com/austin',
  },
};

export const skills: Skill[] = [
  {
    name: 'C',
    icon: 'devicon-c-plain',
    category: 'language',
    hoverColor: '#03599c',
  },
  {
    name: 'C++',
    icon: 'devicon-cplusplus-plain',
    category: 'language',
    hoverColor: '#9c033a',
  },
  {
    name: 'HTML5',
    icon: 'devicon-html5-plain',
    category: 'frontend',
    hoverColor: '#e54d26',
  },
  {
    name: 'CSS3',
    icon: 'devicon-css3-plain',
    category: 'frontend',
    hoverColor: '#3d8fc6',
  },
  {
    name: 'JavaScript',
    icon: 'devicon-javascript-plain',
    category: 'language',
    hoverColor: '#f0db4f',
  },
  {
    name: 'Python',
    icon: 'devicon-python-plain',
    category: 'language',
    hoverColor: '#ffd845',
  },
  {
    name: 'Flask',
    icon: 'devicon-flask-plain',
    category: 'backend',
    hoverColor: '#010101',
  },
  {
    name: 'Linux',
    icon: 'devicon-linux-plain',
    category: 'tools',
    hoverColor: '#000',
  },
];

export const experiences: Experience[] = [
  {
    id: 'google',
    company: 'Google',
    role: 'Software Engineer',
    duration: 'June 2018 – Present',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    logo: '/assets/google.png',
    background: '#444941',
    logoType: 'svg',
    svgContent: `<svg alt="Google" class="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 28">
      <path fill="#4285F4" d="M10.4,21C4.7,21,0,16.2,0,10.5S4.7,0,10.4,0c3.1,0,5.3,1.3,7,2.9l-1.9,2c-1.2-1.2-2.8-2-5-2c-4.1,0-7.3,3.4-7.3,7.6s3.2,7.6,7.3,7.6c2.7,0,4.2-1.1,5.1-2.1c0.8-0.8,1.3-2,1.5-3.8h-6.6V9.3h9.3c0.1,0.5,0.2,1.1,0.2,1.8c0,2.2-0.5,5-2.4,6.9C15.7,20,13.4,21,10.4,21z"></path>
      <path fill="#EA4335" d="M34.2,14.1c0,3.9-2.9,6.7-6.6,6.7s-6.6-2.8-6.6-6.7s2.9-6.7,6.6-6.7S34.2,10.2,34.2,14.1z M31.4,14.1c0-2.5-1.7-4.1-3.7-4.1c-1.9,0-3.7,1.6-3.7,4.1c0,2.4,1.7,4.1,3.7,4.1C29.6,18.2,31.4,16.5,31.4,14.1z"></path>
      <path fill="#FBBC03" d="M48.4,14.1c0,3.9-2.9,6.7-6.6,6.7s-6.6-2.8-6.6-6.7s2.9-6.7,6.6-6.7S48.4,10.2,48.4,14.1z M45.5,14.1c0-2.5-1.7-4.1-3.7-4.1c-1.9,0-3.7,1.6-3.7,4.1c0,2.4,1.7,4.1,3.7,4.1C43.8,18.2,45.5,16.5,45.5,14.1z"></path>
      <path fill="#4285F4" d="M61.7,7.8V20c0,5-2.7,7-6.1,7c-3.2,0-5-2.2-5.8-4l2.5-1.1c0.4,1.1,1.5,2.4,3.3,2.4c2.1,0,3.4-1.4,3.4-3.9v-1h-0.1c-0.6,0.8-1.8,1.6-3.4,1.6c-3.3,0-6.2-2.9-6.2-6.8s2.9-6.7,6.2-6.7c1.6,0,2.7,0.7,3.4,1.6h0.1V7.8H61.7z M59.2,14.1c0-2.4-1.5-4.1-3.5-4.1c-1.9,0-3.5,1.7-3.5,4.1s1.5,4.1,3.5,4.1C57.7,18.2,59.2,16.5,59.2,14.1z"></path>
      <path fill="#34A853" d="M66.4,1.1v19.8h-2.8V1.1H66.4z"></path>
      <path fill="#EA4335" d="M77.7,16.3l2.2,1.6c-0.7,1.1-2.5,3-5.5,3c-3.7,0-6.5-2.9-6.5-6.7c0-4,2.8-6.7,6.2-6.7c3.4,0,5,2.8,5.6,4.3l0.3,0.7l-8.8,3.7c0.7,1.4,1.7,2,3.2,2S76.9,17.5,77.7,16.3z M70.8,14l5.8-2.5c-0.4-0.8-1.3-1.5-2.4-1.5C72.7,10,70.7,11.3,70.8,14z"></path>
    </svg>`,
  },
  {
    id: 'facebook',
    company: 'Facebook',
    role: 'Software Engineer',
    duration: 'June 2018 – Present',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    logo: '/assets/facebookLogo.png',
    background: 'rgb(20, 124, 244)',
    logoType: 'image',
  },
  {
    id: 'netflix',
    company: 'Netflix',
    role: 'Software Engineer',
    duration: 'June 2018 – Present',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    logo: '/assets/netflix.png',
    background: 'rgb(0, 0, 0)',
    logoType: 'image',
  },
];

export const projects: Project[] = [
  { repo: 'AustinXu/glassFolio', featured: true },
  { repo: 'AustinXu/Covid19-API' },
  { repo: 'AustinXu/Fake-SpeedTest-Generator' },
  { repo: 'AustinXu/Webd-Template-CodingWeekIITG' },
  { repo: 'AustinXu/Youtube-UI-Clone' },
];
