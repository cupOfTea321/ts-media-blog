import axios from "axios";

export default class BlogService {
    static async getAll(limit = 5, page = 1){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }
}