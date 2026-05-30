"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import TechStacks from "./components/TechStacks";
import WorkExperiences from "./components/WorkExperiences";

export default function AboutPage() {

  return (
    <Box className="py-12 px-4">
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20" />
              <img
                src="/assets/images/profile.jpg"
                alt="About Me"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-slate-700"
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h2"
              className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed"
            >
              I am a passionate software engineer with a focus on building
              robust and scalable web applications. With a strong foundation in
              both frontend and backend technologies, I enjoy bridging the gap
              between design and implementation.
            </Typography>
            <Typography
              variant="body1"
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
            >
              My journey started with a curiosity for how things work on the
              web, which led me to master the modern JavaScript ecosystem. I
              specialize in creating seamless user experiences and efficient API
              architectures.
            </Typography>

            <Typography
              variant="h6"
              className="text-slate-900 dark:text-white mb-4 font-bold"
            >
              Technical Stack
            </Typography>
            <TechStacks />
          </Grid>
        </Grid>
        <WorkExperiences />
      </Container>
    </Box>
  );
}
