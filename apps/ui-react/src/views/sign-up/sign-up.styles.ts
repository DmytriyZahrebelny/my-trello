import { css } from '@emotion/react';
import type { Theme } from '@mui/material/styles';

export const styles = {
  title: css`
    width: 100%;
    text-align: center;
  `,
  form: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px 0;

    & button {
      width: 100%;
    }
  `,
  links: (theme: Partial<Theme>) => css`
    display: flex;
    justify-content: space-between;
    width: 500px;

    & a {
      font-family: ${theme.typography?.fontFamily};
      color: ${theme.palette?.secondary.light};
    }
  `,
  field: (theme: Partial<Theme>) => css`
    & .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.palette?.secondary.main};
    }

    & .MuiInputBase-root {
      & .MuiInputBase-input {
        color: ${theme.palette?.text.primary};
      }

      &:focus,
      &:hover {
        & .MuiOutlinedInput-notchedOutline {
          border-color: ${theme.palette?.secondary.dark};
        }
      }
    }

    & .MuiOutlinedInput-root.Mui-focused {
      & .MuiOutlinedInput-notchedOutline {
        border-color: ${theme.palette?.secondary.dark};
      }
    }

    & .MuiFormLabel-root.Mui-focused {
      color: ${theme.palette?.text.primary};
    }

    .Mui-error {
      svg {
        color: ${theme.palette?.error.main};
      }
    }
  `,
};
