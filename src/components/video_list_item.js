import React from 'react'


const VideoListItem = (props) => {  // or ({video}) to extract out video from props

    const video = props.video
    const onVideoSelect = props.onVideoSelect
    console.log(video)
    const imageUrl = video.snippet.thumbnails.default.url
    return (  // on click calls onVideoSelect function passed down from app to videoList to here
        <li onClick={() => {onVideoSelect(video)}} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl} />
                </div>

                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem