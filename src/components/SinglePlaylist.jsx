import {React,useEffect,} from 'react'
import { useParams } from 'react-router-dom';
import { useAuth, usePlaylist } from '../context'
import { getSinglePlaylist } from '../services';
import VideoCard from './VideoCard';

function SinglePlaylist() {
    const {playlistId}=useParams();
    const {token}=useAuth();
    const {playlistData,setPlaylistData}=usePlaylist();
    useEffect(() => {
        getSinglePlaylist(token,playlistId,setPlaylistData);
    }, [])
    return (
        <>
        {(playlistData?.videos?.length)?<h1 className='text-color text-center'>This is {playlistData?.title}</h1>:<h1>This playlist is empty</h1>}
            <section class="video-listing flex-row-wrap">
                {
                    playlistData?.videos?.map(video=>{
                        return(
                            <VideoCard key={video._id} video={video}/>
                        )
                    })
                }
            </section>
        </>
    )
}

export default SinglePlaylist
