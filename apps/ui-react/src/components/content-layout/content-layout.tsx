import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Menu } from '../menu';
import { Main } from '../main';

export const ContentLayout = () => {
  return (
    <>
      <Menu />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
