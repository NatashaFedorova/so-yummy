import styled from 'styled-components';
import { device, size } from 'components/constants/deviceType/deviceType';

import { NavLink } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';

export const HeroImageWrapper = styled.div`
  margin-top: 44px;
  position: relative;
`;
export const HeroImageDish = styled.img`
  position: absolute;
  width: 320px;
`;

export const HeroImageArrow = styled.img`
  width: 130px;
  position: absolute;
  display: none;
`;

export const HeroImageTextWrapper = styled.div`
  position: absolute;
  background-color: ${props =>
    props.theme.colors.mainPage.textOtherCategoriesHover};

  border-radius: 8px;
  padding: 8px;
  /* margin-bottom: 115px; */

  width: 225px;
  top: 113px;
  left: 88px;
`;

export const HeroImageText = styled.p`
  text-align: start;
  color: ${props => props.theme.colors.mainPage.textSecondary};

  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.5;
  letter-spacing: -0.24px;
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
`;

export const HeroImageIcon = styled(HiOutlineArrowRight)`
  font-size: 12px;
  margin-left: 7px;
`;
