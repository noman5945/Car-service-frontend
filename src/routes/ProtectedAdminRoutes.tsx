import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { TUser } from "../types/user.type";
import { Navigate } from "react-router-dom";

type ProtectedAdminRouteProps = {
  children: ReactNode;
};
export const ProtectedAdminRoutes = ({
  children,
}: ProtectedAdminRouteProps) => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  if (user.role !== "admin") {
    return <Navigate to={"/not-permitted"} />;
  }
  return children;
};
