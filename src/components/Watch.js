import React, { useState, useEffect } from "react";

export default function Watch() {
  // State to hold the current time
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Effect to update the time every second
  useEffect(() => {
    // Function to update time
    const updateClock = () => {
      const currentTime = new Date();
      const hours = String(currentTime.getHours()).padStart(2, "0");
      const minutes = String(currentTime.getMinutes()).padStart(2, "0");
      const seconds = String(currentTime.getSeconds()).padStart(2, "0");

      // Set the time state with the updated time
      setTime({ hours, minutes, seconds });
    };

    // Set an interval to update the clock every second
    const intervalId = setInterval(updateClock, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="watch">
      <div className="clock-container">
        <span id="hrs">{time.hours}</span>
        <span>:</span>
        <span id="mins">{time.minutes}</span>
        <span>:</span>
        <span id="sec">{time.seconds}</span>
      </div>
    </div>
  );
}
