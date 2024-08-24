import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar fluid rounded className=" shadow-md">
      <Navbar.Brand>
        {" "}
        <h1 className=" text-lg font-bold"> Levis Car Services</h1>
      </Navbar.Brand>
      <div className=" flex md:order-2">
        <Link to={"/sign-in"}>
          <Button>Log-In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>
          <Navbar.Link>Home</Navbar.Link>
        </Link>
        <Link to={"/about"}>
          <Navbar.Link>About</Navbar.Link>
        </Link>
        <Link to={"/services"}>
          {" "}
          <Navbar.Link>Services</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
