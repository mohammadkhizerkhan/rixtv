import { createContext,useContext,useState,useEffect,useReducer } from "react";
import axios from "axios";
import { filterReducer } from "../reducer";
const DataContext=createContext();

const DataProvider=({children})=>{
    const [videos, setVideos] = useState([])
    const [filterState,filterDispatach]=useReducer(filterReducer,{
        category:"",
        search:""
    })
    useEffect(() => {
        (async ()=>{
            try {
                const {data}=await axios.get("/api/videos")
                setVideos(prev=>[...prev,...data.videos])
            } catch (error) {
                console.error("error in fetching videos",error)
            }
        })();
    }, [])
    return (
        <DataContext.Provider value={{videos,filterState,filterDispatach}}>
            {children}
        </DataContext.Provider>
    )
}

const useData=()=>useContext(DataContext)

export {DataProvider,useData}