import axios from 'axios';

const KEY = 'AIzaSyDis0d6yrWytAor-G5rexLzmNjWCsc6Eh4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
