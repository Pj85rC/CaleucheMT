import { createContext, useState } from "react";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [data, setData] = useState("");

  const GlobalState = {
    data,
    setData,
  };

  return (
    <MainContext.Provider value={GlobalState}>{children}</MainContext.Provider>
  );
};
