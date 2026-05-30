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
];

function TechStacks() {
  return (
    <Box className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Chip
          key={skill}
          label={skill}
          className="bg-blue-50 text-blue-600 dark:bg-blue-900/30! dark:text-blue-400! border-none font-medium"
        />
      ))}
    </Box>
  );
}

export default TechStacks;
