import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=1234';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request // because the request is in the payload property, the redux-promise middleware will automatically resolve this request for us whenever it sees this action come across. So by the time that this action arrives in the reducer, the payload property will contain the response object from axios, which will have our array of posts
    };
}