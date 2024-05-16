import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // update()
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      console.log("cleaned up");
      clearInterval(id);
      setCount(0)
    };
  }, [isRunning]);

  function toggleFn() {
    setIsRunning(!isRunning);
  }
  return (
    <div>
      <button onClick={toggleFn}>{isRunning ? "UnMount" : "Mount"}</button>
      {isRunning && <h3>Count:- {count}</h3>}
    </div>
  );
};

export default Timer;