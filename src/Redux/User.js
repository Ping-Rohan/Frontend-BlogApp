import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "../axios/axios";
import { setShowSpinner } from "./Ui";
import jwtDecode from "jwt-decode";
import store from "./index";

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
      dispatch(setLogin(true));
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
      dispatch(setLogin(true));
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(setShowSpinner(false));
    }
  };
};

const getMyProfile = () => {
  return async (dispatch) => {
    const accessToken = store.getState().user.accessToken;
    const decoded = jwtDecode(accessToken);
    dispatch(setShowSpinner(true));
    const response = await axios.get(
      `https://backend-blog-omega.vercel.app/api/v1/users/${decoded._id}`
    );
    dispatch(setShowSpinner(false));
    console.log(response.data);
  };
};

export { setAccessToken, setLogin, setDocument, signUp, login, getMyProfile };
