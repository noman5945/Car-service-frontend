import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { UserRoutes } from "../routes/UserRoutes";
import { useState } from "react";
import { AdminRoutes } from "../routes/AdminRoutes";

export const Dashboard = () => {
  const [userType, setUserType] = useState("admin");
  let Routes;
  if (userType === "user") {
    Routes = UserRoutes;
  } else {
    Routes = AdminRoutes;
  }
  return (
    <div className=" mx-auto">
      <NavBar></NavBar>
      <div className=" flex flex-row gap-2">
        <SideBar items={Routes} />
        <Outlet />
      </div>
    </div>
  );
};
