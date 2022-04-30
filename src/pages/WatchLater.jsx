import {useEffect} from 'react'
import axios from "axios";
import { useState } from 'react';
import VideoCard from '../components/VideoCard';
import { useAuth, useWatchLater} from '../context'

function WatchLater() {
    const [watchLater,setWatchLater]=useState([])
    const {token}=useAuth();
    const {watchLaterState}=useWatchLater();
    console.log(watchLaterState.watchLater)
    
    // for future reference 
    // useEffect(() => {
    //     (async ()=>{
    //         try {
    //             const {data} = await axios.get(
    //               "/api/user/watchlater",
    //               {
    //                 headers: {
    //                   authorization: token,
    //                 },
    //               }
    //             );
    //             console.log(data)
    //             setWatchLater(prev=>[...prev,...data.watchlater])
    //           } catch (error) {
    //               console.log("error in get to watchlater",error)
    //           }
    //     })();
    // }, [])

    return (
        <>
        {
           ( watchLaterState.watchLater.length) ?<></>:<h1>You have not added any videos to watchLater!!</h1>
        }
        <section class="video-listing flex-row-wrap">
        {
            watchLaterState.watchLater.map((video)=>{
                return (
                    <VideoCard key={video._id} video={video}/>
                )
            })
        }
        </section>
        </>
    )
}

export default WatchLater
