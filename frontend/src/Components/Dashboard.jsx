import react,{useState,useEffect} from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from '@mui/material/Button';
import Tables from "./Table";
import AccountTable from "./AccountTable";
import SimpleImageSlider from "react-simple-image-slider";
import "../styles.css";

function Dashboard()
{
    const[categoriesApi,setCategoriesApi]=useState({'':''});
    const[options,setOptions]=useState([]);
    const[canteenApi,setCanteenApi]=useState({});
    const[selectedOption,setSelectedOption]=useState('');
    const[showTable,setShowTable]=useState(false);
    const[imageApi,setImageApi]=useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/categoriesUpdated/')
        .then((res)=>res.json())
        .then((data)=>setCategoriesApi(data['data']))

        fetch('http://127.0.0.1:8000/canteenDetail/')
        .then((res)=>res.json())
        .then((data)=>setCanteenApi(data))

        // fetch('http://127.0.0.1:8000/im/')
        // .then((res)=>res.json())
        // .then((data)=>imageApi(data))
    },[])
    
    const filterOptions=()=>{
        let arr=[];
        categoriesApi.length>0 && categoriesApi.map((x)=>{
            if (!arr.includes (x.item_name.toLowerCase()))
            {
                arr.push(x.item_name.toLowerCase())
            }
        })
        // console.log(Object.keys(categoriesApi).length)
        // Object.keys(categoriesApi).length>0 && Object.values(categoriesApi).map((x,i,index)=>{
        //     Object.values(x).map((item)=>{
        //         console.log(item['item_name'])
        //         if(!arr.includes()){
        //     arr.push(item['item_name'].toLowerCase())
        //     }
        //     })
        // })
        return arr;
    }

    const handleSearchClick=(event)=>{
        if(event.target.value.length>0){
        setShowTable(true)
        }
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
    const handleLogoutClick=()=>{
        window.location.href='http://localhost:3000/'
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
        <button style={{marginLeft:300,height:40,marginTop:40}} onClick={()=>handleLogoutClick()}>Logout</button>
        </div>
       
       
            
        
        {
            showTable && <div>
                {console.log(selectedOption)}
            <Tables option={selectedOption} />
            </div>
        }
        
        
        </div>
        
    )
}

export default Dashboard