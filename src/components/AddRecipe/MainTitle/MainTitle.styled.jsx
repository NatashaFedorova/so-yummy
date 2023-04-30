import styled, { keyframes } from 'styled-components';
import { size } from 'components/constants/deviceType/deviceType';

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

export const AnimatedText = styled.span`
  display: inline-block;
  animation: ${animate} 1.5s ease-in-out;
  animation-fill-mode: forwards;
  opacity: 0;

  animation-delay: 0.1s;
`;
