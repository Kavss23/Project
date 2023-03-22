import react,{useState,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
function UserLogin(props)
{
    const location=useLocation();
    const navigate=useNavigate();
    const[isSubmit,setIsSubmit]=useState(false);
    const[username,setUsername]=useState('');
    const[pwd,setPwd]=useState('');
    const[apiData,setApiData]=useState({});
    const[flag,setFlag]=useState(false);
    const[email,setEmail]=useState('');
    const[count,setCount]=useState(0);
    const[formErrors, setFormErrors] = useState('');

    useEffect(() => {
        console.log("called")
     fetch('http://127.0.0.1:8000/userDetails/')
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
        const viewUrl='http://127.0.0.1:8000/viewProfile/'
        console.log(count)
        let c=0;
        let f=0;
        apiData.length>0 && apiData.map((item)=>{
                if (item.username==username && item.pwd==pwd)
                {
                    c++;
                    alert('Logged in Successfully')
                    navigate("/Dashboard")
                    f=1;
                    setEmail(item.email)

                    fetch(viewUrl, { 

                                method: 'POST', 
                                mode: 'cors', 
                                body: JSON.stringify(
                                    {
                                        username:username,
                                        email:item.email,
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
        // apiData.length>0 && apiData.map((item,index)=>{
        //     let c=0;
        //     if ((item.username==username && item.pwd==pwd))
        //     {
        //             c++;
        //     }
        //     if(c!=0){

        //     }
        //     }
        // )

        // if(c!=0){
        //     console.log("insidee")
        //     setFlag(true)
        //     fetch(viewUrl, { 

        //         method: 'POST', 
        //         mode: 'cors', 
        //         body: JSON.stringify(
        //             {
        //                 username:username,
        //                 email:email,
        //             }
        //         ) 
          
        //       }).then((res)=>res.json())
        //       .then((data)=>console.log(data))
        // }
       
        // redirect()
    }

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
            onChange={(e,target)=>{handlePwdChange(e,target)}}/><p style={{color:'red'}}>{formErrors}</p>
            
            <button className='btn' value={count} onClick={(e)=>handleSubmitClick(e)}>Login</button>
            </form>
        </div>
    </div>
    

        </div>
    )
}

export default UserLogin
