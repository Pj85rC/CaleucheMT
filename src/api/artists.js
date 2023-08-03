import axios from "axios";
import { BASE_URL } from "./config";

export async function GetArtists() {
  try {
    const response = await axios.get(`${BASE_URL}/artists/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}