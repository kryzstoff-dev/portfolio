import { services } from "@/data/services";
import { Chip, Grid, Paper, Typography } from "@mui/material";

function ServicesList() {
  return (
    <Grid container spacing={6}>
      {services.map((service, index) => (
        <Grid size={{ xs: 12, md: 4 }} key={index}>
          <Paper
            elevation={0}
            className="p-6 md:p-8 border border-gray-200 dark:border-slate-800 bg-white! dark:bg-slate-900! rounded-2xl h-100%"
          >
            <Typography
              variant="h5"
              className="mb-4! text-slate-900 dark:text-slate-200"
            >
              {service.title}
            </Typography>
            <Typography
              variant="body1"
              className="text-slate-600 dark:text-slate-400 mb-4!"
            >
              {service.description}
            </Typography>
            <Grid container spacing={2} className="mb-4 flex-wrap">
              {service.stacks.map((stack, stackIndex) => (
                <Chip
                  key={stackIndex}
                  label={stack}
                  size="small"
                  className="bg-blue-50 text-blue-600 dark:bg-blue-900/30! dark:text-blue-400! border-none font-medium"
                />
              ))}
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default ServicesList;
