import type { ReactNode } from 'react';

import { useAuthContext } from '../../providers';
import { Header, Main } from '../../layouts';
import { Menu } from '../menu';

interface Props {
  children: ReactNode;
}

export const AppPageWrapper = ({ children }: Props) => {
  const { isAuthorized } = useAuthContext();
  return (
    <>
      {isAuthorized && <Menu />}
      <Header />
      <Main>{children}</Main>
    </>
  );
};
