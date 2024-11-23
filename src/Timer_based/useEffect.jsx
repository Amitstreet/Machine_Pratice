






import React, { useState, useEffect } from 'react';

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
  const [bars, setBars] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [pause,setpause]= useState(false);

  const addProgressBar = () => {
    if (bars.length >= 3 || isAdding) return;
    setIsAdding(true);
    const newBar = {
      id: Date.now(),
      progress: 0,
      flag:false,
    };

    setBars(prev => [...prev, newBar]);
    Change(newBar);
  };
  const Change= (newBar)=>{
    const interval = setInterval(() => {
        setBars(prevBars => {
          const updatedBars = prevBars.map(bar => {
            if (bar.id === newBar.id) {
              const newProgress = bar.progress + 1;
              if(bar.flag==true)
              {
                  clearInterval(interval);
              }
              if (newProgress >= 100) {
                clearInterval(interval);
              }
              return { ...bar, progress: Math.min(newProgress, 100) };
            }
            return bar;
          });
          return updatedBars;
        });
      }, 50);
  }
  useEffect(() => {
    if (isAdding) {
      const timeout = setTimeout(() => setIsAdding(false), 100);
      return () => clearTimeout(timeout);
    }
  }, [isAdding]);

  const removeBar = (id) => {
    setBars(prevBars => prevBars.filter(bar => bar.id !== id));
  };
  const handle=(id)=>{
       for(let i=0;i<bars.length;i++)
       {
           if(bars[i].id==id)
           {
            if(bars[i].flag==false)
            {
            bars[i].flag=true;
            }
            else
            {
                console.log("yes")
                bars[i].flag=false;
            }
           }
    }
    setBars(bars);
    const newBar={
        id:id,
    }
    Change(newBar);   
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
                  onClick={() => handle(bar.id)}
                  className="remove-button"
                >

                  {pause ? "start" : "stop"}
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











