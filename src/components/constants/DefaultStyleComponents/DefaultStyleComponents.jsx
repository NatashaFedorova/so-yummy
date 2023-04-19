// ${props => props.theme.colors.text}
import styled from 'styled-components';
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
    background: url('./images/bg/spinach-big-up-desktop.png');
    background-repeat: no-repeat;
    background-size: auto;
    left: -214px;
    bottom: 176px;
  }
`;
