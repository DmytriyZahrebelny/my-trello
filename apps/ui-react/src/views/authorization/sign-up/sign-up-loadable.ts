import { lazy } from 'react';

export const SignUp = lazy(() => import('./sign-up' as string).then((module) => ({ default: module.SignUp })));
