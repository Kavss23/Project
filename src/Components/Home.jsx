import react from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { color } from "@mui/system";
import "../styles.css";
import {Naviagte,useNavigate,Redirect} from "react-router-dom";
import SignUpPage from "./SignUpPage";
import im from './images/logo.png';
import LoginPage from "./LoginPage";
function Home()
{
    const navigate=useNavigate()
    const handleSignUpClick=(event)=>{
        navigate("/SignUpPage")
    }
    const handleLoginClick=(event)=>{
        navigate("/LoginPage")
    }

    const handleAdminClick=(event)=>{
      window.location.href='http://127.0.0.1:8000/admin/'
    }
    return(
      <div >
      <img src={im} alt='logo'/>
    <div style={{marginLeft:600,marginTop:-180}}>
      <Button class="MuiButton-root" style={{backgroundColor:"white",color:"black"}} variant="outlined" onClick={(e)=>handleSignUpClick(e)}>SIGN UP</Button>
      <Button fullwidth={true} style={{marginLeft:-100,marginTop:200,backgroundColor:"white",color:"black"}} variant="outlined" onClick={(e)=>handleLoginClick(e)}>LOGIN</Button>
      <Button style={{marginTop:400,marginLeft:-100,backgroundColor:"white",color:"black"}}variant="outlined" onClick={(e)=>handleAdminClick(e)}>ADMIN</Button>
        </div>
        </div>
    )
}

export default Home