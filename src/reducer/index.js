import { ACTION_TYPE } from "../Action";

const LikedReducer = (state, action) => {
    switch (action.type) {
      case ACTION_TYPE.ADD_TO_LIKE:
        return { ...state, liked: [...state.liked, { ...action.payload}] };

      case ACTION_TYPE.REMOVE_FROM_LIKE:
        return {
          ...state,
          liked: state.liked.filter((like) => like._id !== action.payload._id),
        };
      case ACTION_TYPE.GET_LIKE:
        return {
          ...state,
          liked:[...state.liked]
        };
    //   case ACTION_TYPE.CLEAR_CART:
    //     console.log(action.payload)
    //     return {
    //       ...state,
    //       cart: action.payload,
    //     };
      default:
        return state;
    }
  };

export {LikedReducer}