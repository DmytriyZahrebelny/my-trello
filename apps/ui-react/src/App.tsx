import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Routing } from '@core/routing';
import { Main } from '@core/layouts/main';
import { ThemeProvider, QueryProvider, AuthProvider } from '@core/providers';

export const App = () => (
  <BrowserRouter>
    <RecoilRoot>
      <QueryProvider>
        <AuthProvider>
          <ThemeProvider>
            <Main>
              <Routing />
            </Main>
          </ThemeProvider>
        </AuthProvider>
      </QueryProvider>
    </RecoilRoot>
  </BrowserRouter>
);
