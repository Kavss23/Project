import React, { useState,useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
const Ratings = () => {
  const [rate, setRate] = useState(0);
  const[apiData,setApiData]=useState({})
  const[email,setEmail]=useState()
  useEffect(() => {
   
    fetch('http://127.0.0.1:8000/viewProfile/')
      .then((res)=>res.json())
      .then((data)=>setApiData(data))


    }, []);

    const findEmail=()=>{
      let email=""
      apiData.length>0 && apiData.map((item,index)=>{
        ((apiData.length-1)==index)?
          email=item.email:<p></p>
      })
      console.log(email)
      return email;
    }
    
  return (
    
    <Container>
    <div>
  
    </div>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        
        return (
            <div>
            
          <label>
            <Radio
              type="radio"
              value={findEmail()}


              onClick={(e) => {
                setRate(givenRating);
                setEmail(findEmail())
                console.log(rate)
                

                const url='http://127.0.0.1:8000/feedback/'
                
              fetch(url, { 
                
              method: 'POST', 
              mode: 'cors', 
              body: JSON.stringify(
              {
                  email:e.target.value,
                  rating:givenRating,
               }
           ) 
     
         }).then((res)=>res.json())
         .then((data)=>console.log(data))
         alert(`Thanks for your Feedback!!`);
        }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ?
                     "#ebb434"
                    : "rgb(192,192,192)"
                }
              />
            
            </Rating>
          </label>
          </div>
        );
      })}
      {/* {console.log("Rating: " ,{givenRating})} */}
    </Container>
  );
};
  
export default Ratings;
