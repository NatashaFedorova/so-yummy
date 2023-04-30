import styled from 'styled-components';
import { size } from 'components/constants/deviceType/deviceType';
import {
  DefaultSquare,
  DefaultSquareСircle,
} from 'components/constants/DefaultStyleComponents/DefaultStyleComponents';

export const AddRecipeSection = styled.section`
  padding: 50px 0 100px 0;

  font-family: 'Poppins', sans-serif;
  background-color: inherit;

  @media screen and (min-width: ${size.tablet}) {
    padding: 72px 0 200px 0;
  }

  @media screen and (min-width: ${size.desktop}) {
    padding: 100px 0 200px 0;
  }
`;

export const InternalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 72px;
  flex: 1 0 auto;

  position: relative;

  @media screen and (max-width: ${size.tablet - 1}) {
    align-items: center;
  }

  @media screen and (min-width: ${size.tablet}) {
    gap: 100px;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 72px;

  @media screen and (min-width: ${size.tablet}) {
    gap: 100px;
  }

  @media screen and (min-width: ${size.desktop}) {
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    gap: 121px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const Square = styled(DefaultSquare)`
  position: absolute;
  left: 104px;
  top: -26px;

  @media (min-width: 768px) {
    left: 187px;
    top: -32px;
  }

  @media (min-width: 1440px) {
    left: 228px;
    top: -29px;
  }
`;

export const SquareСircle = styled(DefaultSquareСircle)`
  position: absolute;
  left: 231px;
  top: 28px;

  @media (min-width: 768px) {
    left: 405px;
    top: 19px;
  }

  @media (min-width: 1440px) {
    left: 707px;
    top: 36px;
  }
`;

export const SquareSecond = styled(DefaultSquare)`
  position: absolute;
  left: 333px;
  top: 6px;

  @media (min-width: 768px) {
    left: 694px;
    top: -19px;
  }

  @media (min-width: 1440px) {
    left: 1150px;
    top: -16px;
  }
`;

export const ValidationMessage = styled.span`
  position: absolute;
  left: 0;
  bottom: 3px;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeight.regular};
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${props =>
    props.color ? props.color : props.theme.colors.addRecipePage.textForm};
  opacity: ${props => (props.color ? 1 : 0)};

  transition: opacity 250ms ease-in-out;

  @media screen and (min-width: ${size.tablet}) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;
