import styled from 'styled-components';

export const Box = styled.div``;

export const Button = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  border: none;
  gap: 30px;
  background: #edefef;
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  height: 27px;
  width: 61px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${props =>
    props.currentThemeStatus
      ? `background-color: #8baa36`
      : `background-color: #edefef ;`};
`;

export const Ellipse = styled.label`
  position: absolute;
  top: 3px;
  height: 21px;
  width: 21px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.25);
  background: linear-gradient(180deg, #edefef 100%, #e8eaea 100%);
  filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
  transform: 2250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${props =>
    props.currentThemeStatus
      ? `transform: translateX(17px)`
      : `transform: translateX(-17px)`};
`;
