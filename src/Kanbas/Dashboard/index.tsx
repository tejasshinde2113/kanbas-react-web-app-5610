import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses"  className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                <div className="wd-dashboard-course  col" style={{ width: "270px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/1234/Home">
                            <img src="images/coursethumbnail.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS1234 React JS
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course  col" style={{ width: "270px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5610/Home">
                            <img src="images/coursethumbnail.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS5610 Web Dev
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack Web developer
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div className="wd-dashboard-course  col" style={{ width: "270px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5800/Home">
                            <img src="images/coursethumbnail.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS5800 Algorithms
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Algorithms
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course  col" style={{ width: "270px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5010/Home">
                            <img src="images/coursethumbnail.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS5010 PDP
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    PDP
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>


                <div className="wd-dashboard-course  col" style={{ width: "270px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5200/Home">
                            <img src="images/coursethumbnail.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS5200 ML
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Machine Learning
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course  col" style={{ width: "270px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/6140/Home">
                            <img src="images/coursethumbnail.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS6140 NLP
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    NLP
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course  col" style={{ width: "270px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                            to="/Kanbas/Courses/5330/Home">
                            <img src="images/coursethumbnail.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS5330 PR&CV
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Pattern Recognition & CV
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}