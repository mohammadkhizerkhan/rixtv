import {useEffect} from 'react'
import axios from "axios";
import VideoCard from '../components/VideoCard';
import { useAuth, useWatchLater} from '../context'

function WatchLater() {
   const {token}=useAuth();
    const {watchLater,setWatchLater}=useWatchLater();
    
    // for future reference 
    useEffect(() => {
        (async ()=>{
            try {
                const {data} = await axios.get(
                  "/api/user/watchlater",
                  {
                    headers: {
                      authorization: token,
                    },
                  }
                );
                setWatchLater([...data.watchlater])
              } catch (error) {
                  console.log("error in get to watchlater",error)
              }
        })();
    }, [])

    return (
        <>
        {
           ( watchLater.length) ?<></>:<h1 className="text-center text-color">You have not added any videos to watchLater!!</h1>
        }
        <section class="video-listing flex-row-wrap">
        {
            watchLater.map((video)=>{
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
