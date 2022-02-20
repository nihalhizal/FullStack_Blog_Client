import axios from "axios";

const apiEndpoint = "http://localhost:5000/posts/";

export const fetchPosts = async () => await axios.get(apiEndpoint);

export const createPost = async (post) => await axios.post(apiEndpoint, post);

export const fetchSinglePost = async (id) => {
  return await axios.get(`${apiEndpoint}${id}`);
};

export const updatePost = async (id, updatedPost) => {
  return await axios.patch(`${apiEndpoint}${id}`, updatedPost);
};

export const deletePost = async (id) => {
  return await axios.delete(`${apiEndpoint}${id}`);
};
