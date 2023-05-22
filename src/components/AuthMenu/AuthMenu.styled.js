import styled from 'styled-components';
import * as Scroll from 'react-scroll';

export const Button = styled(Scroll.Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 34px;
  background: #f4e041;
  border-radius: 80px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
