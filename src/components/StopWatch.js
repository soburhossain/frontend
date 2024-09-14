import React, { useState, useRef } from "react";

export default function StopWatch() {
  // State to keep track of time
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Reference to store the timer ID
  const timerRef = useRef(null);

  // Function to format time from seconds to HH:MM:SS
  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  // Function to start the stopwatch
  const watchStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  // Function to stop the stopwatch
  const watchStop = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerRef.current);
    }
  };

  // Function to reset the stopwatch
  const watchReset = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  return (
    <div>
      <div className="stopwatch" id="stop-watch-nav">
        <div className="circle">
          <h1 id="displayTime">{formatTime(time)}</h1>
          <div className="stopwatch-btn">
            <h3 className="ctrl-btn" onClick={watchStop}>
              Stop
            </h3>
            <h3 className="ctrl-btn start" onClick={watchStart}>
              Start
            </h3>
            <h3 className="ctrl-btn" onClick={watchReset}>
              Reset
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
