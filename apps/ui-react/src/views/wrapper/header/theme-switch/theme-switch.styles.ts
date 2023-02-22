import { css } from '@emotion/react';
import type { Theme } from '@mui/material/styles';

export const styles = {
  container: (theme: Partial<Theme>) => css`
    cursor: pointer;

    svg {
      color: ${theme.palette?.mode === 'dark' ? theme.palette?.common.white : theme.palette?.common.black};
    }
  `,
};
