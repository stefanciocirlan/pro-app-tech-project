export const logIn = () => localStorage.setItem("is_logged_in", true);
export const logOut = () => localStorage.setItem("is_logged_in", false);
export const getData = () => localStorage.getItem("data");
export const addData = (data) => localStorage.setItem("data", data);
