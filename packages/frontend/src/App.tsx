import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter } from 'react-router-dom';

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => (
  <QueryClientProvider client={client}>
    <HashRouter>Hello</HashRouter>
  </QueryClientProvider>
);
