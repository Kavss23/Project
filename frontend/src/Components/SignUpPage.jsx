import react from "react";
// import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Navigate,useNavigate} from "react-router-dom";
import UserSignUp from "./UserSignUp";
import CntnOwner from "./CntnOwner";
import "../styles.css";
import { height } from "@mui/system";
function SignUpPage(){
    const navigate=useNavigate();
    const handleUserClick=(event)=>{
        navigate("/SignUpPage/UserSignUp");
    }
    const handleOwnerClick=(event)=>{
        navigate("/SignUpPage/CntnOwner");
    }
    // <Button style={{marginLeft:50}} onClick={(e)=>{handleOwnerClick(e)}}color="secondary" variant ="contained">Canteen Owner</Button>
        // <Button classname='btnSignUp' style={{marginLeft:150}} color='primary' onClick={(event)=>{handleUserClick(event)}}variant="contained"> USER</Button>
    return(
        <div className="BackImagr">
       
        <div style={{marginTop:240,marginLeft:300}}>
        <form>
        <button style={{marginLeft:10 ,height:60,width:200}} onClick={(e)=>{handleOwnerClick(e)}}>CANTEEN  OWNER</button>
        <button style={{marginLeft:50,height:60,width:200}} onClick={(event)=>{handleUserClick(event)}}>USER</button>
        
        </form>
        </div>
        
        </div>
    )
}

export default SignUpPage