import { BrowserRouter, Routes, Route } from "react-router";

//Views
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/login" element={<LoginView/>}/>
                <Route path="/auth/register" element={<RegisterView/>}/>
            </Routes>
        </BrowserRouter>
    )
}