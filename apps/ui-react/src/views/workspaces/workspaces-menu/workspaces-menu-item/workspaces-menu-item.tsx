import { useState } from 'react';
import { List, ListItemButton, ListItemText, ListItemIcon, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore, Dashboard, PeopleAlt, Settings } from '@mui/icons-material';

import { styles } from './workspaces-menu-item.styles';

interface Props {
  name: string;
}

export const WorkspacesMenuItem = ({ name }: Props) => {
  const [open, setOpen] = useState(false);

  const handleItemClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton css={styles.listItem} onClick={handleItemClick} alignItems="center">
        <div css={styles.workSpaceIcon}>{name[0].toLocaleUpperCase()}</div>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open}>
        <List component="div" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText secondary="boards" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <PeopleAlt />
            </ListItemIcon>
            <ListItemText secondary="members" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText secondary="settings" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};
