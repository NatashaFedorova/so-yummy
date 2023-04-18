import { GrCafeteria } from 'react-icons/gr';
import { NavLink } from 'react-router-dom/dist';

export const Logo = () => {
  return (
    <NavLink to="/">
      <GrCafeteria />
    </NavLink>
  );
};
