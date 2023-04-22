import { LogoFooter } from './LogoFooter/LogoFooter';
import { AppInfo } from './AppInfo/AppInfo';
import { Nav } from './Nav/Nav';
import { SubscribeForm } from './SubcribeForm/SubscribeForm';
import { CommercionInfo } from './ComercionInfo/ComercionInfo';
import { LogoGroup, BoxUp, BoxDown, StyledContainerUp } from './Footer.styled';
import { SocialLinks } from './SocialLinks/SocialLinks';
import { DecoreLeafsTop, DecoreLeafsBottom } from 'components/DecoratedMain/DecoratedMain.styled';

const Footer = () => {
  return (
    <footer style={{position: "relative"}}>
      <DecoreLeafsTop />
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
      <BoxDown style={{position: "relative", overflow: "hidden"}}>
        <CommercionInfo />
        <DecoreLeafsBottom />
      </BoxDown>
    </footer>
  );
};

export default Footer;
