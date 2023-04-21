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
  background: white;
  position: relative;
  border-radius: 30px;
  width: 480px;
  padding: 50px 40px;
  flex-direction: column;
  align-items: center;

  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;

  @media${device.tablet} {
    width: 500px;
  }
`;

export const ButtonSet = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

export const AgreedBTN = styled(DefaultBtn)`
  width: 190px;
  height: 60px;
  background-color: #8baa36;
  border-radius: 6px;

  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: center;

  &:hover {
    background-color: black;
  }
`;

export const CancelBTN = styled(AgreedBTN)`
  color: black;
  background-color: #d9d9d9;

  &:hover {
    background-color: white;
    border: 1px solid black;
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
