import styled from 'styled-components';
import ScrollToTop from 'react-scroll-to-top';
import { GiSolidLeaf } from 'react-icons/gi';
import { device } from 'components/constants/deviceType/deviceType';

export const BtnScrollToTopStyle = styled(ScrollToTop)`
  background-color: transparent;
  box-shadow: none;

  @media ${device.mobile} {
    width: 50px;
    height: 50px;
  }

  @media ${device.tablet} {
    width: 75px;
    height: 75px;
  }

  @media ${device.desktop} {
    width: 100px;
    height: 100px;
  }
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobile} {
    width: 44px;
    height: 44px;
  }

  @media ${device.tablet} {
    width: 70px;
    height: 70px;
  }

  @media ${device.desktop} {
    width: 95px;
    height: 95px;
  }
`;

export const IconLeaf = styled(GiSolidLeaf)`
  color: ${props => props.theme.colors.btnUp.colorLeaf};

  @media ${device.mobile} {
    width: 44px;
    height: 44px;
  }

  @media ${device.tablet} {
    width: 70px;
    height: 70px;
  }

  @media ${device.desktop} {
    width: 95px;
    height: 95px;
  }
`;

export const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.colors.btnUp.text};
  line-height: 1;

  @media ${device.mobile} {
    font-size: 12px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.desktop} {
    font-size: 24px;
  }
`;
