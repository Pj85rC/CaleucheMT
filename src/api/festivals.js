import axios from "axios";
import { BASE_URL } from "./config";

export async function GetFestivals() {
  try {
    const response = await axios.get(`${BASE_URL}/festivals/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}