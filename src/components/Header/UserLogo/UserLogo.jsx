import { useEffect, useState } from 'react';
import { UserLogoModal } from '../UserLogoModal/UserLogoModal';
import {
  AvatarArea,
  CurrentUserAvatar,
  UserInfo,
  UserLogoDiv,
  UserNameSpan,
} from './UserLogo.styled';
import useAuth from 'hooks/useAuth';

export const UserLogo = () => {
  const { user } = useAuth();
  const { name, avatarUrl } = user;

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
            <CurrentUserAvatar src={avatarUrl} alt={'User avatar'} />
          </AvatarArea>
          <UserNameSpan>{`${name}`}</UserNameSpan>
        </UserInfo>
      </UserLogoDiv>
      <UserLogoModal showUserLogoModal={showUserLogoModal} />
    </>
  );
};
