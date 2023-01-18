import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showSpinner: false,
  },
  reducers: {
    setSpinner(state, action) {
      state.showSpinner = action.payload;
    },
  },
});

export default uiSlice.reducer;
const { setSpinner } = uiSlice.actions;

export { setSpinner };
