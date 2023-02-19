import { ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';

import { GlobalStyles } from '../components/global-styles';
import { themeToggleState } from '@core/store/theme-toggle-state';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const theme = useRecoilValue(themeToggleState);

  return (
    <MUIThemeProvider theme={createTheme(theme === 'light' ? lightTheme : darkTheme)}>
      {children}
      <GlobalStyles />
    </MUIThemeProvider>
  );
};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    common: {
      black: '#ed6c02',
      white: '#34A853',
    },
    primary: {
      light: '#ffffff',
      main: '#34A853',
      dark: '#36373A',
    },
    secondary: {
      light: '#FB8E2A',
      main: '#fff',
    },
    error: {
      main: '#D14343',
      light: '#DA6868',
      dark: '#922E2E',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#121828',
      secondary: '#65748B',
      disabled: 'rgba(55, 65, 81, 0.48)',
    },
    background: {
      default: '#FFFFFF',
      paper: '#EDEDF2',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#34A853',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#388e3c',
              },
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          backgroundColor: '#34A853',
          color: '#FFFFFF',

          '&:hover': {
            backgroundColor: '#388e3c',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#344449',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#718797',
        },
      },
    },
  },
};

export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    common: {
      black: '#ed6c02',
      white: '#34A853',
    },
    primary: {
      light: '#ffffff',
      main: '#34A853',
      dark: '#388e3c',
      contrastText: '#EDEDF2',
    },
    secondary: {
      light: '#FB8E2A',
      main: '#fff',
    },
    error: {
      main: '#D14343',
      light: '#DA6868',
      dark: '#922E2E',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#121828',
      secondary: '#65748B',
      disabled: 'rgba(55, 65, 81, 0.48)',
    },
    background: {
      default: '#313237',
      paper: '#36373A',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&:autofill': {
            boxShadow: 'none !important',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#34A853',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#34A853',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#388e3c',
              },
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          backgroundColor: 'inherit',
          color: '#34A853',
          border: '2px solid #34A853',

          '&:hover': {
            color: '#388e3c',
            border: '2px solid #388e3c',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#EDEDF2',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
  },
};
