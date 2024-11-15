import axios from "axios";
// import { USERS_API } from "./Account/client";

const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// const COURSES_API = `${REMOTE_SERVER}/api/enrollments`;
const USERS_API = `${REMOTE_SERVER}/api/users`;

export const enrollInCourse = async (currentUserId: any, courseId: any) => {
    // console.log(currentUserId);
    const response = await axiosWithCredentials.post(`${USERS_API}/current/course/${courseId}`);
    return response.data;
};
export const unEnrollFromCourse = async (currentUserId: any, courseId: any) => {
    console.log(currentUserId);
    const response = await axiosWithCredentials.delete(`${USERS_API}/current/course/${courseId}`);
    return response.data;
};