import { size } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const PopularRecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: ${size.tablet}) {
    gap: 40px;
  }

  @media screen and (min-width: ${size.desktop}) {
    width: 320px;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
`;

export const ErrorHeading = styled.h3`
  font-size: ${props => props.theme.fontSizes.xхl};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.addRecipePage.title};

  @media screen and (min-width: ${size.tablet}) {
    font-size: ${props => props.theme.fontSizes.sectionTitleTablet};
  }

  @media screen and (min-width: ${size.desktop}) {
    font-size: ${props => props.theme.fontSizes.xxxl};
  }
`;
