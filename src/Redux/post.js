import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "Post",
  initialState: {
    post: [],
  },
  reducers: {
    replacePost(state, action) {
      state.post = action.payload;
    },
    updatePost(state, action) {
      state.post.push(action.payload);
    },
  },
});

export default postSlice.reducer;

const { replacePost, updatePost } = postSlice.actions;

export { replacePost, updatePost };
