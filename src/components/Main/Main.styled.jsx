import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';
import Container from 'components/constants/Container';

// prettier-ignore
export const HeroBackground = styled.div`
  position: relative;
  top: -58px;
  left: 0;
  background-image: url('${process.env.PUBLIC_URL}/images/mainPage/heroBG-mobile-webp.webp');
  background-image: image-set(
    url('${process.env.PUBLIC_URL}/images/mainPage/heroBG-mobile-webp.webp')
      type('image/webp'),
    url('${process.env.PUBLIC_URL}/images/mainPage/heroBG-mobile.png')
      type('image/png')
  );
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: 777px;
  margin-bottom: 6px;

  @media ${device.tablet} {
    top: -62px;
    background-image: url('${process.env.PUBLIC_URL}/images/mainPage/heroBG-tablet-webp.webp');
    background-image: image-set(
      url('${process.env.PUBLIC_URL}/images/mainPage/heroBG-tablet-webp.webp')
        type('image/webp'),
      url('${process.env.PUBLIC_URL}/images/mainPage/heroBG-tablet.png')
        type('image/png')
    );
    height: 640px;
    margin-bottom: 10px;
    display: flex;
  }

  @media ${device.desktop} {
    background-image: url('${process.env.PUBLIC_URL}/images/mainPage/heroBG-desc-webp.webp');
    background-image: image-set(
      url('${process.env.PUBLIC_URL}/images/mainPage/heroBG-desc-webp.webp')
        type('image/webp'),
      url('${process.env.PUBLIC_URL}/images/mainPage/heroBG-desc.png')
        type('image/png')
    );

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url('${process.env.PUBLIC_URL}/images/mainPage/heroBG2xWebp.webp');

      background-image: image-set(
        url('${process.env.PUBLIC_URL}/images/mainPage/heroBG2xWebp.webp')
          type('image/webp'),
        url('${process.env.PUBLIC_URL}/images/mainPage/heroBG2x.png')
          type('image/png')
      );
    }

    height: 800px;
    margin-bottom: 38px;
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
