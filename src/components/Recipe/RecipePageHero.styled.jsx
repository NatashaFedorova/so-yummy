import styled from 'styled-components';
import DefaultBtn from 'components/constants/DefaultBtn/';
import { device } from 'components/constants/deviceType/deviceType';
import clockIcon from './clock.svg';

export const HeroHead = styled.div`
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
  background-position: center center;
  margin-top: -78px;
  position: relative;
  @media ${device.mobile} {
    padding: 164px 36px 32px;

    background-image: url('${process.env
      .PUBLIC_URL}/images/recipeById/recipebg-mobile-1x.webp');
    background-image: image-set(
      url('${process.env.PUBLIC_URL}/images/recipeById/recipebg-mobile-1x.webp')
        type('image/webp'),
      url('${process.env.PUBLIC_URL}/images/recipeById/recipebg-mobile-1x.png')
        type('image/png')
    );
  }
  @media ${device.tablet} {
    padding: 164px 130px 32px;

    background-image: url('${process.env
      .PUBLIC_URL}/images/recipeById/recipebg-tablet-1x.webp');
    background-image: image-set(
      url('${process.env.PUBLIC_URL}/images/recipeById/recipebg-tablet-1x.webp')
        type('image/webp'),
      url('${process.env.PUBLIC_URL}/images/recipeById/recipebg-tablet-1x.png')
        type('image/png')
    );
  }
  @media ${device.desktop} {
    padding: 164px 202px 32px;

    background-image: url('${process.env
      .PUBLIC_URL}/images/recipeById/recipebg-1x.webp');
    background-image: image-set(
      url('${process.env.PUBLIC_URL}/images/recipeById/recipebg-1x.webp')
        type('image/webp'),
      url('${process.env.PUBLIC_URL}/images/recipeById/recipebg-1x.png')
        type('image/png')
    );

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url('${process.env
        .PUBLIC_URL}/images/recipeById/recipebg-2x.webp');

      background-image: image-set(
        url('${process.env.PUBLIC_URL}/images/recipeById/recipebg-2x.webp')
          type('image/webp'),
        url('${process.env.PUBLIC_URL}/images/recipeById/recipebg-2x.png')
          type('image/png')
      );
    }
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
  color: ${props => props.theme.colors.recipePage.text};
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
  color: ${props => props.theme.colors.recipePage.text};
  display: flex;
  flex-wrap: wrap;
  &:before {
    content: url(${clockIcon});
    margin-top: -3px;
    padding-right: 7px;
  }
`;
