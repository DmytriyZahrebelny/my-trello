import { Route, Routes } from 'react-router-dom';

import { Authorization, SignIn, SignUp } from '@views/authorization';
import { Workspaces } from '@views/workspaces';
import { useAuthContext } from '@core/providers';
import { ROUTES } from '../constants';
import { Loading } from '../components/loading';

export const Routing = () => {
  const { isAuthorized, isLoading } = useAuthContext();

  return isLoading ? (
    <Loading />
  ) : isAuthorized ? (
    <Routes>
      <Route path="/" element={<Workspaces />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Authorization />}>
        <Route path="/" element={<SignIn />} />
        <Route path={ROUTES.signUp} element={<SignUp />} />
      </Route>
    </Routes>
  );
};
