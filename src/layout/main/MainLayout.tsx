import React from "react";
import { Outlet, useLocation } from "react-router";
import AppSidebar from "../components/AppSidebar";

interface MainLayoutProps {}

const routesNotHaveSidebar = ["/login", "/signup"];

const MainLayout: React.FC<MainLayoutProps> = ({}) => {
  const { pathname } = useLocation();

  const isRouteHaveSidebar = !routesNotHaveSidebar.includes(pathname);

  return (
    <>
      <main
        className={`bg-black w-full min-h-screen grid ${
          isRouteHaveSidebar ? " grid-cols-[350px_1fr]" : "grid-cols-1"
        } roboto`}
      >
        {isRouteHaveSidebar && <AppSidebar />}
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
