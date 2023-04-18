import { NavLink } from 'react-router-dom/dist';
import { FiSearch } from 'react-icons/fi';

const pages = [
  { to: '/add', title: 'Add receptes' },
  { to: '/my', title: 'My recipes' },
  { to: '/favorite', title: 'Favorites' },
  { to: '/shopping-list', title: 'Shopping list' },
];

export const Navigation = () => {
  return (
    <nav>
      {pages.map(page => (
        <NavLink to={`${page.to}`}>{page.title}</NavLink>
      ))}
      <NavLink to={`/search`}>
        <FiSearch />
      </NavLink>
    </nav>
  );
};
