import styled, { keyframes } from 'styled-components';
import {
  DefaultSquare,
  DefaultSquareСircle,
} from '../../components/constants/DefaultStyleComponents/DefaultStyleComponents';

export const CategoryDefaultSquare = styled(DefaultSquare)`
  position: absolute;
  left: 104px;
  top: -26px;

  @media (min-width: 768px) {
    left: 187px;
    top: -32px;
  }

  @media (min-width: 1200px) {
    left: 239px;
    top: -29px;
  }
`;

export const CategoryDefaultSquareСircle = styled(DefaultSquareСircle)`
  position: absolute;
  left: 247px;
  bottom: 0px;

  @media (min-width: 768px) {
    left: 405px;
    bottom: 0px;
  }

  @media (min-width: 1200px) {
    left: 707px;
    bottom: 0px;
  }
`;

export const CategoryDefaultSquareSecond = styled(DefaultSquare)`
  position: absolute;
  right: -333px;
  top: -16px;

  @media (min-width: 768px) {
    right: -520px;
    top: -19px;
  }

  @media (min-width: 1200px) {
    right: -911px;
    top: -16px;
  }
`;

export const MyTabPanel = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  margin-bottom: 200px;
  gap: 28px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 100px;
  }
`;

export const CategoryContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 83px;
  margin-top: 100px;
`;

export const CategoryText = styled.span`
  font-style: normal;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  line-height: 44px;
  color: ${props => props.theme.colors.categoriesPage.title};

  letter-spacing: -0.02em;
  font-feature-settings: 'liga';
  font-family: 'Poppins';
  font-size: ${props => props.theme.fontSizes.xxxl};
  position: relative;
  display: inline-block;
  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1200px) {
    font-size: ${props => props.theme.fontSizes.xxl};
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
  animation: ${animate} 1.5s ease-in-out;
  animation-fill-mode: forwards;
  opacity: 0;

  animation-delay: ${({ index }) => `${0.1 * index}s`};
`;
