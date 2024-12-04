import React, { useState, useEffect } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const incrementTimer = () => {
      setTimer(timer + 1);
    };
    const interval = setInterval(incrementTimer, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);
  return <h1>Timer: {timer}</h1>;
}

export default Timer;
