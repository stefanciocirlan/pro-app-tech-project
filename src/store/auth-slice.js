import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false };

export const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    logUser(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const asyncLogIn = (data) => {
  return (dispatch) => {
    localStorage.setItem("is_logged_in", "true");
    dispatch(authSlice.actions.logUser(true));
  };
};

export const asyncLogOut = (data) => {
  return (dispatch) => {
    localStorage.setItem("is_logged_in", "false");
    dispatch(authSlice.actions.logUser(false));
  };
};

export const getAsyncIsUserLogged = () => {
  return (dispatch) => {
    const isLoggedIn = JSON.parse(localStorage.getItem("is_logged_in"));
    dispatch(authSlice.actions.logUser(isLoggedIn));
  };
};


