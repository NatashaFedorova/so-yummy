import { FiSearch } from 'react-icons/fi';
import {
  StyledBurgerLink,
  StyledBurgerNavigation,
} from './BurgerNavigation.styled';

const pages = [
  { to: '/categories/beef', title: 'Categories' },
  { to: '/add', title: 'Add recipes' },
  { to: '/my', title: 'My recipes' },
  { to: '/favorite', title: 'Favorites' },
  { to: '/shopping-list', title: 'Shopping list' },
];

export const BurgerNavigation = ({ closeBurgerMenuModal }) => {
  return (
    <StyledBurgerNavigation>
      {pages.map((page, ind) => (
        <StyledBurgerLink
          key={ind}
          to={`${page.to}`}
          onClick={closeBurgerMenuModal}
        >
          {page.title}
        </StyledBurgerLink>
      ))}

      <StyledBurgerLink
        to={`/search`}
        state={{ type: 'Title' }}
        onClick={closeBurgerMenuModal}
      >
        <FiSearch />
        Search
      </StyledBurgerLink>
    </StyledBurgerNavigation>
  );
};
