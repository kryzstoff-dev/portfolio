"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import ContactListSection from "./components/ContactListSection";
import MessageSection from "./components/MessageSection";

export default function ContactPage() {
  return (
    <Box className="py-12 px-1 md:px-4">
      <Container maxWidth="lg" className="px-1! md:px-4!">
        <Box className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-4xl! md:text-6xl! font-bold! md:font-extrabold! text-slate-900! dark:text-white! mb-4!"
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            className="text-sm! md:text-base! text-slate-600 dark:text-slate-400 mx-auto"
          >
            Whether you&apos;re looking for a React developer, frontend specialist,
            or someone to modernize an existing application, I&apos;d love to hear
            about your project.
          </Typography>
        </Box>

        <div className="w-full flex justify-center">
          <Paper
            elevation={0}
            className="w-full lg:w-3xl p-2 md:p-4 lg:p-8 py-4 md:py-6 lg:py-8 border border-gray-200 dark:border-slate-800 bg-white! dark:bg-slate-900! rounded-3xl"
          >
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <ContactListSection />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <MessageSection />
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    </Box>
  );
}
