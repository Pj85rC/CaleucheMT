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

    const { userId } = decodedToken;

    setUser((prevUser) => ({
      ...prevUser,
      userId: userId,
    }));

    localStorage.setItem("token", Encrypt(token));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};