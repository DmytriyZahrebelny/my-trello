import { css } from '@emotion/react';
import CircularProgress from '@mui/material/CircularProgress';

const styles = {
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `,
};

export const Loading = () => (
  <div css={styles.container}>
    <CircularProgress />
  </div>
);
