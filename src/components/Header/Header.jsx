import { Container } from 'components/constants/Container.styled';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { UserLogo } from './UserLogo';

export const Header = () => {
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
