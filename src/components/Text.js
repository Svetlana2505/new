import styled from "styled-components";

const StyledText = styled.p`
  text-align: center;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  color: ${({ color }) => color || "white"};
`;

export const Text = (props) => {
  return <StyledText {...props} />;
};
