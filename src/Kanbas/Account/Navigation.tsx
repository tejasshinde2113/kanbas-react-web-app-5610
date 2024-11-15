import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation"  className="wd list-group fs-5 rounded-0">
      <NavLink
        id="wd-account-signin-link" to="/Kanbas/Account/Signin"
        className={({ isActive }) => `list-group-item border border-0 ${
          isActive ? "active" : "text-danger"}`}>
        Signin
      </NavLink>
      <NavLink
        id="wd-account-signup-link" to="/Kanbas/Account/Signup"
        className={({ isActive }) => `list-group-item border border-0 ${
          isActive ? "active" : "text-danger"}`}>
        Signup
      </NavLink>
      <ProtectedRoute> 
        <NavLink
          id="wd-account-profile-link" to="/Kanbas/Account/Profile"
          className={({ isActive }) => `list-group-item border border-0 ${
            isActive ? "active" : "text-danger"}`}>
          Profile
        </NavLink>
      </ProtectedRoute> 
    </div>
);}