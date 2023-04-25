import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'components/constants/deviceType/deviceType';

export const HeaderNavigation = styled.nav`
  display: none;

  @media${device.desktop} {
    display: flex;
    gap: 30px;
  }
`;

export const StyledNavigationLink = styled(NavLink)`
  color: black;
  &:hover {
    color: #8baa36;
  }
`;
