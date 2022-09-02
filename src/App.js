import { Routes, Route, Navigate } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import Home from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import FormPage from "./pages/FormPage";
import LogOut from "./pages/LogOut";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAsyncIsUserLogged } from "./store/auth-slice";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authSliceReducer.isLoggedIn);

  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to={AppRoutes.LogIn.path} />;
    }

    return children;
  };

  useEffect(() => {
    dispatch(getAsyncIsUserLogged());
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path={AppRoutes.Root.path} element={<Home />} />
          <Route path={AppRoutes.LogIn.path} element={<LogIn />} />
          <Route
            path={AppRoutes.Form.path}
            element={
              <ProtectedRoute>
                <FormPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoutes.LogOut.path}
            element={
              <ProtectedRoute>
                <LogOut />
              </ProtectedRoute>
            }
          />
          <Route path={AppRoutes.NoMatch.path} element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
