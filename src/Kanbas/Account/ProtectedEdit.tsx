import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedEdit({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role === "FACULTY") {
        return children;
    } 
}