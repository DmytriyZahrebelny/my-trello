import { css } from '@emotion/react';
import type { Theme } from '@mui/material';

export const styles = {
  column: (theme: Partial<Theme>) => css`
    padding: ${theme.spacing?.(2)};
    border: 1px solid ${theme.palette?.primary.light};
    border-radius: 10px;
  `,
};
