import { createPortal } from 'react-dom';
import {
  AgreedBTN,
  ButtonSet,
  CancelBTN,
  Modal,
  ModalOverlay,
  ModalWrapper,
  StyledGrFormClose,
} from './LogoutModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const UserLogoutModal = ({ closeLogoutModal }) => {
  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeLogoutModal();
    }
  };

  return createPortal(
    <ModalOverlay onClick={onClickBackdrop}>
      <ModalWrapper onClick={onClickBackdrop}>
        <Modal>
          <p>Are you sure you want to log out?</p>
          <ButtonSet>
            <AgreedBTN>Log out</AgreedBTN>
            <CancelBTN onClick={closeLogoutModal}>Cancel</CancelBTN>
          </ButtonSet>
          <StyledGrFormClose onClick={closeLogoutModal} />
        </Modal>
      </ModalWrapper>
    </ModalOverlay>,
    modalRoot
  );
};