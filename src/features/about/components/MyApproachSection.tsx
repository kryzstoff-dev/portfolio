import { Box, Container, Paper, Typography } from "@mui/material";
import clsx from "clsx";

export const MY_APPROACH = [
  {
    title: "Build for Maintainability",
    description:
      "I believe software should be easy to understand, extend, and maintain long after it's shipped.",
    accent: "from-teal-500 to-indigo-500",
    stat: "01",
  },
  {
    title: "Focus on User Experience",
    description:
      "A feature isn't complete until it feels intuitive and effortless for the user.",
    accent: "from-sky-500 to-cyan-500",
    stat: "02",
  },
  {
    title: "Think Beyond the Frontend",
    description:
      "I don't just build interfaces—I consider business requirements, API design, performance, and long-term scalability.",
    accent: "from-indigo-500 to-purple-500",
    stat: "03",
  },
  {
    title: "Continuous Improvement",
    description:
      "Technology evolves quickly, and I enjoy learning new tools and approaches that help me deliver better solutions.",
    accent: "from-teal-600 to-sky-600",
    stat: "04",
  },
];

function MyApproachSection() {
  return (
    <Box className="py-12 px-0 md:px-2 lg:px-4">
      <Container maxWidth="lg" className="px-0! md:px-2! lg:px-4!">
        <Box className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-4xl! md:text-5xl! font-bold! text-slate-900 dark:text-white mb-6!"
          >
            My Approach
          </Typography>
          <Typography
            variant="body1"
            className="text-slate-600 dark:text-slate-400 mx-auto"
          >
            How I approach software development projects
          </Typography>
        </Box>

        <div className="grid grid-flow-row grid-cols-4 gap-4">
          {MY_APPROACH.map((approach, index) => (
            <Paper key={index} className="p-4 col-span-4 md:col-span-2 lg:col-span-1 bg-slate-200/50! dark:bg-slate-800/50! relative group hover:border-slate-800 hover:bg-slate-900/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className={clsx("absolute top-0 inset-x-6 h-0.5 bg-linear-to-r",approach.accent, "opacity-0 group-hover:opacity-100 transition-opacity duration-300")} />
              <div className="flex flex-row-reverse mb-2">
                <Typography
                  className={clsx(
                    "text-xl! font-bold! font-mono! bg-linear-to-r",
                    approach.accent,
                    "bg-clip-text text-transparent",
                  )}
                >
                  {approach.stat}
                </Typography>
              </div>

              <Typography
                variant="h5"
                component="h3"
                className="text-base! font-medium! text-slate-900! dark:text-slate-200! mb-3! group-hover:text-teal-400! transition-colors!"
              >
                {approach.title}
              </Typography>
              <Typography
                variant="body2"
                className="text-slate-600 dark:text-slate-400"
              >
                {approach.description}
              </Typography>
            </Paper>
          ))}
        </div>
      </Container>
    </Box>
  );
}

export default MyApproachSection;
