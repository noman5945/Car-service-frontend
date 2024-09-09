import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  logOut,
  selectCurrentUser,
  useCurrentToken,
} from "../redux/features/auth/authSlice";
import { TUser } from "../types/user.type";

export const NavBar = () => {
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(selectCurrentUser) as TUser;
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Navbar fluid rounded className=" shadow-md ">
      <Navbar.Brand>
        {" "}
        <div className=" flex flex-row items-center  ">
          <img src="/car-logo.jpg" className=" w-[80px] h-[80px]" />
          <h1 className=" text-lg font-bold">Levis Car Services</h1>
        </div>
      </Navbar.Brand>
      <div className=" flex md:order-2">
        {token ? (
          <Button onClick={handleLogOut}>Log Out</Button>
        ) : (
          <Link to={"/sign-in"}>
            <Button>Log In</Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>
          <Navbar.Link className=" lg:text-lg ">Home</Navbar.Link>
        </Link>
        <Link to={"/about"}>
          <Navbar.Link className=" lg:text-lg ">About</Navbar.Link>
        </Link>
        <Link to={"/services"}>
          {" "}
          <Navbar.Link className=" lg:text-lg ">Services</Navbar.Link>
        </Link>
        {user ? (
          user.role === "user" ? (
            <Link to={"/dashboard/user/profile"}>
              {" "}
              <Navbar.Link className=" lg:text-lg ">Dashboard</Navbar.Link>
            </Link>
          ) : (
            <Link to={"/dashboard/admin/users"}>
              {" "}
              <Navbar.Link className=" lg:text-lg ">Dashboard</Navbar.Link>
            </Link>
          )
        ) : null}
      </Navbar.Collapse>
    </Navbar>
  );
};
