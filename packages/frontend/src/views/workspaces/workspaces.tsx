import { Grid } from '@mui/material';

import { WorkspacesMenu } from './workspaces-menu';
import { styles } from './workspaces.styles';

export const Workspaces = () => {
  return (
    <Grid container css={styles.container}>
      <Grid xs={3} item>
        <WorkspacesMenu />
      </Grid>
      <Grid xs={9} item>
        work-space-dashboard
      </Grid>
    </Grid>
  );
};
