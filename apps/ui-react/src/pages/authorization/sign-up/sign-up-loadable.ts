import { lazy, FunctionComponent } from 'react';

export const SignUp = lazy<FunctionComponent>(() =>
  import('./sign-up' as string).then((module) => ({ default: (module as { SignUp: FunctionComponent }).SignUp })),
);
