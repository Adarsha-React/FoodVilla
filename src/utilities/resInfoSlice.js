import { createSlice } from "@reduxjs/toolkit";

const resInfoSlice = createSlice({
  name: "resInfo",
  initialState: {
    restaurantInfo: [],
  },
  reducers: {
    addRestuarant: (state, action) => {
      const restaurantExist = state.restaurantInfo.includes(action.payload.id);
      if (!restaurantExist) state.restaurantInfo.push(action.payload);
    },
  },
});

export const { addRestuarant } = resInfoSlice.actions;
export default resInfoSlice.reducer;
