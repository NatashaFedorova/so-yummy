import styled from 'styled-components';

export const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 30px;
  height: 30px;

  border: transparent;
  border-radius: 50%;
  background-color: #fff;
  color: ${props => props.theme.colors.addRecipePage.labelForm};

  padding: 0;

  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.addRecipePage.bdUnderImage};
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 16px;
  height: 16px;

  border: transparent;
  background-color: transparent;

  padding: 0;

  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  & path {
    fill: ${props => props.theme.colors.addRecipePage.iconForm};
    transition: fill 250ms ease-in-out;
  }

  &:hover {
    & path {
      fill: ${props => props.theme.colors.addRecipePage.bdUnderImage};
    }
  }
`;
