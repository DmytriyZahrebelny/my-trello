import { Route, Routes } from 'react-router-dom';

import { Authorization } from '@views/authorization';

export const Routing = () => {
  return (
    <Routes>
      <Route index element={<Authorization />} />
    </Routes>
  );
};
