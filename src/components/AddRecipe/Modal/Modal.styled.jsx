import styled from 'styled-components';

export const BackdropOver = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  /* overflow: hidden;  */

  z-index: 1200;
`;

export const ModalPaper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 50vw;
  height: 50vh;
  max-height: 500px;

  padding: 40px;
  overflow-y: auto;
  opacity: 1;

  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border-width: 8px;
  border-style: dashed;
  border-color: ${props =>
    props.isOver
      ? props.theme.colors.addRecipePage.bdUnderImage
      : props.theme.colors.addRecipePage.line};

  transform: translate(-50%, -50%)
    ${props => (props.isOpen ? 'scale(1)' : 'scale(0.8)')};

  transition-property: transform, border-color;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
`;
