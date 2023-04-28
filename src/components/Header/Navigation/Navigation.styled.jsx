import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'components/constants/deviceType/deviceType';

export const HeaderNavigation = styled.nav`
  display: none;

  @media ${device.desktop} {
    display: flex;
    gap: 30px;
  }
`;

export const StyledNavigationLink = styled(NavLink)`
  color: ${props => props.theme.colors.header.textMain};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  &.active {
    color: ${props => props.theme.colors.header.accent};
  }

  &:hover {
    color: ${props => props.theme.colors.header.accent};
  }
`;
