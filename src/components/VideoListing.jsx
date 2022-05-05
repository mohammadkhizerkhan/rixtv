import React from 'react'
import {useData} from "../context"
import VideoCard from './VideoCard';
function VideoListing() {
    const {videos}=useData();
    const {filterState}=useData();
    const {category}=filterState;
    console.log(category)

    const filteredData=()=>{
        let filteredVideos=[...videos]
        if(category){
            if(category==="All"){
                return [...videos]
            }
            else{
                filteredVideos=filteredVideos.filter(item=>item.category===category)
            }
        }

        return filteredVideos
    }
    console.log(filteredData())
    return (
        <section class="video-listing flex-row-wrap">
            {
                filteredData().map(video=>{
                    return (
                        <VideoCard key={video._id} video={video}/>
                    )
                })
            }
    </section>
    )
}
export default VideoListing
