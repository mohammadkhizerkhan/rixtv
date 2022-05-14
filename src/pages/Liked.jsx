import {useEffect} from 'react'
import axios from "axios";
import { useState } from 'react';
import VideoCard from '../components/VideoCard';
import { useAuth, useLike} from '../context'

function Liked() {
    const {token}=useAuth();
    const {like,setLike}=useLike();

    
    // for future reference 
    useEffect(() => {
        (async ()=>{
            try {
                const {data} = await axios.get(
                  "/api/user/likes",
                  {
                    headers: {
                      authorization: token,
                    },
                  }
                );
                console.log([...data.likes])
                setLike([...data.likes])
              } catch (error) {
                  console.log("error in get to LIKE",error)
              }
        })();
    }, [])

    return (
        <>
        {
           ( like.length) ?<></>:<h1 className='text-center text-color'>You have not liked any videos!!</h1>
        }
        <section class="video-listing flex-row-wrap">
        {
            like.map((video)=>{
                return (
                    <VideoCard key={video._id} video={video}/>
                )
            })
        }
        </section>
        </>
    )
}

export default Liked
