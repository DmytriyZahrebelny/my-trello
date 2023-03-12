import { css } from '@emotion/react';
import type { Theme } from '@mui/material/styles';

export const styles = {
  menu: (theme: Partial<Theme>) => css`
    padding: ${theme?.spacing?.(0, 3)};
  `,
  menuTitleContainer: (theme: Partial<Theme>) => css`
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-bottom: ${theme?.spacing?.(1)};
    width: 100%;
  `,
  addWorkspace: css`
    cursor: pointer;
  `,
};
