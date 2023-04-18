import Container from 'components/constants/Container';
import { LogoFooter } from './LogoFooter/LogoFooter';
import { AppInfo } from './AppInfo/AppInfo';
import { Nav } from './Nav/Nav';
import { SubscribeForm } from './SubcribeForm/SubscribeForm';
import { CommercionInfo } from './ComercionInfo/ComercionInfo';
import { FooterSection, LogoGroup } from './Footer.styled';
import { SocialLinks } from './SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <footer>
      <Container style={{ padding: 0 }}>
        <FooterSection>
          <LogoGroup>
            <LogoFooter />
            <AppInfo />
          </LogoGroup>
          <Nav />
          <SubscribeForm />
          <SocialLinks />
        </FooterSection>
        <CommercionInfo />
      </Container>
    </footer>
  );
};

export default Footer;
