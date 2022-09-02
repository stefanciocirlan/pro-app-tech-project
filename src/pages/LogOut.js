import { AppRoutes } from "../routes/routes";
import { Link } from "react-router-dom";

const LogOut = () => {
  const handleClick = () => {
    localStorage.setItem("is_logged_in", false);
  };
  return (
    <div className="m-3">
      <Link
        onClick={handleClick}
        to={AppRoutes.Root.path}
        className="bg-gray-800 text-gray-300 hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border rounded-md text-base font-medium "
      >
        Log Out
      </Link>
    </div>
  );
};

export default LogOut;
