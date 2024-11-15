import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrollments: [],
};
const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    enrollCourse: (state, { payload: enroll }) => {
      const newCourse: any = {
        _id: new Date().getTime().toString(),
        user: enroll.user,
        course: enroll.course,
      };
      // console.log("Enroll in Reducer: ", enroll);
      // state.assignments = [...state.assignments, newAssignment] as any;
      // console.log("Enrollments before: ", state.enrollments); // why does this not have anything?
      state.enrollments = [...state.enrollments, enroll] as any;
      // console.log("Enrollments after adding: ", state.enrollments);
      setEnrollments(state.enrollments);
      // state.enrollments.push(enroll); // payload is an object like { userId, courseId }
    },
    unenrollCourse: (state, { payload: unenroll }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) => enrollment.course !== unenroll.course || enrollment.user !== unenroll.user
      ); //why does it not work without 'any'
      setEnrollments(state.enrollments);
    },
  },
});

export const { enrollCourse, unenrollCourse, setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;