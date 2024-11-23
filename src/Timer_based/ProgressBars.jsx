import React, { useState, useEffect } from 'react';

const ProgressBars = () => {
  

  const [progress,setprogress]= useState([0,0,0,0]);
  const [index,setindex]= useState(0);

    

  useEffect(()=>{
    if(index>=progress.length)
    {
      return ;
    }
      let interval_id = setInterval(() => { 
        setprogress((progress)=>{
          let new_progres = [...progress];
          new_progres[index]=new_progres[index]+10;
          if(new_progres[index]>100)
          {
            setindex((index)=>{
              return index+1;
            })
          }
          return new_progres;
        })       
    }, 500);

    console.log(progress)
    return  ()=>{
      clearInterval(interval_id);
    }
  },[index])



  return (
    <div style={{ width: '100%', maxWidth: '500px', margin: '20px auto' }}>
      {progress.map((progress, index) => (
        <div key={index} style={{ width: '100%', backgroundColor: '#e0e0df', borderRadius: '8px', margin: '5px 0' }}>
          <div
            style={{
              height: '20px',
              width: `${progress}%`,
              backgroundColor: '#4caf50',
              transition: 'width 0.5s ease'
            }}
          ></div>
        </div>
      ))}
      <div>add</div>
    </div>
  );
};

export default ProgressBars;
