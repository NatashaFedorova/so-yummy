import styled from 'styled-components';
import Select from 'react-select';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { size } from 'components/constants/deviceType/deviceType';

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

  & .Select__control {
    cursor: pointer;
    padding-left: 16px;

    background-color: ${props =>
      props.theme.colors.addRecipePage.bgInputTextArea};
    border-color: ${props => props.theme.colors.addRecipePage.textareaBorder};

    @media screen and (min-width: ${size.tablet}) {
      padding-left: 18px;
    }
  }

  & .Select__single-value {
    color: ${props => props.theme.colors.addRecipePage.textForm};
  }

  & .Select__input-container {
    color: ${props => props.theme.colors.addRecipePage.textForm};
  }

  & .Select__option {
    text-align: left;
    color: ${props => props.theme.colors.addRecipePage.placeholderForm};
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: ${props => props.theme.fontWeight.regular};
    line-height: 1.5;
    cursor: pointer;

    @media screen and (min-width: ${size.tablet}) {
      font-size: ${props => props.theme.fontSizes.s};
    }

    &--is-selected {
      background-color: transparent;
      color: ${props => props.theme.colors.addRecipePage.socIcon};
    }

    &--is-focused {
      background-color: transparent;
    }

    &:hover {
      background-color: transparent;
      color: ${props => props.theme.colors.addRecipePage.socIcon};
    }
  }

  & .Select__menu {
    padding: 8px 4px 8px 18px;
    background-color: ${props => props.theme.colors.addRecipePage.optionMenuBg};
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);

    &-list::-webkit-scrollbar {
      width: 6px;
      height: 0;
    }
    &-list::-webkit-scrollbar-track {
      background: transparent;
    }
    &-list::-webkit-scrollbar-thumb {
      background-color: ${props =>
        props.theme.colors.addRecipePage.scrollBarBgColor};
      border-radius: 12px;

      transition: background-color 250ms ease-in-out;
    }
    &-list::-webkit-scrollbar-thumb:hover {
      background-color: ${props => props.theme.colors.addRecipePage.socIcon};
    }
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

export const SmallInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 84px;
  height: 53px;

  border-radius: 6px;

  @media screen and (min-width: ${size.tablet}) {
    width: 97px;
    height: 59px;
  }

  @media screen and (min-width: ${size.desktop}) {
    width: 99px;
  }
`;

export const SmallInput = styled.input`
  display: inline-block;
  width: 84px;
  height: 53px;
  padding: 16px 24px 16px 16px;

  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeight.regular};
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: ${props => props.theme.colors.addRecipePage.textForm};
  background-color: ${props =>
    props.theme.colors.addRecipePage.bgInputTextArea};

  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  border-color: ${props => props.theme.colors.addRecipePage.textareaBorder};

  &:focus {
    border-color: ${props => props.theme.colors.addRecipePage.textareaBorder};
  }

  &::placeholder {
    font-size: ${props => props.theme.fontSizes.s};
    color: ${props => props.theme.colors.addRecipePage.placeholderForm};
  }

  @media screen and (min-width: ${size.tablet}) {
    width: 97px;
    height: 59px;
    font-size: ${props => props.theme.fontSizes.l};
    padding: 16px 36px 16px 14px;

    &::placeholder {
      font-size: ${props => props.theme.fontSizes.l};
    }
  }

  @media screen and (min-width: ${size.desktop}) {
    width: 99px;
  }
`;

export const Dropdown = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;

  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000000;

  width: 100%;
  max-width: 123px;
  height: ${props => (props.isOpen ? '160px' : '0px')};
  padding: ${props => (props.isOpen ? '16px 0 16px 0' : '0')};
  border-radius: 6px;
  border-color: ${props => props.theme.colors.addRecipePage.textareaBorder};
  overflow: hidden;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);

  text-align: center;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeight.regular};
  line-height: 1.5;
  background-color: ${props => props.theme.colors.addRecipePage.optionMenuBg};
  color: ${props => props.theme.colors.addRecipePage.placeholderForm};

  letter-spacing: -0.02em;

  @media screen and (min-width: ${size.tablet}) {
    max-width: 132px;
    height: ${props => (props.isOpen ? '170px' : '0px')};
    padding: ${props => (props.isOpen ? '18px 0 18px 0' : '0')};
    font-size: ${props => props.theme.fontSizes.s};
  }

  transition: max-height 250ms ease-in-out;
`;

export const DropdownItem = styled.li`
  width: 100%;
  cursor: pointer;
  color: ${props => props.theme.colors.addRecipePage.placeholderForm};

  &:hover {
    color: ${props => props.theme.colors.addRecipePage.socIcon};
  }

  transition: color 250ms ease-in-out;
`;

export const DropdownIcon = styled(IoIosArrowDown)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);

  width: 18px;
  height: 18px;
  cursor: pointer;

  transition: fill 250ms ease-in-out;

  & path {
    fill: ${props => props.theme.colors.addRecipePage.socIcon};
  }

  @media screen and (min-width: ${size.tablet}) {
    width: 20px;
    height: 20px;
  }
`;
