import styled from 'styled-components';
import {
  AvatarArea,
  // CustomUserAvatar
} from '../UserLogo/UserLogo.styled';
import { AiFillPlusCircle } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { RxPerson } from 'react-icons/rx';
import { HiOutlinePencil } from 'react-icons/hi';

import DefaultBtn from 'components/constants/DefaultBtn';
import { device } from 'components/constants/deviceType/deviceType';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 20%;

  position: fixed;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

export const Modal = styled.div`
  z-index: 100;
  display: flex;
  background: ${props => props.theme.colors.modal.bg} !important;
  position: relative;
  border-radius: 30px;
  width: 330px;
  height: 329px;

  padding: 32px 24px;
  flex-direction: column;
  align-items: center;
  @media${device.tablet} {
    width: 480px;
    height: 402px;
    padding: 50px 40px;
  }
  @media${device.desktop} {
    width: 500px;
    height: 425px;
    padding: 60px 50px;
  }
`;

export const ConfigAvatarArea = styled(AvatarArea)`
  width: 88px;
  height: 88px;
  position: relative;
  margin-bottom: 54px;

  @media${device.tablet} {
    width: 103px;
    height: 103px;
    margin-bottom: 50px;
  }
`;

export const LeftInputDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledAiFillPlusCircle = styled(AiFillPlusCircle)`
  position: absolute;
  top: 75px;
  left: 185px;
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.modal.iconPersonPhotoUser};
  cursor: pointer;
  &:hover {
    color: ${props =>
      props.theme.colors.modal.iconPersonPhotoUserHover} !important;
  }
  @media${device.tablet} {
    left: 265px;
    top: 130px;
  }
  @media${device.desktop} {
    top: 150px;
    left: 270px;
  }
`;

export const ChangeImageInput = styled.input`
  display: none;
`;

export const ConfigNameLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 282px;
  max-height: 60px;
  margin-bottom: 32px;
  padding: 20px 22px;
  border: 1px solid ${props => props.theme.colors.modal.border};
  border-radius: 6px;
  color: ${props => props.theme.colors.modal.border};
  &:hover {
    color: ${props => props.theme.colors.modal.borderHover} !important;
    border: 1px solid ${props => props.theme.colors.modal.borderHover} !important;
  }

  @media${device.tablet} {
    width: 400px;
  }
`;

export const ConfigNameInput = styled.input`
  width: 100%;
  border: none;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;

  color: ${props => props.theme.colors.modal.border};
  &:hover {
    color: ${props => props.theme.colors.modal.borderHover} !important;
  }
  @media${device.tablet} {
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.02em;
  }
`;

export const SendChangeBTN = styled(DefaultBtn)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 282px;
  height: 60px;
  background-color: #8baa36;
  border-radius: 6px;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;

  &:hover {
    color: black !important;
  }
  @media${device.tablet} {
    width: 400px;

    font-size: 16px;
  }
`;

export const StyledGrFormClose = styled(GrFormClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
   & path {
    stroke: ${props => props.theme.colors.modal.iconClose} ;
    &:hover {
      stroke: ${props =>
        props.theme.colors.burgerMenu.iconCloseHover} !important;
    }
`;

export const StyledRxPerson = styled(RxPerson)`
  margin-right: 12px;
  @media${device.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const StyledHiOutlinePencil = styled(HiOutlinePencil)`
  @media${device.tablet} {
    width: 24px;
    height: 24px;
  }
`;
