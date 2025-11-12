import App from "@/App";
import Logout from "@/components/shared/Logout";
import Profile from "@/components/shared/Profile";
import DashboardLayout from "@/layout/DashboardLayout";
import PublicLayout from "@/layout/PublicLayout";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import AboutPage from "@/pages/public/AboutPage";
import ContactPage from "@/pages/public/ContactPage";
import { createBrowserRouter } from "react-router";


// ROUTES IMPORTS
export const router = createBrowserRouter([
    {
        path: "/",
        Component: PublicLayout,
        children: [
            { path: "/", Component: App },
            { path: "/about", Component: AboutPage },
            { path: "/contact", Component: ContactPage },
            { path: "/login", Component: LoginPage },
            { path: "/register", Component: RegisterPage },
        ]
    },
    {
        path: "/dashboard",
        Component: DashboardLayout,
        children: [
            { path: "/dashboard", Component: DashboardPage },

            // ADMIN ROUTES
            { path: "/dashboard/profile", Component: Profile },

            // USER ROUTES
            { path: "/dashboard/profile", Component: Profile },

            // COMMON ROUTES
            { path: "/dashboard/profile", Component: Profile },
            { path: "/dashboard/logout", Component: Logout },
        ]
    }
]);