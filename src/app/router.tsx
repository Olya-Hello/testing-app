import { createBrowserRouter } from "react-router";
import { AppLayout } from "../layouts/AppLayout";
import { AdminPage } from "../pages/admin/AdminPage";
import { LoginPage } from "../pages/login/LoginPage";
import { StudentLayout } from "../layouts/StudentLayout";

export let path: string;

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {path: path = "login", element: <LoginPage />},
            {
                path: path = "student", 
                element: <StudentLayout />, 
                children: [
                    {
                        index: true, 
                        element: <h2>Student dashboard</h2>
                    }, 
                    {
                        path: 'tests',
                        element: <h2>Student TESTS</h2>
                    }
                ]
            },
            {
                path: path = "admin", 
                element: <AdminPage />,
                children: [
                    {
                        index: true, 
                        element: <h2>Student dashboard</h2>
                    }, 
                    {
                        path: 'tests',
                        element: <h2>Student TESTS</h2>
                    },
                ],
            },    
        ],
    },
]);

