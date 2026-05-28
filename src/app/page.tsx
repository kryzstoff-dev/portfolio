import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800">
            Available for work
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Building digital <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
              experiences that matter.
            </span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            I'm a Full-stack Developer specializing in high-performance web applications.
            Combining clean code with exceptional user experiences to solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center justify-center"
            >
              View Projects
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-gray-200 dark:border-slate-700 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center"
            >
              Contact Me
            </Link>
          </div >
        </div >
      </section>

      {/* Featured Projects Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-y border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Featured Projects</h2>
              <p className="text-slate-600 dark:text-slate-400">A glimpse into some of my best work.</p>
            </div >
            <Link
              href="/projects"
              className="hidden sm:flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              See all projects <ArrowRight size={16} className="ml-1" />
            </Link>
          </div >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div >
        </div >
      </section>

      {/* Skills Teaser */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Supabase', 'Node.js', 'PostgreSQL'].map(skill => (
            <div key={skill} className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 font-medium shadow-sm">
              {skill}
            </div >
          ))}
        </div >
      </section>
    </div >
  );
}
