export interface Project {
  id: string;
  title: string;
  description: string;
  techstacks: string[];
  contributions: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Legacy Application Modernization',
    description: 'A complete modernization initiative that transformed a legacy Jinja-based application into a scalable React platform.',
    techstacks: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'REST APIs'],
    // link: 'https://example.com',
    // github: 'https://github.com/example/ai-portfolio',
    image: '/assets/images/projects/legacy_modernization_thumb.png',
    contributions: [
      'Migrated legacy frontend architecture to React',
      'Built reusable component libraries',
      'Improved maintainability and development workflows',
      'Enhanced responsiveness and user experience',
    ]
  },
  {
    id: '2',
    title: 'React Native Mobile Application',
    description: 'A company newsletter mobile app that allows users to view internal updates, receive notifications, and open newsletter content seamlessly. Newsletters with verified external links redirect users to the attached URL, while newsletters without links open directly inside the app for a smoother reading experience.',
    techstacks: ['React Native', 'Redux', 'Firebase', 'REST APIs'],
    // link: 'https://example.com',
    // github: 'https://github.com/example/ecommerce-dash',
    image: '/assets/images/projects/newsletter_thumb.png',
    contributions: [
      'Maintained and enhanced application features',
      'Implemented production fixes and updates',
      'Achieved 99.9% application uptime',
      'Improved overall user experience and stability',
    ]
  },
  {
    id: '3',
    title: 'School Portal System',
    description: 'A modern educational platform designed to streamline enrollment and student data management processes.',
    techstacks: ['Next.js', 'React', 'Tailwind CSS', 'Redux', 'Prisma', 'PostgreSQL'],
    // link: 'https://example.com',
    github: 'https://github.com/kryzstoff-dev/mnhs-system',
    image: '/assets/images/projects/school_portal_dashboard_dark.png',
    contributions: [
      'Independently built a full-stack school portal using Next.js, PostgreSQL, Prisma, Redux, Tailwind CSS, and Material UI.',
      'Designed the database schema, API routes, reusable UI components, and CRUD workflows for managing students, teachers, sections, and subjects.',
      'Implemented reusable tables, filters, forms, modals, loading states, error handling, and responsive layouts for a smoother admin experience.',
      'Structured the project using a feature-based architecture with reusable components and clean separation between UI, state management, API logic, and database access.',
      'Managed the full development lifecycle solo, from system planning and UI implementation to backend integration, debugging, and refinement.',
    ]
  },
  {
    id: '4',
    title: 'Dental Clinic Landing Page',
    description: 'An AI-first-driven development project for a modern and responsive landing page for a dental clinic website.',
    techstacks: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Zustand'],
    github: "https://github.com/kryzstoff-dev/somosot-dental-landing",
    image: '/assets/images/projects/dental_placeholder.png',
    contributions: [
      'Designed the full landing page experience with AI-assisted ideation using ChatGPT, then refined the layout, content, and UI direction based on the project requirements.',
      'Applied frontend best practices, including feature-based project structure, reusable components, clean separation of concerns, and code-splitting for better maintainability and scalability.',
      'Implemented a working contact form using Resend and React Email to handle inquiry submissions and deliver styled email notifications.',
    ]
  }
];
