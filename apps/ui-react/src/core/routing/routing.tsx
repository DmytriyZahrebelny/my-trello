import { Route, Routes } from 'react-router-dom';

import { Authorization, SignIn, SignUp } from '@views/authorization';
import { Workspaces } from '@views/workspaces';
import { useAuthContext } from '@core/providers';
import { ROUTES } from '../constants';
import { Loading } from '../components/loading';
import { Suspense } from 'react';

export const Routing = () => {
  const { isAuthorized, isLoading } = useAuthContext();

  return isLoading ? (
    <Loading />
  ) : isAuthorized ? (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Workspaces />} />
      </Routes>
    </Suspense>
  ) : (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Authorization />}>
          <Route path="/" element={<SignIn />} />
          <Route path={ROUTES.signUp} element={<SignUp />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
