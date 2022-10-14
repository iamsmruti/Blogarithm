import { useLocation, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const auth = true
    const location = useLocation()
    return (
        auth
            ? <Outlet />
            : <Navigate to='/login' state={{ from : location }} replace />
    );
}
 
export default ProtectedRoute; 