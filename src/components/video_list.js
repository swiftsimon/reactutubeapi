import React from 'react';
import VideoListItem from './video_list_item'

// takes in props from App parent as videos from parent(this).state.videos
// this is a functional compnent and accepts props as an argument (props)
// in class based components props is accessed anywhere as this.props
const VideoList = (props) => {
    // videoItems is going to be an array, React knows this internally and can handle it 
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect} // comes in as props from app, and we send as props to VideoListItem
                key={video.etag} 
                video={video} />
        )
    })

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )

}

export default VideoList