import { Container } from 'components/constants/Container/Container.styled';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { UserLogo } from './UserLogo';


const Header = () => {
  return (
    <header>
      <Container>
        <Logo />
        <Navigation />
        <UserLogo />
      </Container>
    </header>
  );
};

export default Header;
