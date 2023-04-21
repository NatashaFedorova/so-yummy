import { LogoFooter } from './LogoFooter/LogoFooter';
import { AppInfo } from './AppInfo/AppInfo';
import { Nav } from './Nav/Nav';
import { SubscribeForm } from './SubcribeForm/SubscribeForm';
import { CommercionInfo } from './ComercionInfo/ComercionInfo';
import { LogoGroup, BoxUp, BoxDown, StyledContainerUp } from './Footer.styled';
import { SocialLinks } from './SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <footer>
      <BoxUp>
        <StyledContainerUp>
          <LogoGroup>
            <LogoFooter />
            <AppInfo />
          </LogoGroup>
          <Nav />
          <SubscribeForm />
          <SocialLinks />
        </StyledContainerUp>
      </BoxUp>
      <BoxDown>
        <CommercionInfo />
      </BoxDown>
    </footer>
  );
};

export default Footer;
