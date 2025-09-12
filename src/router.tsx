import { BrowserRouter, Routes, Route } from "react-router";

//Views
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import HandleView from "./views/HandleView";
import NotFoundView from "./views/NotFoundView";

//Components
import AuthLayout from "./layout/AuthLayout";
import AppLayout from "./layout/AppLayout";
import LinkTreeView from "./views/LinkTreeView";
import ProfileView from "./views/ProfileView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout/>}>
                    <Route path="/auth/login" element={<LoginView/>}/>
                    <Route path="/auth/register" element={<RegisterView/>}/>
                </Route>

                <Route path="/admin" element={<AppLayout/>}>
                    <Route index={true} element={<LinkTreeView/>} />
                    <Route path="profile" element={<ProfileView/>} />
                </Route>

                <Route path="/:handle" element={<AuthLayout/>}>
                    <Route element={<HandleView/>} index={true} />
                </Route>

                <Route path="/404" element={<AuthLayout/>}>
                    <Route element={<NotFoundView/>} index={true}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}