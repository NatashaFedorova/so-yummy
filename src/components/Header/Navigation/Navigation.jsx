import { FiSearch } from 'react-icons/fi';
import { HeaderNavigation, StyledNavigationLink } from './Navigation.styled';

const pages = [
  { to: '/add', title: 'Add receptes' },
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
      <StyledNavigationLink to={`/search`}>
        <FiSearch />
      </StyledNavigationLink>
    </HeaderNavigation>
  );
};
