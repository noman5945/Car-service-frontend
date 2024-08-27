import { createBrowserRouter } from "react-router-dom";
import { Main } from "../layouts/Main";
import { Home } from "../pages/Home/Home";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
import { Services } from "../pages/Services/Services";
import { About } from "../pages/About/About";
import { ServiceDetails } from "../pages/Services/ServiceDetails";
import { Bookings } from "../pages/Bookings/Bookings";
import { Dashboard } from "../layouts/Dashboard";
import { Profile } from "../pages/User/Profile";
import { UserBookings } from "../pages/User/UserBookings";
import { UserManagement } from "../pages/Admin/UserManagement";
import { SlotManagement } from "../pages/Admin/SlotManagement";
import { ServiceManagement } from "../pages/Admin/ServiceManagement";

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
      {
        path: "/booking",
        element: <Bookings />,
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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/user/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/user/bookings",
        element: <UserBookings />,
      },
      {
        path: "/dashboard/admin/users",
        element: <UserManagement />,
      },
      {
        path: "/dashboard/admin/slots",
        element: <SlotManagement />,
      },
      {
        path: "/dashboard/admin/services",
        element: <ServiceManagement />,
      },
    ],
  },
]);
