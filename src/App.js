import { Routes, Route, Link } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import Home from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import FormPage from "./pages/FormPage";
import LogOut from "./pages/LogOut";
import Navbar from "./components/Navbar";




function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path={AppRoutes.Root.path} element={<Home/>}></Route>
        <Route path={AppRoutes.LogIn.path} element={<LogIn/>}></Route>
        <Route path={AppRoutes.Form.path} element={<FormPage/>}></Route>
        <Route path={AppRoutes.LogOut.path} element={<LogOut/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
