import { useEffect, useRef } from "react";

function App() {

  const inputRef = useRef();
  const intervalRef = useRef();
  
  useEffect(() => {
    inputRef.current.focus();
    intervalRef.current = setInterval(() => {
      console.log("interval");
    }, 1000);
  
    return () => {
      clearInterval(intervalRef.current);
    };
  
  }, []);
  return (
    <>
      <div>
        <label htmlFor='name'>Name</label>
        <input ref={inputRef} type='text' />
      </div>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Interval
      </button>
    </>
  );
}

export default App;
