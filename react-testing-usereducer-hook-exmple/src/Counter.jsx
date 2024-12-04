import React, { useReducer } from "react";

const initialValue = { counnt: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counnt: state.counnt + 1 };
    case "DECREMENT":
      return { ...state, counnt: state.counnt - 1 };
    case "INCREMENT_BY_VALUE":
      return { ...state, counnt: state.counnt + action.payload };
    case "RESET":
      return initialValue;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispath] = useReducer(reducer, initialValue);
  return (
    <>
      <h1>Counter: {state.counnt}</h1>
      <button onClick={() => dispath({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispath({ type: "DECREMENT" })}>-</button>
      <button
        onClick={() => dispath({ type: "INCREMENT_BY_VALUE", payload: 3 })}>
        +3
      </button>
      <button onClick={() => dispath({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default Counter;
