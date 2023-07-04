import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const AuthState = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={AuthState}>{children}</AuthContext.Provider>
  );
};
