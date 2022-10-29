import React, { createContext, useState } from 'react';
import * as auth from '../services/auth'


interface AuthContextData {
  isLogged: boolean,
  user: object | null
  login(): Promise<void>
  logout(): void
}

export const AuthContext = createContext<AuthContextData> ({} as AuthContextData);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({children})  => {
  const [user, setUser] = useState<object | null>(null)

  async function login() {
    const res = await auth.login()
    setUser(res.user)
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{isLogged: !!user, user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

