import Axios from 'axios';
import { PostQuery } from './redux/Actions/Post.action';
import { API_URL, UNSPLASH_API_KEY } from './utils/Config';



export const GetPosts = (query: PostQuery) => {
    let url = `${API_URL}/photos?page=${query.page || 1}`;
    if(query.search){
        url = `${API_URL}/search/photos?page=${query.page || 1}`;
    }
    return Axios.get(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Client-ID ${UNSPLASH_API_KEY}`
        }
    })
}