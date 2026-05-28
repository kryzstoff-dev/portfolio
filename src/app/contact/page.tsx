import Link from 'next/link';
import { ArrowLeft, Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-12">
        <Link
          href="/"
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Contact Me</h1>
      </div >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Let's connect!</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether you have a question about my work, a project you'd like to collaborate on,
            or just want to say hello, I'd love to hear from you.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:hello@example.com"
              className="flex items-center p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
            >
              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50">
                <Mail size={24} />
              </div >
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Email me at</p>
                <p className="font-semibold text-slate-900 dark:text-white">hello@example.com</p>
              </div >
            </a>

            <div className="flex gap-4">
              <a href="https://github.com" className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                <Twitter size={24} />
              </a>
            </div >
          </div >
        </div >

        <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-gray-200 dark:border-slate-700">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div >
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div >
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div >
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div >
      </div >
    </div >
  );
}
