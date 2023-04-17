import styled from 'styled-components';

export const RecipeCard = styled.div`
  position: relative;
  width: 200px;
  border: 1px solid #ccc;
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
    background-color: #ffffff;
    color: #3e4462;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    transition-duration: 2000ms;
  }

  &:hover {
    opacity: 1;
    scale: 1.03;
    transition-duration: 2000ms;
  }

  .title {
    font-size: 16px;
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
    background-color: rgb(139, 170, 54, 0.3);
    z-index: 1;
    opacity: 0;

    transition: opacity 1000ms ease, background-color 1000ms ease 2500ms;
  }

  &:hover::after {
    opacity: 1;
    background-color: rgb(0, 0, 0, 0.5);
  }
  &:hover .overlay {
    z-index: 2;
    background-image: linear-gradient(to left, #a8c163, transparent);
  }
  &:hover .title {
    scale: 1.03;
  }
`;
