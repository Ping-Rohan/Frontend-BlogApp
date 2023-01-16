import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User";
import uiReducer from "./Ui";

const store = configureStore({
  reducer: { user: userReducer, ui: uiReducer },
});

export default store;
