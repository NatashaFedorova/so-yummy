import {
  Modal,
  ModalOverlay,
  ModalWrapper,
  StyledGrFormClose,
} from './UserInfoModal.styled';
import { createPortal } from 'react-dom';
import { UserFormModal } from './UserFormModal';

const modalRoot = document.querySelector('#modal-root');

export const UserInfoModal = ({ closeUserInfoModal }) => {
  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeUserInfoModal();
    }
  };
  return createPortal(
    <ModalOverlay onClick={onClickBackdrop}>
      <ModalWrapper onClick={onClickBackdrop}>
        <Modal>
          <UserFormModal closeUserInfoModal={closeUserInfoModal} />
          <StyledGrFormClose onClick={closeUserInfoModal} />
        </Modal>
      </ModalWrapper>
    </ModalOverlay>,
    modalRoot
  );
};
