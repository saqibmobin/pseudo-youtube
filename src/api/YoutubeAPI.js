import Axios from 'axios';

const KEY = 'AIzaSyDOVe9Q2BRunnjUjsxNcwxP42DIQ2fok0Q';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
    },
});
