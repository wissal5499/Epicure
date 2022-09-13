/**************************************
 ************* DON`T CHECK :)***********
 ***************************************/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const mealsSlice = createSlice({
  name: "meal",
  initialState: {
    mealsArray: [{}],
  },
  reducers: {
    setmeal: (state, action) => {
      state.mealsArray.push(action.payload.newMeal);
    },
  },
});
export const setmeal = mealsSlice.actions.setmeal;
export default mealsSlice.reducer;
