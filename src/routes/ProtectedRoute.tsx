import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { useCurrentToken } from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

type ProtectedRoute = {
  children: ReactNode;
};
export const ProtectedRoute = ({ children }: ProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);
  if (!token) {
    return <Navigate to={"/sign-in"} />;
  }
  return children;
};
