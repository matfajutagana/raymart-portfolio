import type {
  Experience,
  Project,
  TechCategory,
  Publication,
  NavItem,
  SocialLink,
} from '@/types'

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'tech', label: 'Tech Stack', href: '#tech' },
  { id: 'publications', label: 'Publications', href: '#publications' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/raymart-fajutagana-953043132',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/matfajutagana',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:fajutaganaraymart@gmail.com',
  },
]

export const experiences: Experience[] = [
  {
    id: 'arcanys',
    role: 'Web Developer',
    company: 'Arcanys',
    period: '2024 – 2025',
    description: [
      'Developed scalable backend services for multi-tenant corporate giving platform supporting donations, volunteering programs, and employer matching initiatives',
      'Optimized complex API filtering, reducing response time from 1 minute to 15ms — a 99.75% performance improvement',
      'Implemented secure authentication using Google SSO and built brand asset management system integrating Brandfetch API with AWS S3',
      'Developed real-time notification and tracking system using Socket.io for volunteer reservation management',
      'Collaborated with international product and engineering teams across multiple time zones in agile environment',
    ],
  },
  {
    id: 'cto-global',
    role: 'Software Engineer',
    company: 'CTO Global Services Inc.',
    period: '2021 – 2024',
    description: [
      'Integrated multiple courier APIs for B2B on-demand and scheduled delivery service platform serving enterprise clients',
      'Architected and deployed scalable backend microservices supporting high-volume transaction processing and logistics operations',
      'Optimized database queries and API performance, reducing response times for critical business operations',
      'Collaborated with cross-functional teams including product managers and QA engineers to deliver features improving operational efficiency',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'whodoyoustan',
    name: 'Who Do You Stan?',
    description:
      'A music guessing web app where users choose an artist, listen to short song previews, and try to identify tracks to earn a fan ranking.',
    url: 'https://whodoyoustan.com/',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/projects/whodoyoustan.png',
  },
  {
    id: 'mysterymeals',
    name: 'MysteryMeals.ca',
    description:
      'A Canadian meal discovery platform helping users find exciting new meals based on their preferences.',
    url: 'https://mysterymeals.ca',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/projects/mysterymeals.png',
  },
  {
    id: 'barangay-mis',
    name: 'Barangay Management Information System',
    description:
      'Web application built with MERN stack featuring resident profiling, barangay clearance generator, certificate of residency, and resident demographics.',
    url: 'https://github.com/matfajutagana/Barangay-Calingag-BMIS',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    image: '/images/projects/barangay-mis.png',
  },
  {
    id: 'lr-electronics',
    name: 'LR Electronics Stop & Shop',
    description:
      'Full-featured eCommerce platform built with the MERN stack and Redux for state management.',
    url: 'https://github.com/matfajutagana/LRElectronics',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux'],
    image: '/images/projects/lr-electronics.png',
  },
]

export const techStack: TechCategory[] = [
  {
    id: 'fullstack',
    category: 'Full-Stack',
    skills: [
      'JavaScript',
      'TypeScript',
      'Node.js',
      'React.js',
      'Express.js',
      'Nest.js',
    ],
  },
  {
    id: 'database',
    category: 'Database & Storage',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'AWS S3',
      'Sequelize',
      'TypeORM',
    ],
  },
  {
    id: 'cloud',
    category: 'Cloud & Infrastructure',
    skills: ['AWS', 'Google Cloud Platform', 'Docker', 'Git', 'CI/CD'],
  },
  {
    id: 'realtime',
    category: 'Real-Time & APIs',
    skills: [
      'Socket.io',
      'RESTful APIs',
      'Microservices',
      'Third-party Integrations',
    ],
  },
  {
    id: 'testing',
    category: 'Testing & QA',
    skills: ['Jest', 'Postman', 'Swagger', 'Unit Testing'],
  },
]

export const publications: Publication[] = [
  {
    id: 'pub-1',
    title:
      'An Intranet-Based Document Management and Monitoring System Framework: A Case for National University Quality Management Office',
    conference: 'IEEE Region 10 Conference (TENCON)',
    year: '2016',
    url: 'https://ieeexplore.ieee.org/document/7848431',
  },
  {
    id: 'pub-2',
    title: 'Lavender Filipino: Computational Models of Twitter Swardspeak',
    conference:
      '9th International Conference of the Asian Association of Lexicography',
    year: '2015',
    url: 'https://asialex.org/pdf/Asialex-Proceedings-2015.pdf',
  },
]
