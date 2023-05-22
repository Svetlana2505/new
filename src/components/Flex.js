import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "stretch"};
  align-items: ${({ align }) => align || "center"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding};
`;

export const Flex = (props) => {
  return <StyledFlex {...props} />;
};
