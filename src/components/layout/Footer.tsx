import { GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} Christopher Alonzo Dev Portfolio. Built
          with Next.js and MUI.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link
            href="https://github.com/kryzstoff-dev"
            className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors text-sm text-center"
          >
            <GitHub fontSize="small" className="mr-2" />
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/christopher-alonzo-707a55206"
            className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors text-sm text-center"
          >
            <LinkedIn fontSize="small" className="mr-2" />
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
