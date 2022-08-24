import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import rest from "../../constants/JsonFolder/Restaurant.json";
// const initialState = rest;

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    value: [],
  },
  reducers: {
    setRestaurants: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
