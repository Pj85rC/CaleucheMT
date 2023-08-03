import { createContext, useEffect, useState } from "react";
import artistsTest from "../data/artistsTest.json"

const ArtistContext = createContext();

export const ArtistProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);

 
  useEffect(() => {
    setArtists(artistsTest);
  }, []);
  
  return (
    <ArtistContext.Provider value={[artists, setArtists]}>
      {children}
    </ArtistContext.Provider>
  );
};

export default ArtistContext;