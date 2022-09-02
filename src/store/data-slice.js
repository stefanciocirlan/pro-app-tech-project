import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    addData(state, action) {
      return [...action.payload];
    },
    getData(state, action) {
      const data = action?.payload ? action.payload : [];
      return [...data];
    },
  },
});

export const sendAsyncData = (data) => {
  return (dispatch) => {
    const localData = JSON.parse(localStorage.getItem("data"));
    const newData = localData ? [...localData, data] : [data];
    localStorage.setItem("data", JSON.stringify(newData));
    dispatch(dataSlice.actions.addData(newData));
  };
};

export const getAsyncData = () => {
  return (dispatch) => {
    const localData = JSON.parse(localStorage.getItem("data"));
    dispatch(dataSlice.actions.getData(localData));
  };
};
