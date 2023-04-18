import { StyledRegForm, StyledRegTitle, StyledRegLabel, StyledRegInputIcon, StyledRegInput, StyledRegBtnSubmit } from "../Register/Form/RegForm.styled";

export const SigninForm = () => {
  return (
    <StyledRegForm>
      <StyledRegTitle>Sign In</StyledRegTitle>
      <StyledRegLabel>
        <StyledRegInputIcon src='./images/signPages/user.svg' alt="User icon" width={18} height={18}/>
        <StyledRegInput type="email" placeholder="Email"/>
      </StyledRegLabel>
      <StyledRegLabel>
        <StyledRegInputIcon src='./images/signPages/lock.svg' alt="User icon" width={18} height={18}/>
        <StyledRegInput type="Password" placeholder="Password"/>
      </StyledRegLabel>
      <StyledRegBtnSubmit type="sybmit">Sign In</StyledRegBtnSubmit>
    </StyledRegForm>
  );
};