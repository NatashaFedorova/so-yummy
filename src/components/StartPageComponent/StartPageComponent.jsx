import { NavLink } from 'react-router-dom';
import { Text } from './StartPageComponent.styled';
import { Container } from 'components/constants/Container.styled';
import { DefaultBtn } from 'components/constants/DefaultBtn.styled';

export const StartPageComponent = () => {
  return (
    <Container>
      <Text>StartPage</Text>
      <DefaultBtn>Test</DefaultBtn>
      <NavLink to="register">Registration</NavLink>
      <NavLink to="signin">SignIn</NavLink>
    </Container>
  );
};
