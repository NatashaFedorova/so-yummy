import { FiSearch } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { HeaderNavigation, StyledNavigationLink } from './Navigation.styled';

const pages = [
  { to: '/categories/beef', title: 'Categories' },
  { to: '/add', title: 'Add recipes' },
  { to: '/my', title: 'My recipes' },
  { to: '/favorite', title: 'Favorites' },
  { to: '/shopping-list', title: 'Shopping list' },
];

export const Navigation = () => {
  const path = useLocation().pathname;
  return (
    <HeaderNavigation>
      {pages.map((page, ind) => (
        <StyledNavigationLink
          key={ind}
          to={`${page.to}`}
          style={
            path.toString().includes('/recipe') ? { color: '#1E1F28' } : {}
          }
        >
          {page.title}
        </StyledNavigationLink>
      ))}
      <StyledNavigationLink
        to={'/search'}
        state={{ type: 'Title' }}
        aria-label="link to search page"
        style={path.toString().includes('/recipe') ? { color: '#1E1F28' } : {}}
        searchtype="Title"
      >
        <FiSearch />
      </StyledNavigationLink>
    </HeaderNavigation>
  );
};
