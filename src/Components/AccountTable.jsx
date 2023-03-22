import { TableContainer } from "@mui/material";
import rect,{useState,useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import {Navigate,useNavigate} from "react-router-dom";

function AccountTable(props){
    const navigate=useNavigate();
    const [open,setOpen]=useState(false);
    const[viewData,setViewData]=useState({});
    const[editClicked,setEditClicked]=useState(false);
    const[newUsername,setNewUsername]=useState('');
    const[isSubmit,setIsSubmit]=useState(false);
    const[formErrors,setFormErrors]=useState({});
    const[errorFound,setErrorFound]=useState();
    const[apiData,setApiData]=useState({});
    const[showBox,setShowBox]=useState(false);
    const[logout,setLogout]=useState(false);

    useEffect(()=>{
      fetch("http://127.0.0.1:8000/viewProfile/")
      .then((res)=>res.json())
      .then((data)=>setViewData(data))

      fetch('http://127.0.0.1:8000/userDetails/')
      .then((res)=>res.json())
      .then((data)=>setApiData(data))
    },[])

    const validate=()=>{
      const errors={};
      console.log(newUsername)
      if(newUsername=="")
      {
        errors.username="Username is required!";
        setErrorFound(true)
      }
      if(apiData.map((item)=>{
        (item.username==newUsername)?
        (errors.username="Username already exists"):
        <div></div>
      
      }))

      return errors;
    }
    const handleSubmitClick=(e)=>{
      e.preventDefault();
      setIsSubmit(true)
      setFormErrors(validate());
      setShowBox(true)
    }

    const handleUsernameChange=(e,t)=>{
      setNewUsername(e.target.value)
    }

    const handleLogoutClick=()=>{
      setLogout(true)
    }
    const handleEditClick=()=>{
      setEditClicked(true)
    }
    return(
        <div style={{display:'flex'}}>
        
        <TableContainer style={{display:'flex'}}>
        <Table sx={{marginLeft:120,display:'flex'}}>
        <TableHead >
        <TableRow>
        <TableCell>VIEW PROFILE</TableCell>
        <TableCell>
        <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton></TableCell>
        </TableRow>
        <TableRow>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
            <div style={{display:'flex'}}>
                <h3 style={{marginRight:10}}>Username :</h3>
                {
                  viewData.length>0 && viewData.map((item,index)=>(
                    ((viewData.length-1)===index)?
                    <h4>{item.username}</h4>:<p></p>
                  ))
                }
            </div>
            <div style={{display:'flex'}}>
              <h3 style={{marginRight:10}}>Email:</h3>
            {
              viewData.length>0 && viewData.map((item,index)=>(
                ((viewData.length-1)===index)?
                <h4>{item.email}</h4>:<p></p>
              ))
            }
        </div>
              </Box>
        </Collapse>
        </TableRow>
       
        <TableRow>
        <Collapse in={editClicked} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
            <div>
              <p>Enter New Username:</p>
              <input type="text" onChange={(e,target)=>{handleUsernameChange(e,target)}}></input>
              <p style={{color:'red'}}>{formErrors.username}</p>
              <input style={{marginTop:10}} onClick={(e)=>handleSubmitClick(e)} type="submit" ></input>
            </div>
              </Box>
              
        </Collapse>

        </TableRow>
        
        <TableRow>
        <TableCell ><form>
        <button onClick={()=>handleLogoutClick()}>LOGOUT</button></form></TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        </TableBody>
        </Table>
        </TableContainer>
        {
          logout ?
          navigate("/"):<div>
          </div>
        }
        </div>
    )
}

export default AccountTable