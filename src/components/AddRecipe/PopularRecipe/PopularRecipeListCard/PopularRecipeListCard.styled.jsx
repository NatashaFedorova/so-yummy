import { size } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const CardWrapper = styled.li`
  display: flex;
  gap: ${props => props.theme.spacing(3)};
  padding-bottom: 13px;
  padding-right: 14px;
  border-bottom: ${props => props.theme.borders.normal};
  border-color: rgba(112, 112, 112, 0.17);

  @media screen and (min-width: ${size.tablet}) {
    gap: 11px;
  }
`;

export const PictureWrapper = styled.div`
  position: relative;

  padding: 0 104px 85px 0;
  overflow: hidden;
  border-radius: 8px;

  & img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  @media screen and (min-width: ${size.tablet}) {
    padding-bottom: 102px;
  }

  @media screen and (min-width: ${size.desktop}) {
    padding-bottom: 97px;
  }
`;

export const PopularRecipeCardContentWrapper = styled.div`
  width: 100%;
`;

export const PopularRecipeCardTitle = styled.h3`
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.addRecipePage.titleSecondary};
  margin-bottom: 3px;
`;

export const PopularRecipeCardDescr = styled.p`
  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.addRecipePage.text};
`;
