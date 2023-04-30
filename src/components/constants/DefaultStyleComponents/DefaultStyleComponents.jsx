// ${props => props.theme.colors.text}
import styled from 'styled-components';
import { RiCloseLine } from 'react-icons/ri';
import { device } from '../deviceType/deviceType';

export const DefaultSquare = styled.div`
  background: ${props => props.theme.colors.decoreElements.accent};
  border-radius: ${props => props.theme.radii.decore};
  transform: rotate(-25deg);

  @media ${device.mobile} {
    width: 8px;
    height: 8px;
  }

  @media ${device.tablet} {
    width: 14px;
    height: 14px;
  }
`;

export const DefaultSquareСircle = styled.div`
  background: ${props => props.theme.colors.decoreElements.main};

  @media ${device.mobile} {
    border-radius: ${props => props.theme.radii.circle};
    width: 6px;
    height: 6px;
  }

  @media ${device.tablet} {
    border-radius: ${props => props.theme.radii.decore};
    transform: rotate(-25deg);
    width: 12px;
    height: 12px;
  }
`;

export const DecoreBoxForBg = styled.div`
  position: relative;
  margin: 0 auto;

  @media ${device.mobile} {
    width: 375px;
  }
  @media ${device.tablet} {
    width: 768px;
  }
  @media ${device.desktop} {
    width: 1440px;
  }
`;

export const DefaultSectionTitle = styled.h2`
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  @media ${device.mobile} {
    font-weight: ${props => props.theme.fontWeight.semiBold};
    font-size: ${props => props.theme.fontSizes.xxl};
  }

  @media ${device.tablet} {
    font-weight: ${props => props.theme.fontWeight.semiBold};
    font-size: ${props => props.theme.fontSizes.sectionTitleTablet};
  }

  @media ${device.desktop} {
    font-weight: ${props => props.theme.fontWeight.semiBold};
    font-size: ${props => props.theme.fontSizes.xxxl};
  }
`;

export const BoxWithPicture = styled.div`
  position: absolute;
  transform: rotate(356deg);
  filter: blur(4.5px);

  @media ${device.desktop} {
    width: 558px;
    height: 852px;
    background: url('${process.env
      .PUBLIC_URL}/images/bg/spinach-big-up-desktop.png');
    background-repeat: no-repeat;
    background-size: auto;
    left: -214px;
    bottom: 176px;
  }
`;

export const MotivationCardThumbDefault = styled.div`
  z-index: 100;
  position: relative;
  display: block;
  border-radius: 30px;
  background-size: contain;

  @media ${device.mobile} {
    width: 300px;
    height: 300px;
  }

  @media ${device.tablet} {
    width: 400px;
    height: 400px;
  }

  @media ${device.desktop} {
    width: 500px;
    height: 500px;
  }
`;

export const MotivationCardTextDefault = styled.p`
  z-index: 11;
  position: absolute;
  color: ${props => props.theme.colors.achivement.text};
  font-weight: 600;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 1.2;
  }

  @media ${device.tablet} {
    font-size: 28px;
    line-height: 1.07;
  }
`;

export const MotivationCardAccentTextDefault = styled.span`
  color: ${props => props.theme.colors.achivement.accent};
  font-weight: 600;
  letter-spacing: -0.02em;
  text-align: center;
  font-feature-settings: 'liga' off;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 1.2;
  }

  @media ${device.tablet} {
    font-size: 28px;
    line-height: 1.07;
  }
`;

export const MotivationCardBtnCloseDefault = styled.button`
  cursor: pointer;
  z-index: 111;
  position: absolute;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.achivement.accent};

  @media ${device.mobile} {
    left: 130px;
    bottom: 30px;
    width: 40px;
    height: 40px;
  }

  @media ${device.tablet} {
    left: 176px;
    bottom: 38px;
    width: 48px;
    height: 48px;
  }

  @media ${device.desktop} {
    left: 226px;
    bottom: 54px;
  }
`;

export const MotivationCardIconClose = styled(RiCloseLine)`
  color: ${props => props.theme.colors.achivement.colorIconBtnClose};

  @media ${device.mobile} {
    left: 130px;
    bottom: 30px;
    width: 24px;
    height: 24px;
  }

  @media ${device.tablet} {
    left: 176px;
    bottom: 38px;
    width: 28px;
    height: 28px;
  }

  @media ${device.desktop} {
    left: 226px;
    bottom: 54px;
  }
`;
