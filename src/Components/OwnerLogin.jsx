import react,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
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
        let f=0;      
        setIsSubmit(true)
        if(isSubmit)
        {
            apiData.length>0 && apiData.map((item)=>{
                if (item.username===username && item.pwd===pwd)
                {
                    f=1;
                    console.log("bye")
                }
            })
        }
        if(apiData.length>0)
        redirect(f)
    }

    const redirect=(f)=>{
        if(f==1)
        {
            alert('Logged In Successfully!')
            window.location.href='http://localhost:3000/Dashboard'
        }
        else
        {
            alert('Please Enter Valid Credentials')
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
            <input type="text"  id ="username" placeholder='Username' name="username" 
            onChange={(e,target)=>{handleUsernameChange(e,target)}}/>
            <input type="password" id="pwd" placeholder='Password' name="pwd" 
            onChange={(e,target)=>{handlePwdChange(e,target)}}/>
            <button className='btn' onClick={(e)=>handleSubmitClick(e)}>Login</button>
            </form>
        </div>
    </div>
    

        </div>
    )
}

export default OwnerLogin