import React from "react";
import styled from "styled-components";

const StyledALink = styled.a.attrs(() => ({ target: "_blank" }))`
  display: inline-block;
  font-size: 1.2rem;
  text-decoration: none;
  color: darkorange;
`;

const Alink = (props) => {
  return <StyledALink {...props}>{props.children}</StyledALink>;
};

export default Alink;
