import { device } from 'components/constants/deviceType/deviceType';
import { NavLink } from 'react-router-dom/dist';
import styled from 'styled-components';

export const FooterNav = styled.nav`
  display: flex;
  font-size: 14px;
  flex-direction: column;
  gap: 14px;
  color: white;
  margin-right: 205px;
  @media ${device.tablet} {
    margin-right: auto;
    gap: 20px;
  }
  @media ${device.mobile} {
    margin-right: 0;
    margin-bottom: 32px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  &:hover {
    color: #8baa36;
  }
`;
