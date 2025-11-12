import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default PublicLayout;