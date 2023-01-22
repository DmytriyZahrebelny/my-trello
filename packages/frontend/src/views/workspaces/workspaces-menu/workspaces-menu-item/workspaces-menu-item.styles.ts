import { css } from '@emotion/react';
import { Theme } from '@mui/material/styles';

export const styles = {
  listItem: css`
    padding-left: 0;
    padding-right: 0;
  `,
  workSpaceIcon: (theme: Partial<Theme>) => css`
    margin: 0 6px;
    width: 23px;
    height: 22px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    background: ${theme.palette?.common.white};
    color: ${theme.palette?.primary.light};
    border-radius: 2px;
  `,
};
