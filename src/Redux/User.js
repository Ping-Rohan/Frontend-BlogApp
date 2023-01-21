import { createSlice } from "@reduxjs/toolkit";
import axios, { privateInstance } from "../axios/axios";
import { setSpinner } from "./ui";
import toast from "react-hot-toast";

const initialState = {
  accessToken: "",
  document: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    updateAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    updateDocument(state, action) {
      state.document = action.payload;
    },
    updateLogin(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export default userSlice.reducer;

const { updateAccessToken, updateProfileImage, updateDocument, updateLogin } =
  userSlice.actions;

const signUp = (form, navigate) => {
  return async (dispatch) => {
    const response = await axios.post(`/api/v1/users/signup`, form);
    toast.success(response.data.message);
    navigate("/login");
  };
};

const loginUser = (form, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(setSpinner(true));
      const response = await axios.post("/api/v1/users/login", form);
      toast.success(response.data.message);
      dispatch(updateAccessToken(response.data.accessToken));
      dispatch(updateDocument(response.data.document));
      dispatch(setSpinner(false));
      dispatch(updateLogin(true));
      navigate("/");
    } catch (error) {
      dispatch(setSpinner(false));
      toast.error(error.response.data.message);
    }
  };
};

const updateFields = (form) => {
  return async (dispatch) => {
    try {
      await privateInstance.patch("/api/v1/users/update", form);
      toast.success("Updated successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
};

export { loginUser, updateFields, signUp };
