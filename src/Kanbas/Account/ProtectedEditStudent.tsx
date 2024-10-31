import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function ProtectedEditStudent({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role === "STUDENT") {
        return children;
    } 
}