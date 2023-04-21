import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { HeaderContainer, HeaderRightDiv } from './Header.styled';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { UserLogo } from './UserLogo/UserLogo';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <Navigation />
        <HeaderRightDiv>
          <UserLogo />
          <BurgerMenu />
        </HeaderRightDiv>
      </HeaderContainer>
    </header>
  );
};

export default Header;
