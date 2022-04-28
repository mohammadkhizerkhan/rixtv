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
        `/api/user/likes/:${video._id}`,
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

const getLike = async (token,likeDispatch) => {
    try {
      const {data} = await axios.get(
        "/api/user/likes",
        {
          headers: {
            authorization: token,
          },
        }
      );
      likeDispatch({type:ACTION_TYPE.GET_LIKE,payload:data})
      return data
    } catch (error) {
        console.log("error in get to LIKE",error)
    }
  };


// const clearCart=(token,carts,cartDispatch)=>{
//   carts.forEach(async(item)=>{
//     try {
//       const res = await axios.delete(
//           `/api/user/cart/:${item._id}`,
//         {
//           headers: {
//             authorization: token,
//           },
//         }
//       );
//       console.log(res)
//       res.status===200 && cartDispatch({type:ACTION_TYPE.CLEAR_CART,payload:[]});
//     } catch (error) {
//         console.log("error in remove from cart",error)
//     }
//   })
// }



export { addToLike,removeFromLike,getLike };
