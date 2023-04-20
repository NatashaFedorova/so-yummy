import { StyledSPSection, StyledSPContainer, StyledSPBox, StyledSPLogo, StyledSPTitle, StyledSPText, StyledSPNavList, StyledSPNavLinkRegistration, StyledSPNavLinkSignIn } from './StartPageComponent.styled';

const StartPageComponent = () => {
  return (
    <StyledSPSection>
      <StyledSPContainer>
        <StyledSPBox>
          <StyledSPLogo src='./images/welcomePage/logo.svg'/>
          <StyledSPTitle>Welcome to the app!</StyledSPTitle>
          <StyledSPText>This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time.</StyledSPText>
          <StyledSPNavList>
            <StyledSPNavLinkRegistration to="register">Registration</StyledSPNavLinkRegistration>
            <StyledSPNavLinkSignIn to="signin">Sign in</StyledSPNavLinkSignIn>
          </StyledSPNavList>
        </StyledSPBox>
      </StyledSPContainer>
    </StyledSPSection>
  );
};

export default StartPageComponent;