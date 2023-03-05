import { lazy } from 'react';

export const SignIn = lazy(() => import('./sign-in' as string).then((module) => ({ default: module.SignIn })));
