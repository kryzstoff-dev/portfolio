import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { MenuIcon, X } from "lucide-react";
import { useNavigationStore } from "@/providers/NavigationStoreProvider";
import clsx from "clsx";

function ToolbarContent(props: {
  navLinks: { name: string; href: string }[];
  handleDrawerToggle: () => void;
}) {
  const { navLinks, handleDrawerToggle } = props;
  const { isOpen, activeLink, setActiveLink } = useNavigationStore(
    (state) => state,
  );

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <Typography
        variant="h6"
        component="div"
        className="font-bold text-slate-900 dark:text-white"
      >
        <Link href="/" className="no-underline text-inherit flex flex-row items-center">
          <Avatar
            alt="Chris Alonzo"
            src="/assets/images/profile.jpg"
            className="mr-2"
          />
          Krysztoff
        </Link>
      </Typography>

      {/* Desktop Nav */}
      <Box className="hidden md:flex gap-4 items-center bg-slate-200 dark:bg-slate-900/80 px-2 py-1 rounded-full">
        {navLinks.map((link) => (
          <Button
            key={link.name}
            component={Link}
            href={link.href}
            onClick={() => handleSetActiveLink(link.href)}
            className={clsx(
              "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium normal-case rounded-full!",
              activeLink === link.href
                ? "text-slate-900! dark:text-white! bg-gray-300! dark:bg-slate-800/60!"
                : "",
            )}
          >
            {link.name}
          </Button>
        ))}
      </Box>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <Box className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <IconButton
          color="inherit"
          edge="end"
          onClick={handleDrawerToggle}
          className="text-slate-600 dark:text-slate-300"
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </IconButton>
      </Box>
    </>
  );
}

export default ToolbarContent;
