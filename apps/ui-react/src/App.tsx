import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Routing } from '@router';
import { AppPageWrapper } from '@components/app-page-wrapper';
import { AuthProvider } from '@providers/auth-provider';
import { QueryProvider } from '@providers/query-provider';
import { ThemeProvider } from '@providers/theme-provider';

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
