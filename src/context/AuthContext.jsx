import { createContext, useState, useEffect } from "react";
import { Decrypt } from "../helpers/crypt";
import jwtDecode from "jwt-decode";

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

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decryptedToken = Decrypt(token);
      console.log("Decrypted Token: ", decryptedToken);
      const decodedToken = jwtDecode(decryptedToken);
      const { userId, userName, role } = decodedToken;
      setUser((prevUser) => ({
        ...prevUser,
        userId: userId,
        userName: userName,
        role: role,
      }));
    }
  }, [token]);

  return (
    <AuthContext.Provider value={globalStates}>{children}</AuthContext.Provider>
  );
};
