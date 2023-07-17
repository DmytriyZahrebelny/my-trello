import { lazy, FunctionComponent } from 'react';

export const Workspaces = lazy<FunctionComponent>(() =>
  import('./workspaces' as string).then((module) => ({
    default: (module as { Workspaces: FunctionComponent }).Workspaces,
  })),
);
