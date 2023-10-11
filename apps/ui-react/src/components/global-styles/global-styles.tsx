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
  body {
    height: 100vh;
  }
  .app-wrapper {
    height: 100%;
    background: ${theme.palette?.background.default};
    display: flex;
    flex-direction: column;
  }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />;
