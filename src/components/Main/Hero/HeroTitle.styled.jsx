import styled from 'styled-components';

import { device, size } from 'components/constants/deviceType/deviceType';

export const MainPageTitle = styled.h1`
  text-align: center;

  color: ${props => props.theme.colors.mainPage.generalTitleMain};

  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: 60px;
  line-height: 60px;
  letter-spacing: -0.005em;

  margin-bottom: 14px;
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
`;
