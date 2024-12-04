import React from "react";
import styled, { css, keyframes } from "styled-components";

const FadeIn = keyframes`  
from {
    transform: translateY(-20px);
    opacity: 0;
  }
to {
    transform: translateY(0);
    opacity: 1;
}`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fonts.base};
  color: #fff;
  border-radius: 7px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  animation: ${FadeIn} 2s ease-in;
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
  ${({ type, theme }) => css`
    ${() =>
      type === "secondary" && `background-color: ${theme.colors.secondary};`}
    ${() => type === "error" && `background-color: ${theme.colors.error};`}
  `}
  ${({ size, theme }) => css`
    ${() => size === "sm" && `font-size: ${theme.fonts.sm};`}
    ${() =>
      size === "lg" &&
      `padding: 1rem 2rem;  
  font-size: ${theme.fonts.lg};`}
  `}
`;

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
