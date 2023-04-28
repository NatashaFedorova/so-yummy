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

import styled from 'styled-components';
import AchivementButton from '../AchivementButton/AchivementButton';
export const Box = styled.div``;

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
      <AchivementButton />
      <UserLogoModal
        showUserLogoModal={showUserLogoModal}
        closeUserLogoModal={() => setShowUserLogoModal(false)}
      />
    </>
  );
};
