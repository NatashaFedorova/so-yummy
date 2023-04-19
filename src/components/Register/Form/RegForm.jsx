import {
  StyledRegForm,
  StyledRegTitle,
  StyledRegLabel,
  StyledRegInput,
  StyledRegBtnSubmit,
  StyledUserIcon,
  StyledMailIcon,
  StyledLockIcon
} from './RegForm.styled';

export const RegForm = () => {
  const handleSubmit = e => {
    e.preventDefault();

    // console.log(e.currentTarget);

    const form = e.currentTarget;
    // const { name, email, password } = e.currentTarget.elements;
    // const formData = new FormData(form);
    // const formDataValue = [...formData.entries()]

    // console.log(formDataValue);
    // console.log(name, email, password );
    form.reset();
  };

  return (
    <StyledRegForm className="registerForm" id="registerForm" onSubmit={handleSubmit}>
      <StyledRegTitle>Registration</StyledRegTitle>
      <StyledRegLabel>
        <StyledUserIcon />
        <StyledRegInput name="name" type="text" placeholder="Name" className="req_" required/>
      </StyledRegLabel>
      <StyledRegLabel>
        {/* <StyledMailIcon style={{ color: 'yellow' }}/> */}
        <StyledMailIcon />
        <StyledRegInput name="email" type="email" placeholder="Email" className="req_" required/>
      </StyledRegLabel>
      <StyledRegLabel>
        <StyledLockIcon />
        <StyledRegInput name="password" type="Password" placeholder="Password" className="req_" required/>
      </StyledRegLabel>
      <StyledRegBtnSubmit type="sybmit">Sign up</StyledRegBtnSubmit>
    </StyledRegForm>
  );
};
