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
import { useDispatch, useSelector } from 'react-redux';
import { LeftInputDiv } from './UserInfoModal.styled';
import { changeUserData } from 'redux/user/userOperation';
import { selectCurrentUser } from 'redux/user/userSelectors';

const modalRoot = document.querySelector('#modal-root');

export const UserInfoModal = ({ closeUserInfoModal }) => {
  const { name } = useSelector(selectCurrentUser);
  const dispath = useDispatch();

  const [newUserName, setNewUserName] = useState(`${name}`);

  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeUserInfoModal();
    }
  };

  const submitChange = () => {
    if (!(name === newUserName)) {
      dispath(changeUserData({ name: newUserName }));
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

          <label>
            <ConfigNameLabel>
              <LeftInputDiv>
                <StyledRxPerson />
                <input
                  value={newUserName}
                  onChange={event => setNewUserName(event.target.value)}
                />
              </LeftInputDiv>
              <StyledHiOutlinePencil />
            </ConfigNameLabel>
          </label>
          <SendChangeBTN onClick={submitChange}>Save chandes</SendChangeBTN>
          <StyledGrFormClose onClick={closeUserInfoModal} />
        </Modal>
      </ModalWrapper>
    </ModalOverlay>,
    modalRoot
  );
};
