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
  const [isLoading, setIsLoading] = useState(true);
  const [withToken, setWithToken] = useState(false);

  const globalStates = {
    user,
    setUser,
    withToken,
    setWithToken,
    isLoading,
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decryptedToken = Decrypt(token);
        console.log("Decrypted Token: ", decryptedToken);
        const decodedToken = jwtDecode(decryptedToken);
        const { userId, userName, role, email } = decodedToken;
        setUser({
          userId: userId,
          userName: userName,
          role: role,
          email: email,
        });
      } catch (error) {
        console.error("Error decoding the JWT token", error);
      }
    }

    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={globalStates}>{children}</AuthContext.Provider>
  );
};