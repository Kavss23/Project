import react,{useState,useEffect} from "react";
import { TableContainer } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../styles.css';
function Practice1(){
    const[c_id,setC_id]=useState()
    const[item_price,setItem_price]=useState('')
    const[item_name,setItem_name]=useState('')
    const[item_status,setItem_Status]=useState('')
    const[apiData,setApiData]=useState({})
    const[viewClicked,setViewClicked]=useState(false)
    const[addClicked,setAddClicked]=useState(false)
    const[viewApi,setViewApi]=useState({})
    const[addApi,setAddApi]=useState({})
    const[idApi,setIdApi]=useState({})
    const[flag,setFlag]=useState(false)
    let [bolin,setBolin]=useState(false);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/trackId/')
        .then((res)=>res.json())
        .then((data)=>setIdApi(data))

        fetch('http://127.0.0.1:8000/categoriesUpdated/')
        .then((res)=>res.json())
        .then((data)=>setApiData(data['data']))


        var x=0
        idApi.length>0 && idApi.map((item,i)=>{
        
                (i==idApi.length-1)?
                x=item.c_id:<div></div>
            
        })

        // console.log(x)
        // setC_id(x)
        // setViewApi(apiData.filter(item=>x==item['c_id']))
        
    },[])

    const handleIdChange=(e)=>{
        setC_id(e.target.value)
    }

    const handleNameChange=(e)=>{
        setItem_name(e.target.value)
        // console.log(e.target.value)
    }

    const handlePriceChange=(e)=>{
        setItem_price(e.target.value)
        // console.log(e.target.value)
    }

    const handleViewClick=()=>{
        setViewClicked(true)
        setAddClicked(false)
        
        var x=0
        idApi.length>0 && idApi.map((item,i)=>{
        
                (i==idApi.length-1)?
                x=item.c_id:<div></div>
            
        })

        console.log(x)
        setC_id(x)
//         setViewApi(Object.keys(apiData).length>0 && Object.values(apiData).filter((item)=>{
//             return(
                
//             item['c_id']==x)}))
    
    
// }

        setViewApi(apiData.filter(item=>x==item['c_id']))
    }



    const updatedata=(e)=>{
        setBolin(true)
        setItem_name(e.target.value)
        viewApi.map((item)=>{
            if(item.item_name==e.target.value)
            {
                setItem_Status(item.item_status)
                setItem_price(item.item_price)
            }
        })
        setBolin(true)
        setFlag(true)
    }

    const deleteData=(e)=>{
        const url='http://127.0.0.1:8000/categoriesUpdated/'
        console.log(e.target.value)
        viewApi.map((item)=>{
            if(e.target.value==item.item_name){
                fetch(url, { 

                    method: 'DELETE', 
                    mode: 'cors', 
                    body: JSON.stringify(
                        {
                            c_id:c_id,
                            item_name:item.item_name,
                            item_price:item.item_price,
                            item_status:item.item_status
                            
                        }
                    ) 
                  }
                  )
                .then((res)=>res.json())
                .then((data)=>console.log(data))
                setViewApi(viewApi.filter(x=>x.item_name!=item.item_name))
            }
        })

    }

    const addData=()=>{
        // console.log("clicked")
        setAddClicked(true)
        const url='http://127.0.0.1:8000/categoriesUpdated/'
        if(item_name=="" || item_price==""){
            alert("All Fields are Required!")
        }
        else{
            var flag=0
            Object.values(viewApi).map((index)=>{
               if(index['item_name']==item_name)
               {flag=1}
            // console.log(item_name==index['item_name'])
            })
            if(flag==0){
            var x=document.getElementById("status").value
            fetch(url, { 

                method: 'POST', 
                mode: 'cors', 
                body: JSON.stringify(
                    {
                      
                        c_id:c_id,
                        item_name:item_name,
                        item_price:item_price,
                        item_status:x
                        
                    }
                ) 
          
              })
              .then((res)=>res.json())
            //   .then((data)=>setViewApi(data['data']))
            .then((data)=>setViewApi(data['data'].filter(item=>c_id==item['c_id'])))
            }
            else
            {
                alert("Requirement already satisifed")
            }
            //   setViewApi(apiData.filter(item=>x==item['c_id']))
            //   console.log(viewApi)
        }
    }
 
    const handleSelectClick=()=>{
       
        // console.log(document.getElementById("status").value)
    }
    const updateInfo=()=>{
       
        var item_status=document.getElementById("status").value
        const url='http://127.0.0.1:8000/categoriesUpdated/'
        fetch(url, { 

            method: 'PUT', 
            mode: 'cors', 
            body: JSON.stringify(
                {
                  
                    item_name:item_name,
                    item_price:item_price,
                    item_status:item_status
                    
                }
            ) 
      
          })
        .then((res)=>res.json())
        .then((data)=>console.log(data))
        setViewApi(viewApi.map(x=>
            {
                if(x.item_name==item_name)
                {
                    x.item_price=item_price
                    x.item_status=item_status
                }
                return x
            }
    
            
            ))
            console.log(viewApi)
        setFlag(false)
         setBolin(false)
         
        console.log(item_name)
    }
    const handleLogoutClick=()=>{
        window.location.href='http://localhost:3000/'
    }
    return(
        <div>
            <div style={{display:'flex'}}>
                <button onClick={()=>handleViewClick()}>ViewData</button>
                <button style={{marginLeft:1100}}onClick={()=>handleLogoutClick()}>Logout</button>
            </div>

        {/* <button onClick={()=>handleViewClick()}>View Data</button>*/ }

       
       
        { viewClicked && <div>
          
            <h1>Menu</h1>
            <input type="text" id="c_id" name='canteen_id' value={c_id} placeholder={c_id} onChange={handleIdChange} readOnly={true} />
            <input type="text" id="item_name" readOnly={flag} name='item_name' value={item_name} placeholder='Enter Item Name' onChange={handleNameChange}  required />
            <input type="text" id="item_price" name="item_price" value={item_price} placeholder='Enter Price' onChange={handlePriceChange} required /> 
            <label style={{fontWeight:700, padding:20,fontSize:30}}>Is Item Available? : </label>
            <select style={{width:70,height:40}}name="status" id="status" placeholder="Item Available?" onClick={(handleSelectClick)} required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <button onClick={!bolin?addData:updateInfo}>{!bolin?`Add data`:`Update data`}</button>
            
           
            
                    
            <table style={{marginLeft:10}}border="1" >
            <tbody>
                <tr>
                    <th>Item Name</th>
                    <th>Item Price</th>
                    <th>Available</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
        
            
    {console.log(viewApi.length)}

   
{

viewApi.length>0 &&  viewApi.map(
(item,i)=>{
    // console.log("hi")
    return(
        <tr>
            <td>{item.item_name}</td>
            <td>{item.item_price}</td>
            <td>{item.item_status}</td>
            <td><button value={item.item_name} onClick={(e)=>updatedata(e)}>Update</button></td>
            <td><button value={item.item_name} onClick={(e)=>deleteData(e)}>Delete</button></td>
        </tr>)
    
}
)


}
        





            </tbody>
            
            </table>
       
            
        </div>
        
}
        
        </div>
    )
}

export default Practice1

// {viewApi.length>0 && viewApi.map((item,i)=>(
            //     // return(
            //     <TableRow>
            //     <TableCell>{item.item_name}</TableCell>
            //     <TableCell>{item.item_price}</TableCell>
            //     <TableCell>{item.item_status}</TableCell>
            //     <TableCell><button value={item.item_name} onClick={(e)=>updatedata(e)}>update</button></TableCell>
            //     <TableCell><button value={item.item_name} onClick={(e)=>deleteData(e)}>delete</button></TableCell>
            //     </TableRow>
            //     // )
            //     // }
            // )
            //     )}


            // <TableContainer>
            // <TableHead>
            // <TableRow>
            //     <TableCell>Item Name</TableCell>
            //     <TableCell>Item Price</TableCell>
            //     <TableCell>Item Status</TableCell>
            //     <TableCell>Update Data</TableCell>
            //     <TableCell>Delete Data</TableCell>
            // </TableRow>
            // </TableHead>
            // <TableBody>
            // {console.log(viewApi.length)}


            // {
                
            //     viewApi.length>0 &&  viewApi.map(
            //     (item,i)=>{
            //         console.log(viewApi)
            //         return(
            //             <TableRow key={i}>
            //                 <TableCell>{item.item_name}</TableCell>
            //                 <TableCell>{item.item_price}</TableCell>
            //                 <TableCell>{item.item_status}</TableCell>
            //                 <TableCell><button value={item.item_name} onClick={(e)=>updatedata(e)}>update</button></TableCell>
            //                 <TableCell><button value={item.item_name} onClick={(e)=>deleteData(e)}>Delete</button></TableCell>
            //             </TableRow>)
                    
            //     }
            //     )
                
                
            //  }
            
            // </TableBody>
            // </TableContainer>