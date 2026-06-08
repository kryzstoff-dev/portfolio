import { Code, PhoneAndroid } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Layers, Rocket } from "lucide-react";

function Focus() {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 xl:grid-cols-4 w-full border-0 md:border border-slate-300 bg-none md:bg-slate-50 md:dark:bg-slate-950 dark:border-slate-700 rounded-xl p-3 my-8 mb-8 md:mb-16">
      <div className="flex flex-row items-center border-b xl:border-b-0 border-slate-300 dark:border-slate-700 border md:border-b md:border-x-0 md:border-t-0 p-4 md:p-0 rounded-2xl md:rounded-none">
        <Code className="text-teal-600 dark:text-teal-400" fontSize="large" />
        <div className="flex flex-col ml-2">
          <Typography variant="h6">Clean Code</Typography>
          <Typography
            variant="caption"
            className="text-slate-800 dark:text-slate-300"
          >
            Maintainable. Scalable. Robust.
          </Typography>
        </div>
      </div>

      <div className="flex flex-row items-center border-slate-300 dark:border-slate-700 p-4 md:px-6 border md:border-b xl:border-b-0 md:pb-4 md:border-x-0 md:border-l md:border-t-0 rounded-2xl md:rounded-none">
        <Layers className="text-teal-600 dark:text-teal-400" size={32} />
        <div className="flex flex-col ml-2">
          <Typography variant="h6">Scalable Solutions</Typography>
          <Typography
            variant="caption"
            className="text-slate-800 dark:text-slate-300"
          >
            Built for growth and performance.
          </Typography>
        </div>
      </div>

      <div className="flex flex-row items-center border-slate-300 dark:border-slate-700 p-4 md:px-6 border md:border-b-0 xl:border-b-0 md:pb-4 md:border-x-0 md:border-l-0 xl:border-l md:border-t-0 rounded-2xl md:rounded-none">
        <PhoneAndroid
          className="text-teal-600 dark:text-teal-400"
          fontSize="large"
        />
        <div className="flex flex-col ml-2">
          <Typography variant="h6">Web and Mobile</Typography>
          <Typography
            variant="caption"
            className="text-slate-800 dark:text-slate-300"
          >
            Seemless experiences across platforms.
          </Typography>
        </div>
      </div>

      <div className="flex flex-row items-center border-slate-300 dark:border-slate-700 p-4 md:px-6 border md:border-b-0 xl:border-b-0 md:pb-4 md:border-x-0 md:border-l md:border-t-0 rounded-2xl md:rounded-none">
        <Rocket className="text-teal-600 dark:text-teal-400" size={32} />
        <div className="flex flex-col ml-2">
          <Typography variant="h6">Product Focused</Typography>
          <Typography
            variant="caption"
            className="text-slate-800 dark:text-slate-300"
          >
            Solving real-world problems that matter.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Focus;
