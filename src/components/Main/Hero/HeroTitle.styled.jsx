import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';

export const MainPageTitle = styled.h1`
  text-align: center;

  color: ${props => props.theme.colors.mainPage.generalTitleMain};

  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: 60px;
  line-height: 60px;
  letter-spacing: -0.005em;

  margin-bottom: 14px;

  @media ${device.tablet} {
    margin-bottom: 24px;
    font-size: 72px;
  }

  @media ${device.desktop} {
    margin-bottom: 14px;
    font-size: 100px;
    line-height: 100px;
  }
`;

export const MainPageTitleAccent = styled.span`
  color: ${props => props.theme.colors.mainPage.generalTitleAccent};
`;

export const MainPageText = styled.p`
  max-width: 248px;

  margin-left: auto;
  margin-right: auto;

  text-align: center;
  color: ${props => props.theme.colors.mainPage.textMain};

  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.3;
  letter-spacing: -0.02em;

  & br {
    display: inline;
    content: ' ';
  }

  @media ${device.tablet} {
    max-width: 362px;
    text-align: left;
    padding-left: 4px;
  }

  @media ${device.desktop} {
    max-width: 465px;
    text-align: left;
    padding-left: 7px;
    margin-left: 0;

    font-size: ${props => props.theme.fontSizes.l};
  }
`;
