import { css } from '@emotion/react';
import type { Theme } from '@mui/material';

export const styles = {
  container: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  `,
  content: (theme: Partial<Theme>) => css`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: ${theme.spacing?.(3)};
    width: 500px;
    background: ${theme.palette?.background.paper};
    outline: none;
  `,
};
