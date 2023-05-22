import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  font-family: "Nunito";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  background: #F8F8F8;
}

ul {

  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
