import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';
import { HiOutlinePencil } from 'react-icons/hi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {
  ChangeUserButton,
  ModalOverlay,
  ModalUser,
  StyledLogoutBtn,
} from './UserLogoModal.styled';
import { UserLogoutModal } from '../LogoutModal/LogoutModal';

const modalRoot = document.querySelector('#modal-root');

export const UserLogoModal = ({ closeUserLogoModal }) => {
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const closeOnESCLogoModal = e => {
    if ((e.charCode || e.keyCode) === 27) {
      setShowUserInfoModal(false);
      setShowLogoutModal(false);
    }
  };

  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeUserLogoModal();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnESCLogoModal);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnESCLogoModal);
    };
  }, []);

  return createPortal(
    <ModalOverlay onClick={onClickBackdrop}>
      <ModalUser>
        <ChangeUserButton
          onClick={() => {
            setShowUserInfoModal(true);
          }}
        >
          Edit profile
          <HiOutlinePencil />
        </ChangeUserButton>
        <StyledLogoutBtn
          onClick={() => {
            setShowLogoutModal(true);
          }}
        >
          Log out
          <AiOutlineArrowRight />
        </StyledLogoutBtn>
      </ModalUser>
      {showUserInfoModal && (
        <UserInfoModal
          closeUserInfoModal={() => {
            setShowUserInfoModal(false);
          }}
        />
      )}
      {showLogoutModal && (
        <UserLogoutModal
          closeLogoutModal={() => {
            setShowLogoutModal(false);
          }}
        />
      )}
    </ModalOverlay>,
    modalRoot
  );
};
