import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';
import { Global, css } from '@emotion/react';
import type { ThemeOptions, Theme } from '@mui/material/styles';
import type { ReactNode } from 'react';

import { themeToggleState } from '@store/theme-toggle-state';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const theme = useRecoilValue(themeToggleState);

  return (
    <MUIThemeProvider theme={createTheme(theme === 'light' ? lightTheme : darkTheme)}>
      {children}
      <Global styles={globalStyles} />
    </MUIThemeProvider>
  );
};

const globalStyles = (theme: Partial<Theme>) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  input {
    color-scheme: ${theme.palette?.mode};
  }
  body {
    height: 100vh;
  }
  .app-wrapper {
    height: 100%;
    background: ${theme.palette?.background.default};
    display: flex;
    flex-direction: column;
  }
`;

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    common: {
      black: '#404144',
      white: '#ffffff',
    },
    primary: {
      light: '#EDEDF2',
      main: '#E8EAEE',
      dark: '#B6C7D5',
    },
    secondary: {
      light: '#4caf50',
      main: '#34A853',
      dark: '#388e3c',
    },
    text: {
      primary: '#344449',
    },
    background: {
      default: '#FFFFFF',
      paper: '#ffffff',
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
        root: {
          width: '100%',
        },
        input: {
          '&:autofill': {
            boxShadow: 'none !important',
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
      black: '#404144',
      white: '#ffffff',
    },
    primary: {
      main: '#404144',
      dark: '#36373A',
    },
    secondary: {
      light: '#4caf50',
      main: '#34A853',
      dark: '#388e3c',
    },
    text: {
      primary: '#EDEDF2',
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
        root: {
          width: '100%',
        },
        input: {
          '&:autofill': {
            boxShadow: 'none !important',
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
