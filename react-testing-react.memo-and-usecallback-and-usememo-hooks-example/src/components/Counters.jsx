import React, { useState, useCallback, useMemo } from "react";
import CountValue from "./CountValue";
import CountButton from "./CountButton";

const Counters = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const increment2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count1 % 2 === 0;
  }, [count1]);

  console.log("Parent - Render");

  return (
    <>
      <h1>Counters</h1>
      <h2>{isEven ? "Even" : "Odd"}</h2>
      <div>
        <CountValue count={count1} />
        <CountButton increment={increment1} />
      </div>
      <div>
        <CountValue count={count2} />
        <CountButton increment={increment2} />
      </div>
    </>
  );
};

export default Counters;
