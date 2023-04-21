import styled from 'styled-components';
import { AvatarArea, CustomUserAvatar } from '../UserLogo/UserLogo.styled';
import { AiFillPlusCircle } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { RxPerson } from 'react-icons/rx';

import DefaultBtn from 'components/constants/DefaultBtn';

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
  background: white;
  position: relative;
  border-radius: 30px;
  width: 500px;
  height: 425px;
  padding: 60px 50px;
  flex-direction: column;
  align-items: center;
`;

export const ConfigAvatarUser = styled(CustomUserAvatar)`
  width: 47px;
  height: 47px;
`;

export const ConfigAvatarArea = styled(AvatarArea)`
  width: 103px;
  height: 103px;
  position: relative;
  margin-bottom: 52px;
`;

export const StyledAiFillPlusCircle = styled(AiFillPlusCircle)`
  position: absolute;
  bottom: -7px;
  right: 14px;
  width: 24px;
  height: 24px;
  color: #8baa36;
  cursor: pointer;
`;

export const ConfigNameLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 400px;
  max-height: 60px;
  margin-bottom: 32px;
  padding: 20px 22px;
  border: 1px solid #23262a;
  border-radius: 6px;
  & input {
    border: none;
  }
`;

export const SendChangeBTN = styled(DefaultBtn)`
  width: 400px;
  height: 60px;
  background-color: #8baa36;
  border-radius: 6px;
  &:hover {
    color: black;
  }
`;

export const StyledGrFormClose = styled(GrFormClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const StyledRxPerson = styled(RxPerson)`
  margin-right: 12px;
`;
