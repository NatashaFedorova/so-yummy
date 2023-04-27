import styled from 'styled-components';
import DefaultBtn from 'components/constants/DefaultBtn';
import { GrFormClose } from 'react-icons/gr';
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
  color: ${props => props.theme.colors.modal.textForm} !important;
  position: relative;
  border-radius: 30px;
  width: 90%;
  padding: 44px 24px;

  flex-direction: column;
  align-items: center;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: center;

  @media ${device.mobile} {
    width: 330px;
    padding: 44px 24px;
  }

  @media ${device.tablet} {
    padding: 50px 40px;
    width: 480px;
    font-size: 18px;
    line-height: 24px;
  }

  @media ${device.tablet} {
    width: 500px;
  }
`;

export const ButtonSet = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.mobile} {
    flex-wrap: nowrap;
  }
  @media ${device.tablet} {
    flex-wrap: nowrap;
    margin-top: 32px;
  }
`;

export const AgreedBTN = styled(DefaultBtn)`
  width: 137px;
  height: 50px;
  background-color: ${props => props.theme.colors.modal.bgBtn} !important;
  border-radius: 6px;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: center;

  &:hover {
    background-color: ${props =>
      props.theme.colors.modal.bgBtnHover} !important;
  }
  @media ${device.tablet} {
    height: 60px;
    width: 190px;
  }
`;

export const CancelBTN = styled(AgreedBTN)`
  color: ${props => props.theme.colors.modal.textBtnCancel} !important;
  background-color: ${props => props.theme.colors.modal.bgBtnCancel} !important;

  &:hover {
    color: ${props => props.theme.colors.modal.textBtnCancelHover} !important;
    background-color: ${props =>
      props.theme.colors.modal.bgBtnHover} !important;
    border: 1px solid ${props => props.theme.colors.modal.bg} !important;
  }
`;

export const StyledGrFormClose = styled(GrFormClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  & path {
    stroke: ${props => props.theme.colors.modal.iconClose} !important;
    &:hover {
      stroke: ${props =>
        props.theme.colors.burgerMenu.iconCloseHover} !important;
    }
  }
  @media${device.tablet} {
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
  }
`;
