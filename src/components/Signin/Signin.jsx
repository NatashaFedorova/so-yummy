import { StyledSPContainer } from 'components/StartPageComponent/StartPageComponent.styled.jsx';
import { StyledRegSection, StyledRegBoxWrap, StyledRegBox, StyledRegNavLink, StyledRegSectionBg, StyledRegImgBg } from '../Register/Register.styled';
import { SigninForm } from './SigninForm';

export const Signin = () => {
  return (
    <StyledRegSection>
      <StyledSPContainer>
        <StyledRegBoxWrap>
          {/* <StyledRegImg src='./images/signPages/order-food-pana.png' /> */}
          <StyledRegImgBg/>
          <StyledRegBox>
            <SigninForm/>
            <StyledRegNavLink to="/register">register</StyledRegNavLink>
          </StyledRegBox>
        </StyledRegBoxWrap>
      </StyledSPContainer>
      <StyledRegSectionBg />
    </StyledRegSection>
  );
};
