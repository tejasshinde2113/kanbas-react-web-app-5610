import { Link } from "react-router-dom";

import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signup() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };

  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input id="wd-username" placeholder="username" 
        className="form-control mb-2"/>
      <input id="wd-password" placeholder="password" type="password" 
        className="form-control mb-2"/> 
      <input placeholder="verify password" type="password" 
        className="form-control mb-2"/>
      <Link  id="wd-signup-btn"
             to="/Kanbas/Account/Profile"
             className="btn btn-primary w-100"> Sign up </Link> <br />
      <Link  id="wd-signin-link" to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
);}