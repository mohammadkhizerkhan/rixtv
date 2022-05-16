import axios from "axios";
import { CallToast } from "./CallToast";

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
    CallToast("success","Added to Watchlater")
  } catch (error) {
    console.log("error in add to watchlater",error)
    CallToast("error",error.message)
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
      CallToast("success","Removed from Watchlater")
  } catch (error) {
      console.log("error in remove from watchlater",error)
      CallToast("error",error.message)
  }
};

export { addToWatchLater,removeFromWatchLater };