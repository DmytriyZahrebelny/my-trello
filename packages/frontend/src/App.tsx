import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Routing } from '@core/routing';

export const thema = createTheme({
  palette: {
    common: {
      white: '#fff',
    },
    text: {
      primary: '#273b61',
    },
    background: {
      // light: '#d5edfe',
      // secondary: '#3b6d9a',
    },
  },
});

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => (
  <QueryClientProvider client={client}>
    <ThemeProvider theme={thema}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);
