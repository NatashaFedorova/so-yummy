import { useState } from 'react';
import {
  ConfigAvatarArea,
  ConfigAvatarUser,
  ConfigNameLabel,
  Modal,
  ModalOverlay,
  ModalWrapper,
  SendChangeBTN,
  StyledAiFillPlusCircle,
  StyledGrFormClose,
} from './UserInfoModal.styled';
import { createPortal } from 'react-dom';
import { StyledRxPerson } from './UserInfoModal.styled';
import { StyledHiOutlinePencil } from './UserInfoModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const UserInfoModal = ({ closeUserInfoModal }) => {
  const [newUserName, setNewUserName] = useState('');

  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeUserInfoModal();
    }
  };

  return createPortal(
    <ModalOverlay onClick={onClickBackdrop}>
      <ModalWrapper onClick={onClickBackdrop}>
        <Modal>
          <ConfigAvatarArea>
            <ConfigAvatarUser />
            <StyledAiFillPlusCircle />
          </ConfigAvatarArea>

          <ConfigNameLabel>
            <div>
              <StyledRxPerson />
              <input
                value={newUserName}
                onChange={event => setNewUserName(event.target.value)}
              />
            </div>
            <StyledHiOutlinePencil />
          </ConfigNameLabel>
          <SendChangeBTN>Save chandes</SendChangeBTN>
          <StyledGrFormClose onClick={closeUserInfoModal} />
        </Modal>
      </ModalWrapper>
    </ModalOverlay>,
    modalRoot
  );
};
