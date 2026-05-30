import { Box, Button, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { MenuIcon, X } from "lucide-react";
import { useNavigationStore } from "@/providers/NavigationStoreProvider";

function ToolbarContent(props: {
  navLinks: { name: string; href: string }[];
  handleDrawerToggle: () => void;
}) {
  const { navLinks, handleDrawerToggle } = props;
  const {isOpen} = useNavigationStore((state) => state);

  return (
    <>
      <Typography
        variant="h6"
        component="div"
        className="font-bold text-slate-900 dark:text-white"
      >
        <Link href="/" className="no-underline text-inherit">
          Chris Portfolio
        </Link>
      </Typography>

      {/* Desktop Nav */}
      <Box className="hidden md:flex gap-4 items-center">
        {navLinks.map((link) => (
          <Button
            key={link.name}
            component={Link}
            href={link.href}
            className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium normal-case"
          >
            {link.name}
          </Button>
        ))}
        <ThemeToggle />
      </Box>

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
