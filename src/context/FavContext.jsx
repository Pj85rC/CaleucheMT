import { useEffect, useState, createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { getFavorites } from "../api/favorites";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user, isLoading } = useContext(AuthContext);

  console.log(favorites);

  useEffect(() => {
    const fetchAndSetFavorites = async () => {
      if (user && user.userId) {
        const fetchedFavorites = await getFavorites(user.userId);
        setFavorites(fetchedFavorites);
      }
    };

    if (!isLoading) {
      fetchAndSetFavorites();
    }
  }, [user, isLoading]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
