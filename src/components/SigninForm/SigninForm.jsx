import {
  AuthForm,
  AuthFormBtnSubmit,
  AuthFormInput,
  AuthFormLabel,
  AuthFormLockIcon,
  AuthFormMailIcon,
  AuthFormTitle,
} from 'components/SignPages/AuthForm.styled';

export const SigninForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();

    setYellowColor();
  };
  return (
    <AuthForm
      className="signinForm"
      id="signinForm"
      onSubmit={handleSubmit}
    >
      <AuthFormTitle>Sign In</AuthFormTitle>
      <AuthFormLabel>
        <AuthFormMailIcon />
        <AuthFormInput
          name="email"
          type="email"
          placeholder="Email"
          className="req_"
          required
        />
      </AuthFormLabel>
      <AuthFormLabel>
        <AuthFormLockIcon />
        <AuthFormInput
          name="password"
          type="Password"
          placeholder="Password"
          className="req_"
          required
        />
      </AuthFormLabel>
      <AuthFormBtnSubmit type="sybmit">Sign up</AuthFormBtnSubmit>
    </AuthForm>
  );
};

//  <StyledRegForm className="signinForm" id="signinForm" onSubmit={handleSubmit}>
//         {/* <StyledMailIcon style={{ color: 'yellow' }}/> */}


function setYellowColor() {
  const currentInput = document.querySelector('[name="password"]');
  currentInput.style.color = 'red';
  console.log(currentInput);
}
