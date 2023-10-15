import { TextField, Typography } from '@mui/material';
import type { User } from '@shared/types';

import { HeaderThemeSwitch } from './header-theme-switch';
import { HeaderAvatar } from './header-avatar';
import { styles } from './header.styles';

interface Props {
  user?: User;
}

export const Header = ({ user }: Props) => {
  return (
    <header css={styles.header}>
      <div css={styles.leftContent}>
        <Typography css={styles.logo} variant="h5">
          My Trello
        </Typography>
        {user && <TextField css={styles.searchField} placeholder="Search" />}
      </div>
      <div css={styles.rightContent}>
        <HeaderThemeSwitch />
        {user && <HeaderAvatar userName={user.name} userId={user.id} />}
      </div>
    </header>
  );
};
