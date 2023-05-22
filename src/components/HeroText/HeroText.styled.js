import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 71px;

  @media screen and (min-width: 768px) {
    padding-top: 89px;
    padding-bottom: 88px;
    width: 380px;
    margin: auto;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 164px;
    padding-bottom: 163px;
  }
`;

export const Wrapper = (props) => {
  return <StyledWrapper {...props} />;
};
