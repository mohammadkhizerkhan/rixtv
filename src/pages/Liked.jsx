import {useEffect} from 'react'
import axios from "axios";
import { useState } from 'react';
import VideoCard from '../components/VideoCard';
import { useAuth, useLike} from '../context'

function Liked() {
    const [liked,setLiked]=useState([])
    const {token}=useAuth();
    const {likeState}=useLike();

    
    // for future reference 
    // useEffect(() => {
    //     (async ()=>{
    //         try {
    //             const {data} = await axios.get(
    //               "/api/user/likes",
    //               {
    //                 headers: {
    //                   authorization: token,
    //                 },
    //               }
    //             );
    //             console.log(data)
    //             setLiked(prev=>[...prev,...data.likes])
    //           } catch (error) {
    //               console.log("error in get to LIKE",error)
    //           }
    //     })();
    // }, [])

    return (
        <>
        {
           ( likeState.liked.length) ?<></>:<h1>You have not liked any videos!!</h1>
        }
        {
            likeState.liked.map((video)=>{
                return (
                    <VideoCard key={video._id} video={video}/>
                )
            })
        }
        </>
    )
}

export default Liked
