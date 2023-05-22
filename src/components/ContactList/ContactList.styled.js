import styled from "styled-components";

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 15px;
    margin-top: -20px;
    margin-left: -20px;
  }
`;

export const Item = styled.li`
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-top: 20px;
    margin-left: 20px;
    width: calc((100% - 40px) / 2);
  }

  @media screen and (min-width: 1024px) {
    width: calc((100% - 60px) / 3);
  }
`;
