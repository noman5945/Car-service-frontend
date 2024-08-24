import { ReactNode } from "react";

type PrivateRouteProps = {
  children: ReactNode;
};
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  return <div>{children}</div>;
};
