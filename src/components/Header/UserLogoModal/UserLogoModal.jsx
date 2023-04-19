import { useEffect, useRef, useState } from 'react';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';
import { HiOutlinePencil } from 'react-icons/hi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ModalUser, StyledLogoutBtn } from './UserLogoModal.styled';

export const UserLogoModal = ({ showUserLogoModal }) => {
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);

  const closeOnESCLogoModal = e => {
    if ((e.charCode || e.keyCode) === 27) {
      setShowUserInfoModal(false);
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

  return (
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
        <StyledLogoutBtn>
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
    </>
  );
};
