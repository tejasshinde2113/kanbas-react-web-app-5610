import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { GrFormSchedule } from "react-icons/gr";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { TbDeviceDesktopCog } from "react-icons/tb";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kanbas/Calendar",  icon: GrFormSchedule },
    { label: "Inbox",     path: "/Kanbas/Inbox",     icon: HiMiniInboxArrowDown },
    { label: "Labs",      path: "/Labs",             icon: TbDeviceDesktopCog },
  ];

  
  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }} 
      className="list-group rounded-0 position-fixed
      bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/" 
        className="list-group-item bg-black border-0 text-center">
          <img src="/images/NEU.png" width="75px" />
      </a>

      <Link to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </Link>
      ))}



      {/* <NavLink to="/Kanbas/Account" id="wd-account-link"
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
        to="/Kanbas/Dashboard"
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
      </NavLink> */}

      {/* <Link to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text text-white" /><br />
          Account
      </Link>
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className="list-group-item text-center border-0 bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
          Dashboard
      </Link> */}
      {/* <Link to="/Kanbas/Courses" id="wd-course-link"
        className="list-group-item text-white bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />
          Courses
      </Link> */}
      {/* <Link to="/Kanbas/Calendar" id="wd-calendar-link"
        className="list-group-item text-white bg-black text-center border-0">
        <GrFormSchedule className="fs-1 text-danger" /><br />
          Calendar
      </Link> */}
      {/* <Link to="/Kanbas/Inbox" id="wd-inbox-link"
        className="list-group-item text-white bg-black text-center border-0">
          <HiMiniInboxArrowDown className="fs-1 text-danger" /><br />
          Inbox
      </Link>
      <Link to="/Labs" id="wd-labs-link"
        className="list-group-item text-white bg-black text-center border-0">
          <TbDeviceDesktopCog className="fs-1 text-danger" /><br />
            Labs
      </Link> */}
    </div>
);}