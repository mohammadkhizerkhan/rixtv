import {useEffect} from 'react'
import axios from "axios";
import { useState } from 'react';
import VideoCard from '../components/VideoCard';
import { useAuth, useHistory} from '../context'
import {deleteAllHistory} from "../services"
import { useNavigate } from 'react-router-dom';

function History() {
    const [history,setHistory]=useState([])
    const {token}=useAuth();
   const navigate=useNavigate();
    const {historyState,historyDispatch}=useHistory();
    console.log(historyState.history)
    
    // for future reference 
    // useEffect(() => {
    //     (async ()=>{
    //         try {
    //             const {data} = await axios.get(
    //               "/api/user/history",
    //               {
    //                 headers: {
    //                   authorization: token,
    //                 },
    //               }
    //             );
    //             console.log(data)
    //             setHistory(prev=>[...prev,...data.history])
    //           } catch (error) {
    //               console.log("error in get to history",error)
    //           }
    //     })();
    // }, [])

    return (
        <>
        {
           ( historyState.history.length) ?<><button className="btn btn-m primary-btn font-17 font-bold margin-b-1" onClick={()=>deleteAllHistory(token,historyDispatch)}>delete History</button></>:(
             <>
             <h1 className='text-center'>You have not watched any videos!!</h1>
             <button className="btn btn-m primary-btn font-17 font-bold" onClick={()=>navigate("/home")}>explore videos</button>
             </>  
           )
        }
        {
            historyState.history.map((video)=>{
                return (
                    <>
                    <VideoCard key={video._id} video={video}/>
                    </>
                )
            })
        }
        </>
    )
}

export default History
