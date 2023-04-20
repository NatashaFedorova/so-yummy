import { HeaderContainer } from './Header.styled';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { UserLogo } from './UserLogo/UserLogo';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <Navigation />
        <UserLogo />
      </HeaderContainer>
    </header>
  );
};

export default Header;
