import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import { workExperiences } from "@/data/workExperiences";

export default function WorkExperiences() {
  return (
    <Box className="py-12 px-4">
      <Container maxWidth="lg">
        <Box className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
          >
            Work Experience
          </Typography>
          <Typography
            variant="body1"
            className="text-slate-600 dark:text-slate-400 mx-auto"
          >
            Professional journey in software development
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {workExperiences.map((exp, index) => (
            <Grid
              size={{ xs: 12, md: 6, lg: 4 }}
              key={exp.id}
            >
              <Paper
                elevation={0}
                className="p-6 md:p-8 border border-gray-200 dark:border-slate-800 bg-white! dark:bg-slate-900! rounded-2xl h-100%"
              >
                <Box className="mb-4">
                  <Typography
                    variant="h5"
                    className="mb-2 text-slate-900 dark:text-white"
                  >
                    {exp.position}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-slate-600 dark:text-slate-400 mb-1"
                  >
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-slate-500 dark:text-slate-400"
                  >
                    {exp.location} • {exp.duration}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  className="text-slate-600 dark:text-slate-400 mb-4"
                >
                  {exp.description}
                </Typography>

                <Box className="mb-4">
                  {exp.achievements && (
                    <>
                      <Typography
                        variant="h6"
                        className="text-slate-900 dark:text-white mb-2"
                      >
                        Key Achievements
                      </Typography>
                      <Box className="pl-4">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <Box key={achievementIndex} className="mb-2">
                            <Typography
                              variant="body2"
                              className="flex-shrink-0 text-blue-500 dark:text-blue-400 mr-2 mt-0.5"
                            >
                              •
                            </Typography>
                            <Typography
                              variant="body2"
                              className="text-slate-600 dark:text-slate-400"
                            >
                              {achievement}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </>
                  )}
                </Box>

                <Box className="mb-4">
                  <Typography
                    variant="h6"
                    className="text-slate-900 dark:text-white mb-2"
                  >
                    Technologies
                  </Typography>
                  <Box className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        className="bg-blue-50 text-blue-600 dark:bg-blue-900/30! dark:text-blue-400! border-none font-medium"
                      />
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}