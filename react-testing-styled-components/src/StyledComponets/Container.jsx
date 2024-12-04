import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 300px;
  background-color: #eee;
  margin: 1rem auto;
  padding: 1rem;
`;

const Container = (props) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

export default Container;
