import { Box, Chip } from "@mui/material";

const skills = [
  "React",
  "React Native",
  "Redux",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "MySQL",
  "Prisma",
  "Tailwind CSS",
  "Material UI",
  "JavaScript",
  "Laravel",
];

function TechStacks() {
  return (
    <Box className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Chip
          key={skill}
          label={skill}
          className="bg-teal-50 text-teal-600 dark:bg-teal-900/30! dark:text-teal-400! border-none font-medium"
        />
      ))}
    </Box>
  );
}

export default TechStacks;
