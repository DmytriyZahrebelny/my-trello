import { lazy, FunctionComponent } from 'react';

export const AuthorizationLayout = lazy<FunctionComponent>(() =>
  import('./authorization-layout' as string).then((module) => ({
    default: (module as { AuthorizationLayout: FunctionComponent }).AuthorizationLayout,
  })),
);
