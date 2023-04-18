import Box from 'components/constants/Container/Container.styled';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { UserLogo } from './UserLogo';

const Header = () => {
  return (
    <header>
      <Box>
        <Logo />
        <Navigation />
        <UserLogo />
      </Box>
    </header>
  );
};

export default Header;
