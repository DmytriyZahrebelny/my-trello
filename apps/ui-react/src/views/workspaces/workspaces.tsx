import { Grid } from '@mui/material';

import { WorkspacesMenu } from './workspaces-menu';
import { WorkspacesList } from './workspaces-list';
import { styles } from './workspaces.styles';

export const Workspaces = () => {
  return (
    <Grid container css={styles.container}>
      <Grid xs={2.2} item>
        <WorkspacesMenu />
      </Grid>
      <Grid xs={9.8} item>
        <WorkspacesList />
      </Grid>
    </Grid>
  );
};
