import react,{useState} from "react";
import AccountTable from "./AccountTable";
import "../styles.css";
import Button from '@mui/material/Button';
function Route()
{
  const[counter,setCounter]=useState(1);
  const[showAccountTable,setShowAccountTable]=useState(false);

  const handleAccountClick=(event)=>{

    if(event.target.value%2==0)
    {
        setShowAccountTable(true)
    }
    else
    {
        setShowAccountTable(false);
    }
    event.target.value++;
    setCounter(event.target.value);
}

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("clclde")
    window.location.href="http://127.0.0.1:8000/route/"
  }

  return(
    <div>
    <form style={{marginTop:50}}>
    <label style={{marginLeft:400}}>Source : </label>
    <input type="text"></input>
    <label style={{marginLeft:20}}>Destination : </label>
    <input type="text"></input>
    <Button style={{marginLeft:140}} class="MuiButton-root" variant="outlined" value={counter} onClick={(event)=>handleAccountClick(event)} >My Account</Button>
    <br></br>
    <button style={{marginLeft:580,marginTop:30,height:25,width:100}} onClick={(e)=>handleSubmit(e)}>Submit</button>
    </form>
   

    {
      (counter%2==0) && setShowAccountTable && <div style={{display:'flex'}}>
      <AccountTable option={counter}/>
      </div>
    }
    </div>
  )
}

export default Route