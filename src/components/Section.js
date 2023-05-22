import React from "react";
import styled from "styled-components";

export const StyledSection = styled.section`
  padding-top: 140px;
`;

export const Section = (props) => {
  return <StyledSection {...props} />;
};
