import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataSlice, getAsyncData } from "../store/data-slice";
import { compareByEmail } from "../store/data-slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.dataSliceReducer);

  useEffect(() => {
    dispatch(getAsyncData());
  }, []);

  const handleClick = () => 
  {
    dispatch(compareByEmail(users));
    
  }
  const Users = () => {
    return users.map((user) => {
      return (
        <tr
          key={user.key}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {user.birthYear}
          </th>
          <td  className="px-6 py-4 ">
            <span>{user.email}</span>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {users?.length ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Birth Year
                </th>
                <th onClick={handleClick} scope="col" className="px-6 py-3 cursor-pointer">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              <Users />
            </tbody>
          </table>
        ) : (
          <div className=" bg-gray-800 text-gray-400 max-w-7xl px-2 sm:px-6 ">
            <div className="relative flex h-16 items-center ">No users</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
