import { NavLink } from 'react-router-dom/dist';
import styled from 'styled-components';

export const FooterNav = styled.nav`
  display: flex;
  font-size: 14px;
  flex-direction: column;
  gap: 14px;
  color: white;
  margin-right: 205px;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
`;
