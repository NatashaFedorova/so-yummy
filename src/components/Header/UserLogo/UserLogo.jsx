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
import { useLocation } from 'react-router-dom';

export const UserLogo = () => {
  const { user } = useAuth();
  const { name, avatarUrl } = user;

  const [showUserLogoModal, setShowUserLogoModal] = useState(false);
  const [widthHTML, setWidthHTML] = useState('');

  const path = useLocation().pathname;
  const add = document.querySelector('html');

  useEffect(() => {
    setWidthHTML(add.offsetWidth);
  }, [add.offsetWidth]);

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
          <UserNameSpan
            style={
              path.toString() === '/main' && widthHTML > 1421
                ? { color: '#1E1F28' }
                : { color: '#fafafa' }
            }
          >{`${name}`}</UserNameSpan>
        </UserInfo>
      </UserLogoDiv>
      <UserLogoModal
        showUserLogoModal={showUserLogoModal}
        closeUserLogoModal={() => setShowUserLogoModal(false)}
      />
    </>
  );
};
