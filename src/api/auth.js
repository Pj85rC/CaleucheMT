import axios from "axios";
import BASE_URL from "./config";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      // PAYLOAD:
      username,
      password,
    });
    localStorage.setItem("token", response.data.token);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
