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
            c_id:"",
            item_name:"",
            
            item_price:""
        }]
    )
    const[price,setPrice]=useState([])
    const[itemName,setitemName]=useState([])
   
    let [array,setArray]=useState([])
    let [inputdata,setInputdata]=useState({c_id:"",item_name:"",item_price:""})
    let [index,setIndex]=useState()
    let [bolin,setBolin]=useState(false)
    let {ci_d,item_name,item_price}=inputdata;

    useEffect(()=>{
        const url='http://127.0.0.1:8000/categoriesDetail/'
        fetch(url, { 

            method: 'POST', 
            mode: 'cors', 
            body: JSON.stringify(
                {
                    c_id:inputdata.c_id,
                    item_name:inputdata.item_name,
                    item_price:inputdata.item_price
                    
                }
            ) 
      
          })
        .then((res)=>res.json())
        .then((data)=>setCategoriesApi(data))
    },[])
    

    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }


   

    // deleting row 
function deletedata(i){
    console.log(i,"this index row want to be delete")
    let total=[...array]
    total.splice(i,1)
    setArray(total)

}


    function updatedata(i){

        let {item_name,item_price}=array[i]//this perticular index no row data shoud be update so we get this index no row data in name or number 
        setInputdata({c_id,item_name,item_price})
        setBolin(true)
        setIndex(i)
    
    }

    return(
        <div>
        <form>
        
        </form>
        <TableContainer style={{display:'flex'}}>
        <Table sx={{marginLeft:35,width:1000 }}>
        <TableHead>
        <TableRow>
        <TableCell><strong>Item Name</strong></TableCell>
        <TableCell><strong>Item Price</strong></TableCell>
        <TableCell><strong>Update</strong></TableCell>
        <TableCell><strong>Delete</strong></TableCell>
        
        </TableRow>
        </TableHead>
        <TableBody>
        
        {
            categoriesApi.length>0 && categoriesApi.map((canteen)=>{
                <TableRow>
                    
                <TableCell>{canteen.item_name}</TableCell>
                <TableCell>{canteen.item_price}</TableCell>
                </TableRow>
            })
        }
        

        <TableCell><button onClick={(i)=>updatedata(i)}>update</button></TableCell>
        <TableCell><button onClick={(i)=>deletedata(i)}>Delete</button></TableCell>
        
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