import { lazy, FunctionComponent } from 'react';

export const Board = lazy<FunctionComponent>(() =>
  import('./board' as string).then((module) => ({ default: (module as { Board: FunctionComponent }).Board })),
);
