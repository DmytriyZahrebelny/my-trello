import { BrowserRouter } from 'react-router-dom';

import { Routing } from '@core/routing';
import { ThemeProvider, QueryProvider, AuthProvider } from '@core/providers';

export const App = () => (
  <BrowserRouter>
    <QueryProvider>
      <AuthProvider>
        <ThemeProvider>
          <div>
            <Routing />
          </div>
        </ThemeProvider>
      </AuthProvider>
    </QueryProvider>
  </BrowserRouter>
);
