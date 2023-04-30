// import styled from 'styled-components';
import styled, { keyframes } from 'styled-components';

import { device } from 'components/constants/deviceType/deviceType';

const urlDots2Mobile = `${process.env.PUBLIC_URL}/images/decoratedMain/dot-2-mobile.svg`;
const urlDots2DarkMobile = `${process.env.PUBLIC_URL}/images/decoratedMain/dot-2-dark-mobile.svg`;
const urlDots2 = `${process.env.PUBLIC_URL}/images/decoratedMain/dot-2.svg`;
const urlDots2Dark = `${process.env.PUBLIC_URL}/images/decoratedMain/dot-2-dark.svg`;

export const MainTitleWrap = styled.div`
  padding: 50px 0px 72px;

  background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/dot-1.svg'), url(${urlDots2Mobile}), url('${process.env.PUBLIC_URL}/images/decoratedMain/dot-3.svg');
  background-repeat: no-repeat;
  background-size: 8px, 6px, 8px;
  background-position: top 12px left 104px, top 77px left 231px, top 44px left 333px;

  @media ${device.tablet} { 
    padding: 72px 0px 100px;

    background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/dot-1.svg'), url(${urlDots2}), url('${process.env.PUBLIC_URL}/images/decoratedMain/dot-3.svg');
    background-size: 14px, 12px, 14px;
    background-position: top 21px left 187px, top 91px left 405px, top 34px right 0px;
  }
  @media ${device.desktop} {
    padding: 100px 0px;

    background-position: top 53px left 228px, top 136px left 707px, top 66px left 1150px;
  }
  `;
export const MainTitleWrapDark = styled(MainTitleWrap)`
  background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/dot-1.svg'), url(${urlDots2DarkMobile}), url('${process.env.PUBLIC_URL}/images/decoratedMain/dot-3.svg');

  @media ${device.tablet} {
    background-image: url('${process.env.PUBLIC_URL}/images/decoratedMain/dot-1.svg'), url(${urlDots2Dark}), url('${process.env.PUBLIC_URL}/images/decoratedMain/dot-3.svg');
  }
`;
export const MainTitleH1 = styled.h1`
  color: ${props => props.theme.colors.favoritePage.title};
  
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  @media ${device.tablet} {font-size: 32px;}
  @media ${device.desktop} {font-size: 44px;}
`;

// 
export const CategoryText = styled.span`
  font-style: normal;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  line-height: 28px;
  color: ${props => props.theme.colors.categoriesPage.title};

  letter-spacing: -0.02em;
  font-feature-settings: 'liga';
  font-family: 'Poppins';
  font-size: ${props => props.theme.fontSizes.xxl};
  position: relative;
  display: inline-block;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }

  @media (min-width: 1440px) {
    font-size: ${props => props.theme.fontSizes.xxxl};
    line-height: 44px;
  }
`;

const animate = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimatedLetter = styled.span`
  display: inline-block;
  min-width: 7px;
  animation: ${animate} 1.5s ease-in-out;
  animation-fill-mode: forwards;
  opacity: 0;

  animation-delay: ${({ index }) => `${0.1 * index}s`};
`;