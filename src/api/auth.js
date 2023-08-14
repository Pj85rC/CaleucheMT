import axios from "axios";
import { BASE_URL } from "./config";
import jwtDecode from "jwt-decode";
import { Encrypt } from "../helpers/crypt";

export const login = async (username, password, setUser) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      // PAYLOAD:
      username,
      password,
    });

    const token = response.data;

    const decodedToken = jwtDecode(token);

    const { userId, userName, role } = decodedToken;

    setUser((prevUser) => ({
      ...prevUser,
      userId: userId,
      userName: userName,
      role: role,
    }));

    const encryptedToken = Encrypt(token);

    localStorage.setItem("token", encryptedToken);
    return decodedToken;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const register = async (username, email, password, setUser) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, {
      username,
      email,
      password,
    });

    const token = response.data.token;

    const decodedToken = jwtDecode(token);

    const { userId, userName, role } = decodedToken;

    setUser((prevUser) => ({
      ...prevUser,
      userId: userId,
      userName: userName,
      role: role,
    }));

    localStorage.setItem("token", Encrypt(token));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
