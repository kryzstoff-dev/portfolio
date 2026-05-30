import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";

function ConnectSection() {
    return (
        <Box className="mt-24 pt-12 border-t border-gray-200 dark:border-slate-800">
          <Typography
            variant="h6"
            className="text-center text-slate-400 mb-8! uppercase tracking-widest text-sm! font-semibold!"
          >
            Connect With Me
          </Typography>
          <div className="flex justify-center gap-6">
            <IconButton
              component={Link}
              href="https://github.com"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
            >
              <GitHub className="text-slate-900 dark:text-slate-300" />
            </IconButton>
            <IconButton
              component={Link}
              href="https://linkedin.com"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
            >
              <LinkedIn className="text-slate-900 dark:text-slate-300" />
            </IconButton>
            <IconButton
              component={Link}
              href="https://twitter.com"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
            >
              <Twitter className="text-slate-900 dark:text-slate-300" />
            </IconButton>
          </div>
        </Box>
      );
}

export default ConnectSection;
