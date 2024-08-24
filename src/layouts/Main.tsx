import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Main = () => {
  return (
    <div className=" mx-auto">
      <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};
