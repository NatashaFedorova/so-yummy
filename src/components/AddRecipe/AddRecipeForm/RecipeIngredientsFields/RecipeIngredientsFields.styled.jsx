import styled from 'styled-components';
import Select from 'react-select';
import { AiOutlineClose } from 'react-icons/ai';
import { size } from 'components/SignPages/SignPages.styled';

export const RecipeIngredientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${size.tablet}) {
    gap: 32px;
    max-width: 704px;
  }

  @media screen and (min-width: ${size.desktop}) {
    max-width: 609px;
  }
`;

export const RecipeIngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: ${size.tablet}) {
    gap: 24px;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CounterWrapper = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;

  width: 92px;
  height: 28px;

  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.addRecipePage.iconForm};
  border-radius: 18px;

  @media screen and (min-width: ${size.tablet}) {
    width: 110px;
    height: 32px;
    gap: 20px;
  }
`;

export const CounterValue = styled.p`
  font-family: 'Inter';
  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.3;
  color: ${props => props.theme.colors.addRecipePage.iconClose};

  @media screen and (min-width: ${size.tablet}) {
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 1.5;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 53px;

  @media screen and (min-width: ${size.tablet}) {
    height: 59px;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  gap: 14px;
  width: 292px;

  @media screen and (min-width: ${size.tablet}) {
    gap: 32px;
    width: 597px;
  }
`;

export const NewSelect = styled(Select)`
  width: 194px;
  height: 53px;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeight.regular};
  line-height: 1.5;
  color: ${props => props.theme.colors.addRecipePage.textForm};
  letter-spacing: -0.02em;

  &::placeholder {
    font-size: ${props => props.theme.fontSizes.s};
    color: ${props => props.theme.colors.addRecipePage.placeholderForm};
  }

  & path {
    fill: ${props => props.theme.colors.addRecipePage.socIcon};
  }

  @media screen and (min-width: ${size.tablet}) {
    width: 398px;
    height: 59px;
    font-size: ${props => props.theme.fontSizes.l};

    &::placeholder {
      font-size: ${props => props.theme.fontSizes.l};
    }
  }
`;

export const SmallSelect = styled(Select)`
  width: 84px;
  height: 53px;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeight.regular};
  line-height: 1.5;
  color: ${props => props.theme.colors.addRecipePage.textForm};
  letter-spacing: -0.02em;

  &:focus {
    border: none;
  }

  &::placeholder {
    font-size: ${props => props.theme.fontSizes.s};
    color: ${props => props.theme.colors.addRecipePage.placeholderForm};
  }

  & path {
    fill: ${props => props.theme.colors.addRecipePage.socIcon};
  }

  @media screen and (min-width: ${size.tablet}) {
    width: 97px;
    height: 59px;
    font-size: ${props => props.theme.fontSizes.l};

    &::placeholder {
      font-size: ${props => props.theme.fontSizes.l};
    }
  }

  @media screen and (min-width: ${size.desktop}) {
    width: 99px;
  }
`;

export const DeleteIcon = styled(AiOutlineClose)`
  width: 18px;
  height: 18px;

  @media screen and (min-width: ${size.tablet}) {
    width: 20px;
    height: 20px;
  }

  & path {
    fill: ${props => props.theme.colors.addRecipePage.iconClose};

    &:hover {
      fill: ${props => props.theme.colors.addRecipePage.bgBtnAddHover};
    }
  }
`;
