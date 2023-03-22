import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignUpPage from "./SignUpPage";
import UserSignUp from "./UserSignUp";
import CntnOwner from "./CntnOwner";
import UserLogin from "./UserLogin";
import Dashboard  from "./Dashboard";
import FindRoute from "./Route";
import LoginPage from "./LoginPage";
import OwnerLogin from "./OwnerLogin";
import Feedback from "./Feedback";
function App()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUpPage" element={<SignUpPage />} />
            <Route path="/SignUpPage/UserSignUp" element={<UserSignUp />} />
            <Route path="/SignUpPage/CntnOwner" element={<CntnOwner />} />
            <Route path="/LoginPage/UserLogin" element={<UserLogin />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Route" element={<FindRoute />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/LoginPage/OwnerLogin" element={<OwnerLogin />} />
            <Route path="/Feedback" element={<Feedback />} />

        </Routes>
        </BrowserRouter>
    )
}

export default App