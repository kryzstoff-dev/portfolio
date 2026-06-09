"use client";

import { Box, Container, Typography } from '@mui/material';
import ProjectCard from '@/features/projects/components/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <Box className="py-12 px-4">
      <Container maxWidth="lg">
        <Box className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4!"
          >
            Featured Projects
          </Typography>
          <Typography
            variant="h6"
            className="text-slate-600 dark:text-slate-400 mx-auto"
          >
            A collection of applications I&apos;ve built, from mobile apps to web applications with complex dashboards.
          </Typography>
        </Box>

        <div className="columns-1 md:columns-2 lg:columns-3">
          {projects.map((project) => (
            <div key={project.title} className="break-inside-avoid mb-8">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Container>
    </Box>
  );
}
