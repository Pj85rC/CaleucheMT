import axios from "axios";
import { BASE_URL } from "../api/config";
import { Decrypt } from "../helpers/crypt";

export const getFavorites = async (user_id) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token not found");

    const decryptedToken = Decrypt(token);
    const response = await axios.get(
      `${BASE_URL}/users/${user_id}/favourites`,
      {
        headers: {
          Authorization: `Bearer ${decryptedToken}`,
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch favorites from the server.");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addFavorite = async (
  festival_id,
  user_id,
  favorites,
  setFavorites
) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token not found");

    const decryptedToken = Decrypt(token);
    const response = await axios.post(
      `${BASE_URL}/users/${user_id}/favourites`,
      { festival_id },
      {
        headers: {
          Authorization: `Bearer ${decryptedToken}`,
        },
      }
    );

    if (response.status === 200) {
      setFavorites([...favorites, festival_id]);
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeFavorite = async (
  festival_id,
  user_id,
  favorites,
  setFavorites
) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token not found");

    const decryptedToken = Decrypt(token);
    const response = await axios.delete(
      `${BASE_URL}/users/${user_id}/favourites/${festival_id}`,
      {
        data: { festival_id },
        headers: {
          Authorization: `Bearer ${decryptedToken}`,
        },
      }
    );

    if (response.status === 200) {
      const updatedFavorites = favorites.filter((fid) => fid !== festival_id);
      setFavorites(updatedFavorites);
    }
  } catch (error) {
    console.error(error);
  }
};
