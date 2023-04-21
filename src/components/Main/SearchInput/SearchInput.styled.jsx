import { device } from 'components/constants/deviceType/deviceType';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  width: 295px;
  height: 52px;

  background-color: ${props => props.theme.colors.searchPage.bgInput};

  margin-top: 364px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  border: 1px solid ${props => props.theme.colors.mainPage.bgInput};
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

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const SearchInputButton = styled.button`
  width: 113px;
  height: 52px;
  padding: 15.7px 31.7px;

  position: absolute;
  top: -1px;
  right: -1px;

  background-color: ${props => props.theme.colors.mainPage.bgBtnSearch};
  color: ${props => props.theme.colors.mainPage.textBtnSearch};

  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.5;

  border: none;
  border-radius: ${props => props.theme.radii.btnSpecial};

  cursor: pointer;

  @media ${device.tablet} {
    width: 161px;
    height: 59px;

    font-size: ${props => props.theme.fontSizes.m};
  }

  @media ${device.desktop} {
    width: 161px;
    height: 70px;

    font-size: ${props => props.theme.fontSizes.m};
  }
`;
