import { css } from '@emotion/react';
import type { Theme } from '@mui/material';

export const styles = {
  list: (theme: Partial<Theme>) => css`
    display: grid;
    gap: ${theme.spacing?.(2)};
    grid-auto-flow: column;
    grid-auto-columns: 15%;
    padding: 0 20px 20px;
    margin: 0;
    width: 100%;
    height: 100%;
    list-style: none;
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior-inline: contain;
  `,
};
