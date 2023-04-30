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
import AchivementButton from 'components/Header/AchivementButton/AchivementButton';

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
    if (showUserLogoModal) {
      setShowUserLogoModal(false);
    } else {
      setShowUserLogoModal(true);
    }
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
              (path.toString() === '/main' && widthHTML > 1421
                ? {
                    color: `#1E1F28 `,
                  }
                : {},
              path.toString().includes('/recipe') ? { color: '#1E1F28' } : {})
            }
          >{`${name}`}</UserNameSpan>
        </UserInfo>
      </UserLogoDiv>
      <AchivementButton />
      {showUserLogoModal && (
        <UserLogoModal closeUserLogoModal={() => setShowUserLogoModal(false)} />
      )}
    </>
  );
};
