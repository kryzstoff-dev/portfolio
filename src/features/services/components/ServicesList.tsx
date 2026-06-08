import { services } from "@/data/services";
import { Chip, Box, Typography } from "@mui/material";

function ServicesList() {
  return (
    <div className="grid grid-flow-row grid-cols-3 md:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <Box
          key={index}
          className="p-3 md:p-4 lg:p-6 col-span-3 sm:col-span-2 md:col-span-2 border border-gray-200 dark:border-slate-800 bg-slate-50! dark:bg-slate-900/25! rounded-2xl h-100%"
        >
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6 text-teal-400 group-hover:scale-105 duration-300">
            {service.icon}
          </div>
          <Typography
            variant="h5"
            component="h3"
            className="mb-4! text-base! font-semibold! md:text-xl! text-slate-900 dark:text-slate-200"
          >
            {service.title}
          </Typography>
          <Typography
            variant="body1"
            className="text-sm! md:text-base! text-slate-600 dark:text-slate-400 mb-4!"
          >
            {service.description}
          </Typography>
          <div className="mb-4 flex flex-wrap gap-2">
            {service.stacks.map((stack, stackIndex) => (
              <Chip
                key={stackIndex}
                label={stack}
                size="small"
                className="bg-slate-50 text-teal-600 dark:bg-slate-950/80! dark:text-slate-500! border-none font-medium px-2!"
              />
            ))}
          </div>
        </Box>
      ))}
    </div>
  );
}

export default ServicesList;
