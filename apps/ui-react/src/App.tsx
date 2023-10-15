import { RecoilRoot } from 'recoil';

import { QueryProvider } from '@providers/query-provider';
import { ThemeProvider } from '@providers/theme-provider';
import { RouterProvider } from '@providers/router-provider';

export const App = () => (
  <RecoilRoot>
    <QueryProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </QueryProvider>
  </RecoilRoot>
);
