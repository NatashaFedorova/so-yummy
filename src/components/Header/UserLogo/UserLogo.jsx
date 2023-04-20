import { useEffect, useState } from 'react';
import { UserLogoModal } from '../UserLogoModal/UserLogoModal';
import {
  AvatarArea,
  CustomUserAvatar,
  UserInfo,
  UserLogoDiv,
} from './UserLogo.styled';

export const UserLogo = () => {
  const [showUserLogoModal, setShowUserLogoModal] = useState(false);

  const togglerUserLogoModal = () => {
    setShowUserLogoModal(!showUserLogoModal);
  };

  const closeOnESCLogoModal = e => {
    if ((e.charCode || e.keyCode) === 27) {
      setShowUserLogoModal(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnESCLogoModal);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnESCLogoModal);
    };
  }, []);

  return (
    <>
      <UserLogoDiv onClick={togglerUserLogoModal}>
        <UserInfo>
          <AvatarArea>
            <CustomUserAvatar />
          </AvatarArea>
          <p>{`name`}</p>
        </UserInfo>
      </UserLogoDiv>
      <UserLogoModal showUserLogoModal={showUserLogoModal} />
    </>
  );
};
