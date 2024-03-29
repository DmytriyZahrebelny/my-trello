import type { Theme } from '@mui/material/styles';
import { css } from '@emotion/react';

export const styles = {
  header: (theme: Partial<Theme>) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 60px);
    margin: 0 0 0 auto;
    padding: ${theme.spacing?.(3)};
  `,
  leftContent: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 700px;
    height: 56px;
  `,
  logo: (theme: Partial<Theme>) => css`
    padding: ${theme.spacing?.(2, 0)};
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
  rightContent: (theme: Partial<Theme>) => css`
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 0 ${theme.spacing?.(4)};
  `,
  themeSwitch: (theme: Partial<Theme>) => css`
    cursor: pointer;

    svg {
      display: flex;
      width: 28px;
      height: 28px;
      color: ${theme.palette?.warning.light};
    }
  `,
  avatar: (theme: Partial<Theme>) => css`
    background-color: ${theme.palette?.secondary.main};
    cursor: pointer;
  `,
  popover: (theme: Partial<Theme>) => css`
    & .MuiPaper-root {
      width: 180px;
      padding: ${theme.spacing?.(1, 1)};
      background-color: ${theme.palette?.primary.main};
    }
  `,
  popoverItem: (theme: Partial<Theme>) => css`
    padding: ${theme.spacing?.(1, 1)};
    border-radius: 2px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.palette?.primary.light};
    }
  `,
};
