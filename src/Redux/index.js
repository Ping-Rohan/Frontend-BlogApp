import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import ui from "./ui";
import PostReducer from "./post";

const store = configureStore({
  reducer: { user: userReducer, ui, post: PostReducer },
});

export default store;
