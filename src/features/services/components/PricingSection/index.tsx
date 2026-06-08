import { Box, Container, Typography, Grid } from "@mui/material";
import { pricingPlans } from "@/data/pricing";
import PricingPlanCard from "./PricingPlanCard";

export default function PricingSection() {
  return (
    <Box className="py-12 px-4">
      <Container maxWidth="lg">
        <Box className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-4xl! md:text-5xl! font-extrabold text-slate-900 dark:text-white mb-6!"
          >
            Pricing Plans
          </Typography>
          <Typography
            variant="body1"
            className="text-slate-600 dark:text-slate-400 mx-auto"
          >
            Choose the plan that best fits your needs. All plans are negotiable to suit your specific requirements.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {pricingPlans.map((plan, index) => (
            <PricingPlanCard key={index} plan={plan} />
          ))}
        </Grid>

        <Box className="mt-8 text-center text-slate-500 dark:text-slate-400">
          <Typography variant="body2">
            All prices are in USD and represent starting points for each package.
            Final pricing may vary based on specific project requirements and complexity.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}