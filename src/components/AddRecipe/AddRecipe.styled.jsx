import styled from 'styled-components';
import { size } from 'components/constants/deviceType/deviceType';

export const AddRecipeSection = styled.section`
  padding: 0 0 100px 0;
  min-height: 100%;

  font-family: 'Poppins', sans-serif;
  background-color: inherit;

  @media screen and (min-width: ${size.tablet}) {
    padding: 0 0 200px 0;
  }

  @media screen and (min-width: ${size.desktop}) {
    padding: 0 0 200px 0;
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
