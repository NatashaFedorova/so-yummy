import { NavLink } from 'react-router-dom';
import Container from 'components/constants/Container';
import { Btn } from './StartPageComponent.styled';
// import { CardRecipe } from '../CardRecipe/CardRecipe';

// item for try card
// const item = {
//   title: 'pankcake',
//   photo: `${process.env.PUBLIC_URL}/favicon/assort.jpg`,
// };

const StartPageComponent = () => {
  return (
    <Container>
      <p>StartPage</p>
      <Btn>Registration</Btn>
      <NavLink to="register">Registration</NavLink>
      <NavLink to="signin">SignIn</NavLink>
      {/* <CardRecipe item={item} /> */}
    </Container>
  );
};

export default StartPageComponent;
