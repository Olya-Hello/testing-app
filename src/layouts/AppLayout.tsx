import { NavLink, Outlet } from "react-router";

export function AppLayout() {
    return (
        <>
            <header>
                <nav>
                    <NavLink 
                    to="/login"
                    className={ ({isActive}) => (isActive ? 'active' : '') }
                    >
                        Login
                    </NavLink>
                    <NavLink to="/student">Student</NavLink>
                    <NavLink to="/admin">Admin</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>  &copy; 2025</footer>
        </>
    )
}