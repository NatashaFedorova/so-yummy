import { FooterNav, StyledNavLink } from './Nav.styled';

const pages = [
  { to: '/add', title: 'Add recipes' },
  { to: '/my', title: 'My recipes' },
  { to: '/favorite', title: 'Favorites' },
  { to: '/shopping-list', title: 'Shopping list' },
];

export const Nav = () => {
  return (
    <FooterNav>
      <StyledNavLink to={'/search'} state={{ type: 'Ingredients' }}>
        Ingredients
      </StyledNavLink>
      {pages.map((page, ind) => (
        <StyledNavLink key={ind} to={`${page.to}`}>
          {page.title}
        </StyledNavLink>
      ))}
    </FooterNav>
  );
};
