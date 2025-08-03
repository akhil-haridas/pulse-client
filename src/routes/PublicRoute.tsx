import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@hooks";

const PublicRoute = () => {
    const { user, isLoading } = useAuth();

    if (isLoading) return <div>Loading...</div>;
    return user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
