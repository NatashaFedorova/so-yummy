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
`;

export const SmallSelect = styled(Select)`
  position: absolute;
  top: -53px;
  left: 0;
  z-index: 1;
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
    top: -59px;
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
  color: ${props => props.theme.colors.addRecipePage.textForm};
  letter-spacing: -0.02em;
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: ${props =>
    props.theme.colors.addRecipePage.bgInputTextArea};

  &:focus {
    border: none;
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

  &:hover {
    border: 1px solid rgba(35, 38, 42, 0.2);
  }

  transition: border 250ms ease-in-out;
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
  height: ${props => (props.isOpen ? '144px' : '0px')};
  padding: ${props => (props.isOpen ? '14px 14px' : '0')};
  border-radius: 6px;
  border-color: transparent;
  overflow: hidden;

  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeight.regular};
  line-height: 1.5;
  background-color: #ffffff;
  color: ${props => props.theme.colors.addRecipePage.placeholderForm};

  letter-spacing: -0.02em;

  @media screen and (min-width: ${size.desktop}) {
    max-width: 132px;
    max-height: ${props => (props.isOpen ? '162px' : '0px')};
    padding: ${props => (props.isOpen ? '8px 18px' : '0')};
    font-size: ${props => props.theme.fontSizes.s};
  }

  transition: max-height 250ms ease-in-out;
`;

export const DropdownItem = styled.li`
  width: 100%;
  cursor: pointer;
  color: ${props => props.theme.colors.addRecipePage.placeholderForm};

  &:hover {
    color: ${props => props.theme.colors.addRecipePage.bgBtnAddHover};
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

    &:hover {
      fill: ${props => props.theme.colors.addRecipePage.bgBtnAddHover};
    }
  }

  @media screen and (min-width: ${size.tablet}) {
    width: 20px;
    height: 20px;
  }
`;
