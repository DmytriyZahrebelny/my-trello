import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { User } from '@shared/types';

import { useUser } from '@core/api/api-authorization';

interface Props {
  children: ReactNode;
}

interface ContextData {
  isLoading: boolean;
  isAuthorized: boolean;
  user: User | undefined;
}

const AuthContext = createContext<ContextData>({ isLoading: true, isAuthorized: false, user: undefined });

export const AuthProvider = ({ children }: Props) => {
  const { data: user, isLoading, isSuccess } = useUser();

  return <AuthContext.Provider value={{ isLoading, isAuthorized: isSuccess, user }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
