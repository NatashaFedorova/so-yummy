import { device } from 'components/constants/deviceType/deviceType';
import { NavLink } from 'react-router-dom/dist';
import styled from 'styled-components';

export const FooterNav = styled.nav`
  display: flex;
  font-size: 14px;
  flex-direction: column;
  gap: 14px;
  color: white;
  margin-right: 0;
  margin-bottom: 32px;
  align-items: center;
  @media ${device.tablet} {
    margin-right: auto;
    gap: 20px;
    align-items: normal;
  }
  @media ${device.desktop} {
    margin-right: 205px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.colors.userForm.textForm} !important;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;

  &:hover {
    color: ${props => props.theme.colors.footer.textSecondary} !important;
  }
`;
