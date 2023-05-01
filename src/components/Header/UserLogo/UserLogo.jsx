import { useEffect, useState } from 'react';
import { UserLogoModal } from '../UserLogoModal/UserLogoModal';
import {
  AvatarArea,
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

  useEffect(() => {
    function handleResize() {
      setWidthHTML(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWidthHTML]);

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
          <AvatarArea
            style={{
              backgroundImage: `url(${avatarUrl})`,
            }}
          />
          <UserNameSpan
            style={
              (path.toString().includes('/main') && widthHTML >= 1440) ||
              path.toString().includes('/recipe')
                ? { color: `#1E1F28` }
                : {}
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
