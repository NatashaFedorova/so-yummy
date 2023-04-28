import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BurgerMenuModal } from '../BurgerMenuModal/BurgerMenuModal';
import { BurgerMenuDiv, StyledHiOutlineMenuAlt2 } from './BurgerMenu.styled';

export const BurgerMenu = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [widthHTML, setWidthHTML] = useState('');

  const path = useLocation().pathname;
  const add = document.querySelector('html');

  const closeOnESCBurgerMenuModal = e => {
    if ((e.charCode || e.keyCode) === 27) {
      setShowBurgerMenu(false);
    }
  };
  useEffect(() => {
    setWidthHTML(add.offsetWidth);
  }, [add.offsetWidth]);

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnESCBurgerMenuModal);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnESCBurgerMenuModal);
    };
  }, []);
  return (
    <>
      <BurgerMenuDiv onClick={() => setShowBurgerMenu(true)}>
        <StyledHiOutlineMenuAlt2
          style={
            path.toString() === '/main' && widthHTML >= 748
              ? { color: '#1E1F28' }
              : { color: '#fafafa' }
          }
        />
      </BurgerMenuDiv>
      {showBurgerMenu && (
        <BurgerMenuModal
          closeBurgerMenuModal={() => setShowBurgerMenu(false)}
        />
      )}
    </>
  );
};
