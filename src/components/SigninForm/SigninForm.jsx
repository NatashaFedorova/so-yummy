import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';
import {
  AuthForm,
  AuthFormBtnSubmit,
  AuthFormInput,
  AuthFormLabel,
  AuthFormLockIcon,
  AuthFormMailIcon,
  AuthFormTitle,
} from 'components/SignPages/AuthForm.styled';

const SigninForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <AuthForm className="signinForm" id="signinForm" onSubmit={handleSubmit}>
      <AuthFormTitle>Sign In</AuthFormTitle>
      <AuthFormLabel>
        <AuthFormMailIcon />
        <AuthFormInput type="email" name="email" placeholder="Email" required />
      </AuthFormLabel>
      <AuthFormLabel>
        <AuthFormLockIcon />
        <AuthFormInput type="password" name="password" placeholder="Password" required />
      </AuthFormLabel>
      <AuthFormBtnSubmit type="submit">Sign up</AuthFormBtnSubmit>
    </AuthForm>
  );
};

// <StyledMailIcon style={{ color: 'yellow' }}/>

// function setYellowColor() {
//   const currentInput = document.querySelector('[name="password"]');
//   currentInput.style.color = 'red';
//   console.log(currentInput);
// }

export default SigninForm;