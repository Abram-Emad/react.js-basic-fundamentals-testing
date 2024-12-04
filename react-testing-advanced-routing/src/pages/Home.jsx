import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <h1>Home Page</h1>
      <h2>data from state: {location.state}</h2>
    </>
  );
};

export default Home;
