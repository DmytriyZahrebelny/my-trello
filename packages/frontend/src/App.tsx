import { BrowserRouter } from 'react-router-dom';

import { Routing } from '@core/routing';
import { ThemeProvider, QueryProvider } from '@core/providers';

export const App = () => (
  <BrowserRouter>
    <QueryProvider>
      <ThemeProvider>
        <Routing />
      </ThemeProvider>
    </QueryProvider>
  </BrowserRouter>
);
