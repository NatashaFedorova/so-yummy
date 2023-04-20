import {
  SignSection,
  SignSectionBg,
  SignContainer,
  SignBoxWrap,
  SignBgImg,
  SignBox,
  SignNavLink,
} from 'components/SignPages/SignPages.styled';
// import SigninForm from 'components/SigninForm/';
import SigninForm  from 'components/SigninForm/';

const SigninPage = () => {
  return (
    <SignSection>
      <SignContainer>
        <SignBoxWrap>
          <SignBgImg />
          <SignBox>
            <SigninForm />
            <SignNavLink to="/register">register</SignNavLink>
          </SignBox>
        </SignBoxWrap>
      </SignContainer>
      <SignSectionBg />
    </SignSection>
  );
};

export default SigninPage;