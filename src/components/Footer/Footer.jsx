import { LogoFooter } from './LogoFooter/LogoFooter';
import { AppInfo } from './AppInfo/AppInfo';
import { Nav } from './Nav/Nav';
import { SubscribeForm } from './SubcribeForm/SubscribeForm';
import { CommercionInfo } from './ComercionInfo/ComercionInfo';
import { FooterSection, LogoGroup, StyledContainer } from './Footer.styled';
import { SocialLinks } from './SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <footer>
      <div style={{ background: '#22252a' }}>
        <StyledContainer>
          <FooterSection>
            <LogoGroup>
              <LogoFooter />
              <AppInfo />
            </LogoGroup>
            <Nav />
            <SubscribeForm />
            <SocialLinks />
          </FooterSection>
        </StyledContainer>
      </div>
      <div>
        <StyledContainer>
          <CommercionInfo />
        </StyledContainer>
      </div>
    </footer>
  );
};

export default Footer;
