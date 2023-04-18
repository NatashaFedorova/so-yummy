import { StyledRegForm, StyledRegTitle, StyledRegLabel, StyledRegInput, StyledRegBtnSubmit, StyledLockIcon, StyledMailIcon } from "../Register/Form/RegForm.styled";

export const SigninForm = () => {
  const handleSubmit = e => {
    e.preventDefault();

    console.log(e.currentTarget);

    const form = e.currentTarget;
    // const formData = new FormData(form);
    // const formDataValue = [...formData.entries()]

    // console.log(formDataValue);
    form.reset();

    setYellowColor();
  };

  

  return (
    <StyledRegForm className="signinForm" id="signinForm" onSubmit={handleSubmit}>
      <StyledRegTitle>Sign In</StyledRegTitle>
      <StyledRegLabel>
        <StyledMailIcon />
        <StyledRegInput name="email" type="email" placeholder="Email" className="_req"  />
      </StyledRegLabel>
      <StyledRegLabel>
        <StyledLockIcon />
        <StyledRegInput name="password" type="Password" placeholder="Password" className="_req"  />
      </StyledRegLabel>
      <StyledRegBtnSubmit type="sybmit">Sign In</StyledRegBtnSubmit>
    </StyledRegForm>
  );
};




function setYellowColor() {
  const currentInput = document.querySelector('[name="password"]');
  currentInput.style.color = 'red' 
  console.log(currentInput);
}