import { useWorkSpacesQuery } from '@core/api/api-work-spaces';

export const WorkspacesList = () => {
  const { data: workspaces = [] } = useWorkSpacesQuery();

  console.log(workspaces);

  return <div>workspaces-list</div>;
};
