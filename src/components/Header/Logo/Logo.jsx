import { LogoSvg, StyledGrCafeteria } from './Logo.styled';

import { NavLink } from 'react-router-dom/dist';

export const Logo = () => {
  return (
    <NavLink to="/" aria-label="Logo button">
      <LogoSvg>
        <StyledGrCafeteria />
      </LogoSvg>
    </NavLink>
  );
};
