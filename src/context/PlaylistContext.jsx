
import { createContext, useContext, useState } from "react";


const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {

    const [playlists, setPlaylists] = useState([]);
    const [playlistData,setPlaylistData]=useState([])
    
  
  return (
    <PlaylistContext.Provider
      value={{playlists, setPlaylists,playlistData,setPlaylistData }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);
export { usePlaylist, PlaylistProvider };
