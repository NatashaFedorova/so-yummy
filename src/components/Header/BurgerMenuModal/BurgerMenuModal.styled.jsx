import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import { DecoreLeafsTop } from 'components/DecoratedMain/DecoratedMain.styled';
import { device } from 'components/constants/deviceType/deviceType';

export const BurgerModal = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: -120%;
  z-index: 1040;
  transition: right 250ms cubic-bezier(0.4, 0, 0.2, 1);

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

  left: 198px;
  top: unset;
  bottom: -152px;

  filter: none;
  transform: rotateZ(88deg);

  @media ${device.tablet} {
    width: 558px;
    height: 852px;

    left: unset;
    right: -226px;
    top: unset;
    bottom: -295px;

    transform: rotateZ(88deg);
  }
`;
