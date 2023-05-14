import react,{useState,useEffect,useNavigate} from "react";

function Protected(props){
    const {Component}=props
    // const navigate=useNavigate()
    useEffect(()=>{
        let login=localStorage.getItem('UserLogin');
        console.log(login)
        if(!login)
        {
            window.location.href='http://localhost:3000/UserLogin'
        }

    })
    return(
        <div>
        <Component />
        </div>
    )
}

export default Protected