import { css } from '@emotion/react';
import type { Theme } from '@mui/material/styles';

export const styles = {
  container: (theme: Partial<Theme>) => css`
    width: 1100px;
    margin: 0 auto;
    padding-top: ${theme?.spacing?.(4)};
  `,
};
