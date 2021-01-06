import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div
            onClick={() => onVideoSelect(video)}
            className='ui item video-item'
        >
            <img
                className='ui image'
                alt={video.snippet.title}
                src={video.snippet.thumbnails.medium.url}
            />
            <div className='content'>{video.snippet.title}</div>
        </div>
    );
};

export default VideoItem;
