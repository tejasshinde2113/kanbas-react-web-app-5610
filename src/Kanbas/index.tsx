import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard"
import KanbasNavigation from "./Navigation";
import Courses from "./Courses"
export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      
      <h1>Tejas Shinde</h1>
      <table>
        <tr>
          <td valign="top">
            <KanbasNavigation />
          </td>
          <td valign="top">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<Dashboard />}/>
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Courses/:cid/*" element={<Courses />} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
          
          </td>
          
        </tr>
      </table>
      
    </div>
  );
}
