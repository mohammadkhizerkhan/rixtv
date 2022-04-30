import axios from "axios";


const addToLike = async (token, video,setLike) => {
  try {
    const {data} = await axios.post(
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
    console.log([...data.likes])
    setLike([...data.likes])
  } catch (error) {
      console.log("error in add to LIKE",error)
  }
};

const removeFromLike = async (token, video,setLike) => {

  try {
    const {data} = await axios.delete(
        `/api/user/likes/${video._id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log([...data.likes])
    setLike([...data.likes])
  } catch (error) {
      console.log("error in remove from like",error)
  }

};





export { addToLike,removeFromLike };
