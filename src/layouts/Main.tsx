import { CustomFooter } from "../components/CustomFooter";
import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <div className=" mx-auto">
      <NavBar></NavBar>
      <Outlet />
      <CustomFooter></CustomFooter>
    </div>
  );
};
