import { createPortal } from 'react-dom';
import styled from 'styled-components';
const modalRoot = document.querySelector('#modal-root');

export const Backdrop = styled.div`
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(3, 2, 2, 0.7);
  display: flex;
  place-content: center;
  align-items: center;
`;

export const Box = styled.div``;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const MotivationList = ({ children }) => {
  return createPortal(
    <Backdrop>
      <Box>
        <List>{children}</List>
      </Box>
    </Backdrop>,
    modalRoot
  );
};

export default MotivationList;
