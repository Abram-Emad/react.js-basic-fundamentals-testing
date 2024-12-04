import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin-bottom: 0.5rem;
  }
`;

const Flex = (props) => {
  return <StyledFlex {...props}>{props.children}</StyledFlex>;
};

export default Flex;
