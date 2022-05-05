import React from 'react'
import {useData} from "../context"
import VideoCard from './VideoCard';
function VideoListing() {
    const {videos}=useData();
    const {filterState}=useData();
    const {category,search}=filterState;

    const filteredData=()=>{
        let filteredVideos=[...videos]
        if(category){
            if(category==="All"){
                filteredVideos=[...videos]
            }
            else{
                filteredVideos=filteredVideos.filter(item=>item.category===category)
            }
        }
        if(search){
            filteredVideos=filteredVideos.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))
        }
        console.log(filteredVideos)
        return filteredVideos
    }
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
