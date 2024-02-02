import axios from "axios"

export default class PostService{
    static async getAll(){
        const response= await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
        .catch(error => {
            console.error('There was an error!', error);
          });
    }
    static async getByID(id){
        const response= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response.data
    }
    static async getCommentsByID(id){
        const response= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response.data
    }
}

