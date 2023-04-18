import styled from 'styled-components';

export const RecipeCard = styled.div`
  position: relative;
  width: 200px;
  border-radius: 8px;
  overflow: hidden;
  min-width: 300px;
  transition-duration: 2000ms;

  img {
    max-width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    bottom: 24px;
    border-radius: 8px;
    left: 16px;
    right: 16px;
    padding: 16px;
    background-color: ${props => props.theme.colors.cardRecipe.bgbtn};
    color: ${props => props.theme.colors.categoriesPage.overlay};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: ${props => props.theme.fontWeight.medium};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 20px;

    transition-duration: 2000ms;
  }

  &:hover {
    opacity: 1;
    scale: 1.03;
    transition-duration: 2000ms;
  }

  .title {
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: bold;
    margin: 0;
    transition-duration: 2000ms;
  }

  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props =>
      props.theme.colors.categoriesPage.overlayHover};
    z-index: 1;
    opacity: 0;

    transition: opacity 1000ms ease, background-color 1000ms ease 2500ms;
  }

  &:hover::after {
    opacity: 1;
    background-color: ${props =>
      props.theme.colors.categoriesPage.overlayHoverAfter};
  }
  &:hover .overlay {
    z-index: 2;
    background-image: linear-gradient(to left, #a8c163, transparent);
  }
  &:hover .title {
    scale: 1.03;
  }
`;
