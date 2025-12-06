import { createBrowserRouter } from "react-router";
import { AppLayout } from "../layouts/AppLayout";
import { AdminPage } from "../pages/admin/AdminPage";
import { LoginPage } from "../pages/login/LoginPage";
import { StudentsPage } from "../pages/students/StudentsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {path: "login", element: <LoginPage />},
            {path: "student", element: <StudentsPage />},
            {path: "admin", element: <AdminPage />},
        ]
    }
])

