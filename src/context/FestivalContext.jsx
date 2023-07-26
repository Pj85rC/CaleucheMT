import { createContext, useEffect, useState } from "react";
import festivalData from "../data/festivalData.json"

const FestivalContext = createContext();

export const FestivalProvider = ({ children }) => {
  const [festivals, setFestivals] = useState("");

 
  useEffect(() => {
    setFestivals(festivalData);
  }, []);
  
  return (
    <FestivalContext.Provider value={festivals}>
      {children}
    </FestivalContext.Provider>
  );
};

export default FestivalContext;