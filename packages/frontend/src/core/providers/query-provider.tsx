import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

interface Props {
  children: ReactNode;
}

export const QueryProvider = ({ children }: Props) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
