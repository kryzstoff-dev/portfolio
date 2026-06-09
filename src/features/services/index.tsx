import { Box, Container, Typography } from "@mui/material";
import ServicesList from "./components/ServicesList";

export default function ServicesPage() {
  return (
    <Box className="py-12 px-1 md:px-4">
      <Container maxWidth="lg">
        <Box className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-4xl! md:text-5xl! font-extrabold! text-slate-900 dark:text-white mb-4!"
          >
            Services
          </Typography>
          <Typography
            variant="body1"
            className="text-sm! md:text-base! text-slate-600 dark:text-slate-400 mx-auto"
          >
            I offer comprehensive software development services tailored to meet
            your business needs. From concept to deployment, I provide
            end-to-end solutions that are scalable, maintainable, and aligned
            with your goals.
          </Typography>
        </Box>

        <ServicesList />
        {/* <PricingSection /> */}
      </Container>
    </Box>
  );
}
