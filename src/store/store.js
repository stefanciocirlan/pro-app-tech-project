import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from "./auth-slice";
import { dataSlice } from "./data-slice";
import { moviesSlice } from "./movies-slice";

const store = configureStore({
  reducer: {
    dataSliceReducer: dataSlice.reducer,
    authSliceReducer: authSlice.reducer,
    movieSliceReducer: moviesSlice.reducer,
  },
});


export default store;