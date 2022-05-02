import axios from "axios";

const createPlaylists = async (token,playlistName) => {
    try {
      const {data} = await axios.post(
        "/api/user/playlists",
        {
            playlist: {
              title: playlistName,
              description: "",
            },
          },
          {
            headers: {
              authorization: token,
            },
          }
      );

      console.log(data.playlists)
    } catch (error) {
        console.log("error in creater playlist",error)
    }
  };
const getPlaylists=async(token,setPlaylists)=>{
    try {
        const {data} = await axios.get(
          "/api/user/playlists",
            {
              headers: {
                authorization: token,
              },
            }
        );
        setPlaylists(data.playlists)
      } catch (error) {
          console.log("error in get playlist",error)
      }
}


  export {createPlaylists,getPlaylists}