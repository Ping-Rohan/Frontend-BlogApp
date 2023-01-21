import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { privateInstance } from "../axios/axios";

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
    addComment(state, action) {
      const index = state.post.findIndex(
        (el) => el._id === action.payload.post
      );
      state.post[index].comment.push(action.payload);
    },
    addLike(state, action) {
      const index = state.post.findIndex(
        (el) => el._id === action.payload.postId
      );
      state.post[index].likes = action.payload.newLikesArr;
    },
  },
});

export default postSlice.reducer;

const { replacePost, pushPost, addComment, addLike } = postSlice.actions;

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

const toggleLike = (id) => {
  return async (dispatch) => {
    const response = await privateInstance.post(`/api/v1/post/${id}/like`);
    dispatch(addLike({ postId: id, newLikesArr: response.data.likes }));
  };
};

const commentOnPost = (postId, comment) => {
  return async (dispatch) => {
    const response = await privateInstance.post(
      `/api/v1/post/${postId}/comment`,
      comment
    );
    dispatch(addComment(response.data.comment));
    toast.success("Commented Successfully");
  };
};

export { getPost, createPost, toggleLike, commentOnPost, addLike };
