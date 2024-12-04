import React, {memo} from "react";

const CountButton = ({ increment }) => {
    console.log("CountButton - Render");
  return (
    <>
      <button onClick={increment}>+</button>
    </>
  );
};

export default memo(CountButton);
