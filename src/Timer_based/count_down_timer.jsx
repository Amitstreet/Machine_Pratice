import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const convertToTimeString = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours} hour(s), ${minutes} minute(s), ${seconds} second(s)`;
  };

  const getCurrentTimeInSeconds = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return hours * 3600 + minutes * 60 + seconds;
  };

  const [elapsedSeconds, setElapsedSeconds] = useState(getCurrentTimeInSeconds());
  const [isRunning, setIsRunning] = useState(true);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    } else if (isReset) {
      setElapsedSeconds(0);
      setIsReset(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, isReset]);

  const toggleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsReset(true);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>{convertToTimeString(elapsedSeconds)}</h1>
      <button onClick={toggleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default CountdownTimer;
