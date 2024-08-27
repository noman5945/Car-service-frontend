import { BookingIcon } from "../components/Icon/BookingIcon";
import { ProfileIcon } from "../components/Icon/ProfileIcon";

export const AdminRoutes = [
  {
    path: "/dashboard/admin/services",
    pic: <ProfileIcon />,
    title: "Manage Service",
  },
  {
    path: "/dashboard/admin/slots",
    pic: <BookingIcon />,
    title: "Manage Slots",
  },
  {
    path: "/dashboard/admin/users",
    pic: <ProfileIcon />,
    title: "Manage Users",
  },
];
