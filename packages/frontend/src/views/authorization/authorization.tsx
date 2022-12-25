import { Avatar } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';

import { styles } from './authorization.styles';
import { SignIn } from './sign-in';

export const Authorization = () => {
  return (
    <div css={styles.container}>
      <Avatar css={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <SignIn />
    </div>
  );
};
