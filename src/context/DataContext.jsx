import { createContext,useContext,useState,useEffect } from "react";
import axios from "axios";

const DataContext=createContext();

const DataProvider=({children})=>{
    const [videos, setVideos] = useState([])
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
        <DataContext.Provider value={{videos}}>
            {children}
        </DataContext.Provider>
    )
}

const useData=()=>useContext(DataContext)

export {DataProvider,useData}