import styled from 'styled-components';
import { size } from 'components/constants/deviceType/deviceType';

export const AddRecipeHeading = styled.h2`
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
