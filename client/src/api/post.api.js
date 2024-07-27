import axios from 'axios';

const postsApi = axios.create({
   baseURL: "http://localhost:8000/posts/api/blog/",
})

export const getAllPost = () => postsApi.get("/");
//export const getAllPost = () => postApi.get("/");


export const createPost = (posts) => postsApi.post("/", posts);

export const getPost = (id) => postsApi.get(`/${id}/`);

export const deletePost = (id) => postsApi.delete(`/${id}`);

export const updatePost = (id, blog) => postsApi.put(`/${id}/`, blog);
