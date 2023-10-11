import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const styles = {
  container: (theme: Partial<Theme>) => css`
    display: block;
    padding: ${theme.spacing?.(3)};
    background: ${theme.palette?.primary.light};
    border-radius: 5px;
    box-shadow: ${theme.shadows?.[1]};
    cursor: pointer;
    text-decoration: none;

    &:hover {
      background: ${theme.palette?.primary.main};
    }
  `,
};
