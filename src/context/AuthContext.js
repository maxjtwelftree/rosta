import React, { createContext, useContext } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  console.log("AuthProvider rendering");
  
  return (
    <AuthContext.Provider value={{ user: null, loading: false }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};