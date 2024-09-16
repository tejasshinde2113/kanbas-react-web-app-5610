import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
        <div id="wd-dashboard-courses">
            <div className="wd-dashboard-course">
            <img alt="Northeastern University logo" src="/images/neu-logo.svg" />
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1234/Home">
                    Course 1
                    </Link>
                    <p className="wd-dashboard-course-title">
                    Full Stack software developer
                    </p>
                </div>
            </div>
            <div className="wd-dashboard-course"> 
                <img alt="Northeastern University logo" src="/images/neu-logo.svg" />
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/5610/Home">
                    Course 2
                    </Link>
                    <p className="wd-dashboard-course-title">
                    Full Stack software developer
                    </p>
                </div>
            </div>
            <div className="wd-dashboard-course"> 
                <img alt="Northeastern University logo" src="/images/neu-logo.svg" />
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/5610/Home">
                    Course 3
                    </Link>
                    <p className="wd-dashboard-course-title">
                    Full Stack software developers
                    </p>
                </div>
            </div>
            
      </div>
    </div>
  );
}
