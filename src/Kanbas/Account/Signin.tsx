import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signin() {
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
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
        For Faculty login, use following creds : username - admin, password - admin
        <br></br>
 
        For student login, use following creds : username - student, password - student
     
      <input defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             id="wd-username" placeholder="username" className="form-control mb-2"/>
      <input defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             id="wd-password" placeholder="password" type="password" className="form-control mb-2"/> 
      <button onClick={signin}  id="wd-signin-btn"
             className="btn btn-primary w-100"> Sign in </button> <br />
             {/* Clicking th eabove button will take you to Dashboard
             As it is the default route set */}
      <Link  id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
    </div>
);}