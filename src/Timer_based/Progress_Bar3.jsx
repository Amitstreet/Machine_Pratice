import React, { useState, useEffect,useRef } from 'react';

const styles = `
  .container {
    padding: 20px;
    max-width: 500px;
  }

  .add-button {
    margin-bottom: 20px;
    padding: 10px 20px;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  .add-button:hover {
    background-color: #2563eb;
  }

  .add-button:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }

  .progress-container {
    margin-bottom: 15px;
    position: relative;
  }

  .progress-background {
    height: 24px;
    width: 100%;
    background-color: #e5e7eb;
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background-color: #22c55e;
    border-radius: 4px;
    transition: width 0.1s ease;
  }

  .progress-info {
    position: absolute;
    right: 8px;
    top: 2px;
    display: flex;
    align-items: center;
  }

  .remove-button {
    margin-left: 8px;
    background: none;
    border: none;
    color: #ef4444;
    font-size: 20px;
    cursor: pointer;
    padding: 0 5px;
  }

  .remove-button:hover {
    color: #dc2626;
  }
`;

const ProgressBars = () => {
   const [bars,setbar]= useState([]);
   const ref=  useRef({});

   const addProgressBar =()=>{
      if(bars.length>3)
      {
        return;
      }
      const new_bar= {
         id: new Date(),
         progress:0,
         flag:true
      }
      setbar([...bars,new_bar]);
      Change(new_bar);
   }
   const Change=(new_bar)=>{
      
       let interval=  setInterval(()=>
      {
          setbar((prev)=>{
             let update=  prev.map((bar)=>{
              if(bar.id==new_bar.id)
              {
                bar.progress= bar.progress+1;
                if(bar.flag==false)
                {
                  clearInterval(interval);
                }
                if(bar.progress>100)
                {
                  clearInterval(interval);
                }
                return bar;
              }
              return bar
             })
             return update;
          })
      },50)
      ref.current[new_bar.id]=interval;
   }
   const removeBar=(id)=>{
    let new_bar=    bars.filter((ele)=>{
            return ele.id!=id
        })
        clearInterval(ref.current[id]);
        setbar(new_bar);   
   }

   const handle_start=(id)=>{
        let nbar=   bars.map((bar)=>{
          if(bar.id==id)
          {
              bar.flag = bar.flag?false:true;
              return bar;
          }
          return bar;
        })
        setbar(nbar);
       Change({id:id});
        }

  return (
    <>
      <style>{styles}</style>
      <div className="container">
        <button 
          onClick={addProgressBar}
          disabled={bars.length >= 3}
          className="add-button"
        >
          Add Progress Bar ({bars.length}/3)
        </button>
        <div>
          {bars.map(bar => (
            <div key={bar.id} className="progress-container">
              <div className="progress-background">
                <div 
                  className="progress-bar"
                  style={{ width: `${bar.progress}%` }}
                />
              </div>
              <div className="progress-info">
                {bar.progress}%
                <button 
                  onClick={() => removeBar(bar.id)}
                  className="remove-button"
                >
                  ×
                </button>
                <button 
                  onClick={() => handle_start(bar.id)}
                  className="remove-button"
                >
                  {bar.flag ? "start" : "stop"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProgressBars;


