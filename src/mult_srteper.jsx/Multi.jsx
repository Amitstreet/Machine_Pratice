import {React,useState,useEffect}  from 'react'
import data from './utils.jsx'

function Multi() {

  const [state,setstate]= useState(0);
     

  const next=()=>{
     if(state<data.length-1)
     {
     setstate(state+1);
     }
  }

  const back=()=>{
    if(state!=0)
    {
    setstate(state-1);
    }
  }


console.log(data);


    return (
            <div className="stepper">
  <div>

  {data.map((ele,idx)=>{
        return    <div className="stepper-container">
          
        <div className={idx>state? "step-number":"step-number active"}>
          1
          <div className="step-line">  </div>
        </div>
           <div> {ele.label}</div>


              </div>
     })}  
   
   
  </div>
  <div className="stepper-content">
    <div>{data[state].content}</div>
  </div>
  <div className="stepper-controls">
    <button onClick={back}>Back</button>
    <button onClick= {next}>Continue</button>
  </div>
</div>

        
    )
}

export default Multi