// import useAuth from 'hooks/useAuth';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUser } from 'redux/user/userSlice';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import {
  HeaderContainer,
  HeaderLeftDiv,
  HeaderRightDiv,
  HeaderS,
  HeaderSwitchDiv,
  RightDivSwitcher,
} from './Header.styled';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { UserLogo } from './UserLogo/UserLogo';
import SwitchTheme from 'components/SwitchTheme';

const Header = () => {
  return (
    <HeaderS>
      <HeaderContainer>
        <HeaderLeftDiv>
          <Logo />
          <Navigation />
        </HeaderLeftDiv>
        <RightDivSwitcher>
          <HeaderRightDiv>
            <UserLogo />
            <BurgerMenu />
          </HeaderRightDiv>
          <HeaderSwitchDiv>
            <SwitchTheme />
          </HeaderSwitchDiv>
        </RightDivSwitcher>
      </HeaderContainer>
    </HeaderS>
  );
};

export default Header;
