import { NavLink } from 'react-router-dom';
import { Container } from 'components/constants/Container.styled';
import { Btn } from './StartPageComponent.styled';

export const StartPageComponent = () => {
  return (
    <Container>
      <p>StartPage</p>
      <Btn>Registration</Btn>
      <NavLink to="register">Registration</NavLink>
      <NavLink to="signin">SignIn</NavLink>
    </Container>
  );
};
