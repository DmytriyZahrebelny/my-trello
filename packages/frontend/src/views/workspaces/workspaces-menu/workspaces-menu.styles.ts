import { css } from '@emotion/react';
import { Theme } from '@mui/material/styles';

export const styles = {
  menu: (theme: Partial<Theme>) => css`
    padding: ${theme?.spacing?.(3)};
  `,
};
