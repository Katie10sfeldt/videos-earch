import axios from 'axios';

const KEY = 'AIzaSyBWGwMAPIW76FYxfUbeVDIRXSf33bF5qWA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
