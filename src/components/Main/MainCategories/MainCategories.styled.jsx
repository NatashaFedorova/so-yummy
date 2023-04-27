import styled from 'styled-components';
import { device } from 'components/constants/deviceType/deviceType';
import { NavLink } from 'react-router-dom';

export const MainRecipesList = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  margin-bottom: 24px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 31px;

    margin-bottom: 40px;
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const MainCategoriesRow = styled.li`
  margin-bottom: 32px;

  &:nth-child(4) {
    margin-bottom: 0;
  }

  @media ${device.tablet} {
    margin-bottom: 50px;
  }

  @media ${device.desktop} {
    margin-bottom: 100px;
  }
`;

export const MainCategoriesTitle = styled(NavLink)`
  color: ${props => props.theme.colors.mainPage.titleLinkCategory};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  font-size: ${props => props.theme.fontSizes.xxl};

  padding-left: 18px;
  line-height: 1;
  letter-spacing: -0.02em;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.mainPage.titleLinkCategoryHover};
  }

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.xxxl};
  }

  @media ${device.desktop} {
    padding-left: 0;
  }
`;

export const MainCategoriesBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  padding-right: 20px;

  @media ${device.desktop} {
    padding-right: 0;
  }
`;

export const MainCategoriesBtn = styled(NavLink)`
  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.3;

  border-radius: 6px;
  color: ${props => props.theme.colors.mainPage.textBtnSeeAll};

  display: flex;
  justify-content: center;
  align-items: center;
  width: 94px;
  height: 38px;

  background-color: ${props => props.theme.colors.mainPage.bgBtnSeeAll};
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.mainPage.bgBtnSeeAllBorder};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props => props.theme.colors.mainPage.bgBtnSeeAllHover};
    border: 1px solid
      ${props => props.theme.colors.mainPage.borderBtnSeeAllHover};
    color: ${props => props.theme.colors.mainPage.textBtnSeeAllHover};
  }
`;
