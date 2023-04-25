import { useEffect, useState } from 'react';
import { BurgerMenuModal } from '../BurgerMenuModal/BurgerMenuModal';
import { BurgerMenuDiv, StyledHiOutlineMenuAlt2 } from './BurgerMenu.styled';

export const BurgerMenu = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const closeOnESCBurgerMenuModal = e => {
    if ((e.charCode || e.keyCode) === 27) {
      setShowBurgerMenu(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnESCBurgerMenuModal);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnESCBurgerMenuModal);
    };
  }, []);
  return (
    <>
      <BurgerMenuDiv onClick={() => setShowBurgerMenu(true)}>
        <StyledHiOutlineMenuAlt2 />
      </BurgerMenuDiv>
      {showBurgerMenu && (
        <BurgerMenuModal
          closeBurgerMenuModal={() => setShowBurgerMenu(false)}
        />
      )}
    </>
  );
};
