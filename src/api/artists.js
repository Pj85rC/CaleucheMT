import axios from "axios";
import { BASE_URL } from "./config";

export async function GetArtists() {
  try {
    const response = await axios.get(`${BASE_URL}/artists/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}import axios from "axios";
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
    const response = await axios.post(`${BASE_URL}/artists`, artist);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function UpdateArtist(id, artist) {
  try {
    const response = await axios.put(`${BASE_URL}/artists/${id}`, artist);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function DeleteArtist(id) {
  try {
    await axios.delete(`${BASE_URL}/artists/${id}`);
    return true;
  } catch (error) {
    console.error(error);
  }
}
