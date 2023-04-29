import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';
import {
  AuthForm,
  AuthFormBtnSubmit,
  AuthFormInput,
  AuthFormLabel,
  AuthFormIconMail,
  AuthFormIconLock,
  AuthFormTitle,
  AuthFormValidaMsg,
} from 'components/SignPages/AuthForm.styled';
import AuthFormIconValid from 'components/SignPages/AuthFormIconValid';

const SigninForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailClass, setEmailClass] = useState('');
  const [passwordClass, setPasswordClass] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleBlur = e => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;

      default:
        return;
    }
  };
  const handleEmail = e => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError(
        "Email can contain only latin letters, numbers, '@' and '.'"
      );
    } else {
      setEmailError('');
    }
  };
  const handlePassword = e => {
    setPassword(e.target.value);

    if (e.target.value.length < 6 || e.target.value.length > 16) {
      setPasswordError('Enter a valid Password');
    } else {
      setPasswordError('');
    }
  };
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

  useEffect(() => {
    if (emailDirty && emailError) setEmailClass('red');
    else if (emailDirty && email && !emailError) setEmailClass('green');
    else setEmailClass('');
  }, [emailDirty, email, emailError]);

  useEffect(() => {
    if (passwordDirty && passwordError) setPasswordClass('red');
    else if (passwordDirty && password && !passwordError) setPasswordClass('green');
    else setPasswordClass('');
   
  }, [passwordDirty, password, passwordError]);

  useEffect(() => {
    if (passwordDirty) {
      if (passwordError) setPasswordClass('red');
      else if (password && !passwordError) {
        setPasswordClass('green'); 
      }
    }
    else setPasswordClass('');
  }, [email, password, emailError, passwordError, passwordDirty]);

  useEffect(() => {
    const isFormDataEmpty = !Boolean(email) && !Boolean(password);
    const isFormDataValid = !Boolean(emailError) && !Boolean(passwordError);
    const isTrue = (!isFormDataEmpty && isFormDataValid);
    setIsValid(isTrue);
  }, [email, password, emailError, passwordError]);

  return (
    <AuthForm className="signinForm" id="signinForm" onSubmit={handleSubmit}>
      <AuthFormTitle>Sign In</AuthFormTitle>
      <AuthFormLabel className={emailClass}>
        <AuthFormIconMail />
        <AuthFormInput
          value={email}
          onBlur={e => handleBlur(e)}
          onChange={e => handleEmail(e)}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        { emailClass && <AuthFormIconValid icon={emailClass}/>}
        { emailDirty && emailError && <AuthFormValidaMsg>{emailError}</AuthFormValidaMsg>}
      </AuthFormLabel>
      <AuthFormLabel className={passwordClass}>
        <AuthFormIconLock />
        <AuthFormInput
          onBlur={e => handleBlur(e)}
          onChange={e => handlePassword(e)}
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="on"
          minlength="5"
          required
        />
        { passwordClass && <AuthFormIconValid icon={passwordClass}/>}
        { passwordDirty && passwordError && <AuthFormValidaMsg>{passwordError}</AuthFormValidaMsg>}
      </AuthFormLabel>
      <AuthFormBtnSubmit type="submit" disabled={!isValid} >Sign in</AuthFormBtnSubmit>
    </AuthForm>
  );
};

export default SigninForm;
