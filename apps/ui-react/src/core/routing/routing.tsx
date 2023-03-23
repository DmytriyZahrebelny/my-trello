import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Authorization, SignIn, SignUp } from '@views/authorization';
import { Workspaces } from '@views/workspaces';
import { Board } from '@views/board';
import { useAuthContext } from '@core/providers';
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
        <Route path="/:id" element={<Board />} />
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
