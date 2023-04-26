import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import {
  AuthForm,
  AuthFormBtnSubmit,
  AuthFormInput,
  AuthFormLabel,
  AuthFormIconUser,
  AuthFormIconLock,
  AuthFormIconMail,
  AuthFormTitle,
  AuthFormValidaMsg,
} from 'components/SignPages/AuthForm.styled';
import AuthFormIconValid from 'components/SignPages/AuthFormIconValid';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameClass, setNameClass] = useState('');
  const [emailClass, setEmailClass] = useState('');
  const [passwordClass, setPasswordClass] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setIsValid] = useState(false);
  
  const handleBlur = e => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
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
  const handleName = e => {
    setName(e.target.value);

    if (e.target.value.length < 2 || e.target.value.length > 20) {
      setNameError("A name must contain 2 to 20 characters.");
    } else {
      setNameError('');
    }
  }
  const handleEmail = e => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Email can contain only latin letters, numbers, '@' and '.'");
    } else {
      setEmailError('');
    }
  };
  const handlePassword = e => {
    setPassword(e.target.value);

    if (e.target.value.length < 5 || e.target.value.length > 20) {
      setPasswordError("A password must contain 5 to 20 characters.");
    } else {
      setPasswordError('');
    }
  }
  const handleSubmit = async e => {
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

  useEffect(() => {
    if (nameDirty && nameError) setNameClass('red');   
    else if (nameDirty && name && !nameError) setNameClass('green');
    else setNameClass('');
  }, [nameDirty, name, nameError]);

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
    const isFormDataEmpty = !Boolean(name) && !Boolean(email) && !Boolean(password);
    const isFormDataValid = !Boolean(nameError) && !Boolean(emailError) && !Boolean(passwordError);
    const isTrue = (!isFormDataEmpty && isFormDataValid);
    setIsValid(isTrue);

    // console.log("-------------------------");console.log("-------------------------");
    // console.log("isFormDataEmpty", isFormDataEmpty);
    // console.log("isFormDataEmpty", !Boolean(name), !Boolean(email) , !Boolean(password));
    // console.log("-------------------------");
    // console.log("isFormDataValid", isFormDataValid);
    // console.log("isFormDataValid", !Boolean(nameError), !Boolean(emailError) , !Boolean(passwordError));
    // console.log("isTrue", isTrue);
  }, [name, email, password, nameError, emailError, passwordError]);

  return (
    <AuthForm id="registerForm" onSubmit={handleSubmit} >
      <AuthFormTitle>Registration</AuthFormTitle>
      <AuthFormLabel className={nameClass}>
        <AuthFormIconUser />
        <AuthFormInput
          value={name}
          onBlur={e => handleBlur(e)}
          onChange={e => handleName(e)}
          type="text"
          name="name"
          placeholder="Name"
          required
          autoComplete="off"
          // autoFocus
        />
        { nameClass && <AuthFormIconValid icon={nameClass}/>}
        { nameDirty && nameError && <AuthFormValidaMsg>{nameError}</AuthFormValidaMsg>}
      </AuthFormLabel>
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
          autoComplete="off"
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
          required
          autoComplete="new-password"
        />
        { passwordClass && <AuthFormIconValid icon={passwordClass}/>}
        { passwordDirty && passwordError && <AuthFormValidaMsg>{passwordError}</AuthFormValidaMsg>}
      </AuthFormLabel>
      <AuthFormBtnSubmit type="submit" disabled={!isValid} >Sign up</AuthFormBtnSubmit>
    </AuthForm>
  );
};

export default RegisterForm;