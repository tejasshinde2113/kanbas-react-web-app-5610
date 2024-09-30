import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrFormSchedule } from "react-icons/gr";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { TbDeviceDesktopCog } from "react-icons/tb";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }} 
      className="list-group rounded-0 position-fixed
      bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" 
        href="https://www.northeastern.edu/" 
        className="list-group-item bg-black border-0 text-center">
          <img src="/images/NEU.png" alt = "ALT text" width="75px" />
      </a>

      <NavLink to="/Kanbas/Account" id="wd-account-link"
        className={({ isActive }) => `list-group-item text-center border-0 ${
            isActive ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className="fs-1 " />
        <br />
        Account
      </NavLink>
      
      <NavLink
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </NavLink>
      
      <NavLink
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 bg-black ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </NavLink>
      <NavLink
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 bg-black ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        <GrFormSchedule className="fs-1 text-danger" />
        <br />
        Calendar
      </NavLink>
      <NavLink
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 bg-black ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        <HiMiniInboxArrowDown className="fs-1 text-danger" />
        <br />
        Inbox
      </NavLink>
      <NavLink
        to="/Labs"
        id="wd-labs-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 bg-black ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        <TbDeviceDesktopCog className="fs-1 text-danger" />
        <br />
        Labs
      </NavLink>
    </div>
);}