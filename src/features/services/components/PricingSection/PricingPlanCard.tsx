import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import clsx from "clsx";

type PricingPlanType = {
  recommended: boolean;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
};

function PricingPlanCard({ plan }: { plan: PricingPlanType }) {
  return (
    <Grid
      size={{ xs: 12, md: 4 }}
      className={plan.recommended ? "transform -translate-y-2" : ""}
    >
      <Paper
        elevation={0}
        className={clsx(
          "p-6 md:p-8 border border-gray-200 dark:border-slate-800 bg-white! dark:bg-slate-900! rounded-2xl h-100% transition-transform duration-300",
          plan.recommended
            ? "border-2 border-blue-500 dark:border-blue-400"
            : "",
        )}
      >
        {plan.recommended && (
          <Box className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </Box>
        )}

        <Typography
          variant="h5"
          className="mb-4 text-slate-900 dark:text-white"
        >
          {plan.title}
        </Typography>

        <Box className="mb-6">
          <Typography variant="h3" className="text-slate-900 dark:text-white">
            {plan.price}
          </Typography>
          <Typography
            variant="body2"
            className="text-slate-500 dark:text-slate-400"
          >
            {plan.period}
          </Typography>
        </Box>

        <Typography
          variant="body1"
          className="text-slate-600 dark:text-slate-400 mb-6"
        >
          {plan.description}
        </Typography>

        <Box className="mb-6">
          {plan.features.map((feature, featureIndex) => (
            <Box key={featureIndex} className="flex items-start mb-2">
              <Typography
                variant="body2"
                className="shrink-0 text-blue-500 dark:text-blue-400 mr-2 mt-0.5"
              >
                •
              </Typography>
              <Typography
                variant="body2"
                className="text-slate-600 dark:text-slate-400"
              >
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button
          variant="contained"
          color={!plan.recommended ? "secondary" : "primary"}
          className="w-full py-3 text-lg"
        >
          {plan.buttonText}
        </Button>

        {/* {!plan.recommended && (
          <Box className="mt-4 text-center">
            <Button
              variant="outlined"
              color="primary"
              className="px-6 py-2 text-sm"
            >
              Customize Plan
            </Button>
          </Box>
        )} */}
      </Paper>
    </Grid>
  );
}

export default PricingPlanCard;
