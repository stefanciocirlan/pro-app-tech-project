import { AppRoutes } from "../routes/routes";
import { Form, Home, LogIn, LogOut } from "./Constants";

export const navigation = [
    { name: Home, href: AppRoutes.Root.path, current: true },
    { name: LogIn, href: AppRoutes.LogIn.path, current: false },
    { name: Form, href: AppRoutes.Form.path, current: false },
    { name: LogOut, href: AppRoutes.LogOut.path, current: false },
  ];
  