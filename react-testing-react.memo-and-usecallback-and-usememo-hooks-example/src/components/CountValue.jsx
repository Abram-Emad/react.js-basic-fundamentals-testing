import React from "react";

const CountValue = ({ count }) => {
      console.log("CountValue - Render");
return (
    <>
      <div>Count: {count}</div>
    </>
  );
};

export default React.memo(CountValue);
