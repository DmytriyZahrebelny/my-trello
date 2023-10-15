import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import { Layout } from '@components/layout';
import { AuthorizationLayout } from '@components/authorization-layout';
import { ContentLayout } from '@components/content-layout';
import { Workspaces } from '@views/workspaces';
import { Board } from '@views/board';
import { SignIn } from '@views/sign-in';
import { SignUp } from '@views/sign-up';

const authRouter = [
  {
    path: '/',
    element: <AuthorizationLayout />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: ROUTES.signIn,
        element: <SignIn />,
      },
      {
        path: ROUTES.signUp,
        element: <SignUp />,
      },
    ],
  },
];

const contentRouter = [
  {
    path: '/',
    element: <ContentLayout />,
    children: [
      {
        index: true,
        element: <Workspaces />,
      },
      {
        path: '/:boardId',
        element: <Board />,
      },
    ],
  },
];

export const getRouterSchema = (isAuth: boolean) =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: isAuth ? authRouter : contentRouter,
    },
  ]);
