import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';
import Container from 'components/constants/Container';

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

  @media ${device.tablet} {
    background-image: url(./images/mainPage/heroBG-tablet.png);
    height: 640px;
    margin-bottom: 72px;
    display: flex;
  }

  @media ${device.desktop} {
    background-image: url(./images/mainPage/heroBG-desc.png);
    height: 800px;
    margin-bottom: 100px;
  }
`;

export const SectionRelative = styled.section`
  position: relative;
`;

export const HeroContainer = styled(Container)`
  padding-top: 132px;

  @media ${device.tablet} {
    display: flex;
    position: relative;
    padding-top: 204px;
  }

  @media ${device.desktop} {
    padding-top: 226px;
  }
`;
