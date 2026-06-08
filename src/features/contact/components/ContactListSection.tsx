import { contactMethods } from "@/data/contactMethods";
import { Box, Link, Typography } from "@mui/material";

function ContactListSection() {
  return (
    <Box className="flex flex-col gap-6">
      {contactMethods.map((method, index) => (
        <Box
          className="flex items-center gap-4 p-2 md:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 no-underline!"
          component={Link}
          href={method.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <div className="p-1.5 md:p-3 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-xl">
            {method.icon}
          </div>
          <Box>
            <Typography
              variant="caption"
              className="text-slate-500 dark:text-slate-400 uppercase font-bold"
            >
              {method.type}
            </Typography>
            <Typography
              variant="body1"
              className="font-medium text-slate-900 dark:text-white text-ellipsis overflow-hidden whitespace-nowrap max-w-52"
            >
              {method.value}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default ContactListSection;
