import React from 'react'
import {useState} from 'react'
import Help_pro from './help_pro';

function Progress() {
   const [progress,setprogress]= useState([]);
   const [speedu,setspeed]= useState(10000);
   const add=()=>{
     setprogress([...progress,<Help_pro pro={speedu} />])
   }
   const speed=()=>{
      setspeed(speedu-7000);        
   }
  return (
    <div role="container" className='Container'>
        <button  onClick={add}> add</button>
        <button onClick={speed}>speed</button>
        <p>{speedu}</p>
      {
        progress.map((ele,index)=>{
           return  <div role="bar-container" id={index} >  
              {ele}
             </div>
        })
      }
    </div>
  )
}
export default Progress