import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const styles = {
  container: (theme: Partial<Theme>) => css`
    padding: ${theme.spacing?.(2)};
  `,
};
