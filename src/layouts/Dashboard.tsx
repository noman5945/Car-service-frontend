import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { UserRoutes } from "../routes/UserRoutes";
import { AdminRoutes } from "../routes/AdminRoutes";
import { useAppSelector } from "../redux/hooks";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { TUser } from "../types/user.type";

export const Dashboard = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  let Routes;
  if (user.role === "user") {
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
