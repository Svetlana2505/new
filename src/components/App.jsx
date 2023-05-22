import { Container } from 'components/Container';
import { Icon } from 'components/iconSrc';
import { Button } from 'components/Button';
import { Flex } from 'components/Flex';
import { Title } from 'components/Title';
import { Text } from 'components/Text';
import { Hero } from 'components/Hero';
import { Wrapper } from 'components/Wrapper';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section';
import { AuthMenu } from './AuthMenu/AuthMenu';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchToken } from 'redux/auth/auth-operation';
import { Form } from './Form/Form';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToken());
  }, [dispatch]);

  return (
    <>
      <header style={{ background: '#fff' }}>
        <Container>
          <Flex justify={'space-between'}>
            <Icon />
            <AuthMenu />
          </Flex>
        </Container>
      </header>
      <main>
        <Hero>
          <Container>
            <Wrapper>
              <Title marginBottom={'21px'}>
                Test assignment for front-end developer
              </Title>
              <Text marginBottom={'32px'}>
                What defines a good front-end developer is one that has skilled
                knowledge of HTML, CSS, JS with a vast understanding of User
                design thinking as they'll be building web interfaces with
                accessibility in mind. They should also be excited to learn, as
                the world of Front-End Development keeps evolving
              </Text>
              <Button margin={'auto'} marginBottom={'32px'}>
                Sign up
              </Button>
            </Wrapper>
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
      <footer>
        <Container></Container>
      </footer>
    </>
  );
};
