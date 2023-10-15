import { Suspense } from 'react';
import { Avatar } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import type { Theme } from '@mui/material/styles';

export const styles = {
  container: (theme: Partial<Theme>) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px 0;
    width: 500px;
    margin: 0 auto;
    padding: ${theme.spacing?.(3)};
  `,
  avatar: (theme: Partial<Theme>) => css`
    background: ${theme.palette?.secondary.main};

    & svg {
      color: ${theme.palette?.common.white};
    }
  `,
};

export const AuthorizationLayout = () => (
  <div css={styles.container}>
    <Avatar css={styles.avatar}>
      <LockOutlinedIcon />
    </Avatar>
    <Suspense>
      <Outlet />
    </Suspense>
  </div>
);
