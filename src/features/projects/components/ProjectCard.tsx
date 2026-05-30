"use client";

import { Card, CardContent, CardMedia, Typography, Chip, Button, Box } from '@mui/material';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';
import { GitHub } from '@mui/icons-material';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-slate-800 bg-white! dark:bg-slate-900!"
      elevation={0}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        className="object-cover text-slate-900 dark:text-slate-400"
      />
      <CardContent className="grow flex flex-col p-6">
        <Typography variant="h5" component="h3" className="font-bold mb-2 text-slate-900 dark:text-white!">
          {project.title}
        </Typography>
        <Typography variant="body2" className="text-slate-600 dark:text-slate-400! mb-4 line-clamp-3">
          {project.description}
        </Typography>

        <Box className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              className="bg-blue-50 text-blue-600 dark:bg-blue-900/30! dark:text-blue-400! border-none"
            />
          ))}
        </Box>

        <Box className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-slate-800">
          <Button
            component={Link}
            href={project.github}
            startIcon={<GitHub />}
            size="small"
            className="text-slate-600 dark:text-slate-400 normal-case"
          >
            Code
          </Button>
          <Button
            component={Link}
            href={project.link}
            endIcon={<ExternalLink size={18} />}
            variant="contained"
            size="small"
            className="bg-blue-600 hover:bg-blue-700 normal-case"
          >
            Demo
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
