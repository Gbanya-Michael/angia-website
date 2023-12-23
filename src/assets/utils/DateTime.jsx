import axios from "axios";
import React, { useState, useEffect } from "react";

function DateTimeDisplay({ showDate = false, showTime = false }) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    // Update the date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = currentDateTime.toLocaleString(undefined, dateOptions);
  const formattedTime = currentDateTime.toLocaleString(undefined, timeOptions);

  return (
    <div className="flex gap-2">
      {showDate ? <p>{formattedDate}</p> : null}
      {showDate && showTime ? <p> | </p> : null}
      {showTime ? <p>{formattedTime}</p> : null}
    </div>
  );
}

export default DateTimeDisplay;
