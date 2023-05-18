import React, { useState ,useEffect} from 'react'
import "./Can_dash.css"


export default function Table() {
 
    const[categoriesApi,setCategoriesApi]=useState({})
 
    let [array,setArray]=useState([]);
    // let [inputdata,setInputdata]=useState({c_id:"",item_name:"",item_price:""});
    let [index,setIndex]=useState();
    const[cid,setcid]=useState();
    const[k,setK]=useState('0');
    let [bolin,setBolin]=useState(false);
    const[apiData,setApiData]=useState()
    const[flag,setFlag]=useState(false)
    // let {c_id,item_name,item_price}=inputdata;
    const[backData,setBackData]=useState([])
    const[takenCid,setTakenId]=useState()
    const[indic,setIndic]=useState(true)
    const[callData,setCallData]=useState([])
    const[idTaken,setIdTaken]=useState(false)
    const[item_price,setItem_price]=useState('')
    const[item_name,setItem_name]=useState('')
    
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/categoriesDetail/')
        .then((res)=>res.json())
        .then((data)=>setCallData(data['data']))
    
       

       var id=prompt("Enter your id")
       setTakenId(id)
       setBackData(callData.filter(x=>id===x['c_id']))

       console.log(callData)
       
    },[])
      
    // function data(e){
    //     setInputdata({...inputdata,[e.target.name]:e.target.value})
    // }
   

    const handleNameChange=(e)=>{
        setItem_name(e.target.value)
        console.log(e.target.value)
    }

    const handlePriceChange=(e)=>{
        setItem_price(e.target.value)
        console.log(e.target.value)
    }
    function addinputdata(){
       
        const url='http://127.0.0.1:8000/categoriesDetail/'
        
       
        
   
        fetch(url, { 

            method: 'POST', 
            mode: 'cors', 
            body: JSON.stringify(
                {
                  
                    c_id:takenCid,
                    item_name:item_name,
                    item_price:item_price
                    
                }
            ) 
      
          })
        .then((res)=>res.json())
        .then((data)=>setBackData(data['data']))

    }
    





  return (
    <div>
        <h1>Menu </h1>
        <input type="text" id="c_id" name='canteen_id' value={takenCid} placeholder={takenCid}  readOnly={true} />
            <input type="text" readOnly={flag} id="item_name" name='item_name' value={item_name} placeholder='Enter Item Name' onChange={handleNameChange}  required />
            <input type="text" id="item_price" name="item_price" value={item_price} placeholder='Enter Price' onChange={handlePriceChange} required /> 
           
            <button onClick={()=>addinputdata()}>Add data</button>
         
            <br />
       
            <table border="1" >
                <tbody>
                    <tr>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        
                    </tr>
        {console.log(backData.length)}
{
    
    backData.length>0 &&  backData.map(
    (item,i)=>{
        console.log("hi")
        return(
            <tr key={i}>
                <td>{item.item_name}</td>
                <td>{item.item_price}</td>
              
            </tr>)
        
    }
    )
    
    
 }






                </tbody>
            </table>

    </div>
  )
}