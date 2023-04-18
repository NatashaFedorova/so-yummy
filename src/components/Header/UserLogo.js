import { useState } from 'react';
import { UserLogoModal } from './UserLogoModal';

export const UserLogo = () => {
  // const { name } = useSelector(state => state.user);
  const [showUserLogoModal, setShowUserLogoModal] = useState(false);

  const openUserLogoModal = () => {
    setShowUserLogoModal(true);
  };
  const closeUserLogoModal = () => {
    setShowUserLogoModal(false);
  };
  return (
    <div onClick={openUserLogoModal}>
      <img alt={`name Avatar`} src="#" />
      <p>{`name`}</p>

      {showUserLogoModal && (
        <UserLogoModal closeUserLogoModal={closeUserLogoModal} />
      )}
    </div>
  );
};
