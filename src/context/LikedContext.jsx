import { createContext,useState, useContext} from "react";

const LikedContext=createContext();


const LikeProvider=({children})=>{
    const [like,setLike]=useState([])
    return (
        <LikedContext.Provider value={{like,setLike}}>
            {children}
        </LikedContext.Provider>
    )
}

const useLike=()=>useContext(LikedContext);
export {useLike,LikeProvider}