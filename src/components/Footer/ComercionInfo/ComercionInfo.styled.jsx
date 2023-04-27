import { device } from 'components/constants/deviceType/deviceType';
import { Link } from 'react-router-dom/dist';
import styled from 'styled-components';

export const StyledCommercionInfo = styled.div`
  display: flex;
  height: 66px;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: ${props => props.theme.colors.footer.commerText} !important;
  cursor: context-menu;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: -0.01em;
  text-align: left;

  @media${device.tablet} {
    height: 92px;

    font-weight: 500;
    line-height: 14px;
  }
  @media${device.desktop} {
    height: 114px;

    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.footer.commerText} !important;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: -0.01em;
  text-align: left;
  &:hover {
    color: ${props => props.theme.colors.burgerMenu.iconCloseHover} !important;
  }

  @media${device.tablet} {
    font-weight: 500;
    line-height: 14px;
  }
  @media${device.desktop} {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
  }
`;
