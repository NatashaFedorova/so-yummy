import styled from 'styled-components';

import { device } from 'components/constants/deviceType/deviceType';
import { ReactComponent as UserIcon } from './user.svg';
import { ReactComponent as MailIcon } from './mail.svg';
import { ReactComponent as LockIcon } from './lock.svg';
import { ReactComponent as RedIcon } from './red.svg';
import { ReactComponent as YellowIcon } from './yellow.svg';
import { ReactComponent as GreenIcon } from './green.svg';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px 28px 40px;

  color: ${props => props.theme.colors.userForm.textForm};
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  background: #2a2c36;
  border-radius: 30px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);

  @media ${device.mobile} {
    width: 335px;
  }
  @media ${device.tablet} {
    width: 500px;
  }
  @media ${device.desktop} {
    padding: 44px 50px;
  }
`;
export const AuthFormTitle = styled.h1`
  margin-bottom: 18px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;

  @media ${device.tablet} {
    margin-bottom: 50px;

    font-size: 28px;
    line-height: 1.07;
  }
  @media ${device.desktop} {
    margin-bottom: 32px;
  }
`;
export const AuthFormLabel = styled.label`
  position: relative;
  margin-bottom: 12px;

  :last-of-type {
    margin-bottom: 28px;
  }

  @media ${device.tablet} {
    margin-bottom: 24px;

    :last-of-type {
      margin-bottom: 50px;
    }
  }

  &:hover, &:focus {
    color: blue;
  }

  &.red {
    svg {
      color: #E74A3B;
    };
    input {
      border-color: #E74A3B;
      opacity: 1;
    };
    p {
      color: #E74A3B;
    }
  };

  &.yellow {
    svg {
      color: #F6C23E;
    };
    input {
      border-color: #F6C23E;
      opacity: 1;
    };
    p {
      color: #F6C23E;
    }
  };

  &.green {
    svg {
      color: #3CBC81;
    };
    input {
      border-color: #3CBC81;
      opacity: 1;
    };
    p {
      color: #3CBC81;
    }
  }
`;

export const AuthFormIconUser = styled(UserIcon)`
  position: absolute;
  top: 50%;
  left: 18px;
  width: 18px;
  height: 18px;

  color: #ffffff;
  opacity: 0.8;
  transform: translateY(-50%);
`;
export const AuthFormIconMail = styled(MailIcon)`
  position: absolute;
  top: 50%;
  left: 18px;
  width: 18px;
  height: 18px;

  color: #ffffff;
  opacity: 0.8;
  transform: translateY(-50%);
`;
export const AuthFormIconLock = styled(LockIcon)`
  position: absolute;
  top: 50%;
  left: 18px;
  width: 18px;
  height: 18px;

  color: #ffffff;
  opacity: 0.8;
  transform: translateY(-50%);
`;
export const AuthFormIconRed = styled(RedIcon)`
  position: absolute;
  top: 50%;
  right: 18px;
  width: 18px;
  height: 18px;

  color: #E74A3B;
  transform: translateY(-50%);
`;
export const AuthFormIconYellow = styled(YellowIcon)`
  position: absolute;
  top: 50%;
  right: 18px;
  width: 18px;
  height: 18px;

  color: #F6C23E;
  transform: translateY(-50%);
`;
export const AuthFormIconGreen = styled(GreenIcon)`
  position: absolute;
  top: 50%;
  right: 18px;
  width: 18px;
  height: 18px;

  color: #3CBC81;
  transform: translateY(-50%);
`;

export const AuthFormInput = styled.input`
  width: 100%;
  padding: 12px 14px 12px 40px;

  color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  border: 1px solid;
  border-radius: 6px;
  border-color: rgba(255, 255, 255. 0.3);
  opacity: 0.3; 

  &:hover, &:focus {
    opacity: 1;
  }

  @media ${device.tablet} {
    padding: 16px 18px 16px 50px;

    font-size: 18px;
    line-height: 27px;
  }
`;
export const AuthFormValidaMsg = styled.p`
  position: absolute;
  bottom: -11px;
  
  left: 0px;

  color: #E74A3B;
  font-size: 11px;
  line-height: 1;
  text-align: center;

   @media ${device.tablet} {
    bottom: -21px;

    font-size: 14px;
    line-height: 21px;
  }
`;
export const AuthFormPassValidaMsg = styled.p`
  position: absolute;
  bottom: -12px;
  
  left: 0px;

  color: #E74A3B;
  font-size: 10px;
  line-height: 1;
  text-align: center;

   @media ${device.tablet} {
    bottom: -21px;

    font-size: 14px;
    line-height: 21px;
  }
`;
export const AuthFormPassValidaMsg2 = styled.p`
  position: absolute;
  bottom: -24px;
  
  left: 0px;

  color: #E74A3B;
  font-size: 10px;
  line-height: 1;
  text-align: center;

   @media ${device.tablet} {
    bottom: -42px;

    font-size: 14px;
    line-height: 21px;
  }
`;

export const AuthFormBtnSubmit = styled.button`
  height: 60px;

  color: inherit;

  border: 0px;
  border-radius: 6px;
  background-color: #8baa36;
  cursor: pointer;

  &:hover, :focus {
    color: #22252A;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
