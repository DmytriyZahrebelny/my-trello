import { lazy } from 'react';

export const Workspaces = lazy(() =>
  import('./workspaces' as string).then((module) => ({ default: module.Workspaces }))
);
