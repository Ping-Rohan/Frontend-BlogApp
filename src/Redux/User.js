import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "../axios/axios";
import { setShowSpinner } from "./Ui";

const userSlice = createSlice({
  name: "User",
  initialState: {
    isLoggedIn: false,
    accessToken: null,
    document: null,
  },
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setDocument(state, action) {
      state.document = action.payload;
    },
  },
});

const { setAccessToken, setLogin, setDocument } = userSlice.actions;
export default userSlice.reducer;

const signUp = (form) => {
  return async (dispatch) => {
    try {
      dispatch(setShowSpinner(true));
      const response = await axios.post(
        "https://backend-blog-omega.vercel.app/api/v1/users/signup",
        form
      );
      dispatch(setShowSpinner(false));
      toast.success(response.data.message);
      dispatch(setAccessToken(response.data.accessToken));
    } catch (error) {
      dispatch(setShowSpinner(false));
      toast.error(error.response.data.message);
    }
  };
};

const login = (form, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(setShowSpinner(true));
      const response = await axios.post(
        `https://backend-blog-omega.vercel.app/api/v1/users/login`,
        form
      );
      dispatch(setShowSpinner(false));
      dispatch(setAccessToken(response.data.accessToken));
      toast.success(response.data.message);
      navigate("/");
      console.log(response);
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(setShowSpinner(false));
    }
  };
};

export { setAccessToken, setLogin, setDocument, signUp, login };
