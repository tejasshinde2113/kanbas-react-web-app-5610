import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
const initialState = {
  enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, { payload: { userId, courseId } }) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: userId,
        course: courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment] 
    },
    unenrollCourse: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          enrollment.user !== userId || enrollment.course !== courseId
      ) ;
    },
    updateEnrollment: (state, { payload: updatedEnrollment }) => {
      state.enrollments = state.enrollments.map((enrollment) =>
        enrollment._id === updatedEnrollment._id
          ? updatedEnrollment
          : enrollment
      ) ;
    },
    unenrollAllFromCourse: (state, { payload: courseId }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment ) => enrollment.course !== courseId
      ) ;
    },
  },
});

export const {
  enrollCourse,
  unenrollCourse,
  updateEnrollment,
  unenrollAllFromCourse,
} = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;