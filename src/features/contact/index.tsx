import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import ContactListSection from './components/ContactListSection';
import MessageSection from './components/MessageSection';

export default function ContactPage() {
  return (
    <Box className="py-12 px-4">
      <Container maxWidth="lg">
        <Box className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-4xl md:text-6xl font-extrabold text-slate-900! dark:text-white! mb-4"
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </Typography>
        </Box>

        <Grid container spacing={6} >
          <Grid size={{xs: 12, md: 8}}>
            <Paper
              elevation={0}
              className="p-8 md:p-12 border border-gray-200 dark:border-slate-800 bg-white! dark:bg-slate-900! rounded-3xl"
            >
              <Grid container spacing={4}>
                <Grid size={{xs: 12, sm: 6}}>
                  <ContactListSection />
                </Grid>

                <Grid size={{xs: 12, sm: 6}}>
                  <MessageSection />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
