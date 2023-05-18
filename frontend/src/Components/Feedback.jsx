import react from "react";
import Rating from "./Rating";
function Feedback(){

    const handleLogoutClick=()=>{
        window.location.href="http://localhost:3000/"
    }
    return(
        <div>
        <h2><center>How would you rate us?</center></h2>
        <button  onClick={()=>handleLogoutClick()}style={{marginLeft:1200,marginTop:-1000}}>Logout</button>
        <Rating />
        
        </div>
    )
}

export default Feedback