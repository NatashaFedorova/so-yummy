import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user/userSelectors';
import { UserLogoModal } from '../UserLogoModal/UserLogoModal';
import {
  AvatarArea,
  CurrentUserAvatar,
  // CustomUserAvatar,
  UserInfo,
  UserLogoDiv,
  UserNameSpan,
} from './UserLogo.styled';

export const UserLogo = () => {
  const { name, avatarUrl } = useSelector(selectCurrentUser);
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
