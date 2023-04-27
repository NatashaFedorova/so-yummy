import { device } from 'components/constants/deviceType/deviceType';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const OtherCategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0px 100px;

  @media ${device.tablet} {
    margin: 32px 0px 100px;
  }

  @media ${device.desktop} {
    margin: 14px 0px 118px;
  }
`;

export const OtherCategoriesLink = styled(NavLink)`
  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.5;
  text-align: center;
  color: ${props => props.theme.colors.mainPage.textBtnOtherCategories};
  background-color: ${props =>
    props.theme.colors.mainPage.bgBtnOtherCategories};

  display: flex;
  justify-content: center;
  align-items: center;
  width: 195px;
  height: 46px;

  border-radius: ${props => props.theme.radii.btnSpecial};
  border: 2px solid
    ${props => props.theme.colors.mainPage.bordertnOtherCategories};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.mainPage.textOtherCategoriesHover};
    background-color: ${props =>
      props.theme.colors.mainPage.bgOtherCategoriesHover};
  }

  @media ${device.tablet} {
    width: 239px;
    height: 61px;
    font-size: ${props => props.theme.fontSizes.m};
  }
`;
