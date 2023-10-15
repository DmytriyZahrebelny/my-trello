import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { useUser } from '@api/api-authorization';
import { Loading } from './loading';
import { Header } from './header';

export const Layout = () => {
  const { data: user, isLoading } = useUser();

  return (
    <>
      <Header user={user} />
      <Suspense>{isLoading ? <Loading /> : <Outlet />}</Suspense>
    </>
  );
};
