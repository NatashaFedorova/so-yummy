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

  &:hover {
    opacity: 1;
    scale: 1.03;
    transition-duration: 2000ms;
  }

  .overlay {
    position: absolute;
    bottom: 24px;
    border-radius: 8px;
    left: 16px;
    right: 16px;
    padding: 16px;
    background-image: none;
    background-color: ${props => props.theme.colors.cardRecipe.bgbtn};
    color: ${props => props.theme.colors.categoriesPage.overlay};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: ${props => props.theme.fontWeight.medium};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 20px;
    opacity: 1;
    transition-duration: 2000ms;
  }

  &:hover .overlay {
    z-index: 2;
    background-image: linear-gradient(to left, #a8c163, transparent);
    /* transition: background-image 2s ease-in-out; */
  }

  .title {
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeight.medium};
    margin: 0;
    transition-duration: 2000ms;
  }

  &:hover .title {
    scale: 1.03;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props =>
      props.theme.colors.categoriesPage.overlayHoverAfter};
    z-index: 1;
    opacity: 0;
    transition: opacity 500ms ease;
  }

  &:hover::after {
    opacity: 1;
    transition: opacity 500ms ease;
  }
`;
