import { NavLink } from "react-router-dom";
export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation"  className="wd list-group fs-5 rounded-0">

      <NavLink
        id="wd-course-home-link"
        to="/Kanbas/Courses/1234/Home"
        className={({ isActive }) => `list-group-item border border-0 ${
          isActive ? "active" : "text-danger"}`}>
        Home
      </NavLink>

      <NavLink
        id="wd-course-modules-link"
        to="/Kanbas/Courses/1234/Modules"
        className={({ isActive }) => `list-group-item border border-0 ${
          isActive ? "active" : "text-danger"}`}>
        Modules
      </NavLink>
      <NavLink
        id="wd-course-piazza-link"
        to="/Kanbas/Courses/1234/Piazza"
        className={({ isActive }) => `list-group-item border border-0 ${
          isActive ? "active" : "text-danger"}`}>
        Piazza
      </NavLink>
      <NavLink
        id="wd-course-zoom-link"
        to="/Kanbas/Courses/1234/Zoom"
        className={({ isActive }) => `list-group-item border border-0 ${
          isActive ? "active" : "text-danger"}`}>
        Zoom
      </NavLink>
      <NavLink
        id="wd-course-assignments-link"
        to="/Kanbas/Courses/1234/Assignments"
        className={({ isActive }) => `list-group-item border border-0 ${
          isActive ? "active" : "text-danger"}`}>
        Assignments
      </NavLink>
      <NavLink
        id="wd-course-quizzes-link"
        to="/Kanbas/Courses/1234/Quizzes"
        className={({ isActive }) => `list-group-item border border-0 ${
          isActive ? "active" : "text-danger"}`}>
        Quizzes
      </NavLink>
      <NavLink
        id="wd-course-grades-link"
        to="/Kanbas/Courses/1234/Grades"
        className={({ isActive }) => `list-group-item border border-0 ${
          isActive ? "active" : "text-danger"}`}>
        Grades
      </NavLink>
      <NavLink
        id="wd-course-people-link"
        to="/Kanbas/Courses/1234/People"
        className={({ isActive }) => `list-group-item border border-0 ${
          isActive ? "active" : "text-danger"}`}>
        People
      </NavLink>
      
      {/* <Link id="wd-course-home-link"    to="/Kanbas/Courses/1234/Home"
        className="list-group-item active border border-0">Home</Link> */}
      {/* <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules"
        className="list-group-item text-danger border border-0">Modules</Link>
      <Link id="wd-course-piazza-link"  to="/Kanbas/Courses/1234/Piazza"
        className="list-group-item text-danger border border-0">Piazza</Link>
      <Link id="wd-course-zoom-link"    to="/Kanbas/Courses/1234/Zoom"
        className="list-group-item text-danger border border-0">Zoom</Link>
      <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments"
        className="list-group-item text-danger border border-0">Assignments</Link>
      <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes"
        className="list-group-item text-danger border border-0">Quizzes</Link>
      <Link id="wd-course-grades-link"  to="/Kanbas/Courses/1234/Grades" 
        className="list-group-item text-danger border border-0">Grades</Link>
      <Link id="wd-course-people-link"  to="/Kanbas/Courses/1234/People"
        className="list-group-item text-danger border border-0">People</Link> */}
    </div>
);}