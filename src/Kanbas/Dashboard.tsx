import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as db from "./Database";
import ProtectedEdit from "./Account/ProtectedEdit";
import ProtectedRouteStudent from "./Account/ProtectedRouteStudent";
import {unenrollCourse,enrollCourse} from "./enrollmentReducer";


export default function Dashboard({ 
    courses, 
    course, 
    setCourse, 
    addNewCourse, 
    deleteCourse, 
    updateCourse }: 
    {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void; }) {
    
    const [showAllCourses, setShowAllCourses] = useState(false);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;
    // const { enrollme+++nts } = useSelector((state: any) => state.enrollmentReducer);
    
    const enrolledCourses = courses.filter((course) => enrollments.some(
        (enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id
      ));
      const isEnrolled = enrolledCourses.includes(course._id);

    
      const dispatch = useDispatch();
      const handleEnroll = (courseId: string) => {
        dispatch(enrollCourse({ userId: currentUser._id, courseId }));
      };
    
      const handleUnenroll = (courseId: string) => {
        dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
      };
    
    const displayedCourses = showAllCourses ? courses : enrolledCourses;
    return (
        <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard
            <ProtectedRouteStudent>
                <button className="btn btn-primary float-end"
                id="wd-enrollments-click" 
                onClick={() => setShowAllCourses(!showAllCourses)}>
                  {showAllCourses ? "Enrolled courses" : "All courses"}
                </button>
            </ProtectedRouteStudent>
        </h1> 
        
        <hr />
        <ProtectedEdit>
            <h5>New Course
                <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse} > Add </button>
                <button className="btn btn-warning float-end me-2"
                    onClick={updateCourse} id="wd-update-course-click">
                    Update
                </button>
            </h5><br />
            <input defaultValue={course.name} className="form-control mb-2" 
                onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
            <textarea defaultValue={course.description} className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value }) }/>
            <hr />
        </ProtectedEdit>
        
        <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
            {displayedCourses.map((course) => (
                <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                <div className="card rounded-3 overflow-hidden">
                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <img src={`/images/${course._id}.jpg`} width="100%" height={160} 
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;  // type cast to HTMLImageElement
                                target.onerror = null;  // prevent infinite loop in case fallback image fails
                                target.src = `${course.image}`;  // fallback image path
                            }} 
                        />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                            {course.name}
                            </h5>
                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                            {course.description}
                            </p>
                            <button className="btn btn-primary"> Go </button>

                            <ProtectedRouteStudent>
                            <span>
                                
                                {isEnrolled ? (
                                  <button
                                    className="btn btn-danger me-2"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      handleUnenroll(course._id);
                                    }}
                                  >
                                    Unenroll
                                  </button>
                                ) : (
                                  <button
                                    className="btn btn-success me-2"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      handleEnroll(course._id);
                                    }}
                                  >
                                    Enroll
                                  </button>
                                )}
                              </span>
                            </ProtectedRouteStudent>

                            <ProtectedEdit>
                                <button onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                    }} className="btn btn-danger float-end"
                                    id="wd-delete-course-click">
                                        Delete
                                </button>
                                <button id="wd-edit-course-click"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}
                                    className="btn btn-warning me-2 float-end" >
                                    Edit
                                </button>
                            </ProtectedEdit>
                        </div>
                    </Link>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}