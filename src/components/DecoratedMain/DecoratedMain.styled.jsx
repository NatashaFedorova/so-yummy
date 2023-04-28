import { device } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

// prettier-ignore
export const DecoreLeafsTop = styled.div`
  position: absolute;
  top: -196px;
  left: -32px;

  width: 256px;
  height: 392px;
  background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-top-mobile-webp.webp');
  background-image: image-set(
    url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-top-mobile-webp.webp')
      type('image/webp'),
    url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-top-mobile.png')
      type('image/png')
  );
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotateZ(149deg);
  pointer-events: none;
  filter: blur(4.5px);

  @media ${device.tablet} {
    top: -343px;
    left: -68px;

    width: 423px;
    height: 646px;
    filter: none;
    background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-top-tablet-webp.webp');
    background-image: image-set(
      url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-top-tablet-webp.webp')
        type('image/webp'),
      url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-top-tablet.png')
        type('image/png')
    );
  }
  @media ${device.desktop} {
    top: -426px;
    left: -50px;

    width: 588px;
    height: 852px;
    background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-top-desktop-webp.webp');
    background-image: image-set(
      url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-top-desktop-webp.webp')
        type('image/webp'),
      url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-top-desktop.png')
        type('image/png')
    );
  }
`;

// prettier-ignore
export const DecoreLeafsBottom = styled.div`
  position: absolute;
  bottom: -52px;
  right: -18px;

  width: 160px;
  height: 172px;
  background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-bottom-mobile-webp.webp');
  background-image: image-set(
    url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-bottom-mobile-webp.webp')
      type('image/webp'),
    url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-bottom-mobile.png')
      type('image/png')
  );
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotateZ(-24deg);
  pointer-events: none;
  filter: blur(4.5px);

  @media ${device.tablet} {
    bottom: -92px;
    right: -7px;

    width: 290px;
    height: 313px;
    background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-bottom-tablet-webp.webp');
    background-image: image-set(
      url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-bottom-tablet-webp.webp')
        type('image/webp'),
      url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-bottom-tablet.png')
        type('image/png')
    );
    filter: none;
  }

  @media ${device.desktop} {
    bottom: -161px;
    right: 7px;

    width: 438px;
    height: 474px;
    background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-bottom-desktop-webp.webp');
    background-image: image-set(
      url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-bottom-desktop-webp.webp')
        type('image/webp'),
      url('${process.env.PUBLIC_URL}/images/decoratedMain/leafs-bottom-desktop.png')
        type('image/png')
    );
  }
`;
