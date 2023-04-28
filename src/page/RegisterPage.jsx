import {
  SignSection,
  SignSectionBg,
  SignContainer,
  SignBoxWrap,
  SignBgImg,
  SignBox,
  SignNavLink,
} from 'components/SignPages/SignPages.styled';
import RegisterForm from 'components/RegisterForm/';

const RegisterPage = () => {
  return (
    <SignSection>
      <SignContainer>
        <SignBoxWrap>
          <SignBgImg />
          <SignBox>
            <RegisterForm />
            <SignNavLink to="/signin">Sign In</SignNavLink>
          </SignBox>
        </SignBoxWrap>
      </SignContainer>
      <SignSectionBg />
    </SignSection>
  );
};

export default RegisterPage;