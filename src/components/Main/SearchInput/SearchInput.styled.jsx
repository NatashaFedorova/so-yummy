import { device, size } from 'components/constants/deviceType/deviceType';
import { NavLink } from 'react-router-dom';
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
  /* outline: 2px solid transparent; */
  /* outline-offset: 2px; */
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

  border: none;
  border-radius: ${props => props.theme.radii.btnSpecial};

  cursor: pointer;
`;

// export const StyledSPNavLinkRegistration = styled(NavLink)`
//   display: inline-block;
//   padding: 12px 24px;

//   font-size: 14px;
//   line-height: 21px;
//   color: ${props => props.theme.colors.startPage.textButton};

//   border-radius: 24px 44px;
//   border-color: ${props => props.theme.colors.startPage.borderBtnRegistration};
//   background-color: ${props => props.theme.colors.startPage.bgBtnRegistration};
//   cursor: pointer;

//   @media ${device.tablet} {
//     padding: 22px 44px;

//     font-size: 16px;
//     line-height: 24px;
//   }
// `;
// export const StyledSPNavLinkSignIn = styled(StyledSPNavLinkRegistration)`
//   background-color: ${props => props.theme.colors.startPage.bgBtnSignIn};
//   border-color: ${props => props.theme.colors.startPage.borderBtnSignIn};
//   border: 2px solid;
// `;
