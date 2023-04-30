import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BurgerMenuModal } from '../BurgerMenuModal/BurgerMenuModal';
import { BurgerMenuDiv, StyledHiOutlineMenuAlt2 } from './BurgerMenu.styled';

export const BurgerMenu = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [widthHTML, setWidthHTML] = useState('');

  const path = useLocation().pathname;

  const closeOnESCBurgerMenuModal = e => {
    if ((e.charCode || e.keyCode) === 27) {
      setShowBurgerMenu(false);
    }
  };

  useEffect(() => {
    function handleResize() {
      setWidthHTML(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWidthHTML]);

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
            (path.toString().includes('/main') &&
              widthHTML >= 768 &&
              widthHTML <= 1250) ||
            path.toString().includes('/recipe')
              ? { color: `#1E1F28` }
              : {}
          }
        />
      </BurgerMenuDiv>
      <BurgerMenuModal
        closeBurgerMenuModal={() => setShowBurgerMenu(false)}
        showBurgerMenu={showBurgerMenu}
      />
    </>
  );
};
