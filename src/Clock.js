import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(new Date());
      console.log("Ran")
    }, 1000);
    
    return function() {
      console.log("cleared")
      clearInterval(timer)
    };

  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
