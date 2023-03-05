import { lazy } from 'react';

export const Authorization = lazy(() =>
  import('./authorization' as string).then((module) => ({ default: module.Authorization }))
);
