import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "UI",
  initialState: {
    showSpinner: false,
    isError: false,
    uiMessage: null,
  },
  reducers: {
    setShowSpinner(state, action) {
      state.showSpinner = action.payload;
    },
    setUiMessage(state, action) {
      state.uiMessage = action.payload;
    },
    setIsError(state, action) {
      state.isError = action.payload;
    },
  },
});

export default uiSlice.reducer;
const { setShowSpinner, setSpinnerMessage, setUiMessage, setIsError } =
  uiSlice.actions;
export { setShowSpinner, setSpinnerMessage, setUiMessage, setIsError };
