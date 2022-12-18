import { css } from '@mui/material/styles';
import { Button } from '@mui/material';

export const Authorization = () => {
  const styles = {
    header: css`
      color: red;
      background-color: yellow;
      margin-bottom: 1.45rem;
    `,
  };

  return <Button css={styles.header}>authorization</Button>;
};
