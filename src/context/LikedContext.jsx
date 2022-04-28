import { createContext, useContext,useReducer} from "react";
import { LikedReducer } from "../reducer";

const LikedContext=createContext();


const LikeProvider=({children})=>{
    const [likeState, likeDispatch] = useReducer(LikedReducer,{
        liked:[]
    })

    return (
        <LikedContext.Provider value={{likeState,likeDispatch}}>
            {children}
        </LikedContext.Provider>
    )
}

const useLike=()=>useContext(LikedContext);
export {useLike,LikeProvider}