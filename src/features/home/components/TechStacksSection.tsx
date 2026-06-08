import { Code } from "@mui/icons-material";
import { Typography } from "@mui/material";

function TechStacksSection() {
  return (
    <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-slate-300 dark:border-slate-900 relative flex items-center justify-center bg-transparent backdrop-blur-sm shadow-[inset_0_0_60px_rgba(255,255,255,0.02)]">
      <div className="absolute inset-8 rounded-full border border-dashed border-slate-300 dark:border-slate-800/90 animate-[spin_40s_linear_infinite]" />
      <div className="absolute inset-20 rounded-full border border-dashed border-teal-800/90 opacity-40 animate-[spin_20s_linear_infinite_reverse]" />

      <div className="px-4 w-32 h-32 rounded-3xl bg-teal-500/10 border border-teal-500/20 flex flex-col items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-transform hover:rotate-6 duration-500">
        <Code className="w-12 h-12 text-teal-400 mb-1" />
        <Typography className="font-mono text-[10px]! text-slate-500 uppercase tracking-widest font-semibold">
          React Expert
        </Typography>
      </div>

      <div className="absolute top-10 left-10 p-3 bg-slate-200! dark:bg-slate-900/80! border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg flex items-center gap-2 hover:scale-105 duration-300">
        <Typography className="w-2.5 h-2.5 bg-sky-400 rounded-full animate-ping" />
        <Typography className="font-mono text-xs text-slate-700 dark:text-slate-300 font-medium">
          TypeScript
        </Typography>
      </div>

      <div className="absolute bottom-16 right-4 p-3 bg-slate-200! dark:bg-slate-900/80! border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg flex items-center gap-2 hover:scale-105 duration-300">
        <Typography className="w-2.5 h-2.5 bg-indigo-400 rounded-full" />
        <Typography className="font-mono text-xs text-slate-700 dark:text-slate-300 font-medium">
          React Native
        </Typography>
      </div>

      <div className="absolute top-[45%] right-2 p-2 px-3 bg-slate-200! dark:bg-slate-900/80! border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg hover:scale-105 duration-300">
        <Typography className="font-mono text-xs text-slate-700 dark:text-slate-300 font-medium">
          Next.JS
        </Typography>
      </div>
    </div>
  );
}

export default TechStacksSection;
