import axios from "axios";

const createPlaylist = async (token,playlistName) => {
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

      console.log(data)
    //   setLike([...data.likes])
    } catch (error) {
        console.log("error in creater playlist",error)
    }
  };

  export {createPlaylist}