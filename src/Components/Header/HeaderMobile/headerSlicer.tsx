import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "setMenueList",
  initialState: {
    value: false,
  },
  reducers: {
    setMenueList: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMenueList } = headerSlice.actions;

export default headerSlice.reducer;
