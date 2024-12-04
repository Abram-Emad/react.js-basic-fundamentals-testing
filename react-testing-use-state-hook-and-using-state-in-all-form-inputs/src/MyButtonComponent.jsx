import { useState } from "react";

function MyButtonComponent() {
  console.log("render");
  const [name, setName] = useState("Abram");

  function buttonClick() {
    if (name === "Emad") {
      setName("Abram");
    } else {
      setName("Emad");
    }
  }
  return (
    <div>
      <button onClick={buttonClick}>click me</button>
      <h1>{name}</h1>
    </div>
  );
}

export default MyButtonComponent;
