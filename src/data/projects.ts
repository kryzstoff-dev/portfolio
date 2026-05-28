export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Portfolio Generator',
    description: 'A Next.js application that helps developers generate portfolios using AI prompts.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'OpenAI'],
    link: 'https://example.com',
    github: 'https://github.com/example/ai-portfolio',
    image: 'https://images.unsplash.com/photo-1460925895917-b2b9f2dbe05c?w=800&q=80',
  },
  {
    id: '2',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for managing sales and inventory in real-time.',
    tags: ['React', 'Redux', 'Prisma', 'Supabase'],
    link: 'https://example.com',
    github: 'https://github.com/example/ecommerce-dash',
    image: 'https://images.unsplash.com/photo-1460925895917-b2b9f2dbe05c?w=800&q=80',
  },
  {
    id: '3',
    title: 'Fitness Tracker App',
    description: 'A mobile-first web app to track daily workouts and nutrition goals.',
    tags: ['TypeScript', 'Tailwind', 'Zustand', 'Firebase'],
    link: 'https://example.com',
    github: 'https://github.com/example/fitness-tracker',
    image: 'https://images.unsplash.com/photo-1460925895917-b2b9f2dbe05c?w=800&q=80',
  },
];
