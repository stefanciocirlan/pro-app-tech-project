import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from "./auth-slice";
import { dataSlice } from "./data-slice";

const store = configureStore({
  reducer: {
    dataSliceReducer: dataSlice.reducer,
    authSliceReducer: authSlice.reducer
  },
});


export default store;