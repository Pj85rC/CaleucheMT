import { createContext, useState, useEffect } from "react";
import { Decrypt } from "../helpers/crypt";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: null,
  });

  const [withToken, setWithToken] = useState(false);

  const globalStates = {
    user,
    setUser,
    withToken,
    setWithToken,
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decryptedToken = Decrypt(token);
      if (decryptedToken) {
        const decodedToken = jwtDecode(decryptedToken);
        const { userId } = decodedToken;
        setUser((prevUser) => ({
          ...prevUser,
          userId: userId,
        }));
      }
    }
  }, [token]);

  return (
    <AuthContext.Provider value={globalStates}>{children}</AuthContext.Provider>
  );
};