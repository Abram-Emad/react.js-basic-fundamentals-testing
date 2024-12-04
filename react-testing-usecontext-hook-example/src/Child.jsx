import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";

const Child = () => {
  const {name} = useContext(UserContext);
  return (
    <>
      <h1>Child</h1>
      <h2>Name From Context: {name}</h2>
    </>
  );
};

export default Child;
