import { AppRoutes } from "../routes/routes";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="m-3">
      <Link
        to={AppRoutes.Form.path}
        className="bg-gray-800 text-gray-300 hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border rounded-md text-base font-medium "
      >
        Log In
      </Link>
    </div>
  );
};

export default LogIn;
