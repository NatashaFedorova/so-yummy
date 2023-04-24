import {
  WelcomePageSection,
  WelcomePageContainer,
  WelcomePageBox,
  WelcomePageLogo,
  WelcomePageTitle,
  WelcomePageText,
  WelcomePageNavList,
  WelcomePageNavLinkRegister,
  WelcomePageNavLinkLogin,
} from './WelcomePageComponent.styled';

const WelcomePageComponent = () => {
  return (
    <WelcomePageSection>
      <WelcomePageContainer>
        <WelcomePageBox>
          <WelcomePageLogo src={`${process.env.PUBLIC_URL}/images/welcomePage/logo.svg`} />
          <WelcomePageTitle>Welcome to the app!</WelcomePageTitle>
          <WelcomePageText>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </WelcomePageText>
          <WelcomePageNavList>
            <WelcomePageNavLinkRegister to="register">
              Registration
            </WelcomePageNavLinkRegister>
            <WelcomePageNavLinkLogin to="signin">Sign in</WelcomePageNavLinkLogin>
          </WelcomePageNavList>
        </WelcomePageBox>
      </WelcomePageContainer>
    </WelcomePageSection>
  );
};

export default WelcomePageComponent;