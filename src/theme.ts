import { extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#3b82f6',
        },
        secondary: {
          main: '#64748b',
        },
        background: {
          default: '#f8fafc',
          paper: '#ffffff',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#3b82f6',
        },
        secondary: {
          main: '#94a3b8',
        },
        background: {
          default: '#0f172a',
          paper: '#1e293b',
        },
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: ({ theme }) => ({
          borderColor: theme.palette.secondary.main,
        }),
        input: ({ theme }) => ({
          color: theme.palette.secondary.main,
        }),
      }
    }
  },
});

export default theme;
