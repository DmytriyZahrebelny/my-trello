import { css } from '@emotion/react';
import type { Theme } from '@mui/material';

export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,
  list: (theme: Partial<Theme>) => css`
    display: grid;
    gap: ${theme.spacing?.(2)};
    grid-auto-flow: column;
    grid-auto-columns: 15%;
    padding: 0 0 20px 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: red;
    list-style: none;
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior-inline: contain;

    li {
      display: flex;
      flex-direction: column-reverse;
    }
  `,
};
