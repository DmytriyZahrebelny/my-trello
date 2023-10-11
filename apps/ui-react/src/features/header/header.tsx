import { TextField, Typography } from '@mui/material';

import { useUser } from '@api/api-authorization/api-authorization';
import { HeaderThemeSwitch } from './header-theme-switch';
import { HeaderAvatar } from './header-avatar';
import { styles } from './header.styles';

export const Header = () => {
  const { data: user } = useUser();

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
