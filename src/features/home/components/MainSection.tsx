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
        Building digital <span className="text-blue-600">experiences</span> that
        matter.
      </Typography>
      <Typography
        variant="h5"
        className="text-lg! md:text-xl! text-slate-600 dark:text-slate-400 mb-8! max-w-2xl"
      >
        Hi, I&apos;m a Full-stack Developer specializing in high-performance web
        applications. I turn complex problems into elegant, scalable software.
      </Typography>

      <Box className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Button
          component={Link}
          href="/projects"
          variant="contained"
          size="large"
          endIcon={<ArrowRight size={20} />}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
        >
          View My Work
        </Button>
        <Button
          component={Link}
          href="/contact"
          variant="outlined"
          size="large"
          className="border-slate-300 text-slate-600 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white px-8 py-3 text-lg"
        >
          Get In Touch
        </Button>
      </Box>
    </>
  );
}

export default MainSection;
