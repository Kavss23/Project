import react,{useState,useEffect} from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from '@mui/material/Button';
import Tables from "./Table";
import AccountTable from "./AccountTable";
import "../styles.css";

function Dashboard()
{
    const[categoriesApi,setCategoriesApi]=useState({'':''});
    const[options,setOptions]=useState([]);
    const[canteenApi,setCanteenApi]=useState({});
    const[selectedOption,setSelectedOption]=useState('');
    const[showTable,setShowTable]=useState(false);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/categoriesDetail/')
        .then((res)=>res.json())
        .then((data)=>setCategoriesApi(data))

        fetch('http://127.0.0.1:8000/userDetails/')
        .then((res)=>res.json())
        .then((data)=>setCanteenApi(data))
    },[])
    
    const filterOptions=()=>{
        let arr=[];
        categoriesApi.length>0 && categoriesApi.map((x)=>{
            if(!arr.includes(x.item_name)){
            arr.push(x.item_name.toLowerCase())
            }
        })
        return arr;
    }

    const handleSearchClick=(event)=>{
        if(event.target.value.length>0){
        setShowTable(true)
        }
    }
    return(
        <div>
        <div style={{display:'flex',marginLeft:100,marginTop:20}}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
           
            options={filterOptions()}
            onchange={()=>setShowTable(false)}
            onInputChange={(event,newInputValue)=>{
                setSelectedOption(newInputValue)
            }}
            sx={{ width: 300 ,background:'white',marginLeft:50,marginTop:5}} 
            renderInput={(params) => <TextField  classname="MuiInputLabel-root" {...params} style={{color:'red'}} label ="Search Food Item" />}
        />
        <Button style={{marginLeft:30,marginTop:43}} class="MuiButton-root" variant="outlined" value={selectedOption} onClick={(event)=>handleSearchClick(event)} >SEARCH</Button>
        </div>
        
        {
            showTable && <div>
            <Tables option={selectedOption} />
            </div>
        }
        
        
        </div>
        
    )
}

export default Dashboard