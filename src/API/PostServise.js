import axios from "axios";

export default class PostService {
  static async getAll() {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      return response.data;
    } catch (error) {
      console.error('There was an error!', error);
      throw error; 
    }
  }

  static async getByID(id) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error('There was an error fetching the post by ID!', error);
      throw error;
    }
  }

  static async getCommentsByID(id) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      return response.data;
    } catch (error) {
      console.error('There was an error fetching the comments by post ID!', error);
      throw error;
    }
  }
}
