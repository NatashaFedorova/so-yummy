import { FiSearch } from 'react-icons/fi';
import { HeaderNavigation, StyledNavigationLink } from './Navigation.styled';

const pages = [
  { to: '/categories/beef', title: 'Categories' },
  { to: '/add', title: 'Add recepes' },
  { to: '/my', title: 'My recipes' },
  { to: '/favorite', title: 'Favorites' },
  { to: '/shopping-list', title: 'Shopping list' },
];

export const Navigation = () => {
  return (
    <HeaderNavigation>
      {pages.map((page, ind) => (
        <StyledNavigationLink key={ind} to={`${page.to}`}>
          {page.title}
        </StyledNavigationLink>
      ))}
      <StyledNavigationLink to={`/search`} aria-label="link to search page">
        <FiSearch />
      </StyledNavigationLink>
    </HeaderNavigation>
  );
};
