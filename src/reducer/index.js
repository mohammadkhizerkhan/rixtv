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
      default:
        return state;
    }
  };
const WatchLaterReducer = (state, action) => {
    switch (action.type) {
      case ACTION_TYPE.ADD_TO_WATCHLATER:
        return { ...state, watchLater: [...state.watchLater, { ...action.payload}] };

      case ACTION_TYPE.REMOVE_FROM_WATCHLATER:
        return {
          ...state,
          watchLater: state.watchLater.filter((watchlater) => watchlater._id !== action.payload._id),
        };
      case ACTION_TYPE.GET_WATCHLATER:
        return {
          ...state,
          watchLater:[...state.watchLater]
        };
  
      default:
        return state;
    }
  };
const HistoryReducer = (state, action) => {
    switch (action.type) {
      case ACTION_TYPE.ADD_TO_HISTORY:
        return { ...state, history: [...state.history, { ...action.payload}] };
      case ACTION_TYPE.REMOVE_FROM_HISTORY:
        console.log("clik")
        return {
          ...state,
          history: state.history.filter((history) => history._id !== action.payload._id),
        };
      case ACTION_TYPE.DELETE_ALL_HISTORY:
        return {
          ...state,
          history:[]
        };
      default:
        return state;
    }
  };

export {LikedReducer,WatchLaterReducer,HistoryReducer}