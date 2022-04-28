import {useEffect} from 'react'
import VideoCard from '../components/VideoCard';
import { useAuth, useLike } from '../context'
import { getLike } from '../services/LikedServices';

function Liked() {
    const {likeState,likeDispatch}=useLike();
    const {token}=useAuth();
    
    useEffect(() => {
        getLike(token,likeDispatch)
    }, [])

    return (
        <>
        <h1>this is Like page</h1>
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
