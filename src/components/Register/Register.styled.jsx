import styled from 'styled-components';
import { device } from 'components/constants/Container/Container.styled';
import { NavLink } from 'react-router-dom';

export const StyledRegSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
`;
export const StyledRegSectionBg = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 490px;

  background-image: url('./images/signPages/bg-bottom-mobile.svg');
  background-size: cover;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    height: 606px;

    background-image: url('./images/signPages/bg-bottom-tablet.svg');
  }

  @media ${device.desktop} {
    height: 325px;

    background-image: url('./images/signPages/bg-bottom-desktop.svg');
  }
`;
export const StyledRegBoxWrap = styled.div`
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
export const StyledRegImg = styled.img`
  width: 285px;
  height: 250px;
  flex-shrink: 0;
  z-index: 1;

  @media ${device.tablet} {
    width: 409px;
    height: 359px;
  }

  @media ${device.desktop} {
    width: 532px;
    height: 469px;
  }
`;
export const StyledRegImgBg = styled.div`
  width: 285px;
  height: 250px;
  flex-shrink: 0;

  background-image: url('./images/signPages/order-food-pana-mobile.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;

  @media ${device.tablet} {
    width: 409px;
    height: 359px;

    background-image: url('./images/signPages/order-food-pana-tablet.png');
  }

  @media ${device.desktop} {
    width: 532px;
    height: 469px;

    background-image: url('./images/signPages/order-food-pana-desktop.png');
  }
`;
export const StyledRegBox = styled.div`
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
export const StyledRegNavLink = styled(NavLink)`
  font-size: 16px;
  line-height: 24px;

  text-decoration-line: underline;

  color: #fafafa;
`;
