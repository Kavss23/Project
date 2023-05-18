import react,{useState} from "react";
import AccountTable from "./AccountTable";
import "../styles.css";
import Button from '@mui/material/Button';
import ConfirmBox from "./ConfirmBox";
function Route()
{
  const[counter,setCounter]=useState(1);
  const[showAccountTable,setShowAccountTable]=useState(false);
  const[isSubmit,setIsSubmit]=useState(false);
  const[open,setOpen]=useState('false')
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
    setIsSubmit(true)
    // window.confirm("Do You want to rate us?")
    // {<ConfirmBox />}
    // window.location.href="http://127.0.0.1:8000/route/"
  }

  return(
    <div>
    <form style={{marginTop:50}}>
    <label style={{marginLeft:170,marginRight:-20}}>Source : </label>
    <input style={{marginLeft:20,width:300}}type="text"></input>
    <label style={{marginLeft:40}}>Destination : </label>
    <input style={{width:300}} type="text"></input>
    <Button style={{marginLeft:100}} class="MuiButton-root" variant="outlined" value={counter} onClick={(event)=>handleAccountClick(event)} >My Account</Button>
    <br></br>
    <button style={{marginLeft:550,marginTop:30,height:40,width:100}} onClick={(e)=>handleSubmit(e)}>Submit</button>
    </form>
   

    {
      (counter%2==0) && setShowAccountTable && <div style={{display:'flex'}}>
      <AccountTable option={counter}/>
      </div>
    }
    {
      isSubmit && <div>
      <ConfirmBox
        open={open}
        closeDialog={() => setOpen(false)}
        title="slkdf"
       
      />
      
      </div>
    }

    </div>
  )
}

export default Route