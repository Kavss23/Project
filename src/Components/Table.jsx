import react,{useState,useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { color } from "framer-motion";
import {Navigate,useNavigate} from "react-router-dom";
import { background } from "@chakra-ui/react";

function Tables(props){
    const navigate=useNavigate()
    const[filteredApi,setFilteredApi]=useState({})
    const[categoriesApi,setCategoriesApi]=useState({})
    const[canteenApi,setCanteenApi]=useState({})
    const[filteredData,setFilteredData]=useState(
        [
        {
            canteenId:"",
            canteenName:"",
            canteenAddress:"",
            canteenPhoneNo:"",
            ItemPrice:""
        }]
    )
    const[price,setPrice]=useState([])
    const[canName,setCanName]=useState([])
    const[canAddr,setCanAddr]=useState([])
    const[num,setNum]=useState([])


    useEffect(()=>{
        fetch('http://127.0.0.1:8000/categoriesDetail/')
        .then((res)=>res.json())
        .then((data)=>setCategoriesApi(data))

        fetch('http://127.0.0.1:8000/canteenDetail/')
        .then((res)=>res.json())
        .then((data)=>setCanteenApi(data))

    },[])

    const handleRouteClick=()=>{
        navigate("/route")
    }

    return(
        <div>
        <form>
        <button onClick={()=>handleRouteClick()} style={{marginLeft:1100,marginTop:100,marginBottom:10,height:30}} >Find Route</button>
        </form>
        <TableContainer style={{display:'flex'}}>
        <Table sx={{marginLeft:35,width:1000 }}>
        <TableHead>
        <TableRow>
        <TableCell><strong>Canteen Name</strong></TableCell>
        <TableCell><strong>Item Price</strong></TableCell>
        <TableCell><strong>Address</strong></TableCell>
        <TableCell><strong>Phone Number</strong></TableCell>
        <TableCell><strong>Star Rating</strong></TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        
        {
            canteenApi.length>0 && canteenApi.map((canteen)=>(
                categoriesApi.length>0 && categoriesApi.map((item)=>(
                    ((canteen.c_id==item.c_id) && (item.item_name.toLowerCase()===props.option.toLowerCase()))?
                        
                    <TableRow>
                        <TableCell><strong>{canteen.c_name}</strong></TableCell>
                        <TableCell><strong>{item.item_price}</strong></TableCell>
                        <TableCell><strong>{canteen.c_address}</strong></TableCell>
                        <TableCell><strong>{canteen.c_phoneNo}</strong></TableCell>
                        <TableCell><strong>{canteen.c_feedback}</strong></TableCell>
                        
                    </TableRow>
                    :
                        <div></div>
                    
                ))
            ))
        }
        
        </TableBody>
        </Table>
        </TableContainer>
        <div>
            <p></p>
        </div>
        </div>
    )
}

export default Tables