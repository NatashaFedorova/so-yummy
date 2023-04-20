import { FooterNav, StyledNavLink } from './Nav.styled';

const pages = [
  { to: '/search', title: 'Ingredients' },
  { to: '/add', title: 'Add receptes' },
  { to: '/my', title: 'My recipes' },
  { to: '/favorite', title: 'Favorites' },
  { to: '/shopping-list', title: 'Shopping list' },
];

export const Nav = () => {
  return (
    <FooterNav>
      {pages.map(page => (
        <StyledNavLink to={`${page.to}`}>{page.title}</StyledNavLink>
      ))}
    </FooterNav>
  );
};