import {
  AuthForm,
  AuthFormBtnSubmit,
  AuthFormInput,
  AuthFormLabel,
  AuthFormLockIcon,
  AuthFormMailIcon,
  AuthFormTitle,
  AuthFormUserIcon,
} from 'components/SignPages/AuthForm.styled';

export const RegisterForm = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    form.reset();
  };

  return (
    <AuthForm
      className="registerForm"
      id="registerForm"
      onSubmit={handleSubmit}
    >
      <AuthFormTitle>Registration</AuthFormTitle>
      <AuthFormLabel>
        <AuthFormUserIcon />
        <AuthFormInput
          name="name"
          type="text"
          placeholder="Name"
          className="req_"
          required
        />
      </AuthFormLabel>
      <AuthFormLabel>
        {/* <StyledMailIcon style={{ color: 'yellow' }}/> */}
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
