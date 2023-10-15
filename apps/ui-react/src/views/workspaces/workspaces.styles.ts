import { css } from '@emotion/react';
import type { Theme } from '@mui/material/styles';

export const styles = {
  container: (theme: Partial<Theme>) => css`
    padding-top: ${theme?.spacing?.(4)};
  `,
};
