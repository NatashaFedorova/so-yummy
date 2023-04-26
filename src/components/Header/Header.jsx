// import useAuth from 'hooks/useAuth';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUser } from 'redux/user/userSlice';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import {
  HeaderContainer,
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
  // const dispatch = useDispatch();
  // const { user } = useAuth();
  // const { name, email, avatarUrl, subscription } = user;
  // useEffect(() => {
  //   dispatch(setUser({ name, email, avatarUrl, subscription }));
  // }, [dispatch, name, email, avatarUrl, subscription]);
  return (
    <HeaderS>
      <HeaderContainer>
        <Logo />
        <Navigation />
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
