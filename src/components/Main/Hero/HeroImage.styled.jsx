import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';

import { NavLink } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';

export const HeroImageWrapper = styled.div`
  top: 322px;
  position: absolute;

  @media ${device.tablet} {
    top: -55px;
    position: relative;
  }

  @media ${device.desktop} {
    left: 73px;
    position: relative;
  }
`;
export const HeroImageDish = styled.picture`
  position: absolute;
  width: 320px;

  @media ${device.tablet} {
    width: 378px;
  }

  @media ${device.desktop} {
    width: 578px;
  }
`;

export const HeroImageArrow = styled.picture`
  width: 146px;
  height: 105px;
  position: absolute;
  display: none;

  @media ${device.tablet} {
    display: block;
    top: 288px;
    left: 145px;
  }

  @media ${device.desktop} {
    display: block;
    width: 160px;
    height: 115px;

    top: 415px;
    left: 410px;
  }
`;

export const HeroImageTextWrapper = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.mainPage.bgPlateTextWrapper};

  border-radius: 8px;
  padding: 8px;

  width: 225px;
  top: 113px;
  left: 88px;

  @media ${device.tablet} {
    width: 260px;
    padding: 12px 12px 15px;

    top: 213px;
    left: 75px;
  }

  @media ${device.desktop} {
    width: 298px;
    padding: 16px 16px 19px;

    top: 336px;
    left: 342px;
  }
`;

export const HeroImageText = styled.p`
  text-align: start;
  color: ${props => props.theme.colors.mainPage.textSecondary};

  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.5;
  letter-spacing: -0.24px;

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 1.3;
    margin-bottom: 7px;
  }
`;

export const HeroImageSpan = styled.span`
  color: ${props => props.theme.colors.mainPage.textAccent};
`;

export const HeroImageLink = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: ${props => props.theme.fontSizes.xxs};
  font-weight: ${props => props.theme.fontWeight.regular};
  line-height: 1.2;
  letter-spacing: 0.2px;

  color: ${props => props.theme.colors.mainPage.textSecondary};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.mainPage.titleLinkCategoryHover};
  }
`;

export const HeroImageIcon = styled(HiOutlineArrowRight)`
  font-size: 12px;
  margin-left: 7px;
`;
