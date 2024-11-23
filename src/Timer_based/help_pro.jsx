import React from 'react'
import { useState,useEffect } from 'react'

function Help_pro({pro}) {
     const [width,setwidth]= useState(10);
     const [isrun,setisrun]= useState(true);

      useEffect(()=>{
        let interal_id=null;
        if(isrun)
        {
         interal_id= setInterval(() => { 
            setwidth((prev)=>{
                return prev+10;
            })
        }, 2000);
          }
         
        return ()=> clearInterval(interal_id);
        
      },[isrun])

      const stop=()=>{
        console.log("yes")
         setisrun(false);
      }
      const start=()=>{
        setisrun(true);
      }

  return (
<div>
    <div style={{ width: '100%', backgroundColor: '#e0e0df', borderRadius: '8px', margin: '5px 0' }}>
      <div
        style={{
          width: `${width}%`,
          height: '20px',
          backgroundColor: '#76c7c0',
          borderRadius: '8px',
          transition: 'width 0.3s ease',
        }}
      ></div>
    </div>
    <button onClick={start}>start</button>
    <button onClick={stop}>stop</button>
    </div>
  )
}

export default Help_pro