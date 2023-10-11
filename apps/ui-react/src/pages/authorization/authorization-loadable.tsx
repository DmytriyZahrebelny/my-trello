import { lazy, FunctionComponent } from 'react';

export const Authorization = lazy<FunctionComponent>(() =>
  import('./authorization' as string).then((module) => ({
    default: (module as { Authorization: FunctionComponent }).Authorization,
  })),
);
