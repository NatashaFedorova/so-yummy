import { NavLink } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const HeaderNavigation = styled.nav`
  display: flex;
  gap: 30px;
`;

export const StyledNavigationLink = styled(NavLink)`
  color: black;
  &:hover {
    color: #8baa36;
  }
`;
