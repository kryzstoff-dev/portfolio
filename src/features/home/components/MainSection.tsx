import { CalendarToday, Code, Rocket } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function MainSection() {
  return (
    <>
      <Typography
        variant="h1"
        className="text-5xl! md:text-7xl! font-extrabold! text-slate-900 dark:text-white leading-tight mb-6!"
      >
        Building digital <span className="text-teal-600">experiences</span> that
        matter.
      </Typography>
      <Typography
        variant="h5"
        className="text-lg! md:text-xl! text-slate-600 dark:text-slate-400 mb-8! max-w-2xl"
      >
        Hi, I&apos;m Christopher Alonzo, a Software Developer with 5 years of
        experience building scalable web and mobile applications using React,
        Next.js, and React Native.
      </Typography>
      <Typography
        variant="h5"
        className="text-lg! md:text-xl! text-slate-600 dark:text-slate-400 mb-8! max-w-2xl"
      >
        I specialize in transforming complex business requirements into
        intuitive, high-performing digital products. From modernizing legacy
        systems to developing responsive interfaces and cross-platform mobile
        applications, I focus on delivering solutions that are maintainable,
        scalable, and user-friendly.
      </Typography>

      <div className="mt-10 mb-4 grid grid-cols-3 gap-4 w-full max-w-lg">
        <div className="bg-slate-200! dark:bg-slate-900/20! border border-slate-300 dark:border-slate-900 rounded-xl p-3">
          <div className="flex flex-row items-center">
            <CalendarToday className="text-teal-600 dark:text-teal-400" />
            <div className="flex flex-col ml-2">
              <div
                className={`text-2xl font-bold font-display text-teal-600 dark:text-teal-400`}
              >
                5+
              </div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                Years Experience
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-200! dark:bg-slate-900/20! border border-slate-300 dark:border-slate-900 rounded-xl p-3">
          <div className="flex flex-row items-center">
            <Rocket className="text-teal-600 dark:text-teal-400" />
            <div className="flex flex-col ml-2">
              <div
                className={`text-2xl font-bold font-display text-teal-600 dark:text-teal-400`}
              >
                6+
              </div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                Shipped Apps
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
