import styled from 'styled-components';
// import lightTheme from '../constants/theme/lightTheme';

// import heroBgDesktop from './images/mainPage/heroBG-desc.png';
// import heroBgDesktopWebp from '../../../public/images/mainPage/heroBG-desc-webp.webp';
// import heroBgTabletWebp from '../../../public/images/mainPage/heroBG-tablet-webp.webp';
// import heroBgTablet from '../../../public/images/mainPage/heroBG-tablet.png';
// import heroBgMobile from '../../../public/images/mainPage/heroBG-mobile.png';
// import heroBgMobileWebp from '../../../public/images/mainPage/heroBG-mobile-webp.webp';

export const HeroBackground = styled.div`
  background-image: image-set(
    url(./images/mainPage/heroBG-mobile-webp.webp) type('image/webp'),
    url(./images/mainPage/heroBG-mobile.png) type('image/png')
  );

  background-image: url(./images/mainPage/heroBG-mobile.png);

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  height: 777px;
  margin-bottom: 64px;
  /* padding: 0 16px; */

  @media (min-width: 768px) {
    background-image: url(./images/mainPage/heroBG-tablet.png);
    height: 640px;
    margin-bottom: 72px;
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    background-image: url(./images/mainPage/heroBG-desc.png);
    height: 800px;
    margin-bottom: 100px;
    padding: 0 100px;
  }
`;

export const SectionRelative = styled.section`
  position: relative;
`;
