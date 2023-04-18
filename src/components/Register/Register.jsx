import { StyledSPContainer } from 'components/StartPageComponent/StartPageComponent.styled.jsx';
import { StyledRegSection, StyledRegBoxWrap, StyledRegBox, StyledRegNavLink, StyledRegSectionBg, StyledRegImgBg } from './Register.styled.jsx';
import { RegForm } from './Form/RegForm.jsx';

export const Register = () => {
  return (
    <StyledRegSection>
      <StyledSPContainer>
        <StyledRegBoxWrap>
          <StyledRegImgBg/>
          <StyledRegBox>
            <RegForm/>
            <StyledRegNavLink to="/signin">signin</StyledRegNavLink>
          </StyledRegBox>
        </StyledRegBoxWrap>
      </StyledSPContainer>
      <StyledRegSectionBg />
    </StyledRegSection>
  );
};
