import { device } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  width: 295px;
  height: 52px;

  background-color: ${props => props.theme.colors.mainPage.bgInput};

  margin-top: 364px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  border-radius: ${props => props.theme.radii.btnSpecial};

  @media ${device.tablet} {
    margin-top: 32px;

    width: 362px;
    height: 59px;
  }

  @media ${device.desktop} {
    margin-top: 50px;

    width: 510px;
    height: 70px;
  }
`;

export const SearchInputForm = styled.form`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const SearchInputField = styled.input`
  width: 100%;

  border-radius: ${props => props.theme.radii.btnSpecial};
  border: none;
  padding: 15.7px 113px 15.7px 32px;
  color: ${props => props.theme.colors.mainPage.placeholderInputSearch};

  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.5;

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  border: 1px solid ${props => props.theme.colors.mainPage.borderInputSearch};
  border-radius: ${props => props.theme.radii.btnSpecial};

  outline: 1px solid transparent;
  outline-offset: 1px;

  &:active,
  &:focus {
    border: 2px solid
      ${props => props.theme.colors.mainPage.borderInputSearchHover};
  }

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const SearchInputButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 113px;
  height: 53px;

  position: absolute;
  top: -1px;
  right: -2px;

  background-color: ${props => props.theme.colors.mainPage.bgBtnSearch};
  color: ${props => props.theme.colors.mainPage.textBtnSearch};

  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.5;

  border: 1px solid ${props => props.theme.colors.mainPage.bgBtnSeeAllBorder};
  border-radius: ${props => props.theme.radii.btnSpecial};

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props => props.theme.colors.mainPage.bgBtnSearchHover};
    border: 1px solid
      ${props => props.theme.colors.mainPage.borderBtnSeeAllHover};
  }

  @media ${device.tablet} {
    width: 161px;
    height: 60px;

    font-size: ${props => props.theme.fontSizes.m};
  }

  @media ${device.desktop} {
    width: 161px;
    height: 73px;

    font-size: ${props => props.theme.fontSizes.m};
  }
`;
