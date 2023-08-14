import axios from "axios";
import { BASE_URL } from "./config";
import { Decrypt } from "../helpers/crypt";

export async function GetArtists() {
  try {
    const token = localStorage.getItem("token");
    const decryptedToken = Decrypt(token);

    const response = await axios.get(`${BASE_URL}/artists`, {
      headers: {
        Authorization: `Bearer ${decryptedToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function CreateArtist(artist) {
  try {
    console.log("Creating artist with data: ", artist);

    const token = localStorage.getItem("token");
    const decryptedToken = Decrypt(token);

    const response = await axios.post(`${BASE_URL}/artists`, artist, {
      headers: {
        Authorization: `Bearer ${decryptedToken}`,
      },
    });

    console.log("Create Artist response: ", response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function UpdateArtist(id, artist) {
  try {
    const token = localStorage.getItem("token");
    const decryptedToken = Decrypt(token);

    const response = await axios.put(`${BASE_URL}/artists/${id}`, artist, {
      headers: {
        Authorization: `Bearer ${decryptedToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function DeleteArtist(id) {
  try {
    const token = localStorage.getItem("token");
    const decryptedToken = Decrypt(token);

    await axios.delete(`${BASE_URL}/artists/${id}`, {
      headers: {
        Authorization: `Bearer ${decryptedToken}`,
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
