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
  overflow: hidden;
  opacity: 1;

  background-color: ${props => props.theme.colors.addRecipePage.bgModal};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 12px;

  transform: translate(-50%, -50%)
    ${props => (props.isOpen ? 'scale(1)' : 'scale(0.8)')};

  transition-property: transform, border-color;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
`;
