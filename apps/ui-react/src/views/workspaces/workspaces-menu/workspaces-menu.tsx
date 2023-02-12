import { Typography, List } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useWorkSpacesQuery } from '@core/api/api-work-spaces';
import { WorkspacesMenuItem } from './workspaces-menu-item';
import { styles } from './workspaces-menu.styles';

export const WorkspacesMenu = () => {
  const { data: workspaces = [] } = useWorkSpacesQuery();

  return (
    <div css={styles.menu}>
      <List
        component="nav"
        subheader={
          <div css={styles.menuTitleContainer}>
            <Typography variant="h6">Workspaces</Typography>
            <span css={styles.addWorkspace}>
              <AddIcon />
            </span>
          </div>
        }
      >
        {workspaces.map(({ id, name }) => (
          <WorkspacesMenuItem key={id} name={name} />
        ))}
      </List>
    </div>
  );
};
