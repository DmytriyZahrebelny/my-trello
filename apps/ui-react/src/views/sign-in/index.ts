import { lazy, FunctionComponent } from 'react';

export const SignIn = lazy<FunctionComponent>(() =>
  import('./sign-in' as string).then((module) => ({ default: (module as { SignIn: FunctionComponent }).SignIn })),
);
