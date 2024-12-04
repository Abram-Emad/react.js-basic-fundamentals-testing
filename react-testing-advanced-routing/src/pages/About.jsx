import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", { state: "come from state" });
  };

  return (
    <>
      <h1>About Page</h1>
      <button onClick={handleClick} className='btn btn-primary'>
        Go To Home
      </button>
    </>
  );
};

export default About;
