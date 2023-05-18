import react,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Can_dash from "./Can_dash";
function OwnerLogin(props)
{
    const navigate=useNavigate();
    const[isSubmit,setIsSubmit]=useState(false);
    const[username,setUsername]=useState('');
    const[pwd,setPwd]=useState('');
    const[apiData,setApiData]=useState({});
    const[flag,setFlag]=useState(false);
    const[email,setEmail]=useState('');
    const[count,setCount]=useState(0);
    const[c_id,setC_id]=useState('');

    useEffect(() => {
     fetch('http://127.0.0.1:8000/cntnOwnerDetail/')
        .then((res)=>res.json())
        .then((data)=>setApiData(data))
      }, []);
       
  

   const handleUsernameChange=(event,target)=>{
    let enteredUsername=event.target.value;
    setUsername(enteredUsername);
   }

   const handlePwdChange=(event,target)=>{
    let enteredPwd=event.target.value;
    setPwd(enteredPwd);
   }

   const handleSubmitClick=(e)=>{
      
        e.preventDefault();
        let cs=count+1
        setCount(cs)
        setIsSubmit(true)
        console.log(count)
        let c=0;
        let f=0;      
        apiData.length>0 && apiData.map((item)=>{
            if (item.username==username && item.pwd==pwd)
            {
                c++;
                alert('Logged in Successfully')
                navigate("/Practice1")
                f=1;

                const viewUrl='http://127.0.0.1:8000/trackId/'
                setC_id(item.c_id)

                    fetch(viewUrl, { 

                                method: 'POST', 
                                mode: 'cors', 
                                body: JSON.stringify(
                                    {
                                        c_id:item.c_id,
                                    }
                                ) 
                          
                              }).then((res)=>res.json())
                              .then((data)=>console.log(data))
                        
                }
            }
            
        )
        {console.log(flag)}
        if(e.target.value!=0 && f==0)
        {
            alert("Please Enter Valid Credentials")
        }
      
    }

    
    // const handleSubmitClick=(e)=>{
      
    //     e.preventDefault();      
    //     setIsSubmit(true)
    //     setCount(0)
    //     console.log(count)
    //     {
    //         apiData.length>0 && apiData.map((item)=>{
    //             if (item.username===username && item.pwd===pwd)
    //             {
    //                 // setCount(count+1)
    //                 // setFlag(true)
    //             }
    //         })
    //     }
    //     if(count==0){
    //         setFlag(false)
    //     }
    //     redirect()
    // }

    // const redirect=()=>{
    //     if(isSubmit && flag){
    //         alert('Logged in Successfully')
    //         navigate("/Dashboard")
    //     }
    //     if(isSubmit && !flag){
    //         alert('Please Enter Valid Credentials!')
    //     }
       
    // }
    return(
        <div style={{marginTop:140,marginLeft:25}}>
        <div className="register">
       
        <div className="col-1">
            <center><h2>Login</h2></center>
            <h1>{props.username}</h1>
            <form id='form' className='flex flex-col'>
            <input style={{marginRight:110,marginLeft:-166}} type="text"  id ="username" placeholder='Username' name="username" 
            onChange={(e,target)=>{handleUsernameChange(e,target)}}/>
            <input style={{marginRight:110,marginLeft:-166}} type="password" id="pwd" placeholder='Password' name="pwd" 
            onChange={(e,target)=>{handlePwdChange(e,target)}}/>
            <button style={{marginRight:110,marginLeft:-166,marginBottom:0}} value={count} className='btn' onClick={(e)=>handleSubmitClick(e)}>Login</button>
            <a href="http://localhost:3000/SignUpPage/CntnOwner" style={{marginRight:110,marginLeft:-60}}>Don't have an account?</a>
            </form>
        </div>
    </div>
    

        </div>
    )
}

export default OwnerLogin