import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 40px;
  line-height: 1;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  color: ${({ color }) => color || "white"};
`;

export const Title = (props) => {
  return <StyledTitle {...props} />;
};
