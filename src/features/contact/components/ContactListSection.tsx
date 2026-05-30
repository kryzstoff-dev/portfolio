import { Box, Typography } from "@mui/material";
import { Mail, MessageSquare } from "lucide-react";

function ContactListSection() {
  return (
    <Box className="flex flex-col gap-6">
      <Box className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
          <Mail size={24} />
        </div>
        <Box>
          <Typography
            variant="caption"
            className="text-slate-500 dark:text-slate-400 uppercase font-bold"
          >
            Email
          </Typography>
          <Typography
            variant="body1"
            className="font-medium text-slate-900 dark:text-white"
          >
            hello@example.com
          </Typography>
        </Box>
      </Box>
      <Box className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
          <MessageSquare size={24} />
        </div>
        <Box>
          <Typography
            variant="caption"
            className="text-slate-500 dark:text-slate-400 uppercase font-bold"
          >
            DM
          </Typography>
          <Typography
            variant="body1"
            className="font-medium text-slate-900 dark:text-white"
          >
            @devportfolio
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactListSection;
