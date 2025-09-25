import AdminNavigation from "./navigation/AdminNavigation";

export default function Header() {
    return (
        <header className="bg-slate-800 py-5">
            <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center md:justify-between">
                <div className="w-full p-5 lg:p-0 md:w-1/3">
                    <img src="/logo.svg" className="w-full block" />
                </div>
                <nav className="md:w-1/3 md:flex md:justify-end">
                    <AdminNavigation/>
                </nav>
            </div>
        </header>
    )
}
