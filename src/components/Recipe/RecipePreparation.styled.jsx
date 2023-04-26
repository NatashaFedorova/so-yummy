import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';

export const PrepWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;

  @media ${device.mobile} {
    padding-bottom: 100px;
  }
  @media ${device.tablet} {
    padding-bottom: 200px;
  }
`;

export const PrepInfo = styled.div`
  @media ${device.mobile} {
    width: 100%;
    padding-right: 20px;
  }
  @media ${device.desktop} {
    width: 63%;
    padding-right: 45px;
  }
`;

export const PrepImg = styled.div`
  @media ${device.mobile} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 75%;
  }
  @media ${device.desktop} {
    width: 37%;
  }
`;

export const PrepImgImg = styled.img`
  border-radius: 8px;
`;

export const PrepInfoHead = styled.h2`
  color: ${props => props.theme.colors.recipePage.titleSecondry};
  margin-bottom: ${props => props.theme.fontSizes.xl};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeight.semiBold};
`;

export const PrepInfoWrap = styled.div`
  display: flex;
`;

export const PrepInfoText = styled.p`
  color: ${props => props.theme.colors.welcomePage.iconClock};
  margin-bottom: ${props => props.theme.fontSizes.s};

  @media ${device.mobile} {
    font-size: ${props => props.theme.fontSizes.xs};
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.s};
  }
  @media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const PrepInfoSpan = styled.span`
  padding: 4px 9px 4px 9px;
  border-radius: 50%;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  background-color: ${props => props.theme.colors.recipePage.bgBtnHover};
  color: ${props => props.theme.colors.recipePage.textNumber};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 21px;
  min-height: 21px;
  max-width: 22px;
  max-height: 22px;
  margin-right: 14px;
`;



