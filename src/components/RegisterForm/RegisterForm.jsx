import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
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

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <AuthForm id="registerForm" onSubmit={handleSubmit}>
      <AuthFormTitle>Registration</AuthFormTitle>
      <AuthFormLabel>
        <AuthFormUserIcon />
        <AuthFormInput type="text" name="name" placeholder="Name" required />
      </AuthFormLabel>
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

export default RegisterForm;