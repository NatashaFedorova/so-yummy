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
