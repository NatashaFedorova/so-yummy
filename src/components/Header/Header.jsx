import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/user/userSlice';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { HeaderContainer, HeaderRightDiv } from './Header.styled';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { UserLogo } from './UserLogo/UserLogo';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { name, email, avatarUrl, subscription } = user;
  useEffect(() => {
    dispatch(setUser({ name, email, avatarUrl, subscription }));
  }, [dispatch, name, email, avatarUrl, subscription]);
  return (
    <header style={{ position: 'absolute' }}>
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
