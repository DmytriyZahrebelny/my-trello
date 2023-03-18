import { memo } from 'react';

import { useWorkSpacesQuery } from '@core/api/api-work-spaces';

export const WorkspacesList = memo(() => {
  const { data: workspaces = [] } = useWorkSpacesQuery();

  console.log(workspaces);

  return <div>workspaces-list</div>;
});
