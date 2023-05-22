import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  width: ${({ width }) => width || "100px"};
  height: 34px;
  background-color: ${({ background }) => background || "#F4E041"};
  border-radius: 80px;
  border: none;
  color: ${({ color }) => color || "rgba(0, 0, 0, 0.87)"};
  margin: ${({ margin }) => margin || "0 auto"};
`;

export const Button = (props) => {
  return <StyledButton {...props} />;
};
