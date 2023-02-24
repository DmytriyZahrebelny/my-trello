import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Routing } from '@core/routing';
import { AppPageWrapper } from '@core/components/app-page-wrapper';
import { ThemeProvider, QueryProvider, AuthProvider } from '@core/providers';

export const App = () => (
  <BrowserRouter>
    <RecoilRoot>
      <QueryProvider>
        <AuthProvider>
          <ThemeProvider>
            <AppPageWrapper>
              <Routing />
            </AppPageWrapper>
          </ThemeProvider>
        </AuthProvider>
      </QueryProvider>
    </RecoilRoot>
  </BrowserRouter>
);
