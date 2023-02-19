import type { Theme } from '@mui/material/styles';
import { css } from '@emotion/react';

export const styles = {
  header: (theme: Partial<Theme>) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacing?.(3)};
  `,
  leftContent: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 700px;
  `,
  logo: css`
    text-transform: uppercase;
    font-weight: 700;
  `,
  searchField: css`
    width: 420px;
  `,
};
