import axios from "axios";
import { ACTION_TYPE } from "../Action";


const addToLike = async (token, video,likeDispatch) => {
  try {
    const res = await axios.post(
      "/api/user/likes",
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    likeDispatch({type:ACTION_TYPE.ADD_TO_LIKE,payload:video});
  } catch (error) {
      console.log("error in add to LIKE",error)
  }
};

const removeFromLike = async (token, video,likeDispatch) => {

  try {
    const res = await axios.delete(
        `/api/user/likes/${video._id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    likeDispatch({type:ACTION_TYPE.REMOVE_FROM_LIKE,payload:video});
  } catch (error) {
      console.log("error in remove from like",error)
  }

};





export { addToLike,removeFromLike };
