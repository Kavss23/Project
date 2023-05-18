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
        fetch('http://127.0.0.1:8000/categoriesUpdated/')
        .then((res)=>res.json())
        .then((data)=>setCategoriesApi(data))

        fetch('http://127.0.0.1:8000/canteenDetail/')
        .then((res)=>res.json())
        .then((data)=>setCanteenApi(data))

    },[])

    const handleRouteClick=(e)=>{
        // navigate("/route")
        e.preventDefault();
        window.location.href='https://www.google.com/maps/@26.4065494,75.8656843,15z'
    }

    const handleFeedClick=(e)=>{
        e.preventDefault();
        window.location.href='http://localhost:3000/feedback'
    }
    return(
        <div>
        <form>
        <button onClick={(e)=>handleRouteClick(e)} style={{marginLeft:500,marginTop:80,marginBottom:10,height:30,width:250}} >Find Route</button>
        <button onClick={(e)=>handleFeedClick(e)} style={{marginLeft:500,marginTop:0,marginBottom:10,height:30,width:250}} >Give Feedback</button>
        </form>
        <TableContainer style={{display:'flex'}}>
        <Table sx={{marginLeft:10,width:1000,marginTop:10 }}>
        <TableHead>
        <TableRow>
        <TableCell><strong>Canteen Name</strong></TableCell>
        <TableCell><strong>Item Price</strong></TableCell>
        <TableCell><strong>Available</strong></TableCell>
        <TableCell><strong>Address</strong></TableCell>
        <TableCell><strong>Phone Number</strong></TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        
        {

            canteenApi.length>0 && canteenApi.map((canteen)=>
            (
                Object.keys(categoriesApi).length>0 && Object.values(categoriesApi).map((x)=>(
                    Object.values(x).map((item)=>(
                        // console.log((canteen.c_id==item['c_id']) && (item['item_name'].toLowerCase()===props.option.toLowerCase()))
                       ((canteen.c_id==item['c_id']) && (item['item_name'].toLowerCase()===props.option.toLowerCase()))?
                       <TableRow>
                                   <TableCell><strong>{canteen.c_name}</strong></TableCell>
                                   <TableCell><strong>{item.item_price}</strong></TableCell>
                                   <TableCell><strong>{item.item_status}</strong></TableCell>
                                   <TableCell><strong>{canteen.c_address}</strong></TableCell>
                                   <TableCell><strong>{canteen.c_phoneNo}</strong></TableCell>
                                   
                               </TableRow>:
                       <div></div>
                    ))
                ))
            ))
            // canteenApi.length>0 && canteenApi.map((canteen)=>(
            //     categoriesApi.length>0 && categoriesApi.map((item)=>(
            //         ((canteen.c_id==item.c_id) && (item.item_name.toLowerCase()===props.option.toLowerCase()))?
                        
            //         <TableRow>
            //             <TableCell><strong>{canteen.c_name}</strong></TableCell>
            //             <TableCell><strong>{item.item_price}</strong></TableCell>
            //             <TableCell><strong>{canteen.c_address}</strong></TableCell>
            //             <TableCell><strong>{canteen.c_phoneNo}</strong></TableCell>
                        
            //         </TableRow>
            //         :
            //             <div></div>
                    
            //     ))
            // ))
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