import React, { useState, useEffect } from 'react';
import YoutubeAPI from '../api/YoutubeAPI';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onFormSubmit('');
    }, []);

    const onFormSubmit = (term) => {
        YoutubeAPI.get('/search', {
            params: {
                q: term,
            },
        })
            .then((response) => {
                setVideos(response.data.items);
                setSelectedVideo(response.data.items[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div className='ui container' style={{ marginTop: '20px' }}>
            <SearchBar onSubmit={onFormSubmit} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList
                            videos={videos}
                            onVideoSelect={onVideoSelect}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
