import axios from "axios";
import { CallToast } from "./CallToast";

const addToHistory =async (token, video,setHistory) => {
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
       setHistory(data.history)
      } catch (error) {
        console.log("error in add to history",error)
      }
    };
    
    const removeFromHistory = async (token, video,setHistory) => {
      try {
        const {data} = await axios.delete(
          `/api/user/history/${video._id}`,
          {
            headers: {
              authorization: token,
            },
          }
          );
          setHistory(data.history)
          CallToast("success","removed from history")
        } catch (error) {
          console.log("error in remove from history",error)
        }
      };
      
      const deleteAllHistory=async(token,setHistory)=>{
        try {
          const {data}=await axios.delete(
            "/api/user/history/all",
            {
              headers: {
                authorization: token,
              },
            }
            );
            setHistory(data.history)
            CallToast("success","Cleared history")
    } catch (error) {
        console.log("error in delete all history",error)
        CallToast("error",error.message)
    }
}

export {addToHistory,deleteAllHistory,removeFromHistory}
