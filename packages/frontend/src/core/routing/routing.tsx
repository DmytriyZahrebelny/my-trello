import { Route, Routes } from 'react-router-dom';

import { Authorization, SignIn, SignUp } from '@views/authorization';
import { ROUTES } from '../constants';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Authorization />}>
        <Route path="/" element={<SignIn />} />
        <Route path={ROUTES.signUp} element={<SignUp />} />
      </Route>
    </Routes>
  );
};
