"use client";

import { Box, Container, Typography, Grid } from '@mui/material';
import ProjectCard from '@/features/projects/components/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <Box className="py-12 px-4">
      <Container maxWidth="lg">
        <Box className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            Selected Projects
          </Typography>
          <Typography
            variant="h6"
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A collection of things I've built, from AI-powered tools to complex dashboards.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid size={{xs: 12, sm: 6, md: 4}} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
