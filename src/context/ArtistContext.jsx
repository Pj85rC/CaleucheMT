import { createContext, useState } from "react";

const ArtistContext = createContext();

export const ArtistProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);

  return (
    <ArtistContext.Provider value={[artists, setArtists]}>
      {children}
    </ArtistContext.Provider>
  );
};

export default ArtistContext;
