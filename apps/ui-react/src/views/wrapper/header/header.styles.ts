import type { Theme } from '@mui/material/styles';
import { css } from '@emotion/react';

export const styles = {
  header: (theme: Partial<Theme>) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacing?.(3)};
  `,
  leftContent: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 700px;
  `,
  logo: css`
    text-transform: uppercase;
    font-weight: 700;
  `,
  searchField: (theme: Partial<Theme>) => css`
    width: 420px;

    & .MuiOutlinedInput-notchedOutline {
      color: ${theme.palette?.primary?.dark}
      border-color: ${theme.palette?.primary?.main};
    }

    & .MuiInputBase-root {
      &:hover {
        & .MuiOutlinedInput-notchedOutline {
          border-color: ${theme.palette?.mode === 'light' ? theme.palette?.grey[500] : theme.palette?.grey[500]};
        }
      }
    }

    & .MuiOutlinedInput-root.Mui-focused {
      & .MuiOutlinedInput-notchedOutline {
        border-color: ${theme.palette?.mode === 'light' ? theme.palette?.grey[500] : theme.palette?.grey[500]};
      }
    }
  `,
};
