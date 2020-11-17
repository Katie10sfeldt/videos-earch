import axios from 'axios';

const KEY = 'AIzaSyASHfOKV3iblMCJPRbW8lVELXvA4ZORlXE';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
