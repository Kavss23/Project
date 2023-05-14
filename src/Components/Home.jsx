import react from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { color } from "@mui/system";
import "../styles.css";
import {Naviagte,useNavigate,Redirect} from "react-router-dom";
import SignUpPage from "./SignUpPage";
import im from './images/logo.png';
import LoginPage from "./LoginPage";
import SimpleImageSlider from "react-simple-image-slider";
// import Nav from "./Nav";

function Home()
{
    const navigate=useNavigate()
    const handleSignUpClick=(event)=>{
        navigate("/SignUpPage")
    }
    const handleLoginClick=(event)=>{
        navigate("/LoginPage")
    }

    const images = [
      {
          url:"http://127.0.0.1:8000/images/Flat_60_Off_1_page-0003.jpg",
      },
      {
          url:"http://127.0.0.1:8000/images/Flat_60_Off_1_page-0007.jpg",
      },
      {
          url:"http://127.0.0.1:8000/images/Flat_60_Off_page-0001.jpg",
      },
      {
          url:"http://127.0.0.1:8000/images/Flat_60_Off_1_page-0004_1.jpg"
      }
  ]
    const handleAdminClick=(event)=>{
      window.location.href='http://127.0.0.1:8000/admin/'
    }
    return(
      <div>
      <div>
      <SimpleImageSlider style={{marginLeft:40,marginTop:20}} className="p-sticky"
      width={800}
      height={400}
      images={images}
      autoPlay={true}
      showNavs={true} />
      </div>
      <div></div>        
        <div style={{marginLeft:800,marginTop:-180}}>
          <Button  style={{marginTop:200,marginLeft:-200,backgroundColor:"white",color:"black"}} variant="outlined" onClick={(e)=>handleSignUpClick(e)}>SIGN UP</Button>
          <Button fullwidth={true} style={{marginTop:200,marginRight:80,marginLeft:-400,backgroundColor:"white",color:"black"}} variant="outlined" onClick={(e)=>handleLoginClick(e)}>LOGIN</Button>
          <Button style={{marginTop:200,marginLeft:0,backgroundColor:"white",color:"black"}}variant="outlined" onClick={(e)=>handleAdminClick(e)}>ADMIN</Button>
            </div>
        </div>
    )
}

export default Home