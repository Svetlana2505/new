import { Flex } from "../Flex";
import { Button } from "./MenuHeader.styled";

export const MenuHeader = () => {
  return (
    <Flex padding={"13px 0"}>
      <Button to="users" smooth={true} offset={-20} duration={700}>
        Users
      </Button>
      <Button to="sign" smooth={true} offset={-20} duration={700}>
        Sign up
      </Button>
    </Flex>
  );
};
