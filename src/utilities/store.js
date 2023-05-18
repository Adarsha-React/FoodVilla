import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import resInfoSlice from "./resInfoSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    resInfo: resInfoSlice,
  },
});

export default store;
