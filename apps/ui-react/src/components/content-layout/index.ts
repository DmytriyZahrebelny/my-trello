import { lazy, FunctionComponent } from 'react';

export const ContentLayout = lazy<FunctionComponent>(() =>
  import('./content-layout' as string).then((module) => ({
    default: (module as { ContentLayout: FunctionComponent }).ContentLayout,
  })),
);
