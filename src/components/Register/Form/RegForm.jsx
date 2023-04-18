// import {ReactComponent as ReactIcon} from '../Form/user-01.svg';
import {
  StyledRegForm,
  StyledRegTitle,
  StyledRegLabel,
  StyledRegInputIcon,
  StyledRegInput,
  StyledRegBtnSubmit,
  StyledReactIcon,
} from './RegForm.styled';

export const RegForm = () => {
  return (
    <StyledRegForm>
      {/* <ReactLogo style={{ color: 'green' }} /> */}
      <StyledRegTitle>Registration</StyledRegTitle>
      <StyledRegLabel>
        {/* <StyledReactIcon style={{ color: 'green' }} /> */}
        <StyledReactIcon />
        {/* <StyledRegInputIcon src='./images/signPages/user-01.svg' alt="User icon" width={18} height={18}/> */}
        <StyledRegInput type="text" placeholder="Name" />
      </StyledRegLabel>
      <StyledRegLabel>
        <StyledRegInputIcon
          src="./images/signPages/mail.svg"
          alt="User icon"
          width={18}
          height={18}
        />
        <StyledRegInput type="email" placeholder="Email" />
      </StyledRegLabel>
      <StyledRegLabel>
        <StyledRegInputIcon
          src="./images/signPages/lock.svg"
          alt="User icon"
          width={18}
          height={18}
        />
        <StyledRegInput type="Password" placeholder="Password" />
      </StyledRegLabel>
      <StyledRegBtnSubmit type="sybmit">Sign up</StyledRegBtnSubmit>
    </StyledRegForm>
  );
};

// import React from 'react';
// import {ReactComponent as ReactLogo} from './logo.svg';

// const App = () => {
//   return (
//     <div className="App">
//       <ReactLogo />
//     </div>
//   );
