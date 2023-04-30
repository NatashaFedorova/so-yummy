import {
  BurgerBgImage,
  BurgerLogoDiv,
  BurgerModal,
  BurgerSwitchDiv,
  StyledGrFormClose,
} from './BurgerMenuModal.styled';
import { BurgerNavigation } from '../BurgerNavigation/BurgerNavigation';
import { Logo } from '../Logo/Logo';
import SwitchTheme from 'components/SwitchTheme';

export const BurgerMenuModal = ({ closeBurgerMenuModal, showBurgerMenu }) => {
  return (
    <BurgerModal style={showBurgerMenu ? { top: 0 } : { top: '-120%' }}>
      <BurgerLogoDiv onClick={closeBurgerMenuModal}>
        <Logo />
      </BurgerLogoDiv>
      <BurgerNavigation closeBurgerMenuModal={closeBurgerMenuModal} />
      <StyledGrFormClose onClick={closeBurgerMenuModal} />
      <BurgerSwitchDiv>
        <SwitchTheme />
      </BurgerSwitchDiv>
      <BurgerBgImage />
    </BurgerModal>
  );
};
