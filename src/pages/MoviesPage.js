import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncMovies } from "../store/movies-slice";

const MoviesPage = () => {
  const movies = useSelector((state) => state.movieSliceReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncMovies());
    console.log(movies);
  }, [dispatch]);

  const MoviesList = () => {
    return movies.map((movie) => {
      return (
        <tr
          key={movie.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {movie.name}
          </th>
          <td className="px-6 py-4">{movie.premiered}</td>
          <td className="px-6 py-4">{movie.language}</td>
          <td className="px-6 py-4">{movie.rating.average}</td>
        </tr>
      );
    });
  };
  return (
    <div className="max-w-2xl mx-auto h-24">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-96">
        {movies?.length ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-24">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Premiered
                </th>
                <th scope="col" className="px-6 py-3">
                  Language
                </th>
                
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-hidden overflow-x-hidden w-full h-24">
              <MoviesList />
            </tbody>
          </table>
        ) : (
          <div className=" bg-gray-800 text-gray-400 max-w-7xl px-2 sm:px-6 ">
            <div className="relative flex h-16 items-center ">No Movies</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
