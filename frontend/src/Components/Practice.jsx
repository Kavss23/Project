import react,{useState,useEffect} from "react";
import { TableContainer } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
function Practice()
{


    const[c_id,setC_id]=useState()
    const[item_price,setItem_price]=useState()
    const[item_name,setItem_name]=useState()
    const[apiData,setApiData]=useState({})
    const[viewClicked,setViewClicked]=useState(false)
    const[viewApi,setViewApi]=useState({})

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/categoriesUpdated/')
        .then((res)=>res.json())
        .then((data)=>setApiData(data['data']))
    },[])

    const handleIdChange=(e)=>{
        setC_id(e.target.value)
    }

    const handleNameChange=(e)=>{
        setItem_name(e.target.value)
        console.log(e.target.value)
    }

    const handlePriceChange=(e)=>{
        setItem_price(e.target.value)
        console.log(e.target.value)
    }

    const handleViewClick=()=>{
        if(c_id=="")
        setViewClicked(true)
        setViewApi(Object.keys(apiData).length>0 && Object.values(apiData).filter((item)=>{
            return(
            item['c_id']==c_id
            )
        }))
        console.log(viewApi)   
    }
    return(
        <div>
        <h1>Menu </h1>

            <input type="text" id="c_id" name='canteen_id' value={c_id} placeholder='Enter Canteen Id' onChange={handleIdChange} />
            <input type="text" id="item_name" name='item_name' value={item_name} placeholder='Enter Item Name' onChange={handleNameChange}  required />
            <input type="text" id="item_price" name="item_price" value={item_price} placeholder='Enter Price' onChange={handlePriceChange} required /> 
            <button onClick={()=>handleViewClick()}>View Data</button>
            <br />
            <TableContainer>
            <TableHead>
            <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell>Item Price</TableCell>
                <TableCell>Item Status</TableCell>
                <TableCell>Update</TableCell>
                <TableCell>Delete</TableCell>
            </TableRow>
            </TableHead>
            </TableContainer>

        {
            viewClicked && <div>
            
            </div>
        }

        </div>
    )
}

export default Practice