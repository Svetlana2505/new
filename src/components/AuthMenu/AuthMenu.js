import { Flex } from 'components/Flex';
import { Button } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <Flex padding={'16px 0'}>
      <Button to="users" smooth={true} offset={-20} duration={700} marginRight>
        Users
      </Button>
      <Button to="signup" smooth={true} offset={-20} duration={700}>
        Sign up
      </Button>
    </Flex>
  );
};
