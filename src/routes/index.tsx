import { createBrowserRouter } from "react-router-dom";
import { Main } from "../layouts/Main";
import { Home } from "../pages/Home/Home";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
import { Services } from "../pages/Services/Services";
import { About } from "../pages/About/About";
import { ServiceDetails } from "../pages/Services/ServiceDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service-details",
        element: <ServiceDetails />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);
