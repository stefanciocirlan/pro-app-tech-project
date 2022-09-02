const { createSlice } = require("@reduxjs/toolkit");

export const moviesSlice = createSlice({
  name: "movieSlice",
  initialState: [],
  reducers: {
    addMovies(state, action) {
      return [...action.payload];
    }
  },
});

export const getAsyncMovies = () => {
  return async (dispatch) => {
    const fetchMovies = async () => {
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = response.json();
      return data;
    };

    const movieList = await fetchMovies();
    dispatch(moviesSlice.actions.addMovies(movieList));
  };
};
