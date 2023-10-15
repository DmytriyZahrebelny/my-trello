import type { ReactNode } from 'react';
import { css } from '@emotion/react';

interface Props {
  children: ReactNode;
}

const styles = css`
  margin: 0 0 0 auto;
  width: calc(100% - 60px);
  height: 100%;
  flex-grow: 1;
`;

export const Main = ({ children }: Props) => {
  return <main css={styles}>{children}</main>;
};
