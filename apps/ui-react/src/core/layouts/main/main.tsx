import type { ReactNode } from 'react';

import { Header } from '../header';

interface Props {
  children: ReactNode;
}

export const Main = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
