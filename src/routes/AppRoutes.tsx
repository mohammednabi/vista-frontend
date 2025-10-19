import LoginPage from "@/pages/login/LoginPage";

import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/home/HomePage";
import MainLayout from "@/layout/main/MainLayout";
import SignupPage from "@/pages/signup/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "signup",
        Component: SignupPage,
      },
    ],
  },
]);

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
