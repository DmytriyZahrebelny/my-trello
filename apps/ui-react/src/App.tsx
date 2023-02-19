import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Routing } from '@core/routing';
import { ThemeProvider, QueryProvider, AuthProvider } from '@core/providers';

export const App = () => (
  <BrowserRouter>
    <RecoilRoot>
      <QueryProvider>
        <AuthProvider>
          <ThemeProvider>
            <div>
              <Routing />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </QueryProvider>
    </RecoilRoot>
  </BrowserRouter>
);
