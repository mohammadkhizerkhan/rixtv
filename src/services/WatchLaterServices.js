import axios from "axios";

const addToWatchLater = async (token, video,setWatchLater) => {
  try {
    const {data} = await axios.post(
      "/api/user/watchlater",
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setWatchLater(data.watchlater)
  } catch (error) {
      console.log("error in add to watchlater",error)
  }
};

const removeFromWatchLater = async (token, video,setWatchLater) => {
  try {
    const {data} = await axios.delete(
        `/api/user/watchlater/${video._id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    setWatchLater(data.watchlater)
  } catch (error) {
      console.log("error in remove from watchlater",error)
  }
};

export { addToWatchLater,removeFromWatchLater };