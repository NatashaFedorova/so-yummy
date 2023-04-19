import { AiFillPlusCircle } from 'react-icons/ai';
import { RxPerson } from 'react-icons/rx';
import { HiOutlinePencil } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';
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

export const UserInfoModal = ({ showUserInfoModal, closeUserInfoModal }) => {
  const [newUserName, setNewUserName] = useState('');

  return (
    <ModalOverlay>
      <ModalWrapper>
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
