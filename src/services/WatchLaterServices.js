import axios from "axios";
import { ACTION_TYPE } from "../Action";


const addToWatchLater = async (token, video,watchLaterDispatch) => {
  try {
    const res = await axios.post(
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
    watchLaterDispatch({type:ACTION_TYPE.ADD_TO_WATCHLATER,payload:video});
  } catch (error) {
      console.log("error in add to watchlater",error)
  }
};

const removeFromWatchLater = async (token, video,watchLaterDispatch) => {
  try {
    const res = await axios.delete(
        `/api/user/watchlater/${video._id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    watchLaterDispatch({type:ACTION_TYPE.REMOVE_FROM_WATCHLATER,payload:video});
  } catch (error) {
      console.log("error in remove from watchlater",error)
  }
};

export { addToWatchLater,removeFromWatchLater };