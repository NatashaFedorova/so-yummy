import { RxPerson } from 'react-icons/rx';
import { HiOutlinePencil } from 'react-icons/hi';
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

export const UserInfoModal = ({ closeUserInfoModal }) => {
  const [newUserName, setNewUserName] = useState('');

  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeUserInfoModal();
    }
  };

  return (
    <ModalOverlay onClick={onClickBackdrop}>
      <ModalWrapper onClick={onClickBackdrop}>
        <Modal>
          <ConfigAvatarArea>
            <ConfigAvatarUser />
            <StyledAiFillPlusCircle />
          </ConfigAvatarArea>

          <ConfigNameLabel>
            <div>
              <RxPerson />
              <input
                value={newUserName}
                onChange={event => setNewUserName(event.target.value)}
              />
            </div>
            <HiOutlinePencil />
          </ConfigNameLabel>
          <SendChangeBTN>Save chandes</SendChangeBTN>
          <StyledGrFormClose onClick={closeUserInfoModal} />
        </Modal>
      </ModalWrapper>
    </ModalOverlay>
  );
};
