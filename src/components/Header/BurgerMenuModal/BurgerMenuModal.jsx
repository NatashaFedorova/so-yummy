import {
  BurgerLogoDiv,
  BurgerModal,
  StyledGrFormClose,
} from './BurgerMenuModal.styled';
import { BurgerNavigation } from '../BurgerNavigation/BurgerNavigation';
import { Logo } from '../Logo/Logo';

export const BurgerMenuModal = ({ closeBurgerMenuModal }) => {
  return (
    <BurgerModal>
      <BurgerLogoDiv onClick={closeBurgerMenuModal}>
        <Logo />
      </BurgerLogoDiv>
      <BurgerNavigation closeBurgerMenuModal={closeBurgerMenuModal} />
      <StyledGrFormClose onClick={closeBurgerMenuModal} />
    </BurgerModal>
  );
};
