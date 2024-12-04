import React from "react";
import Child from "./Child";
import UserProvider from "./Context/UserContext";

function Parent() {
  return (
    <UserProvider>
      <h1>Parent</h1>
      <Child></Child>
    </UserProvider>
  );
}

export default Parent;
