import type { ReactNode } from 'react';
import { css } from '@emotion/react';

interface Props {
  children: ReactNode;
}

const styles = css`
  width: calc(100% - 60px);
  margin: 0 0 0 auto;
`;

export const Main = ({ children }: Props) => {
  return <main css={styles}>{children}</main>;
};
