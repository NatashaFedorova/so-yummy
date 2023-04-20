import { LogoSvg, StyledGrCafeteria } from './Logo.styled';

import { NavLink } from 'react-router-dom/dist';

export const Logo = () => {
  return (
    <NavLink to="/">
      <LogoSvg>
        <StyledGrCafeteria />
      </LogoSvg>
    </NavLink>
  );
};
