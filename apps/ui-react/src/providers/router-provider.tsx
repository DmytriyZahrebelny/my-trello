import { RouterProvider as Router } from 'react-router-dom';

import { getRouterSchema } from '@router';
import { useUser } from '@api/api-authorization';
import { useMemo } from 'react';

export const RouterProvider = () => {
  const { error } = useUser();
  const isAuth = Boolean(error?.response?.status === 401 || error?.response?.status === 403);

  const router = useMemo(() => getRouterSchema(isAuth), [isAuth]);

  return <Router router={router} />;
};
