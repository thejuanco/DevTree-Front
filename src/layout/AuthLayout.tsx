import { Outlet } from "react-router"
import { Toaster } from "sonner"
import Logo from "../components/Logo"

const AuthLayout = () => {
    return (
        <>
            <div className="bg-slate-800 min-h-screen">
                <div className="max-w-lg mx-auto pt-10 px-5">
                    <Logo/>
                    <div className="py-10">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Toaster position="top-right"/>
        </>
    )
}

export default AuthLayout