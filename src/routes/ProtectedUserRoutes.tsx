import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { TUser } from "../types/user.type";
import { Navigate } from "react-router-dom";

type ProtectedUserRoutesProps = {
  children: ReactNode;
};
export const ProtectedUserRoutes = ({ children }: ProtectedUserRoutesProps) => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  if (user.role !== "user") {
    return <Navigate to={"/not-permitted"} />;
  }
  return children;
};
