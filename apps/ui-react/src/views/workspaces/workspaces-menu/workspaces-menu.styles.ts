import { css } from '@emotion/react';
import { Theme } from '@mui/material/styles';

export const styles = {
  menu: (theme: Partial<Theme>) => css`
    padding: ${theme?.spacing?.(3)};
  `,
  menuTitleContainer: css`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;
  `,
  addWorkspace: css`
    cursor: pointer;
  `,
};
