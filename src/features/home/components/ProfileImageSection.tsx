import { Box } from "@mui/material";

function ProfileImageSection() {
  return (
    <Box className="relative w-64 h-64 md:w-80 md:h-80 hidden lg:block">
      <div className="absolute inset-0 bg-teal-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="relative w-full h-full bg-slate-200 dark:bg-slate-800 rounded-2xl border-4 border-white dark:border-slate-700 shadow-2xl overflow-hidden">
        <img
          src="/assets/images/profile.jpg"
          alt="Developer Portrait"
          className="w-full h-full object-cover"
        />
      </div>
    </Box>
  );
}

export default ProfileImageSection;
