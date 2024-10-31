import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import React, { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const location = useLocation();

  const isPublicRoute = ["/Kanbas/Account/Signup", "/Kanbas/Account/Signin"].includes(location.pathname);

  if (currentUser || isPublicRoute) {
    return <>{children}</>;
  } else {
    return <Navigate to="/Kanbas/Account/Signup" />;
  }
};

export default ProtectedRoute;
