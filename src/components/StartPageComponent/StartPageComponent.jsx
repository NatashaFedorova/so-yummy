import { NavLink } from 'react-router-dom';
import Container from 'components/constants/Container';
import { Btn } from './StartPageComponent.styled';

const StartPageComponent = () => {
  return (
    <Container>
      <p>StartPage</p>
      <Btn>Registration</Btn>
      <NavLink to="register">Registration</NavLink>
      <NavLink to="signin">SignIn</NavLink>
    </Container>
  );
};

export default StartPageComponent;
