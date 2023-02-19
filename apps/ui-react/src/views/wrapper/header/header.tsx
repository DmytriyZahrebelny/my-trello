import { TextField, Typography } from '@mui/material';

import { ThemeSwitch } from './theme-switch/theme-switch';
import { styles } from './header.styles';

export const Header = () => {
  return (
    <header css={styles.header}>
      <div css={styles.leftContent}>
        <Typography css={styles.logo} variant="h5">
          My Trello
        </Typography>
        <TextField css={styles.searchField} placeholder="Search" />
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </header>
  );
};
