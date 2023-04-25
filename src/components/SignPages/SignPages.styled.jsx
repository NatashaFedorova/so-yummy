import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'components/constants/deviceType/deviceType';

export const size = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
};
export const SignSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
`;
export const SignSectionBg = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 490px;

  background-image: url('${process.env.PUBLIC_URL}/images/signPages/bg-bottom-mobile.svg');
  background-size: cover;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    height: 606px;

    background-image: url('${process.env.PUBLIC_URL}/images/signPages/bg-bottom-tablet.svg');
  }

  @media ${device.desktop} {
    height: 325px;

    background-image: url('${process.env.PUBLIC_URL}/images/signPages/bg-bottom-desktop.svg');
  }
`;
export const SignContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  @media ${device.mobile} {
    width: ${size.mobile};
  }

  @media ${device.tablet} {
    width: ${size.tablet};
    padding: 0 134px;
  }

  @media ${device.desktop} {
    width: ${size.desktop};
  }
`;
export const SignBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.desktop} {
    // align-items: flex-start;
    flex-direction: row;
    gap: 114px;
  }
`;
export const SignBgImg = styled.div`
  width: 285px;
  height: 250px;
  flex-shrink: 0;

  // background-image: url('${process.env.PUBLIC_URL}/images/welcomePage/bg1.webp');

  background-image: url('${process.env.PUBLIC_URL}/images/signPages/order-food-pana-mobile.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;

  @media ${device.tablet} {
    width: 409px;
    height: 359px;

    background-image: url('${process.env.PUBLIC_URL}/images/signPages/order-food-pana-tablet.png');
  }

  @media ${device.desktop} {
    width: 532px;
    height: 469px;

    background-image: url('${process.env.PUBLIC_URL}/images/signPages/order-food-pana-desktop.png');
  }
`;
export const SignBox = styled.div`
  position: relative;
  bottom: 32px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 18px;
  flex-shrink: 0;
  width: 335px;
  z-index: 1;

  @media ${device.tablet} {
    bottom: 11px;
    width: 500px;
  }
  @media ${device.desktop} {
    bottom: -32px;
  }
`;
export const SignNavLink = styled(NavLink)`
  font-size: 16px;
  line-height: 24px;

  text-decoration-line: underline;

  color: #fafafa;
`;