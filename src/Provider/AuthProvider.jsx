import React, { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const authData = {};

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
