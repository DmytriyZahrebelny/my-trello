import { memo } from 'react';
import { Grid } from '@mui/material';

import { useWorkSpacesQuery } from '@core/api/api-work-spaces';
import { WorkspaceListItem } from './workspaces-list-item';
import { styles } from './workspaces-list.styles';

export const WorkspacesList = memo(() => {
  const { data: workspaces = [] } = useWorkSpacesQuery();

  return (
    <Grid css={styles.container} container spacing={3}>
      {workspaces.map(({ id, name }) => (
        <Grid item key={id} xs={4}>
          <WorkspaceListItem id={id} name={name} />
        </Grid>
      ))}
    </Grid>
  );
});
