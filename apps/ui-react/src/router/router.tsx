import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Authorization, SignIn, SignUp } from '@pages/authorization';
import { Workspaces } from '@pages/workspaces';
import { Board } from '@pages/board';
import { useAuthContext } from '@providers/auth-provider';
import { ROUTES } from '../constants';
import { Loading } from '../components/loading';

export const Routing = () => {
  const { isAuthorized, isLoading } = useAuthContext();

  return isLoading ? (
    <Loading />
  ) : isAuthorized ? (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Workspaces />} />
        <Route path="/:boardId" element={<Board />} />
      </Routes>
    </Suspense>
  ) : (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Authorization />}>
          <Route index element={<SignIn />} />
          <Route path={ROUTES.signUp} element={<SignUp />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
