import { Link } from 'react-router-dom';
import ViewColumnRoundedIcon from '@mui/icons-material/ViewColumnRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import { Tooltip } from '@mui/material';

import { styles } from './menu.styles';

export const Menu = () => (
  <div css={styles.container}>
    <Link to="/">
      <Tooltip title="Work Spaces">
        <ViewColumnRoundedIcon fontSize="large" />
      </Tooltip>
    </Link>
    <Link to="/settings">
      <Tooltip title="Settings">
        <SettingsIcon fontSize="large" />
      </Tooltip>
    </Link>
  </div>
);
