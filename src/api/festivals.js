import axios from "axios";
import { Decrypt } from "../helpers/crypt.jsx";
import { BASE_URL } from "./config";

export async function GetFestivals() {
  try {
    const response = await axios.get(`${BASE_URL}/festivals/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function GetFestivalLineup(id) {
  try {
    const token = localStorage.getItem("token");
    const decryptedToken = Decrypt(token);

    const response = await axios.get(`${BASE_URL}/festivals/${id}/lineup`, {
      headers: {
        Authorization: `Bearer ${decryptedToken}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}