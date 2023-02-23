import { css } from '@emotion/react';
import type { Theme } from '@mui/material/styles';

export const styles = {
  container: (theme: Partial<Theme>) => css`
    cursor: pointer;

    svg {
      display: flex;
      width: 28px;
      height: 28px;
      color: ${theme.palette?.mode === 'dark' ? theme.palette?.common.white : theme.palette?.common.black};
    }
  `,
};
