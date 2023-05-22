import { Container } from "../Container";
import { Section } from "../Section";
import { Icon } from "../Icon";
import { Flex } from "../Flex";
import { Hero } from "../Hero";
import { MenuHeader } from "../MenuHeader/MenuHeader";
import { HeroText } from "../HeroText/HeroText";
import { ContactList } from "../ContactList/ContactList";
import { Form } from "../Form/Form";

export const Layout = () => {
  return (
    <>
      <header style={{ background: "#fff" }}>
        <Container>
          <Flex justify={"space-between"}>
            <Icon />
            <MenuHeader />
          </Flex>
        </Container>
      </header>
      <main>
        <Hero>
          <Container>
            <HeroText />
          </Container>
        </Hero>
        <Section>
          <Container>
            <ContactList />
          </Container>
        </Section>
        <Section>
          <Container>
            <Form />
          </Container>
        </Section>
      </main>
    </>
  );
};
