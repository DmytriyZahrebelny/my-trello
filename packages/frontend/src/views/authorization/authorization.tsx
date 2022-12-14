import { Avatar } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';

import { styles } from './authorization.styles';

export const Authorization = () => (
  <div css={styles.container}>
    <Avatar css={styles.avatar}>
      <LockOutlinedIcon />
    </Avatar>
    <Outlet />
  </div>
);
