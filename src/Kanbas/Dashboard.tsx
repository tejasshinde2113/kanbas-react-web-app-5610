import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  enrollCourse,
  unenrollAllFromCourse,
  unenrollCourse,
} from "./Courses/reducer";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: (uniqueId: string) => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const setCourseList = () => {
    setShowAllCourses((prev) => !prev);
  };

  const enrolledCourses = enrollments
    .filter((enrollment: any) => enrollment.user === currentUser._id)
    .map((enrollment: any) => enrollment.course);

  const handleEnroll = (courseId: string) => {
    dispatch(enrollCourse({ userId: currentUser._id, courseId }));
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
  };

  const handleAddNewCourse = () => {
    const uniqueId = new Date().getTime().toString();
    addNewCourse(uniqueId);
    handleEnroll(uniqueId);
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" && (
        <span>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={handleAddNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            placeholder="Course Name"
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            placeholder="Course Description"
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </span>
      )}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 id="wd-dashboard-published">
          {showAllCourses
            ? "All Courses (" + courses.length + ")"
            : "Enrolled Courses (" + enrolledCourses.length + ")"}
        </h2>
        {currentUser.role === "STUDENT" && (
          <button className="btn btn-primary" onClick={setCourseList}>
            {showAllCourses ? "Show Enrolled Courses" : "Show All Course"}
          </button>
        )}
      </div>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5">
          {courses.map((course) => {
            const isEnrolled = enrolledCourses.includes(course._id);
            if (showAllCourses || isEnrolled) {
              return (
                <div
                  key={course._id}
                  className="wd-dashboard-course col mb-3 mt-3"
                  style={{ width: "300px" }}
                >
                  <div className="card rounded-3 overflow-hidden">
                    <ProtectedRoute>
                      <Link
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                        to={`/Kanbas/Courses/${course._id}/Home`}
                      >
                        <img
                          style={{ objectFit: "contain" }}
                          src={`${course.image}`}
                          width="100%"
                          height={160}
                        />
                        <div className="card-body">
                          <h5 className="wd-dashboard-course-title card-title">
                            {course.name}
                          </h5>

                          <p
                            className="wd-dashboard-course-title card-text overflow-y-hidden"
                            style={{ maxHeight: 100 }}
                          >
                            {course.description}
                          </p>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <button className="btn btn-primary"> Go </button>
                            {currentUser.role === "STUDENT" && (
                              <span>
                                {isEnrolled ? (
                                  <button
                                    className="btn btn-danger me-5"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      handleUnenroll(course._id);
                                    }}
                                  >
                                    Unenroll
                                  </button>
                                ) : (
                                  <button
                                    className="btn btn-primary"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      handleEnroll(course._id);
                                    }}
                                  >
                                    Enroll
                                  </button>
                                )}
                              </span>
                            )}
                            {currentUser.role === "FACULTY" && (
                              <span>
                                <button
                                  onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                    dispatch(unenrollAllFromCourse(course._id));
                                  }}
                                  className="btn btn-danger float-end"
                                  id="wd-delete-course-click"
                                >
                                  Delete
                                </button>
                                <button
                                  id="wd-edit-course-click"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                  }}
                                  className="btn btn-warning me-2 float-end"
                                >
                                  Edit
                                </button>
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    </ProtectedRoute>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}