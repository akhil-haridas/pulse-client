import { Routes, Route } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "@routes";
import { Dashboard, Login, Register } from "@pages";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute />}>
                <Route index element={<Dashboard />} />
            </Route>

            <Route path="/" element={<PublicRoute />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    );
}
