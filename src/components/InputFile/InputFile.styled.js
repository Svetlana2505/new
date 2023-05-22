import styled from "styled-components";

export const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  z-index: -1;
`;

export const StyledLabel = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #d0cfcf;
  border-radius: 4px;
  width: 100%;
  height: 54px;
  margin-bottom: 50px;
  margin-top: 47px;
`;

export const SpanUpload = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 83px;
  height: 54px;
  border-radius: 4px 0 0 4px;
  border: 1px solid rgba(0, 0, 0, 0.87);
  color: #7e7e7e;
`;

export const SpanName = styled.span`
  padding-left: 95px;
  color: #7e7e7e;
`;
