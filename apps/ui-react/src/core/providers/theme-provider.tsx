import { ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import { Global, css } from '@emotion/react';

export const theme = createTheme({
  palette: {
    common: {
      black: '#ed6c02',
      white: '#4caf50',
    },
    primary: {
      light: '#ffffff',
      main: '#4caf50',
      dark: '#388e3c',
    },
    secondary: {
      light: '#2196f3',
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
      default: '#01579b',
      paper: '#FFFFFF',
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
          borderColor: '#4caf50',
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
          backgroundColor: '#4caf50',
          color: '#FFFFFF',

          '&:hover': {
            backgroundColor: '#388e3c',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#4caf50',
        },
      },
    },
  },
});

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  return (
    <MUIThemeProvider theme={theme}>
      {children}
      <Global
        styles={css`
          body {
            margin: 0;
            background: #f3f4f6;
          }
        `}
      />
    </MUIThemeProvider>
  );
};
