import { BrowserRouter, Routes, Route } from "react-router";

//Views
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

//Components
import AuthLayout from "./layout/AuthLayout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout/>}>
                    <Route path="/auth/login" element={<LoginView/>}/>
                    <Route path="/auth/register" element={<RegisterView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}