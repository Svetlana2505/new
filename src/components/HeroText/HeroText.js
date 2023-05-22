import { Wrapper } from "./HeroText.styled";
import { Title } from "../Title";
import { Text } from "../Text";
import { Button } from "../Button";

export const HeroText = () => {
  return (
    <Wrapper>
      <Title marginBottom={"21px"}>
        Test assignment for front-end developer
      </Title>
      <Text marginBottom={"32px"}>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </Text>
      <Button margin={"auto"} marginBottom={"32px"}>
        Sign up
      </Button>
    </Wrapper>
  );
};
