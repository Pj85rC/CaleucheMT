import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: null,
    userName: null,
    role: null,
  });

  const [withToken, setWithToken] = useState(false);

  const globalStates = {
    user,
    setUser,
    withToken,
    setWithToken,
  };

  return (
    <AuthContext.Provider value={globalStates}>{children}</AuthContext.Provider>
  );
};
