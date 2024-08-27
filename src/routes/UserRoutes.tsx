import { BookingIcon } from "../components/Icon/BookingIcon";
import { ProfileIcon } from "../components/Icon/ProfileIcon";

export const UserRoutes = [
  {
    path: "/dashboard/user/profile",
    pic: <ProfileIcon />,
    title: "Profile",
  },
  {
    path: "/dashboard/user/bookings",
    pic: <BookingIcon />,
    title: "My Bookings",
  },
];
