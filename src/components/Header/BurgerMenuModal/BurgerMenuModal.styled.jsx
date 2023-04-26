import styled from '@emotion/styled';
import { GrFormClose } from 'react-icons/gr';
import { DecoreLeafsTop } from 'components/DecoratedMain/DecoratedMain.styled';
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

  position: fixed;
  left: 0;
  z-index: 1050;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

export const BurgerModal = styled.div`
   z-index: 100;
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #ebf3d4;
  flex-direction: column;
  align-items: center;
padding-top: 180px;
    padding-bottom: 190px;
    justify-content: center;
}


`;

export const StyledGrFormClose = styled(GrFormClose)`
  position: absolute;
  top: 20px;
  right: 32px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const BurgerLogoDiv = styled.div`
  position: absolute;
  top: 20px;
  left: 32px;
`;

export const BurgerSwitchDiv = styled.div`
  position: absolute;
  bottom: 18px;
  left: 16px;
`;

export const BurgerBgImage = styled(DecoreLeafsTop)`
  position: absolute;
  width: 360px;
  height: 550px;

  left: 275px;
  top: 212px;

  filter: blur(4.5px);
  transform: rotate(83deg);
  @media${device.tablet} {
    width: 558px;
    height: 852px;

    left: 630px;
    top: 190px;

    filter: blur(4.5px);
    transform: rotate(118deg);
  }
`;
