import styled from 'styled-components';
import { device } from 'components/constants/Container/Container.styled';
import { ReactComponent as UserIcon } from './user.svg';
import { ReactComponent as MailIcon } from './mail.svg';
import { ReactComponent as LockIcon } from './lock.svg';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 335px;
  padding: 32px 28px 40px;

  color: ${props => props.theme.colors.userForm.textForm};
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  background: #2a2c36;
  border-radius: 30px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);

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

  // color: green;

  :last-of-type {
    margin-bottom: 28px;
  }

  @media ${device.tablet} {
    margin-bottom: 24px;

    :last-of-type {
      margin-bottom: 50px;
    }
  }
`;
export const AuthFormUserIcon = styled(UserIcon)`
  position: absolute;
  top: 50%;
  left: 18px;
  width: 18px;
  height: 18px;

  // color: inherit;
  // color: red;

  transform: translateY(-50%);
`;
export const AuthFormMailIcon = styled(MailIcon)`
  position: absolute;
  top: 50%;
  left: 18px;
  width: 18px;
  height: 18px;

  color: inherit;

  transform: translateY(-50%);
`;
export const AuthFormLockIcon = styled(LockIcon)`
  position: absolute;
  top: 50%;
  left: 18px;
  width: 18px;
  height: 18px;

  color: inherit;

  transform: translateY(-50%);
`;
export const AuthFormInput = styled.input`
  width: 100%;
  padding: 12px 14px 12px 40px;

  color: inherit;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  opacity: 0.8;
  border: 1px solid;
  border-radius: 6px;
  border-color: ${props => props.theme.colors.startPage.borderBtnSignIn};
  border-color: currentColor;

  @media ${device.tablet} {
    padding: 16px 18px 16px 50px;

    font-size: 18px;
    line-height: 27px;
  }
`;
export const AuthFormBtnSubmit = styled.button`
  height: 60px;

  color: inherit;

  border-radius: 6px;
  background-color: ${props => props.theme.colors.userForm.bgBtn};
`;
