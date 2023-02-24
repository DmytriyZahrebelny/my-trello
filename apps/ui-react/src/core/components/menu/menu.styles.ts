import type { Theme } from '@mui/material';
import { css } from '@emotion/react';

export const styles = {
  container: (theme: Partial<Theme>) => css`
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: baseline;
    gap: ${theme.spacing?.(3, 0)};
    width: 60px;
    min-height: 100%;
    padding: ${theme.spacing?.(4, 2)};
    background-color: ${theme.palette?.primary.main};

    a {
      &:hover {
        svg {
          color: ${theme.palette?.mode === 'light' ? theme.palette?.common.black : theme.palette?.primary.light};
        }
      }
    }
  `,
};
