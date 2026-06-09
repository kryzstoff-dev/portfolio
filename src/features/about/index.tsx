"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import TechStacks from "./components/TechStacks";
import MyApproachSection from "./components/MyApproachSection";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Box className="py-12 px-4">
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-teal-500 rounded-full blur-3xl opacity-20" />
              <Image
                src="/assets/images/profile.jpg"
                alt="About Me"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-slate-700"
                loading="eager"
                width={440}
                height={440}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h2"
              className="text-4xl! md:text-5xl! font-extrabold! text-slate-900 dark:text-white mb-6! text-center! lg:text-left!"
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              className="text-base! lg:text-lg! text-slate-600 dark:text-slate-400 mb-6! leading-relaxed"
            >
              I&apos;m Christopher Alonzo, a Software Developer based in Cebu,
              Philippines, with a strong focus on frontend development and
              modern JavaScript technologies.
            </Typography>
            <Typography
              variant="body1"
              className="text-base! lg:text-lg! text-slate-600 dark:text-slate-400 mb-8! leading-relaxed"
            >
              Over the past five years, I&apos;ve worked on web and mobile
              applications ranging from business platforms to production-ready
              mobile solutions. My experience includes React, Next.js, React
              Native, TypeScript, API integration, application modernization,
              and frontend architecture.
            </Typography>
            <Typography
              variant="body1"
              className="text-base! lg:text-lg! text-slate-600 dark:text-slate-400 mb-8! leading-relaxed"
            >
              What excites me most is solving complex problems and creating user
              experiences that feel simple, intuitive, and efficient.
            </Typography>

            <Typography
              variant="body1"
              className="text-base! lg:text-lg! text-slate-600 dark:text-slate-400 mb-8! leading-relaxed"
            >
              I enjoy working closely with designers, product teams, and backend
              developers to transform ideas into polished digital products that
              users genuinely enjoy using.
            </Typography>

            <Typography
              variant="h6"
              className="text-slate-900 dark:text-white mb-4! font-bold!"
            >
              Technical Stack
            </Typography>
            <TechStacks />
          </Grid>
        </Grid>
        <MyApproachSection />
      </Container>
    </Box>
  );
}
