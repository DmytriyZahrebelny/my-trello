import { Global, css } from '@emotion/react';
import type { Theme } from '@mui/material/styles';

const globalStyles = (theme: Partial<Theme>) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  input {
    color-scheme: ${theme.palette?.mode};
  }
  html {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  body {
    min-height: 100%;
  }
  .app-wrapper {
    height: 100%;
    background: ${theme.palette?.background.default};
  }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />;
