import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Projects</h1>
        </div >
      </div >

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div >

      {projects.length === 0 && (
        <div className="text-center py-20 text-slate-500 dark:text-slate-400">
          No projects found. I'm currently working on some exciting things!
        </div >
      )}
    </div >
  );
}
