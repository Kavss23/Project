import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignUpPage from "./SignUpPage";
import FAQ from "./FAQ";
import UserSignUp from "./UserSignUp";
import CntnOwner from "./CntnOwner";
import UserLogin from "./UserLogin";
import Dashboard  from "./Dashboard";
import FindRoute from "./Route";
import LoginPage from "./LoginPage";
import OwnerLogin from "./OwnerLogin";
import Feedback from "./Feedback";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import Can_dash from "./Can_dash"
import '../App.css';

import RegisterCanteen from "./RegisterCanteen";
import Practice from "./Practice";
import Practice1 from "./Practice1";
// import Protected from "./Protected";
function App()
{
    return(
        <BrowserRouter>
            <Navbar />
        <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Can_dash" element={<Can_dash />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/SignUpPage" element={<SignUpPage />} />
            <Route path="/SignUpPage/UserSignUp" element={<UserSignUp />} />
            <Route path="/SignUpPage/CntnOwner" element={<CntnOwner />} />
            <Route path="/UserLogin" element={<UserLogin />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Route" element={<FindRoute />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/OwnerLogin" element={<OwnerLogin />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/RegisterCanteen" element={<RegisterCanteen />} />
            <Route path="/Practice" element={<Practice />} />
            <Route path="/Practice1" element={<Practice1 />} />
            <Route path="/FAQ" element={<FAQ/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default App