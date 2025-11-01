import { createTheme, type PaletteMode } from '@mui/material/styles';

export const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#ffffff' : '#121212',
    },
    secondary: {
      main: mode === 'light' ? '#ffffff' : '#1d1d1d',
    },
    background: {
      default: mode === 'light' ? '#ffffff' : '#121212',
    },
    text: {
      primary: mode === 'light' ? '#0f172a' : '#E0E0E0',
      secondary: mode === 'light' ? '#475569' : '#B0B0B0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
