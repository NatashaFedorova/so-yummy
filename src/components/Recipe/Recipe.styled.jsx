import styled from 'styled-components';
import DefaultBtn from 'components/constants/DefaultBtn/';
import { device } from 'components/constants/deviceType/deviceType';

export const HeroHead = styled.div`
  background-image: url('${process.env.PUBLIC_URL}/images/recipeById/recipebg.png');
  background-size: cover;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -78px;

  @media ${device.mobile} {
    padding: 164px 36px 32px;
  }
  @media ${device.tablet} {
    padding: 164px 130px 32px;
  }
  @media ${device.desktop} {
    padding: 164px 202px 32px;
  }
`;

export const HeroTitle = styled.h1`
  color: ${props => props.theme.colors.recipePage.title};
  margin-bottom: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeight.semiBold};

  @media ${device.mobile} {
    font-size: ${props => props.theme.fontSizes.xl};
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.xxxl};
  }
  @media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.xxxl};
  }
`;

export const HeroInfo = styled.p`
  color: ${props => props.theme.colors.welcomePage.iconClock};
  margin-bottom: ${props => props.theme.fontSizes.xl};

  @media ${device.mobile} {
    font-size: ${props => props.theme.fontSizes.xs};
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.l};
  }
  @media ${device.desktop} {
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const HeroBtn = styled(DefaultBtn)`
  background-color: ${props => props.theme.colors.recipePage.bgBtn};
  color: ${props => props.theme.colors.recipePage.iconClock};
  margin-bottom: 70px;

  &:hover {
    color: ${props => props.theme.colors.recipePage.textBtnHover};
    background-color: ${props => props.theme.colors.recipePage.bgBtnHover};
  }
  @media ${device.mobile} {
    border: 1px solid;
    font-size: ${props => props.theme.fontSizes.xs};
    border-color: ${props => props.theme.colors.recipePage.borderBtn};
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.m};
    border: 2px solid;
    border-color: ${props => props.theme.colors.recipePage.borderBtn};
  }
  @media ${device.desktop} {
    border: 2px solid;
    font-size: ${props => props.theme.fontSizes.l};
    border-color: ${props => props.theme.colors.recipePage.borderBtn};
  }
`;

export const HeroP = styled.p`
  display: flex;
  flex-wrap: wrap;
  &:before {
    content: url('../images/recipebyId/clock.svg');
    margin-top: -3px;
    padding-right: 7px;
  }
`;

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
