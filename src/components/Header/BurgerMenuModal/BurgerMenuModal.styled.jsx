import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import { DecoreLeafsTop } from 'components/DecoratedMain/DecoratedMain.styled';
import { device } from 'components/constants/deviceType/deviceType';

export const BurgerModal = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: -120%;
  left: 0;
  z-index: 1040;
  transition: top 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: ${props => props.theme.colors.burgerMenu.bg};
  flex-direction: column;
  align-items: center;
  padding-top: 180px;
  padding-bottom: 190px;
  justify-content: center;
`;

export const StyledGrFormClose = styled(GrFormClose)`
  position: absolute;
  top: 20px;
  right: 32px;
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

  @media ${device.tablet} {
    width: 558px;
    height: 852px;

    left: 630px;
    top: 190px;

    filter: blur(4.5px);
    transform: rotate(118deg);
  }
`;
