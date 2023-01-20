import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { privateInstance } from "../axios/axios";
import { setSpinner } from "./ui";

const postSlice = createSlice({
  name: "Post",
  initialState: {
    post: [],
  },
  reducers: {
    replacePost(state, action) {
      state.post = action.payload;
    },
    pushPost(state, action) {
      state.post.push(action.payload);
    },
  },
});

export default postSlice.reducer;

const { replacePost, pushPost, getSinglePost } = postSlice.actions;

const getPost = () => {
  return async (dispatch) => {
    const response = await privateInstance.get("/api/v1/post");
    dispatch(replacePost(response.data.post));
  };
};

const createPost = (form) => {
  return async (dispatch) => {
    const response = await privateInstance.post("/api/v1/post", form);
    toast.success("Post created successfully");
    console.log(response);
    dispatch(pushPost(response.data.post));
  };
};

const getPostById = (id) => {
  return async (dispatch) => {
    dispatch(setSpinner(true));
    const response = await privateInstance.get(`/api/v1/post/${id}`);
    dispatch(setSpinner(false));
    return response.data;
  };
};
export { getPost, createPost, getPostById };
