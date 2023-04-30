import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'components/constants/deviceType/deviceType';

export const StyledBurgerNavigation = styled.nav`
  display: flex;
  z-index: 1;
  gap: 32px;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    gap: 40px;
  }
`;

export const StyledBurgerLink = styled(NavLink)`
  color: ${props => props.theme.colors.burgerMenu.text} !important;
  display: flex;
  gap: 10px;

  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;

  &:hover {
    color: ${props => props.theme.colors.burgerMenu.colorAccent} !important;
  }

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 24px;
  }
`;
