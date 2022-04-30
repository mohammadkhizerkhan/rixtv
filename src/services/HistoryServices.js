import axios from "axios";
import { ACTION_TYPE } from "../Action";

const addToHistory =async (token, video, historyDispatch) => {
    try {
        const {data}=await axios.post(
            "/api/user/history",
            {
              video,
            },
            {
              headers: {
                authorization: token,
              },
            }
          );
        //   console.log(data)
          historyDispatch({type:ACTION_TYPE.ADD_TO_HISTORY,payload:video})
    } catch (error) {
        console.log("error in add to history",error)
    }
};

const removeFromHistory = async (token, video,historyDispatch) => {
    try {
      const {data} = await axios.delete(
          `/api/user/history/${video._id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
    //   console.log(data)
      historyDispatch({type:ACTION_TYPE.REMOVE_FROM_HISTORY,payload:video});
    } catch (error) {
        console.log("error in remove from history",error)
    }
  };

const deleteAllHistory=async(token,historyDispatch)=>{
    try {
        const {data}=await axios.delete(
            "/api/user/history/all",
            {
              headers: {
                authorization: token,
              },
            }
          );
        //   console.log(data)
          historyDispatch({type:ACTION_TYPE.DELETE_ALL_HISTORY})
    } catch (error) {
        console.log("error in delete all history",error)
    }
}

export {addToHistory,deleteAllHistory,removeFromHistory}
