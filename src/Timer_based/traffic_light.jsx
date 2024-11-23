import React, { useState, useEffect } from 'react';

function TrafficLight() {
  const [index, setIndex] = useState(0); // Initialize index as a number
  const [state, setState] = useState([1, 2, 3]); // Rename setState to avoid conflicts

  useEffect(() => {

    console.log("traffic")
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {state.map((ele,id) => (
        <div role="light-container" className={index==id? "green":"normal"} key={ele}>
          {ele}
        </div>
      ))}
    </div>
  );
}

export default TrafficLight;
