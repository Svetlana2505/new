import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 71px;
`;

export const Wrapper = props => {
  return <StyledWrapper {...props} />;
};
