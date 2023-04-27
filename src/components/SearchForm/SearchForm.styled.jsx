import { device } from 'components/constants/deviceType/deviceType';
import styled from 'styled-components';

export const SearchButton = styled.button`
  cursor: pointer;
  display: block;
  border-radius: 24px 44px;
  border: 1px solid ${p => p.theme.colors.searchPage.bgBtnSearch};
  height: 100%;

  background-color: ${p => p.theme.colors.searchPage.bgBtnSearch};
  padding: 16px 32px;

  position: absolute;
  right: 0;
  bottom: 0;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${device.tablet} {
    padding: 16px 52px;
  }
`;
export const SearchInput = styled.input`
  height: 100%;
  padding: 16px 32px;
  border: 1px solid ${p => p.theme.colors.searchPage.borderInput};
  background: ${p => p.theme.colors.searchPage.bgInput};
  border-radius: 24px 44px;
  width: 100%;

  @media ${device.tablet} {
    padding: 16px 52px;
  }
`;
export const Form = styled.form`
  height: 53px;
  @media ${device.tablet} {
    height: 57px;
    margin-left: 171px;
    margin-right: 171px;
  }
  @media ${device.desktop} {
    margin-left: 366px;
    margin-right: 366px;
  }
  position: relative;
`;
