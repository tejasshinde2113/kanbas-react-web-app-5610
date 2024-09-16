import { Routes, Route, Navigate } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules"
import Grades from "./Grades"
import Home from "./Home";
import Assignments from "./Assignments"
import AssignmentEditor from "./Assignments/Editor";

export default function Courses () {
    return (
        <div id="wd-courses">
            <h2>5160 Course</h2>
            <hr />
            <table>
                <tr>
                <td valign="top">
                    <CoursesNavigation />
                </td>
                <td valign="top">
                    <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Piazza" element={<h2>Piazza</h2>} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:aid" element={<AssignmentEditor />} />                  
                    <Route path="Quizzes" element={<h2>Quizzes</h2>} />
                    <Route path="Grades" element={<Grades />} />
                    <Route path="People" element={<h2>People</h2>} />
                    </Routes>
                </td>
                </tr>
            </table>
        </div>
    );
}
  