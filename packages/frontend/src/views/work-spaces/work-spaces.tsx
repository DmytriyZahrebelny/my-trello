import { Grid } from '@mui/material';

import { WorkSpacesMenu } from './work-spaces-menu';
import { styles } from './work-spaces.styles';

export const WorkSpaces = () => {
  return (
    <Grid container css={styles.container}>
      <Grid xs={3} item>
        <WorkSpacesMenu />
      </Grid>
      <Grid xs={9} item>
        work-space-dashboard
      </Grid>
    </Grid>
  );
};
