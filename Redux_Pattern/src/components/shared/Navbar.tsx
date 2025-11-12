import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    const location = useLocation();

    const getLinkClass = (path: string) => {
        return location.pathname === path
            ? "text-blue-500 font-bold"
            : "text-slate-500 hover:text-blue-300";
    };

    return (
        <nav className="flex justify-center items-center py-2">
            <ul className="w-[370px] flex justify-center items-center gap-5 bg-black/10 backdrop-blur-sm p-2 rounded-full text-xl">
                <Link to="/" className={getLinkClass("/")}>
                    Home
                </Link>
                <Link to="/about" className={getLinkClass("/about")}>
                    About
                </Link>
                <Link to="/contact" className={getLinkClass("/contact")}>
                    Contact
                </Link>
                <Link to="/login" className={getLinkClass("/login")}>
                    Login
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;