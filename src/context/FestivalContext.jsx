import { createContext, useEffect, useState } from "react";
import { GetFestivals } from "../api/festivals";

export const FestivalContext = createContext();

export const FestivalProvider = ({ children }) => {
  const [festivals, setFestivals] = useState([]);

  const globalStates = {festivals, setFestivals}
  useEffect(() => {
    const fetchFestivals = async () => {
      const data = await GetFestivals();
      setFestivals(data);
    };
    fetchFestivals();
  }, []);

  return (
    <FestivalContext.Provider value={globalStates}>
      {children}
    </FestivalContext.Provider>
  );
};
