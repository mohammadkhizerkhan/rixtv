import React from 'react'
import {useData} from "../context/DataContext"
import VideoCard from './VideoCard';
function VideoListing() {
    const {videos}=useData();
    return (
        <section class="video-listing flex-row-wrap">
            {
                videos.map(video=>{
                    return (
                        <VideoCard key={video._id} video={video}/>

                    )
                })
            }
    </section>
    )
}
export default VideoListing
