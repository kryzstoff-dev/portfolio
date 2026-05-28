import Link from 'next/link';
import { ArrowLeft, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-12">
        <Link
          href="/"
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">About Me</h1>
      </div >

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <div className="aspect-square rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div >
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:hello@example.com" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div >
        </div >

        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">My Story</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              I am a passionate Full-stack Developer with a deep love for creating clean,
              efficient and user-centric applications. My journey in programming started
              with a curiosity for how the web works, and it has evolved into a career
              dedicated to building scalable software solutions.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I specialize in the React ecosystem and have a strong foundation in TypeScript,
              Tailwind CSS and modern backend architectures. I believe that great software
              is the result of iterative design, meticulous testing and a constant
              willingness to learn new technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Frontend</h3>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                  <li>React / Next.js</li>
                  <li>TypeScript / JavaScript</li>
                  <li>Tailwind CSS / MUI</li>
                  <li>Redux / Zustand</li>
                </ul>
              </div >
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Backend</h3>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                  <li>Node.js / Express</li>
                  <li>Prisma / PostgreSQL</li>
                  <li>Supabase / Firebase</li>
                  <li>REST / GraphQL</li>
                </ul>
              </div >
            </div >
          </section>
        </div >
      </div >
    </div >
  );
}
