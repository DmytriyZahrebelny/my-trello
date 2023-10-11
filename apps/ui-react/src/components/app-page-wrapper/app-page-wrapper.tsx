import type { ReactNode } from 'react';

import { useAuthContext } from '@providers/auth-provider';
import { Header, Main } from '../../features';
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
