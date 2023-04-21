import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'components/constants/deviceType/deviceType';

export const StyledBurgerNavigation = styled.nav`
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;

  @media${device.tablet} {
    gap: 40px;
  }
`;

export const StyledBurgerLink = styled(NavLink)`
  color: black;
  display: flex;
  gap: 10px;

  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;

  &:hover {
    color: #8baa36;
  }

  @media${device.tablet} {
    font-size: 24px;
    line-height: 24px;
  }
`;
