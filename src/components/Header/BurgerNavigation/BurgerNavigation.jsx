import { FiSearch } from 'react-icons/fi';
import {
  StyledBurgerLink,
  StyledBurgerNavigation,
} from './BurgerNavigation.styled';

const pages = [
  { to: '/add', title: 'Add receptes' },
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
      <StyledBurgerLink to={`/search`}>
        <FiSearch />
        Search
      </StyledBurgerLink>
    </StyledBurgerNavigation>
  );
};
