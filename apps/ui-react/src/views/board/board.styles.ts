import { css } from '@emotion/react';
import type { Theme } from '@mui/material';

export const styles = {
  container: (theme: Partial<Theme>) => css`
    padding: ${theme.spacing?.(3)};
    background: red;
  `,
};
