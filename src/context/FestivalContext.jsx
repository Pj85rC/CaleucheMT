import { createContext, useState } from "react";

const FestivalContext = createContext();

export const FestivalContextProvider = ({ children }) => {
  const [festival, setFestival] = useState("");

  const FestivalState = {
    festival,
    setFestival,
  };

  return (
    <FestivalContext.Provider value={FestivalState}>{children}</FestivalContext.Provider>
  );
};
