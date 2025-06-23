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
    X: string;
    instagram: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: 'Austin Xu',
  logo: 'Austin Xu',
  title: "Hi all, I'm Austin",
  description:
    'I’m passionate about software engineering, AI, and ML. I also dabble in application development. Whether you’d like to brainstorm a project or simply say hello, I’m here, truly available and always eager to chat whenever you need. :)',
  blogUrl: 'https://personal-blog-jade-five.vercel.app/', // Replace with your actual blog URL
  socialLinks: {
    github: 'https://github.com/ShenghaoisYummy',
    linkedin: 'https://www.linkedin.com/in/austin-xu-272586160/',
    X: 'https://x.com/praisesunshinee?s=21',
    instagram: 'https://www.instagram.com/shenghaoyummy',
  },
};

export const skills: Skill[] = [
  {
    name: 'Python',
    icon: 'devicon-python-plain',
    category: 'language',
    hoverColor: '#ffd845',
  },
  {
    name: 'TypeScript',
    icon: 'devicon-typescript-plain',
    category: 'language',
    hoverColor: '#3178c6',
  },
  {
    name: 'Tailwind',
    icon: 'devicon-tailwindcss-plain',
    category: 'language',
    hoverColor: '#38bdf8',
  },
  {
    name: 'C#',
    icon: 'devicon-csharp-plain',
    category: 'language',
    hoverColor: '#239120',
  },
  {
    name: 'React',
    icon: 'devicon-react-plain',
    category: 'frontend',
    hoverColor: '#61dafb',
  },
  {
    name: 'Redux',
    icon: 'devicon-redux-plain',
    category: 'frontend',
    hoverColor: '#764abc',
  },
  {
    name: 'Next.js',
    icon: 'devicon-nextjs-plain',
    category: 'frontend',
    hoverColor: '#000000',
  },
  {
    name: '.NET',
    icon: 'devicon-dotnetcore-plain',
    category: 'language',
    hoverColor: '#5c2d91',
  },
  {
    name: 'Node.js',
    icon: 'devicon-nodejs-plain',
    category: 'language',
    hoverColor: '#393939',
  },
  {
    name: 'Flask',
    icon: 'devicon-flask-plain',
    category: 'backend',
    hoverColor: '#010101',
  },
  {
    name: 'GraphQL',
    icon: 'devicon-graphql-plain',
    category: 'language',
    hoverColor: '#e10098',
  },
  {
    name: 'PostgreSQL',
    icon: 'devicon-postgresql-plain',
    category: 'database',
    hoverColor: '#31648c',
  },
  {
    name: 'MongoDB',
    icon: 'devicon-mongodb-plain',
    category: 'database',
    hoverColor: '#47a248',
  },
  {
    name: 'Docker',
    icon: 'devicon-docker-plain',
    category: 'tools',
    hoverColor: '#2496ed',
  },
  {
    name: 'GitHub Actions',
    icon: 'devicon-githubactions-plain',
    category: 'tools',
    hoverColor: '#24292e',
  },
  {
    name: 'AWS',
    icon: 'devicon-amazonwebservices-plain',
    category: 'tools',
    hoverColor: '#ff9900',
  },
];

export const experiences: Experience[] = [
  {
    id: 'H.A.M Technology',
    company: 'H.A.M Technology',
    role: 'Full Stack Developer',
    duration: '2022 May – 2023 Feb',
    description:
      'Built a short-term rental integration platform with .NET Core APIs and React/Redux front-end, deployed on AWS EC2/S3. Established CI/CD and unit testing, boosting client efficiency 200% and meeting 90% objectives.',
    logo: '',
    background: 'rgb(20, 124, 244)',
  },
  {
    id: 'Canva',
    company: 'Canva',
    role: 'Software Engineer',
    duration: 'Maybe in the future',
    description:
      'Equipped with deep expertise in .NET Core, React, and AWS, I’m poised to drive Canva’s next-gen AI design features—delivering seamless, personalized experiences to millions of creators. Architect cloud-native microservices, optimize real-time rendering pipelines, and lead cross-disciplinary innovation sprints.',
    logo: '',
    background:
      'linear-gradient(90deg,' +
      '#00C4CC   0%,  ' +
      '#1AB6E6  35%,  ' +
      '#5F6EF8  70%,  ' +
      '#8E2EFF 100%)',
  },
  {
    id: 'Atlassian',
    company: 'Atlassian',
    role: 'Software Engineer',
    duration: 'Maybe in the future',
    description:
      'Leveraging strong foundations in distributed systems and DevOps, I’m ready to scale Atlassian’s collaboration platform—boosting global team productivity by over 50%. Design fault-tolerant architectures, automate end-to-end CI/CD workflows, and contribute high-impact open-source integrations.',
    logo: '',
    background: '#0052CC',
  },
];

export const projects: Project[] = [
  { repo: 'ShenghaoisYummy/E-commerce-Chatbot' },
  { repo: 'ShenghaoisYummy/glassmorphism-style-portfolio', featured: true },
  { repo: 'ShenghaoisYummy/Restore' },
  { repo: 'ShenghaoisYummy/airbnb_clone' },
  { repo: 'ShenghaoisYummy/ai-schedule-assistant' },
  { repo: 'ShenghaoisYummy/taxpal' },
];
