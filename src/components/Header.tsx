import { useLocation } from "react-router";
import AdminNavigation from "./navigation/AdminNavigation";
import HomeNavigation from "./navigation/HomeNavigation";
import Logo from "./Logo";

export default function Header() {
    const location = useLocation()

    return (
        <header className="bg-slate-800 py-5">
            <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center md:justify-between">
                <div className="w-full p-5 lg:p-0 md:w-1/3">
                    <Logo/>
                </div>
                <nav className="md:w-1/3 md:flex md:justify-end">
                    {location.pathname === "/" ? <HomeNavigation/> : <AdminNavigation/>}
                </nav>
            </div>
        </header>
    )
}
