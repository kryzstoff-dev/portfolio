"use client";

import {
  Box,
  Button,
  Container,
  Grid,
} from "@mui/material";
import MainSection from "./components/MainSection";
import TechStacksSection from "./components/TechStacksSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Focus from "./components/Focus";

function Home() {
  return (
    <Box className="flex flex-col items-center min-h-[calc(100vh-64px)] py-12 px-4">
      {/* Laptop */}
      <div className="hidden dark:block">
        <Image
          src="/assets/images/laptop.png"
          alt=""
          className="pointer-events-none absolute right-[-2%] top-[8%] -z-10 hidden w-auto max-w-full select-none lg:block"
          width={1672}
          height={941}
          loading="eager"
        />
      </div>
      <div className="block dark:hidden">
        <Image
          src="/assets/images/laptop_light.png"
          alt=""
          className="pointer-events-none absolute right-[-2%] top-[8%] -z-10 hidden w-auto max-w-full select-none lg:block"
          width={1672}
          height={941}
          loading="eager"
        />
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid
            size={{ xs: 12, md: 7 }}
            className="text-center md:text-left z-10"
          >
            <MainSection />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} className="flex justify-center">
            <div className="flex flex-col">
              <TechStacksSection />
            </div>
          </Grid>
        </Grid>

        <Focus />

        <Box className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button
            component={Link}
            href="/projects"
            variant="contained"
            size="large"
            endIcon={<ArrowRight size={20} />}
            className="bg-teal-600 hover:bg-teal-700 px-8 py-3 text-lg"
          >
            View My Projects
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
      </Container>
    </Box>
  );
}

export default Home;
