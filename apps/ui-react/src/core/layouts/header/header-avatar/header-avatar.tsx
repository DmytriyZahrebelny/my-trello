import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Avatar, Popover, Typography } from '@mui/material';

import { clearTokens } from '@core/services/auth-services';
import { useLogOutMutation } from '@core/api/api-authorization';
import { client } from '@core/providers/query-provider';
import { QUERY_KEYS } from '@core/constants/query-keys';
import { styles } from '../header.styles';

interface Props {
  userName: string;
  userId: string;
}

export const HeaderAvatar = ({ userName, userId }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { mutate: logOut } = useLogOutMutation();

  const handlePopoverOpen = (evt: MouseEvent<HTMLElement>) => {
    setAnchorEl(evt.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleUserLogOut = () => {
    clearTokens();
    logOut(userId, {
      onSuccess: async () => {
        await client.resetQueries([QUERY_KEYS.user], { exact: true });
      },
    });
  };

  return (
    <>
      <Avatar css={styles.avatar} aria-owns="header-avatar" onMouseEnter={handlePopoverOpen}>
        {userName[0].toUpperCase()}
      </Avatar>
      <Popover
        css={styles.popover}
        open={Boolean(anchorEl)}
        id="header-avatar"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        disableRestoreFocus
        onClose={handlePopoverClose}
      >
        <Typography css={styles.popoverItem} variant="body1" onClick={handleUserLogOut}>
          Log Out
        </Typography>
      </Popover>
    </>
  );
};
