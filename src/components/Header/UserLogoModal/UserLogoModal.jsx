import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';
import { HiOutlinePencil } from 'react-icons/hi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ModalUser, StyledLogoutBtn } from './UserLogoModal.styled';
import { UserLogoutModal } from '../LogoutModal/LogoutModal';

const modalRoot = document.querySelector('#modal-root');

export const UserLogoModal = ({ showUserLogoModal }) => {
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const closeOnESCLogoModal = e => {
    if ((e.charCode || e.keyCode) === 27) {
      setShowUserInfoModal(false);
      setShowLogoutModal(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnESCLogoModal);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnESCLogoModal);
    };
  }, []);

  if (!showUserLogoModal) {
    return null;
  }

  return createPortal(
    <>
      <ModalUser>
        <button
          onClick={() => {
            setShowUserInfoModal(true);
          }}
        >
          Edit profile
          <HiOutlinePencil />
        </button>
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
    </>,
    modalRoot
  );
};
