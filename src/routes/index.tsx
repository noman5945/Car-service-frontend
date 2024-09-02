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
import { ProtectedRoute } from "./ProtectedRoute";
import { NotPermitted } from "../pages/Error/NotPermitted";
import { ProtectedAdminRoutes } from "./ProtectedAdminRoutes";
import { ProtectedUserRoutes } from "./ProtectedUserRoutes";
import { NotFound } from "../pages/Error/NotFound";
import { UpdateService } from "../pages/Admin/UpdateService";
import { SlotDetails } from "../pages/Admin/SlotDetails";
import { SlotsCreate } from "../pages/Admin/SlotsCreate";
import { Reviews } from "../pages/Reviews/Reviews";

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
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/not-permitted",
        element: <NotPermitted />,
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
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard/user/profile",
        element: (
          <ProtectedUserRoutes>
            <Profile />
          </ProtectedUserRoutes>
        ),
      },
      {
        path: "/dashboard/user/bookings",
        element: (
          <ProtectedUserRoutes>
            <UserBookings />
          </ProtectedUserRoutes>
        ),
      },
      {
        path: "/dashboard/admin/users",
        element: (
          <ProtectedAdminRoutes>
            <UserManagement />
          </ProtectedAdminRoutes>
        ),
      },
      {
        path: "/dashboard/admin/slots",
        element: (
          <ProtectedAdminRoutes>
            <SlotManagement />
          </ProtectedAdminRoutes>
        ),
      },
      {
        path: "/dashboard/admin/services",
        element: (
          <ProtectedAdminRoutes>
            <ServiceManagement />
          </ProtectedAdminRoutes>
        ),
      },
      {
        path: "/dashboard/admin/service-update",
        element: (
          <ProtectedAdminRoutes>
            <UpdateService />
          </ProtectedAdminRoutes>
        ),
      },
      {
        path: "/dashboard/admin/slot-details",
        element: (
          <ProtectedAdminRoutes>
            <SlotDetails />
          </ProtectedAdminRoutes>
        ),
      },
      {
        path: "/dashboard/admin/slot-create",
        element: (
          <ProtectedAdminRoutes>
            <SlotsCreate />
          </ProtectedAdminRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
