import styled from 'styled-components';
import { HiOutlineMail } from 'react-icons/hi';
import { device } from 'components/constants/deviceType/deviceType';
import DefaultBtn from 'components/constants/DefaultBtn';

export const SubcribeFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  color: ${props => props.theme.colors.userForm.textForm};

  @media ${device.tablet} {
    flex-direction: row;
    gap: 12px;
    padding-left: 128px;
    padding-top: 72px;
  }
  @media ${device.desktop} {
    width: 340px;
    gap: 0;
    flex-direction: column;
    padding: 0;
  }
`;
export const SubscriptionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;

  display: none;

  @media ${device.desktop} {
    display: block;
    margin-bottom: 14px;
  }
`;

export const SubscriptionInfo = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;

  display: none;
  margin-bottom: 0;

  @media ${device.desktop} {
    display: block;
    margin-bottom: 28px;
  }
`;
export const SubscriptionLabel = styled.label`
  display: flex;
  padding: 14px;
  border: 1px solid ${props => props.theme.colors.userForm.input};
  border-radius: 6px;
  align-items: center;
  width: 204px;
  height: 38px;
  &:hover {
    border-color: ${props => props.theme.colors.userForm.inputHover} !important;
    color: ${props => props.theme.colors.userForm.inputHover} !important;
  }
  margin-bottom: 16px;
  @media ${device.tablet} {
    width: 260px;
    height: 50px;
  }
  @media ${device.desktop} {
    padding-top: 17px;
    padding-bottom: 17px;
    width: 340px;
    height: 60px;
  }
`;
export const SubscriptionInput = styled.input`
  width: 100%;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.02em;
  text-align: left;
  border: ${props => props.theme.colors.userForm.input};
  padding: 0;
  color: ${props => props.theme.colors.userForm.textForm};

  &::placeholder {
    color: ${props => props.theme.colors.userForm.placeholder};
  }

  &:hover {
    border: ${props => props.theme.colors.userForm.inputHover};
  }
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 21px;
  }

  @media ${device.desktop} {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.02em;
  }
`;
export const SubscriptionButton = styled(DefaultBtn)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 204px;
  height: 38px;
  background: ${props => props.theme.colors.userForm.bgBtn};
  color: ${props => props.theme.colors.userForm.placeholder};
  border-radius: 6px;
  cursor: pointer;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: center;

  &:hover {
    color: ${props => props.theme.colors.userForm.textBtnHover} !important;
    background: ${props => props.theme.colors.userForm.bgBtn} !important ;
  }

  @media ${device.tablet} {
    width: 170px;
    height: 50px;
    font-size: 16px;
    line-height: 18px;
  }
  @media ${device.desktop} {
    width: 340px;
    height: 60px;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const StyledHiOutlineMail = styled(HiOutlineMail)`
  width: 23px;
  height: 21px;

  margin-right: 12px;

  @media ${device.tablet} {
    width: 28px;
    height: 26px;
  }
`;

export const ErrorMailMassege = styled.p`
  color: ${props => props.theme.colors.errorState};
`;
