import React from 'react';
import YoutubeAPI from '../api/YoutubeAPI';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onFormSubmit('');
    }

    onFormSubmit = (term) => {
        YoutubeAPI.get('/search', {
            params: {
                q: term,
            },
        })
            .then((response) => {
                console.log(response);
                this.setState({ videos: response.data.items });
                this.setState({ selectedVideo: response.data.items[0] });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className='ui container' style={{ marginTop: '20px' }}>
                <SearchBar onSubmit={this.onFormSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
